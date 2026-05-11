document.addEventListener('DOMContentLoaded', () => {

    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            products.forEach(item => {
                item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
            });
        });
    });


    const form = document.querySelector('#contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Success! Our sustainability experts will contact you soon.');
            form.reset();
        });
    }
});