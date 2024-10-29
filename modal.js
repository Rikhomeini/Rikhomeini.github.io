(function() {
    emailjs.init("lmYmSeh-TeU-me2Vc"); // Ganti dengan User ID EmailJS Anda
})();

const modal = document.getElementById("contact-modal");
const btn = document.getElementById("contact-btn");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contact-form");


function showToast(message, isSuccess = true) {
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: isSuccess ? "#4CAF50" : "#f44336",
        stopOnFocus: true,
    }).showToast();
}

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();


    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.innerHTML = '<span class="spinner"></span> Sending...';
    submitButton.disabled = true;

    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_4zr3ipo', 'template_k31wr9d', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showToast('Your message has been sent successfully!');
            modal.style.display = "none";
            form.reset();
        }, function(error) {
            console.log('FAILED...', error);
            showToast('Failed to send the message. Please try again later.');
        });
        
});