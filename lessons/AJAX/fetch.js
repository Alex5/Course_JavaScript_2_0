const requestUrl = 'https://jsonplaceholder.typicode.com/users'

const sendRequest = (method, url, body = null) => {
    const headers = {
        'Content-Type': 'application/json'
    }
    const params = {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }
    return fetch(url, params).then(response => {
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error('Что-то поошло не так')
            e.data = error
            throw e
        })
    })
}

// sendRequest('GET', requestUrl)
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

sendRequest('POST', requestUrl, {
    name: 'Alexey',
    age: 26
})
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
