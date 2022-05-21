import Axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'


var axios = Axios.create({
    withCredentials: true
})

export const httpService = {
    get(endpoint, data, headers) {
        return ajax(endpoint, 'GET', data, headers)
    },
    post(endpoint, data, headers) {
        return ajax(endpoint, 'POST', data, headers)
    },
    put(endpoint, data, headers) {
        return ajax(endpoint, 'PUT', data, headers)
    },
    delete(endpoint, data, headers) {
        return ajax(endpoint, 'DELETE', data, headers)
    }
}

async function ajax(endpoint, method = 'GET', data = null, headers) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            headers,
            params: (method === 'GET') ? data : null
        })
        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
        console.dir(err)
        throw new Error(err)
    }
}