function sendMail(){
    var parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_cx39qdq", "template_owk5xxv", parms)
    .then(function(response) {
        alert("Email Sent Successfully!");
    }, function(error) {
        alert("Failed to send email: " + error);
    });
}