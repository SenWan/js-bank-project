document.getElementById('submit-button').addEventListener('click', function(){
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // if email and password are valid it will turn into another page
    if(userEmail == 'example@gmail.com' && userPassword == '1234'){
        window.location.href = 'banking.html';
    }
})