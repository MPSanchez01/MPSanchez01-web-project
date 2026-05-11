document.addEventListener('DOMContentLoaded', () => {
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.dataset.category;
                products.forEach(item => {
                    item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
                });
            });
        });
    }

    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {

            e.preventDefault(); 
            
            const emailInput = form.querySelector('input[type="email"]');
            
            if (emailInput && (!emailInput.value.includes('@') || !emailInput.value.includes('.'))) {
                alert('Please enter a valid e-mail address.');
            } else {
                alert('Success! Thank you for subscribing to GreenTech Solutions. We will be in touch shortly!');
                
                form.reset(); 
            }
        });
    });
});