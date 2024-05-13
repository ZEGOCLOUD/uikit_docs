## GET 请求示例代码

ZEGO 提供多种编程语言的示例代码，开发者可根据实际情况进行参考。以 [获取房间用户列表\|_blank](#13276) 接口，向 ZEGO 服务端发送 GET 请求为例：

<details class="zg-primary">
    <summary>获取房间用户列表（Go）</summary>

```go
package main

import (
	"crypto/md5"
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"time"
)

//请将 AppId 修改为你的 AppId，AppId 为 uint32
//举例：1234567890
var appId uint32 = 1234567890

//请将 serverSecret 修改为你的 serverSecret，serverSecret 为 string
var serverSecret = ""

func main() {
	queryParams := url.Values{}
	roomId := "1"
	queryParams.Add("RoomId[]", roomId)

	timestamp := time.Now().Unix()
	nonce := make([]byte, 8)
	rand.Read(nonce)
	hexNonce := hex.EncodeToString(nonce)
	signature := generateSignature(appId, serverSecret, hexNonce, timestamp)
	authParams := url.Values{}
	authParams.Set("AppId", fmt.Sprintf("%d", appId))
	authParams.Set("SignatureNonce", hexNonce)
	authParams.Set("SignatureVersion", "2.0")
	authParams.Set("Timestamp", fmt.Sprintf("%d", timestamp))
	authParams.Set("Signature", signature)
	// rtc-api.zego.im 表示使用的产品是云通讯产品，包括了实时音视频（Express Video）、实时音频（Express Audio）、低延迟直播（L3）
	addr := fmt.Sprintf("https://rtc-api.zego.im?Action=DescribeUserNum&%s&%s", authParams.Encode(), queryParams.Encode())
	rsp, err := http.Get(addr)
	if err != nil {
		fmt.Printf("http.Get err:%+v", err)
		return
	}
	defer rsp.Body.Close()
	body, err := ioutil.ReadAll(rsp.Body)
	if err != nil {
		fmt.Printf("ioutil.ReadAll err:%+v", err)
		return
	}
	fmt.Printf("body:%+v", string(body))
}

func generateSignature(appId uint32, serverSecret, signatureNonce string, timeStamp int64) string {
	data := fmt.Sprintf("%d%s%s%d", appId, signatureNonce, serverSecret, timeStamp)

	h := md5.New()
	h.Write([]byte(data))
	return hex.EncodeToString(h.Sum(nil))
}
```
</details>

<details class="zg-primary">
    <summary>获取房间用户列表（Python）</summary>

```py
# -*- coding: UTF-8 -*-
import hashlib
import secrets
import time

# 生成签名
# Signature=md5(AppId + SignatureNonce + ServerSecret + Timestamp)
from urllib.parse import urlencode

import requests


def GenerateSignature(appId, signatureNonce, serverSecret, timestamp):
    str1 = str(appId) + signatureNonce + serverSecret + str(timestamp)
    hash = hashlib.md5()
    hash.update(str1.encode("utf8"))
    signature = hash.hexdigest()
    return signature


if __name__ == '__main__':
    # 请将 appId 修改为你的 AppId，AppId 为 数字
    # 举例：1234567890
    appId = 1234567890
    # 请将 serverSecret 修改为你的 serverSecret，serverSecret 为 string
    serverSecret = ""

    signatureNonce = secrets.token_hex(8)
    timestamp = int(time.time())
    sig = GenerateSignature(appId, signatureNonce, serverSecret, timestamp)

    # 以下示例可调用 "DescribeUserNum" API 获取 RoomId 为 room1 的房间的用户数量
    par = {
        "Action": "DescribeUserNum",
        "AppId": appId,
        "Signature": sig,
        "SignatureNonce": signatureNonce,
        "SignatureVersion": "2.0",
        "Timestamp": timestamp,
        # "IsTest": "False",
        "RoomId[]": "room1"
    }
    url = 'https://rtc-api.zego.im/'
    req = requests.get(url, params=par)
    print("Url: ", req.url)
    print("StatusCode: ", req.status_code)
    print("Respone: ", req.text)
```
</details>

<details class="zg-primary">
    <summary>获取房间用户列表（Java）</summary>

```java
package org.example;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.HashMap;
import java.util.Map;

public class DescribeUserNum {

    public static void main(String[] args) {
        // 获取房间内用户数目
        describeUserNum();
    }

    /**
     * 测试获取房间内用户数目
     */
    public static void describeUserNum() {
        // 请填写你要统计的房间ID
        String roomId = "room1";
        // 请填写你从控制台获取的APP ID,
        // 举例：1234567890L，APP_ID为 Long 型
        Long APP_ID = 1234567890L;
        // 请填写你从控制后台获取的SERVER SECRET，
        // 举例："abcde1234aaaaaaaabbbbbbb"
        String SERVER_SECRET = ;
        // 生成16进制随机字符串(16位)
        byte[] bytes = new byte[8];
        SecureRandom sr = new SecureRandom();
        sr.nextBytes(bytes);
        String signatureNonce = bytesToHex(bytes);
        // 设定时间戳
        long timestamp = System.currentTimeMillis() / 1000L;

        // 生成签名Signature=md5(AppId + SignatureNonce + ServerSecret + Timestamp)
        String signatue = generateSignature(APP_ID, signatureNonce, SERVER_SECRET, timestamp);

        // 组装请求URL
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("Action", "DescribeUserNum");
        params.put("RoomId[]", roomId);
        params.put("AppId", APP_ID);
        params.put("SignatureNonce", signatureNonce);
        params.put("Timestamp", timestamp);
        params.put("Signature", signatue);
        params.put("SignatureVersion", "2.0");
        String url = buildAPIUrl("https://rtc-api.zego.im/", params);

        String result = sendGet(url);
        System.out.println(result);
    }

    /**
     * 生成签名
     * @param appId 应用 AppId
     * @param signatureNonce 签名随机码
     * @param serverSecret 服务端API秘钥
     * @param timestamp 签名时间戳
     * @return 生成的签名字符串
     */
    public static String generateSignature(long appId, String signatureNonce, String serverSecret, long timestamp){
        String str = String.valueOf(appId) + signatureNonce + serverSecret + String.valueOf(timestamp);
        String signature = "";
        try{
            //创建一个提供信息摘要算法的对象，初始化为md5算法对象
            MessageDigest md = MessageDigest.getInstance("MD5");
            //计算后获得字节数组
            byte[] bytes = md.digest(str.getBytes("utf-8"));
            //把数组每一字节换成16进制连成md5字符串
            signature = bytesToHex(bytes);
        }catch (Exception e) {
            e.printStackTrace();
        }
        return signature;
    }

    /**
     * 字节数组转16进制
     * @param bytes 需要转换的byte数组
     * @return 转换后的Hex字符串
     */
    public static String bytesToHex(byte[] bytes) {
        StringBuffer md5str = new StringBuffer();
        //把数组每一字节换成16进制连成md5字符串
        int digital;
        for (int i = 0; i < bytes.length; i++) {
            digital = bytes[i];
            if (digital < 0) {
                digital += 256;
            }
            if (digital < 16) {
                md5str.append("0");
            }
            md5str.append(Integer.toHexString(digital));
        }
        return md5str.toString();
    }

    /**
     * 发送HTTP-GET请求
     * @param httpurl 请求路径
     * @return 响应内容
     */
    public static String sendGet(String httpurl) {
        HttpURLConnection connection = null;
        InputStream is = null;
        BufferedReader br = null;
        String result = null;// 返回结果字符串
        try {
            // 创建远程url连接对象
            URL url = new URL(httpurl);
            // 通过远程url连接对象打开一个连接，强转成httpURLConnection类
            connection = (HttpURLConnection) url.openConnection();
            // 设置连接方式：get
            connection.setRequestMethod("GET");
            // 设置连接主机服务器的超时时间：15000毫秒
            connection.setConnectTimeout(15000);
            // 设置读取远程返回的数据时间：60000毫秒
            connection.setReadTimeout(60000);
            // 发送请求
            connection.connect();
            // 通过connection连接，获取输入流
            if (connection.getResponseCode() == 200) {
                is = connection.getInputStream();
                // 封装输入流is，并指定字符集
                br = new BufferedReader(new InputStreamReader(is, "UTF-8"));
                // 存放数据
                StringBuffer sbf = new StringBuffer();
                String temp = null;
                while ((temp = br.readLine()) != null) {
                    sbf.append(temp);
                    sbf.append("\r\n");
                }
                result = sbf.toString();
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            // 关闭资源
            if (null != br) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (null != is) {
                try {
                    is.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            connection.disconnect();// 关闭远程连接
        }
        return result;
    }
    /**
     * 组装API地址字符串
     * @param url API地址
     * @param params 请求参数
     * @return 组装好的API地址字符串
     */
    public static String buildAPIUrl(String url, Map<String, Object> params) {
        if(params.isEmpty()) {
            return url;
        }
        StringBuffer buffer = new StringBuffer(url).append("?");
        for(String key : params.keySet()) {
            buffer.append(key).append("=").append(params.get(key)).append("&");
        }
        String apiurl = buffer.toString();
        if(apiurl.endsWith("&")) {
            return apiurl.substring(0, apiurl.length()-1);
        } else {
            return apiurl;
        }
    }

}
```
</details>

<details class="zg-primary">
    <summary>获取房间用户列表（PHP）</summary>

```php
<?php
/**
 * 获取房间 room1 内用户数目的最简示例代码
 */

//请将 appId 修改为你的 AppId
//举例：1234567890
$appId = 1234567890;
//请将 serverSecret 修改为你的 serverSecret，serverSecret 为 字符串
$serverSecret = "";

//生成签名
//Signature=md5(AppId + SignatureNonce + ServerSecret + Timestamp)
function GenerateSignature($appId, $signatureNonce, $serverSecret, $timeStamp){
    $str = $appId . $signatureNonce . $serverSecret . $timeStamp;
    //使用PHP中标准的MD5算法，默认返回32字符16进制数
    return md5($str);
}

//取随机字符串并转换为十六进制值
$signatureNonce = bin2hex(random_bytes(8));

//取毫秒级时间戳
list($msec, $sec) = explode(' ', microtime());
$msecTime = (float)sprintf('%.0f', (floatval($msec) + floatval($sec)) * 1000);
//对$msecTime四舍五入取到秒级时间戳
$timeStamp = round($msecTime/1000);
$sig = GenerateSignature($appId, $signatureNonce, $serverSecret, $timeStamp);

//以下示例可调用 "DescribeUserNum" API 获取 RoomID 为 room1 的房间的用户数量
$url = "https://rtc-api.zego.im/?Action=DescribeUserNum&RoomId[]=room1&AppId=$appId&SignatureNonce=$signatureNonce&Timestamp=$timeStamp&Signature=$sig&SignatureVersion=2.0&IsTest=false";

//使用curl库
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//设置请求连接超时时间,单位：秒
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
$response = curl_exec($ch);
curl_close($ch);
//请求的url
echo "Url: " . $url ."\r\n";
//返回的结果
echo "response:" . $response;
```
</details>

<details class="zg-primary">
    <summary>获取房间用户列表（Node.js）</summary>

```node
const crypto = require('crypto');
const request = require('request');

//请将 appId 修改为你的 AppId，AppId 为 number
var appId = 1234567890;
//请将 serverSecret 修改为你的 serverSecret，serverSecret 为 string
var serverSecret = "";

//生成签名
//Signature=md5(AppId + SignatureNonce + ServerSecret + Timestamp)
function GenerateUASignature(appId, signatureNonce, serverSecret, timeStamp){
    const hash = crypto.createHash('md5'); //规定使用哈希算法中的MD5算法
    var str = appId + signatureNonce + serverSecret + timeStamp;
    hash.update(str);
    //hash.digest('hex')表示输出的格式为16进制
    return hash.digest('hex');
}

var signatureNonce = crypto.randomBytes(8).toString('hex');
var timeStamp = Math.round(Date.now()/1000);
var sig = GenerateUASignature(appId, signatureNonce, serverSecret, timeStamp)
// rtc-api.zego.im 表示使用的产品是云通讯产品，包括了实时音视频（Express Video）、实时音频（Express Audio）、低延迟直播（L3）
//以下示例可获取 RoomID 为 room1 的房间用户数
var url = `https://rtc-api.zego.im/?Action=DescribeUserNum&RoomId[]=room1&AppId=${appId}&SignatureNonce=${signatureNonce}&Timestamp=${timeStamp}&Signature=${sig}&SignatureVersion=2.0&IsTest=false`;

request(url, function(error, response, body){
    console.log('Url: ',url)
    console.log('StatusCode: ',response.statusCode)
    console.log('Error: ', error)
    if(!error && response.statusCode){
        console.log(body)
    }
})
```
</details>



## POST 请求示例代码

ZEGO 提供多种编程语言的示例代码，开发者可根据实际情况进行参考。我们以 [开始混流\|_blank](#8791)，向 ZEGO 服务端发送 POST 请求为例。

<details class="zg-primary">
    <summary>开始混流（Go）</summary>

```go
package main

import (
	"bytes"
	"crypto/md5"
	"crypto/rand"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"strconv"
	"time"
)
// rtc-api.zego.im 表示使用的产品是云通讯产品，包括了实时音视频（Express Video）、实时音频（Express Audio）、低延迟直播（L3）
const DOMAIN = "https://rtc-api.zego.im"

var (
	//请将 appId 修改为你的 AppId，AppId 为 uint32
	//举例：1234567890
	AppId uint32 = 1234567890
	//请将 serverSecret 修改为你的 serverSecret，serverSecret 为 string
	Secret = ""
)

type MixStartRequest struct {
	Appid     uint64       `json:"Appid"`
	UserId    string       `json:"UserId"`
	Sequence  int64        `json:"Sequence"`
	MixInput  []*MixInput  `json:"MixInput"`
	MixOutput []*MixOutput `json:"MixOutput"`
	MixTaskId string       `json:"TaskId"`
}

type RectInfo struct {
	Top    int32 `json:"Top"`
	Left   int32 `json:"Left"`
	Bottom int32 `json:"Bottom"`
	Right  int32 `json:"Right"`
}

type MixInput struct {
	StreamId  string    `json:"StreamId"`
	RectInfo  *RectInfo `json:"RectInfo"`
}

type MixOutput struct {
	StreamId     string `json:"StreamId"`
	VideoBitrate int32  `json:"VideoBitrate"`
	Fps          int32  `json:"Fps"`
	Height       int32  `json:"Height"`
	Width        int32  `json:"Width"`
}

func main() {
	nonce := make([]byte, 8)
	rand.Read(nonce)
	hexNonce := hex.EncodeToString(nonce)
	ts := time.Now()
	signature := GenerateSignature(AppId, hexNonce, Secret, ts.Unix())
	value := url.Values{}
	value.Add("AppId", strconv.FormatUint(AppId, 10))
	value.Add("SignatureNonce", hexNonce)
	value.Add("Timestamp", strconv.FormatInt(ts.Unix(), 10))
	value.Add("Signature", signature)
	value.Add("Action", "StartMix")
	value.Add("SignatureVersion", "2.0")
	urlData, err := url.Parse(DOMAIN)
	if err != nil {
		fmt.Println(err)
		return
	}
	urlData.RawQuery = value.Encode()
	dataJson, _ := json.Marshal(GenerateStartMixData())
	req, err := http.NewRequest("POST", urlData.String(), bytes.NewBuffer(dataJson))
	if err != nil {
		fmt.Println(err)
		return
	}
	req.Header.Set("Content-Type", "application/json")
	req.Close = true
	client := &http.Client{}
	r, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return
	}
	if r.StatusCode != 200 {
		fmt.Printf("status code is:%v", r.StatusCode)
	}
	defer r.Body.Close()
	resp, err := ioutil.ReadAll(r.Body)
	if err != nil {
		return
	}
	fmt.Println(string(resp))
	return
}

