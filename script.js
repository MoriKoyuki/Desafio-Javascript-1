function main(){
    const productsList = document.querySelector('.product-list');
    const myList = document.querySelector('.my-list');
    const price = document.querySelector('#price');

    const products = {
        "Mamão Papaia": 4.7,
        "Laranja": 2,
        "Manga": 3,
        "Melão": 4,
        "Melancia": 8
    };

    const myProducts = {};

    const addProduct = (element, name, className = '') => {
        const item = document.createElement('li');
        item.setAttribute('class', className);
        item.innerHTML = name;
        element.appendChild(item);
    }

    const priceValue = () => {
        if(!myProducts){
            price.innerHTML = '';
        }
        else{
            let aux = 0;
            for(let key in myProducts){
                aux += myProducts[key];
            }
            price.innerHTML = `R$ ${aux.toFixed(2)}`;
        }
    }

    const loadProducts = () => {
        for(let key in products){
            addProduct(productsList, key, 'ProductsListItems');
        }    
    }

    loadProducts();
    
    document.addEventListener('click', e => {
        const element = e.target;
        if(element.classList.contains('ProductsListItems')){
            const value = element.innerHTML;
            if(myProducts.hasOwnProperty(value)){
                alert('Este item já está na sua cesta.');
            }
            else{
                myProducts[value] = products[value];
                addProduct(myList, value);
                priceValue();
            }
        }
    });
}

main();