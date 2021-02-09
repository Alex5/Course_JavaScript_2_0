// lesson 7 функции

//именованые

/*const func1lesson6 = document.querySelector('.func1lesson6')

const one = () => {
    console.log('Work')
}

func1lesson6.onclick = one;*/

/*console.log(1 + one()) // NaN
console.log(one()) // undefined*/

const two = () => {
    console.log('work 22222')
    return 54;
}

two()

console.log(1 + two())

const twoLesson7 = (g, h) => {
    return g * h;
}

console.log(twoLesson7(3, 4))

//

const multi2 = (x, y) => {
    return x * y
}

console.log(multi2(2, 5))
console.log(multi2(7, 9))

// домашка

// Task 1

const btn1lesson7 = document.querySelector('.btn1lesson7')
const out1lesson7 = document.querySelector('.out1lesson7')
const a1 = 8;

const t1 = () => out1lesson7.innerHTML = a1

btn1lesson7.onclick = t1

// Task 2

const btn2lesson7 = document.querySelector('.btn2lesson7')
const out2lesson7 = document.querySelector('.out2lesson7')
const a2 = 8;

const t2 = () => {
    return a2
}

btn2lesson7.onclick = () => {
    out2lesson7.textContent = t2()
}

// Task 3

const btn3lesson7 = document.querySelector('.btn3lesson7')
const btn4lesson7 = document.querySelector('.btn4lesson7')
const out3lesson7 = document.querySelector('.out3lesson7')

const t3 = (a, b) => {
    return a * b
}

btn3lesson7.onclick = () => {
    out3lesson7.textContent = t3(3,4)
}

btn4lesson7.onclick = () => {
    out3lesson7.textContent = t3(5,6)
}
