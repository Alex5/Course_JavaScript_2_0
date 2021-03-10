class Goods {
    constructor(image, amount, name) {
        this.name = name;
        this.amount = amount
        this.image = image;
    }

    draw() {
        const goodsOut = document.querySelector('.goods')
        goodsOut.innerHTML = `<div class="card">
                                ${this.name}<br>
                                ${this.amount}<br>
                                <img src="${this.image}" alt="Корова">
                              </div>`
    }
}


