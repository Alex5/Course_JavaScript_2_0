document.getElementById('out').innerHTML = 'Hello'
// let a = document.querySelector('#one')
// a.innerHTML = 999

const editText = () => {
    document.querySelector('#one').innerHTML = "Поменялся"
}

const inputIn = document.querySelector('.input-in') // input
const button = document.querySelector('.button-in') // input
const div = document.querySelector('.out')

button.onclick = () => {
    // console.log(inputIn.value)
    const value = +inputIn.value // перевести в число +
    console.log(value)
    div.innerHTML = value
    inputIn.value = '';
}

const a = 7
const b = 9
console.log("Результат умножения a на b:", a * b)

const c = 7
const d = 9
const taskTwoResult = c * d
const taskTwo = document.querySelector('.taskTwo')
taskTwo.innerHTML = taskTwoResult

const e = 3
const f = 5
const taskThreeResult = e + f
const taskThree = document.querySelector('.taskThree')
taskThree.innerHTML = taskThreeResult


// Lesson 3 if, else, switch

const lesson3 = () => {
    // const a = 6
    // // <= >= == !=
    // if (a !== 19) {
    //     console.log('Yes')
    // } else  {
    //     console.log("else")
    // }
    const button = document.querySelector('.btn-lesson-3')
    const input = document.querySelector('.input-lesson-3')

    button.onclick = () => {
        let age = +input.value
        // if (age >= 16 && age < 60) {
        //     alert('Велком ту фемели')
        // } else if (age > 60) {
        //     alert('Ты точно сюда?')
        // } else {
        //     alert('Ты не пройдёшь!')
        // }
        switch (age) {
            case 16:
                alert("Как раз подходишь")
                break
            case 15:
                alert("Пока рановато :((( Подожди ещё год")
                break
            default:
                alert("Проходи")
        }
    }

    //task1

    const button1 = document.querySelector('.b-1')
    const out = document.querySelector('.out-1')
    const input3 = document.querySelector('.prep-input-3')
    button1.onclick = () => {
        let i = input3.value
        if (i === 4) {
            out.innerHTML = "true"
        } else {
            out.innerHTML = "false"
        }
    }

    // task2

    const a21 = 21
    const a22 = 22
    const b2 = document.querySelector('.b-2')
    const out2 = document.querySelector('.out-2')
    const task3result = document.querySelector('.task2-lesson4')
    const f2 = () => {
        if (a21 > a22) {
            out2.innerHTML = "21"
        } else {
            out2.innerHTML = "22"
        }
    }

    b2.onclick = f2
    task3result.innerHTML = f2

    // task3

    /*Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3.
        Функция должна прочитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в out-3 большее
    число.*/

    const input31 = document.querySelector('.i-31')
    const input32 = document.querySelector('.i-32')
    const out3 = document.querySelector('.out-3')
    const code3 = document.querySelector('.code-3')
    const btn3 = document.querySelector('.b-3')

    const f3 = () => {
        const input31Value = +input31.value
        const input32Value = +input32.value

        if (input31Value > input32Value) {
            out3.innerHTML = input31.value
        } else {
            out3.innerHTML = input32.value
        }
    }

    code3.innerHTML = f3
    btn3.onclick = f3
}

lesson3()

// Lesson 4 input, checkbox

