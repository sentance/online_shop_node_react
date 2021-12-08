import {$authHost, $host} from "./index";

export const createBran = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}