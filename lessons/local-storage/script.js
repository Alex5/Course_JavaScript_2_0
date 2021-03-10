window.addEventListener('storage', (e) => {
    console.log(e, 'change')
    document.querySelector('.out').textContent = localStorage.getItem('b1')
}) // событие отслеживается если изменение было на других страница в данном хосте

localStorage.setItem('data', 1)
const data = localStorage.getItem('data')
console.log(data)

const a = [3, 4, 5]

localStorage.setItem('a', JSON.stringify(a))

let b = localStorage.getItem('a')
b = JSON.parse(b)

console.log(b)
console.log(b[1])
console.log(typeof b) // string

const c = {
    hello: 5,
    key: 2,
    4: 'hi'
}

localStorage.setItem('c', JSON.stringify(c))

let d = localStorage.getItem('c')
d = JSON.parse(d)

console.log(d)
console.log(typeof b) // string

// Task 1 Создайте функцию t1 которая записывает в LS ключ 5 со значением 11. Проверьте что происходит при
// повторном вызове функции. Запускается ф-я по кнопкуе b-1.

const b1 = document.querySelector('.b-1')

const t1 = () => {
    localStorage.setItem('LS', {
        5: 11
    })
}

b1.onclick = t1

// будем [object. object] Если хоти нормальный вид то JSON.stringify({5:11})

// Task 2 Создайте функцию t2 которая записывает в LS массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при
// повторном вызове функции. Запускается ф-я по кнопкуе b-2.

const b2 = document.querySelector('.b-2')

a2 = [7, 6, 5]

const t2 = () => {
    console.log(a2)
    localStorage.setItem('LS', a2)
}

b2.onclick = t2

// Task 3 При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел
// значение перенос строки.

const t3 = document.querySelector('.t3')
const out3 = document.querySelector('.out-3')

t3.onclick = () => {
    let store = localStorage.getItem('LS')
    store = JSON.parse(store)
    console.log(store)
    out3.innerHTML = store
}



