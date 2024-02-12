export function getRandomBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getParams(params, tag=''){
    if (tag) {
        params['tags'] = {
            name: tag
        }
    } else {
        try {
            delete params.tags
        } catch (error) {}
    }
    return params
}
