function send_mail() {
    let params = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        comment: document.querySelector("#comment").value,
    };
    console.log(username, email, comment)

    emailjs.send('service_f3hjjph', 'template_b3p8plq', params).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            console.log('FAILED...', error);
        });
}
