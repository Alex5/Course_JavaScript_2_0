// let a = new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(data => {
//             resolve(data.json())
//         })
// })
//
// let b = new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(data => {
//             resolve(data.json())
//         })
// })
//
// Promise.all([a, b]).then(value => {
//     console.log(value)
// })
//
// a.then(data => {
//     console.log(data)
//     // action
//
// })
//
// b.then(data => {
//     console.log(data)
//     // action
//
// })


// Task 1

const path = 'https://jsonplaceholder.typicode.com/'
const out1 = document.querySelector('.out-1')
const b1 = document.querySelector('.b-1')

const requestOne = new Promise((resolve, reject) => {
    fetch(`${path}users`)
        .then(data => {
            resolve(data.json())
        })
})

const requestTwo = new Promise((resolve, reject) => {
    fetch(`${path}posts`)
        .then(data => {
            resolve(data.json())
        })
})

const promiseArray = [requestOne, requestTwo]

b1.onclick = () => {
    Promise.all(promiseArray).then(data => {
        console.log(data)
        for (const item of data[0]) {
            out1.innerHTML += `${item.name}<br>`
        }
        for (const item of data[1]) {
            out1.innerHTML += `${item.title}<br>`
        }
    })
}
