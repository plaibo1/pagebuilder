import { $authHost, $host } from "./index"
import jwtDecode from "jwt-decode"

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: "USER"})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const sendImg = async (img) => {
    const config = { headers: { 'Content-Type': 'multipart/form-data' }}
    const data = await $authHost.post('api/images/add-image', {img}, config)
    return data
}

export const sendHTML = async (myHtml, webSiteName) => {
    const {data} = await $authHost.post('api/user/file', {myHtml, webSiteName})
    return data
}

export const downloadHTML = async (filename) => {
    const {data} = await $authHost.get(`api/user/file/${filename}`)
    return data
}

export const saveCurHTML = async (userId, siteInfo) => {
    const {data} = await $authHost.post('api/user/saveSite', {userId, siteInfo});
    return data
}

export const getMySites = async (userId) => {
    const {data} = await $authHost.get(`api/user/saveSite/${userId}`);
    return data
}

export const updateSavedSite = async (userId, siteInfo) => {
    const {data} = await $authHost.put('api/user/saveSite', {userId, siteInfo});
    return data
}

export const deleteSite = async (id) => {
    const {data} = await $authHost.delete(`api/user/saveSite/${id}`);
    return data
}