//以下示例为 将 streamId 为 "stream1" 的音视频流 与 streamId 为 "stream2" 的音视频流进行混流，混出 streamId 为 "stream3" 的音视频流
func GenerateStartMixData() *MixStartRequest {
	inputs := make([]*MixInput, 0)
	input1 := MixInput{
		StreamId: "stream1",
		RectInfo: &RectInfo{
			Top:    70,
			Left:   100,
			Bottom: 160,
			Right:  260,
		},
	}
	inputs = append(inputs, &input1)
	input2 := MixInput{
		StreamId: "stream2",
		RectInfo: &RectInfo{
			Top:    200,
			Left:   100,
			Bottom: 290,
			Right:  260,
		},
	}
	inputs = append(inputs, &input2)
	output := MixOutput{
		StreamId:     "stream3",
		VideoBitrate: 12000,
		Fps:          15,
		Height:       360,
		Width:        360,
	}
	outputs := append([]*MixOutput{}, &output)
	req := &MixStartRequest{
		Appid:     AppId,
		UserId:    "123",
		Sequence:  123,
		MixInput:  inputs,
		MixOutput: outputs,
		MixTaskId: "123",
	}
	return req
}

//Signature=md5(AppId + SignatureNonce + ServerSecret + Timestamp)
func GenerateSignature(appid uint64, nonce string, appSecret string, timestamp int64) (signature string) {
	data := fmt.Sprintf("%d%s%s%d", appid, nonce, appSecret, timestamp)
	h := md5.New() //规定使用哈希算法中的MD5算法
	h.Write([]byte(data))
	//hex.EncodeToString(h.Sum(nil))输出16进制字符串
	return hex.EncodeToString(h.Sum(nil))
}
```
</details>


<details class="zg-primary">
    <summary>开始混流（Python）</summary>

```py
# -*- coding: UTF-8 -*-
import hashlib
import secrets
import time

