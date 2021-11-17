import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Freezes'},
            {id: 2, name: 'Phones'},
            {id: 3, name: 'Tvs'},
            {id: 4, name: 'FM'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Twitch'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12', price: 2000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000'},
            {id: 1, name: 'Iphone 12', price: 2000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000'},
            {id: 1, name: 'Iphone 12', price: 2000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevice(devices){
        this._devices = devices
    }
    get devices(){
        return this._devices
    }
    get brands(){
        return this._brands
    }
    get types(){
        return this._types
    }
}