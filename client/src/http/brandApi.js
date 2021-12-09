import {$authHost, $host} from "./index";

export const createBrand = async (type) => {
    const {data} = await $authHost.post('api/brand', type)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}