# 生成签名
# Signature=md5(AppId + SignatureNonce + ServerSecret + Timestamp)
from urllib.parse import urlencode

import requests


def GenerateSignature(appId, signatureNonce, serverSecret, timestamp):
    str1 = str(appId) + signatureNonce + serverSecret + str(timestamp)
    hash = hashlib.md5()
    hash.update(str1.encode("utf8"))
    signature = hash.hexdigest()
    return signature


if __name__ == '__main__':
    # 请将 appId 修改为你的 AppId，AppId 为 数字
    # 举例：1234567890
    appId = 1234567890
    # 请将 serverSecret 修改为你的 serverSecret，serverSecret 为 string
    serverSecret = ""

    signatureNonce = secrets.token_hex(8)
    timestamp = int(time.time())
    sig = GenerateSignature(appId, signatureNonce, serverSecret, timestamp)

    # 以下示例 将 streamId 为 "stream1" 的音视频流 与 streamId 为 "stream2" 的音视频流进行混流，混出 streamId 为 "stream3" 的音视频流
    par = {
        "Action": "StartMix",
        "AppId": appId,
        "Signature": sig,
        "SignatureNonce": signatureNonce,
        "SignatureVersion": "2.0",
        "Timestamp": timestamp,
        "IsTest": "False"
    }
    body = {
        'TaskId': '123',
        'Sequence': 123,
        'UserId': '123',
        'MixInput': [
            {
                'StreamId': 'stream1',
                'RectInfo': {
                    "Top": 70,
                    "Bottom": 160,
                    "Left": 100,
                    "Right": 260,
                },

            },
            {
                'StreamId': 'stream2',
                'RectInfo': {
                    "Top": 200,
                    "Bottom": 290,
                    "Left": 100,
                    "Right": 260,
                },
            }
        ],
        'MixOutput': [{
            'StreamId': 'stream3',
            'Width': 360,
            'Height': 360,
            'VideoBitrate': 12000,
            'Fps': 15
        }]
    }
    url = 'https://rtc-api.zego.im/'
    req = requests.post(url, params=par, json=body)
    print("Url: ", req.url)
    print("StatusCode", req.status_code)
    print("Respone:", req.text)
