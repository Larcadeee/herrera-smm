function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_ylszrk4", "template_xyx2no9", parms)
        .then(function(response) {
            alert("Email sent successfully!");
        }, function(error) {
            alert("Failed to send email. Please try again.");
        });
}

// Initialize EmailJS (add this once, e.g., at the top of your script)
(function(){
    emailjs.init("-HJYjJGPNwkbIcSiD"); // Replace with your EmailJS public key
})();