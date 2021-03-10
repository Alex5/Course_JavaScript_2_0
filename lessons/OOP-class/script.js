// const myAlert = (message, cssClass, className) => {
//     const b = `<p class=${cssClass}>${message}</p>`
//     document.querySelector(`${className}`).innerHTML = b
// }
//
// myAlert('HI', 'red', '.test')

class Alert {
    constructor(message, cssClass, className) {
        this.message = message
        this.cssClass = cssClass
        this.className = className
    }

    showAlert() {
        let out = document.querySelector(`${this.className}`)
        out.innerHTML = `<p class=${this.cssClass}>${this.message}</p>`
    }
}

class Alert2 extends Alert {
    constructor(message, cssClass, className, icon) {
        super(message, cssClass, className)
        this.icon = icon // new proper
    }
    showIconAlert(){
        let out = document.querySelector(`${this.className}`)
        out.innerHTML = `<p class=${this.cssClass}>${this.message}</p>`
    }
}

let m = new Alert('WARNING', 'red', '.test')

m.showAlert()

let m2 = new Alert2('драстье', 'red', '.test2')