export const generateRoutesFromConfigs = (configs, auth = "guest") => {
    let routes = [];
    console.log(auth)
    configs.forEach(config => {
        console.log(config.auth)
        if (config.auth.find(ele => ele === auth))
            routes = [...routes, ...config.routes]
    });
    return routes;
}