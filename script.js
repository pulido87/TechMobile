document.addEventListener('DOMContentLoaded', () => {
    // Constants
    const NAVBAR_SCROLL_THRESHOLD = 50;
    const NAVBAR_BACKGROUND_SCROLLED = 'rgba(28, 17, 124, 0.53)';
    const NAVBAR_BACKGROUND_DEFAULT = 'black';

    // Smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form handling
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status'); // Element to display status messages
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Disable submit button and show loading message
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        formStatus.textContent = 'Enviando...';

        const formData = new FormData(form);

        try {
            // Simulate a successful submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
            // const response = await fetch('/submit-form', { // Replace with your actual endpoint
            //     method: 'POST',
            //     body: formData
            // });

            // if (!response.ok) {
            //     throw new Error(`HTTP error! status: ${response.status}`);
            // }

            formStatus.textContent = 'Mensaje enviado correctamente';
            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            formStatus.textContent = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.';
        } finally {
            submitButton.disabled = false;
        }
    });
    // Navbar scroll animation (debounced)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > NAVBAR_SCROLL_THRESHOLD) {
                navbar.style.background = NAVBAR_BACKGROUND_SCROLLED;
            } else {
                navbar.style.background = NAVBAR_BACKGROUND_DEFAULT;
            }
        }, 100); // Debounce time of 100ms
    });
});
