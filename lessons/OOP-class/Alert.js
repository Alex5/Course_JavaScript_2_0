/*
    Описания класса
 */

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
