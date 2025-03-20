let cart = [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartSection = document.getElementById('cart');
const cartToggle = document.getElementById('cart-toggle');
const clearCartBtn = document.getElementById('clear-cart');
const addToCartButtons = document.getElementsByClassName('add-to-cart');

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' VNĐ';
}

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - ${formatPrice(item.price)}`;
        cartItems.appendChild(itemElement);
        total += item.price;
    });
    cartCount.textContent = cart.length;
    cartTotal.textContent = formatPrice(total);
}

function addToCart(event) {
    const product = event.target.parentElement;
    const name = product.getAttribute('data-name');
    const price = parseInt(product.getAttribute('data-price'));
    cart.push({ name, price });
    updateCart();
}

cartToggle.addEventListener('click', () => {
    cartSection.classList.toggle('hidden');
});

clearCartBtn.addEventListener('click', () => {
    cart = [];
    updateCart();
});

for (let button of addToCartButtons) {
    button.addEventListener('click', addToCart);
}