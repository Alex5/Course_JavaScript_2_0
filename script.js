const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
})

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
        if (i == 4) {
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

    const removeAlert = () => {
        const alert = document.querySelector('.areaAlert')
        alert.remove();
        return false;
    }

    alertCloseBtn.onclick = removeAlert
    lesson4code.innerHTML = lesson4

    //form


}

lesson4()











