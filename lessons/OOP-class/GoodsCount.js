class GoodsCount extends Goods {
    constructor(image, amount, name, count) {
        super(image, amount, name)
        this.count = count
    }

    addCount() {
        const goodsOut = document.querySelector('.goods')
        goodsOut.innerHTML = `<div class="card">
                                ${this.name}<br>
                                ${this.amount}<br>
                                <img src="${this.image}" alt="Корова"><br>
                                ${this.count}
                              </div>`
    }
}


