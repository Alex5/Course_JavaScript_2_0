let a = 5
a = a * 2
try {
    document.querySelector('.test').innerHTML = a // !
} catch (err) {
    console.log(err)
    document.querySelector('.out-1').innerHTML = 1 // !
    // можно добавить if
} finally {
    // программа выполниться в люьой случае
    console.log('Программа работает')
}

console.log(a)

const t1 = () => {
    console.log('Hello')
}

t1()

// Task 1 Добавьте в код функции try catch так, чтобы вместо ошибки выводилось в out-1 цифра 1.

// Task 2 Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата в out-2.

let b = 'Результат out-2'

try {
    document.querySelector('.test').innerHTML = b // !
} catch (err) {
    console.log(err)
    document.querySelector('.out-2').innerHTML = b // !
    // можно добавить if
}

// Task 3 Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата в out-3.
// Если его нет - создавайте в коде. т.е. вы не знаете будет или нет он в html.

const c = 'Результат out-3';

try {
    document.querySelector('.out-3').innerHTML = c // !
} catch (err) {
    const out3 = document.createElement('div')
    out3.classList.add('out-3')
    document.body.append(out3)
    out3.innerText = c
}




