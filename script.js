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
        // let age = +input.value
        // if (age >= 16 && age < 60) {
        //     alert('Велком ту фемели')
        // } else if (age > 60) {
        //     alert('Ты точно сюда?')
        // } else {
        //     alert('Ты не пройдёшь!')
        // }
        switch (age) {
            case 16:
                alert("Всё хорошо")
                break
            case 15:
                alert("Пока рановато :((( Подожди ещё год")
                break
            default:
                alert("Отлично")
        }
    }
}

lesson3()

// Lesson 4 if, else, switch

const lesson4 = () => {
    console.log("lesson4")
}

lesson4()