```
</details>


<details class="zg-primary">
    <summary>开始混流（Java）</summary>

```java
package org.example;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.HashMap;
import java.util.Map;

/**
 * 请先引入 com.alibaba.fastjson，方便构建请求的 body 参数
 */
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

public class StartMix {

    //
    public static void main(String[] args) {
        // 获取房间内用户数目
        startMixStream();
    }

    /**
     * 发起混流
     */
    public static void startMixStream() {
        // 请填写你从控制台获取的APP ID,
        // 举例：1234567890L
        Long APP_ID = 1234567890L;
        // 请填写你从控制后台获取的 SERVER SECRET，
        // 举例："abcde1234aaaaaaaabbbbbbb"
        String SERVER_SECRET = ;
        // 生成16进制随机字符串(16位)
        byte[] bytes = new byte[8];
        SecureRandom sr = new SecureRandom();
        sr.nextBytes(bytes);
        String signatureNonce = bytesToHex(bytes);
        // 设定时间戳
        long timestamp = System.currentTimeMillis() / 1000L;

        // 生成签名Signature=md5(AppId + SignatureNonce + ServerSecret + Timestamp)
        String signatue = generateSignature(APP_ID, signatureNonce, SERVER_SECRET, timestamp);

        // 组装请求URL
        //以下示例为 将 streamId 为 "stream1" 的音视频流 与 streamId 为 "stream2" 的音视频流进行混流，混出 streamId 为 "stream3" 的音视频流
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("Action", "StartMix");
        params.put("AppId", APP_ID);
        params.put("SignatureNonce", signatureNonce);
        params.put("Timestamp", timestamp);
        params.put("Signature", signatue);
        params.put("SignatureVersion", "2.0");
        // rtc-api.zego.im 表示使用的产品是云通讯产品，包括了实时音视频（Express Video）、实时音频（Express Audio）、低延迟直播（L3）
        String url = buildAPIUrl("https://rtc-api.zego.im/", params);

        JSONObject body = new JSONObject()
                .fluentPut("TaskId", "123")
                .fluentPut("Sequence", 123)
                .fluentPut("UserId", "123");

        JSONArray mixInputList = new JSONArray();
        mixInputList.add(new JSONObject()
                .fluentPut("StreamId", "stream1")
                .fluentPut("RectInfo", new JSONObject()
                        .fluentPut("Top", 70)
                        .fluentPut("Bottom", 160)
                        .fluentPut("Left", 100)
                        .fluentPut("Right", 260)));
        mixInputList.add(new JSONObject()
                .fluentPut("StreamId", "stream2")
                .fluentPut("RectInfo", new JSONObject()
                        .fluentPut("Top", 200)
                        .fluentPut("Bottom", 290)
                        .fluentPut("Left", 100)
                        .fluentPut("Right", 260)));
        body.put("MixInput", mixInputList);

        JSONArray mixOutputList = new JSONArray();
        mixOutputList.add(new JSONObject()
                .fluentPut("StreamId", "stream3")
                .fluentPut("Width", 360)
                .fluentPut("Height", 360)
                .fluentPut("VideoBitrate", 12000)
                .fluentPut("Fps", 15));
        body.put("MixOutput", mixOutputList);

        String result = sendPost(url, body.toString());
        System.out.println(result);
    }

