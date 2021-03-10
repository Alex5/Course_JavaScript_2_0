const user = {
    name: 'Ivan',
    surname: 'Volochkov'
}

const URL = 'https://react-bulki-deploy.herokuapp.com/'


fetch(`${URL}db.json`)
    .then((response) => {
        return response.json();
    })
    .then(({pizzas}) => {
        setPizzas(pizzas);
    });


const setPizzas = (pizzas) => {
    if (pizzas.length > 7) {
        alert('Очень много пиц!!')
    }
}