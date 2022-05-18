import axiosInstance from "../config/Axios"

export function getProducts() {
    return axiosInstance.get()
}

export function getProductById(id) {
    return axiosInstance.get(`${id}`)
}

export function addProduct(productObj) {
    return axiosInstance.post('', productObj)
}

export function updateProduct(productObj) {
    return axiosInstance.put('', productObj)
}

export function deleteProductById(id) {
    return axiosInstance.delete(`${id}`)
}