    /**
     * 生成签名
     * @param appId 应用 AppId
     * @param signatureNonce 签名随机码
     * @param serverSecret 服务端API秘钥
     * @param timestamp 签名时间戳
     * @return 生成的签名字符串
     */
    public static String generateSignature(long appId, String signatureNonce, String serverSecret, long timestamp){
        String str = String.valueOf(appId) + signatureNonce + serverSecret + String.valueOf(timestamp);
        String signature = "";
        try{
            //创建一个提供信息摘要算法的对象，初始化为md5算法对象
            MessageDigest md = MessageDigest.getInstance("MD5");
            //计算后获得字节数组
            byte[] bytes = md.digest(str.getBytes("utf-8"));
            //把数组每一字节换成16进制连成md5字符串
            signature = bytesToHex(bytes);
        }catch (Exception e) {
            e.printStackTrace();
        }
        return signature;
    }

    /**
     * 字节数组转16进制
     * @param bytes 需要转换的byte数组
     * @return 转换后的Hex字符串
     */
    public static String bytesToHex(byte[] bytes) {
        StringBuffer md5str = new StringBuffer();
        //把数组每一字节换成16进制连成md5字符串
        int digital;
        for (int i = 0; i < bytes.length; i++) {
            digital = bytes[i];
            if (digital < 0) {
                digital += 256;
            }
            if (digital < 16) {
                md5str.append("0");
            }
            md5str.append(Integer.toHexString(digital));
        }
        return md5str.toString();
    }

