import { httpService } from "./http.service"


async function login(credentials) {
    const user = await httpService.post('auth/login', { ...credentials })
    localStorage.user = JSON.stringify(user)
}




export const authService = {
    login
}