const lesson4 = () => {
    //color picker
    const inputValueLesson4 = document.querySelector('.input-lesson-4')
    const btnLesson4 = document.querySelector('.btn-lesson-4')

    btnLesson4.onclick = () => {
        btnLesson4.style.backgroundColor = inputValueLesson4.value
    }

    //date picker

    const dateValueLesson4 = document.querySelector('.date-lesson-4')
    const btn2Lesson4 = document.querySelector('.btn2-lesson-4')

    btn2Lesson4.onclick = () => {
        rangeOut.innerHTML = dateValueLesson4.value
    }

    //range picker

    const rangeValueLesson4 = document.querySelector('.range-lesson-4')
    const btn3Lesson4 = document.querySelector('.btn3-lesson-4')
    const rangeValues = document.querySelector('.range-values')
    const rangeOut = document.querySelector('.range-out')
    const rangeOut2 = document.querySelector('.range-out2')

    btn3Lesson4.onclick = () => {
        rangeOut.innerHTML = rangeValueLesson4.value
    }

    rangeValueLesson4.oninput = () => {
        rangeValues.innerHTML = rangeValueLesson4.value
    }

    //checkbox
    const btn4lesson4 = document.querySelector('.btn4-lesson-4')
    const checkboxLesson4 = document.querySelector('.checkbox-lesson-4')

    btn4lesson4.onclick = () => {
        if (checkboxLesson4.checked) {
            rangeOut.innerHTML = "Выбран"
        } else {
            rangeOut.innerHTML = "Не выбран"
        }
    }

    //textarea

    const textAreaLesson4 = document.querySelector('.textarea-lesson4')
    const btn5lesson4 = document.querySelector('.btn5-lesson-4')
    const alertCloseBtn = document.querySelector('#deleteAlert')
    const lesson4code = document.querySelector('.lesson4Code')

    btn5lesson4.onclick = () => {
        if (textAreaLesson4.value !== '') {
            rangeOut.innerHTML = textAreaLesson4.value
        } else if (textAreaLesson4.value === '') {
            rangeOut2.innerHTML = `<div class="alert alert-danger areaAlert" role="alert">Нет значения</div>`
        }

        textAreaLesson4.value = ''
    }

    alertCloseBtn.onclick = () => {
        const alert = document.querySelector('.areaAlert')
        alert.remove();
        return false;
    }
    lesson4code.innerHTML = lesson4

    //form

    //home work

    //task 1

    const btn1lesson4 = document.querySelector('.btn1lesson4')
    const task1title = document.querySelector('.task1title')

    btn1lesson4.onclick = () => {
        alert(task1title.innerText)
    }

    //task 2

    const input1lesson4 = document.querySelector('.input1lesson4')

    input1lesson4.onclick = () => alert('Номер задачи: 2')

    //task 3

    const p3Lesson4Input = document.querySelector('.p3Lesson4Input')
    p3Lesson4Input.onclick = () => alert(3)
}

lesson4()

//lesson 5 циклы while, for, do while

const lesson5 = () => {
    const div = document.querySelectorAll('.lesson5div')
    const div2 = document.getElementsByClassName('lesson5div')
    // const div3 = document.getElementsByTagName('div')

    for (let i = 0; i < div.length; i++) {
        div[i].style.background = '#b6d1ff'
        console.log(i)
    }

    for (let i = 0; i < div2.length; i++) {
        div2[i].style.border = '3px solid black'
        console.log(i)
    }

    const btn1lesson5 = document.querySelector('.btn1lesson5')
    const radio1lesson5 = document.querySelectorAll(".radio1lesson5[type=radio]")
    const out1lesson5 = document.querySelector('.out1lesson5')

    btn1lesson5.onclick = () => {
        for (let i = 0; i < radio1lesson5.length; i++) {
            if (radio1lesson5[i].checked) {
                out1lesson5.innerHTML = (radio1lesson5[i].value)
            }
        }
    }

    //task 1

    const b1lesson5 = document.querySelector('.b1lesson5')
    const out3lesson5 = document.querySelector('.out3lesson5')

    const t1lesson5 = () => {
        for (let i = 1; i <= 50; i++) {
            out3lesson5.innerHTML += `${i}&#160;`
        }
    }

    b1lesson5.onclick = () => t1lesson5()

    //task 2

    const b2lesson5 = document.querySelector('.b2lesson5')
    const out4lesson5 = document.querySelector('.out4lesson5')

    const t2lesson5 = () => {
        for (let i = 2; i <= 122; i = i + 2) {
            out4lesson5.innerHTML += `${i}&#160;`
        }
    }

    b2lesson5.onclick = () => t2lesson5()

    //task 3

    const b3lesson5 = document.querySelector('.b3lesson5')
    const out5lesson5 = document.querySelector('.out5lesson5')

    const t3lesson5 = () => {
        for (let i = 25; i >= 7; i--) {
            out5lesson5.innerHTML += `${i}&#160;`
        }
    }

    b3lesson5.onclick = () => t3lesson5()


}

lesson5()

// my example

