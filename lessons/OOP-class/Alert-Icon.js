class AlertIcon extends Alert {
    constructor(message, cssClass, className, icon) {
        super(message, cssClass, className)
        this.icon = icon // new proper
    }

    showIconAlert() {
        let out = document.querySelector(`${this.className}`)
        out.innerHTML = `<p class=${this.cssClass}>${this.message}
                            <span class="material-icons">${this.icon}</span>
                        </p>`
    }
}