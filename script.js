document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Order Form Handler
    const orderForm = document.getElementById('orderForm');
    const orderSuccess = document.getElementById('orderSuccess');

    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('orderName').value;
            const phone = document.getElementById('orderPhone').value;
            const dish = document.getElementById('orderDish').value;

            if (name && phone && dish) {
                orderForm.style.display = 'none';
                orderSuccess.style.display = 'block';
            }
        });
    }
});
