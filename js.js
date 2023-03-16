const product = {

    Blouse: [
        {
            name: 'Blouse ',
            price: '19 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {

            name: 'Blouse ',
            price: '20 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {

            name: 'Blouse ',
            price: '30 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {

            name: 'Blouse ',
            price: '40 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {

            name: 'Blouse ',
            price: '10 UAH',
            descr: 'Lorem ipsum dolor sit '
        }
    ],
    Cap: [
        {
            name: 'Cap',
            price: '80 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Cap',
            price: '1499 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Cap',
            price: '50 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Cap',
            price: '60 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Cap',
            price: '5 UAH',
            descr: 'Lorem ipsum dolor sit '
        }
    ],
    shoes: [
        {
            name: 'shoes',
            price: '80 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'shoes',
            price: '90 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'shoes',
            price: '80 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'shoes',
            price: '90 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'shoes',
            price: '10 UAH',
            descr: 'Lorem ipsum dolor sit '
        }
    ],
    Belt: [
        {
            name: 'Belt',
            price: '37 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Belt',
            price: '45 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Belt',
            price: '40 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Belt',
            price: '79 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Belt',
            price: '15 UAH',
            descr: 'Lorem ipsum dolor sit '
        }
    ],

}

const catalog = document.querySelector('.catalog');
const mainList = document.querySelector('.main__list');
const wrapperBlock = document.querySelector('.product__wrapp');
const appear = document.querySelector('.appear');
const appearContent = document.querySelector('.appear__content');
const appearCloseIcon = document.querySelector('.appear__close');

const purchase = {
    Blouse: () => goods('Blouse'),
    Cap: () => goods('Cap'),
    shoes: () => goods('shoes'),
    Belt: () => goods('Belt'),
};

mainList.addEventListener('click', (e) => {
    const targetAction = e.target.dataset.action;
    purchase[targetAction]();
});

function goods(produktKey) {
    if (!wrapperBlock) return;
    wrapperBlock.innerHTML = '';
    Object.values(product[produktKey]).forEach((el) => {
        const mainBlock = document.createElement('div');
        mainBlock.classList.add('product__block');
        wrapperBlock.appendChild(mainBlock);
        const title = document.createElement('h1');
        title.innerText = el.name;
        title.classList.add('product__title');
        mainBlock.appendChild(title);
        const infoBlock = document.createElement('div');
        infoBlock.classList.add('product__info');
        mainBlock.appendChild(infoBlock);
        const price = document.createElement('span');
        price.innerText = el.price;
        price.classList.add('product__price');
        infoBlock.appendChild(price);
        const descr = document.createElement('p');
        descr.innerText = el.descr;
        descr.classList.add('product__descr');
        infoBlock.appendChild(descr);
        const btn = document.createElement('button');
        btn.innerText = 'add to cart';
        btn.classList.add('product__btn');
        infoBlock.appendChild(btn);
        mainBlock.addEventListener('click', (e) => {
            const blockClass = document.querySelectorAll('.product__info');
            blockClass.forEach(el => el.classList.remove('product__info-active'));
            infoBlock.classList.add('product__info-active');
            btn.addEventListener('click', (e) => {
                appear.classList.add('appear-active');
                appearContent.classList.add('appear__content-active');
                appearCloseIcon.addEventListener('click', (e) => {
                    appear.classList.remove('appear-active');
                    appearContent.classList.remove('appear__content-active');
                    wrapperBlock.innerHTML = '';
                });
            });
        });
    });
};










