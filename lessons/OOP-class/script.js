// const myAlert = (message, cssClass, className) => {
//     const b = `<p class=${cssClass}>${message}</p>`
//     document.querySelector(`${className}`).innerHTML = b
// }
//
// myAlert('HI', 'red', '.test')

let m = new Alert('WARNING', 'red', '.test')

m.showAlert()

let m2 = new AlertIcon('Ошибка отправки запроса', 'red', '.test', 'error')

m2.showIconAlert()

// Task 1,2,3

const showItem = new Goods(
    'https://pngicon.ru/file/uploads/korova.png',
    '26000р',
    'Корова')

const showItemWithCount = new GoodsCount(
    'https://pngicon.ru/file/uploads/korova.png',
    '26000р',
    'Хорошая корова',
    '1200 шт.'
)

showItem.draw()

showItemWithCount.addCount()










