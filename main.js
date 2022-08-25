
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobileButton = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const ShoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

// Event Listeners
menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobileButton.addEventListener('click', toogleMenuMobile);
ShoppingCartIcon.addEventListener('click', toogleProductDetail);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

// Email submenu for desktop
function toggleDesktopMenu(){
    const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isProductDetailClosed){
        shoppingCartContainer.classList.add('inactive');
    }
       
    desktopMenu.classList.toggle('inactive');
}

// Menu for mobile
function toogleMenuMobile(){

    const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductContainerClosed = productDetailContainer.classList.contains('incative');

    if(!isProductDetailClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    if (!isProductContainerClosed){
        productDetailContainer.classList.add('inactive');
    }

        menuMobile.classList.toggle('inactive');
}

// Product Detail
function toogleProductDetail(){

    const isMobileMenuClosed = menuMobile.classList.contains('Inactive');
    
    if (!isMobileMenuClosed){
        menuMobile.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');
    

}

// Open Product Detail Aside
function openProductDetailAside(){

    const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isProductDetailClosed){
        shoppingCartContainer.classList.add('inactive');
        
    }

    if (!isdesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    productDetailContainer.classList.remove('inactive'); 
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

// Products Array
const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?cs=srgb&dl=pexels-vidal-balielo-jr-1682519.jpg&fm=jpg'
});

productList.push({
    name: 'Computador',
    price: 520,
    image: 'https://images.pexels.com/photos/968631/pexels-photo-968631.jpeg?cs=srgb&dl=pexels-eduardo-rosas-968631.jpg&fm=jpg'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?cs=srgb&dl=pexels-vidal-balielo-jr-1682519.jpg&fm=jpg'
});

productList.push({
    name: 'Computador',
    price: 520,
    image: 'https://images.pexels.com/photos/968631/pexels-photo-968631.jpeg?cs=srgb&dl=pexels-eduardo-rosas-968631.jpg&fm=jpg'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?cs=srgb&dl=pexels-vidal-balielo-jr-1682519.jpg&fm=jpg'
});

productList.push({
    name: 'Computador',
    price: 520,
    image: 'https://images.pexels.com/photos/968631/pexels-photo-968631.jpeg?cs=srgb&dl=pexels-eduardo-rosas-968631.jpg&fm=jpg'
});

//Maquetar el arreglo - los productos se crean a traves de una funcion con un for.

/*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>*/

    // function Render Product - product ={name, price, }

function renderProducts(arr){
    for (product of arr){

        
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');        
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
       
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText ='$' + product.price;
     
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
     
        productInfoFigure.appendChild(productImgCard);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
     
     }
     
}

renderProducts(productList);