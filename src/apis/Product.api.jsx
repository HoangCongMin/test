import http from '../utils/types/https'


export const getProductList = (params) => http.get('products', { params })
export const getProductDetails = (params) => http.get(`products/${params}`)