const lesson5MyExample = () => {
    const out2lesson5 = document.querySelector('.out2lesson5')
    let content = document.querySelector('.out2lesson5').innerHTML
    // let myCodeLesson5 = document.querySelector('.myCodeLesson5')
    const cardNumber = document.getElementById('cardNumber')
    const cardNumberPicker = document.querySelector('.cardNumberPicker')

    cardNumberPicker.onclick = () => {
        let cardNum = cardNumber.value

        for (let i = 0; i < cardNum; i++) {
            content += `
            <div class="card m-1" style="flex: 1">
                <div class="card-body ">
                    <h5 class="card-title">№ ${randomInteger()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
            `
        }
        out2lesson5.innerHTML = content
    }


    function randomInteger() {
        // получаем случаайное число
        let min = 1
        let max = 100
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
}

lesson5MyExample()


// lesson 6 вложенные циклы

// lesson 7

const a2 = 8;

const t2 = () => {
    return a2
}

/*btn2lesson7.onclick = () => {
    out2lesson7.textContent = t2()
}*/

// Task 3

const btn3lesson7 = document.querySelector('.btn3lesson7')
const btn4lesson7 = document.querySelector('.btn4lesson7')
const out3lesson7 = document.querySelector('.out3lesson7')

const t3 = (a, b) => {
    return a * b
}

btn3lesson7.onclick = () => {
    out3lesson7.textContent = t3(3, 4)
}

btn4lesson7.onclick = () => {
    out3lesson7.textContent = t3(5, 6)
}


// Task 1
// Ниже первое задание с циклами, почему внутри функции происходит лишний оборот цикла

const out1lesson6 = document.querySelector('.out1lesson6')

for (let i = 0; i <= 2; i++) {

    for (let i = 0; i <= 2; i++) {
        out1lesson6.innerHTML += '*'
    }
    out1lesson6.innerHTML += '_'
}

// Task 2

const out2lesson6 = document.querySelector('.out2lesson6')

for (let i = 1; i <= 3; i++) {

    switch (i) {
        case 1:
            out2lesson6.innerHTML += `${i}<br>`
            break
        default:
            out2lesson6.innerHTML += `<br>${i}<br>`
    }

    for (let i = 0; i <= 2; i++) {

        for (let i = 0; i <= 0; i++) {

            out2lesson6.innerHTML += '*'
        }
        out2lesson6.innerHTML += '_'
    }
}

// Task 3

const out3lesson6 = document.querySelector('.out3lesson6')

for (let i = 1; i <= 4; i++) {

    for (let i = 0; i <= 2; i++) {

        for (let i = 0; i <= 0; i++) {

            out3lesson6.innerHTML += '*'
        }
        out3lesson6.innerHTML += '_'
    }

    out3lesson6.innerHTML += `<br>`
}

// Урок 8 while, do while

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let k = 0

while (k <= 5) {
    k++
    if (k === 3) {
        break
    }
}

//0.......10

let sum = 0
let p = 0

while (p <= 10) {
    sum = sum + p;
    p++
    console.log(sum)
}

console.log("sum = " + sum)

// ****
// ****
// ****

let out2lesson8 = document.querySelector('.out2lesson8')
let outStr = ``
p = 0
let flag = 3

while (p < 4) {
    let p1 = 0
    while (p1 < 4) {
        if (p1 < flag) {
            outStr += `0`

        } else {
            outStr += `*`
        }
        p1++
    }
    flag--
    outStr += `<br>`
    p++
}

out2lesson8.innerHTML = outStr

// Task 1

/*Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:

    1 2 3 4 5 6 7 8 9 ... 49 50

от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла while.*/

const out3lesson8 = document.querySelector('.out3lesson8')
const btn1lesson8 = document.querySelector('.btn1lesson8')
const t1lesson8 = () => {
    let i = 1
    while (i <= 50) {
        out3lesson8.textContent += `${i} `
        i++
    }
}

btn1lesson8.onclick = t1lesson8

// Task 2

/* Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:

2 4 6 ... 122

от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла while. */

const out4lesson8 = document.querySelector('.out4lesson8')
const btn2lesson8 = document.querySelector('.btn2lesson8')
const t2lesson8 = () => {
    let i = 2
    while (i <= 122) {
        out4lesson8.textContent += `${i} `
        i = i + 2
    }
}

btn2lesson8.onclick = t2lesson8

// Task 3

/* Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:

25 24 23 22 . . 7

от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла while. */

const out5lesson8 = document.querySelector('.out5lesson8')
const btn3lesson8 = document.querySelector('.btn3lesson8')
const t3lesson8 = () => {
    let i = 25
    while (i >= 7) {
        out5lesson8.textContent += `${i} `
        i--
    }
}

btn3lesson8.onclick = t3lesson8

// lesson 9














