let contactform = document.getElementById('contactform');
let formErrorMessage  = document.getElementById('errormessage');

contactform.addEventListener('submit', function (e) {

    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if (name === "") {
        formErrorMessage.innerHTML = 'Please enter your name.'; // Fixed typo ("You name;")
        return; // Stops the function execution here
    }
    

    console.log(name);

    console.log(name)

    let Data = [{
        name, email, phone, message
    }]

    let submitdata = localStorage.setItem('formdata', JSON.stringify(Data))

    e.target.reset();


})