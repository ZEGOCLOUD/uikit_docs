export const getPlatformData = (props, data)=> {
    const platform = props.platform ?? "Android";
    for (const [key, value] of Object.entries(data)) {
        const pList = key.split(",");
        if (pList.includes(platform)) {
            return value
        }
    }
    return data["Android"]
}