    /**
     * 发送HTTP-GET请求
     * @param httpurl 请求路径
     * @return 响应内容
     */
    public static String sendGet(String httpurl) {
        HttpURLConnection connection = null;
        InputStream is = null;
        BufferedReader br = null;
        String result = null;// 返回结果字符串
        try {
            // 创建远程url连接对象
            URL url = new URL(httpurl);
            // 通过远程url连接对象打开一个连接，强转成httpURLConnection类
            connection = (HttpURLConnection) url.openConnection();
            // 设置连接方式：get
            connection.setRequestMethod("GET");
            // 设置连接主机服务器的超时时间：15000毫秒
            connection.setConnectTimeout(15000);
            // 设置读取远程返回的数据时间：60000毫秒
            connection.setReadTimeout(60000);
            // 发送请求
            connection.connect();
            // 通过connection连接，获取输入流
            if (connection.getResponseCode() == 200) {
                is = connection.getInputStream();
                // 封装输入流is，并指定字符集
                br = new BufferedReader(new InputStreamReader(is, "UTF-8"));
                // 存放数据
                StringBuffer sbf = new StringBuffer();
                String temp = null;
                while ((temp = br.readLine()) != null) {
                    sbf.append(temp);
                    sbf.append("\r\n");
                }
                result = sbf.toString();
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            // 关闭资源
            if (null != br) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (null != is) {
                try {
                    is.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            connection.disconnect();// 关闭远程连接
        }
        return result;
    }

    /**
     * 发送HTTP-POST请求
     * @param param 消息体参数
     * @return 响应内容
     */
    public static String sendPost(String httpUrl, String param) {
        HttpURLConnection connection = null;
        InputStream is = null;
        OutputStream os = null;
        BufferedReader br = null;
        String result = null;
        try {
            URL url = new URL(httpUrl);
            // 通过远程url连接对象打开连接
            connection = (HttpURLConnection) url.openConnection();
            // 设置连接请求方式
            connection.setRequestMethod("POST");
            // 设置连接主机服务器超时时间：15000毫秒
            connection.setConnectTimeout(15000);
            // 设置读取主机服务器返回数据超时时间：60000毫秒
            connection.setReadTimeout(60000);
            // 默认值为：false，当向远程服务器传送数据/写数据时，需要设置为true
            connection.setDoOutput(true);
            // 默认值为：true，当前向远程服务读取数据时，设置为true，该参数可有可无
            connection.setDoInput(true);
            // 设置传入参数的格式:请求参数应该是 name1=value1&name2=value2 的形式。
            connection.setRequestProperty("Content-Type", "application/json");
            // 建立连接
            connection.connect();
            // 通过连接对象获取一个输出流对象
            OutputStreamWriter writer = new OutputStreamWriter(connection.getOutputStream(),"UTF-8");
            writer.write(param);
            writer.flush();
            // 通过连接对象获取一个输入流，向远程读取
            if (connection.getResponseCode() == 200) {
                is = connection.getInputStream();
                // 对输入流对象进行包装:charset根据工作项目组的要求来设置
                br = new BufferedReader(new InputStreamReader(is, "UTF-8"));
                StringBuffer sbf = new StringBuffer();
                String temp = null;
                // 循环遍历一行一行读取数据
                while ((temp = br.readLine()) != null) {
                    sbf.append(temp);
                    sbf.append("\r");
                }
                result = sbf.toString();
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            // 关闭资源
            if (null != br) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (null != os) {
                try {
                    os.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (null != is) {
                try {
                    is.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            // 断开与远程地址url的连接
            connection.disconnect();
        }
        return result;
    }

    /**
     * 组装API地址字符串
     * @param url API地址
     * @param params 请求参数
     * @return 组装好的API地址字符串
     */
    public static String buildAPIUrl(String url, Map<String, Object> params) {
        if(params.isEmpty()) {
            return url;
        }
        StringBuffer buffer = new StringBuffer(url).append("?");
        for(String key : params.keySet()) {
            buffer.append(key).append("=").append(params.get(key)).append("&");
        }
        String apiurl = buffer.toString();
        if(apiurl.endsWith("&")) {
            return apiurl.substring(0, apiurl.length()-1);
        } else {
            return apiurl;
        }
    }

}
```
</details>


<details class="zg-primary">
    <summary>开始混流（PHP）</summary>

```php
<?php

/**
 * 发起开始混流的最简示例代码
 */

//请将 appId 修改为你的 AppId
//举例：1234567890
$appId = 1234567890;
//请将 serverSecret 修改为你的 serverSecret，serverSecret 为 string
$serverSecret = "";

//生成签名
//Signature=md5(AppId + SignatureNonce + ServerSecret + Timestamp)
function GenerateSignature($appId, $signatureNonce, $serverSecret, $timeStamp){
    $str = $appId . $signatureNonce . $serverSecret . $timeStamp;
    //使用PHP中标准的MD5算法，默认返回32字符16进制数
    return md5($str);
}

//取随机字符串并转换为十六进制值
$signatureNonce = bin2hex(random_bytes(8));

//取毫秒级时间戳
list($msec, $sec) = explode(' ', microtime());
$msecTime = (float)sprintf('%.0f', (floatval($msec) + floatval($sec)) * 1000);
//对$msecTime四舍五入取到秒级时间戳
$timeStamp = round($msecTime/1000);
$sig = GenerateSignature($appId, $signatureNonce, $serverSecret, $timeStamp);

//以下示例 将 streamId 为 "stream1" 的音视频流 与 streamId 为 "stream2" 的音视频流进行混流，混出 streamId 为 "stream3" 的音视频流
$url = "https://rtc-api.zego.im/?Action=StartMix&AppId=$appId&SignatureNonce=$signatureNonce&Timestamp=$timeStamp&Signature=$sig&SignatureVersion=2.0&IsTest=false";

$body = [
    "TaskId"   => "123",
    "Sequence" => 123,
    "UserId"   => "123",
    "MixInput" => [
        [
            "StreamId" => "stream1",
            "RectInfo" => [
            "Top"    => 70,
                "Bottom" => 160,
                "Left"   => 100,
                "Right"  => 260,
            ],
        ],
        [
            "StreamId" => "stream2",
            "RectInfo" => [
            "Top"    => 200,
                "Bottom" => 290,
                "Left"   => 100,
                "Right"  => 260,
            ],
        ]
    ],
    "MixOutput" => [
        [
            "StreamId" => "stream3",
            "Width"    => 360,
            "Height"   => 360,
            "VideoBitrate" => 12000,
            "Fps"      => 15
        ]
    ]
];

$post_string = json_encode($body);

$ch = curl_init();

curl_setopt ($ch, CURLOPT_URL, $url);
curl_setopt ($ch, CURLOPT_POST, 1);
curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
//设置请求连接超时时间,单位：秒
curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 5);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_string);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json; charset=utf-8',
    )
);
$response = curl_exec($ch);
curl_close($ch);

echo "Url:" . $url;
echo "\r\n";
echo "request body:" . $post_string;
echo "\r\n";
echo "response:" . $response;
```
</details>


<details class="zg-primary">
    <summary>开始混流（Node.js）</summary>

```node
const crypto = require('crypto');
const request = require('request');

//请将 appId 修改为你的 AppId，AppId 为 number
var appId = ;
//请将 serverSecret 修改为你的 serverSecret，serverSecret 为 string
var serverSecret = "";

//Signature=md5(AppId + SignatureNonce + ServerSecret + Timestamp)
function GenerateSignature(appId, signatureNonce, serverSecret, timeStamp) {
    const hash = crypto.createHash('md5'); //规定使用哈希算法中的MD5算法
    var str = appId + signatureNonce + serverSecret + timeStamp;
    hash.update(str);
    //hash.digest('hex')表示输出的格式为16进制
    return hash.digest('hex');
}

var signatureNonce = crypto.randomBytes(8).toString('hex');
var timeStamp = Math.round(Date.now() / 1000);
var sig = GenerateSignature(appId, signatureNonce, serverSecret, timeStamp)

//以下示例 将 streamID 为 "stream1" 的音视频流 与 streamID 为 "stream2" 的音视频流进行混流，混出 streamID 为 "stream3" 的音视频流
var url = `https://rtc-api.zego.im/?Action=StartMix&AppId=${appId}&SignatureNonce=${signatureNonce}&Timestamp=${timeStamp}&Signature=${sig}&SignatureVersion=2.0&IsTest=false`
var body = {
    'TaskId': '123',
    'Sequence': 123,
    'UserId': '123',
    'MixInput': [
    {    
        'StreamId': 'stream1',
        'RectInfo': {
            "Top": 70,
            "Bottom": 160,
            "Left": 100,
            "Right": 260,
        },
    }, 
    {
        'StreamId': 'stream2',
        'RectInfo': {
            "Top": 200,
            "Bottom": 290,
            "Left": 100,
            "Right": 260,
        },
    }
    ],
    'MixOutput': [{
        'StreamId': 'stream3',
        'Width': 360,
        'Height': 360,
        'VideoBitrate': 12000,
        'Fps': 15
    }]
}

request({
    url: url,
    method: 'POST',
    json: true,
    headers: {
        'content-type': 'application/json'
    },
    body: body
}, function (error, response, body) {
    console.log(error)
    console.log(response.statusCode)
    if (!error && response.statusCode === 200) {
        console.log(body.Data)
    }
})
```
</details>
