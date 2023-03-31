// login form handling

async function loginFormHandler(e) {
    e.preventDefault();

    // info from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#passwor-login').value.trim();


    // post only when both email and password are present
    if (email && password) {
        const response = await fetch('api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type' : 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            let result = await response.json()
            alert(result.message)
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
