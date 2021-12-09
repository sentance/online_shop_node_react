import {$authHost, $host} from "./index";

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async () => {
    const {data} = await $host.get('api/device')
    return data
}

export const fetchDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}