function send_mail() {
    let params = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        comment: document.querySelector("#comment").value,
    };
    emailjs.send('service_f3hjjph', 'template_b3p8plq', params).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message Sent Successfully!!");
        },
        (error) => {
            console.log('FAILED...', error);
            alert("Failed To Send The Message!!");

        });
}
