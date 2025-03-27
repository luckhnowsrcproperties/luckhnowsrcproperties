let contactToggle = document.getElementById('contact-toggle');
let contactFormMain = document.getElementById('contact-form');
contactToggle.addEventListener('click',()=>{
    contactFormMain.style.display = "none";

})


function emailSend(event) {
    event.preventDefault();
    let parms = {
        userName: document.getElementById('user-name').value,
        mobile: document.getElementById('user-mobile').value,
        address: document.getElementById('user-address').value,
        email: document.getElementById('user-email').value,
    };

    emailjs.send("service_rpq4gfd", "template_4igc3zg", parms)
        .then(response => {
            alert(`Thank you for Contacting US !`);
            // console.log("Email sent successfully:", response);
        })
        .catch(error => {
            console.error("Email failed to send:", error);
        });
}