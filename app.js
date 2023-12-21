(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

// Email sending code
document.getElementById('email').addEventListener('click', function (event) {
    event.preventDefault();

    // Initialize Email.js with your user ID
    emailjs.init("u9PRtVIA2Imd8wK_Y");

    // Replace "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", and "YOUR_USER_ID" with your actual values from Email.js dashboard
    const emailData = {
        from_name: document.querySelector('input[placeholder="YOUR NAME"]').value,
        from_email: document.querySelector('input[placeholder="YOUR EMAIL"]').value,
        subject: document.querySelector('input[placeholder="ENTER SUBJECT"]').value,
        message: document.querySelector('textarea[placeholder="Message Here..."]').value,
    };

    emailjs.send("service_ag9qyso", "template_lyz7f6p", emailData)
        .then(function (response) {
            console.log('Email sent successfully!', response);
            // Show a success message to the user or perform any other actions.
        }, function (error) {
            console.log('Error sending email:', error);
            // Show an error message to the user or handle the error as needed.
        });
    });

})();
