const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};

document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);

// const loginFormHandler = async (event) => {
//     event.preventDefault();

//     // Collect values from the login form
//     const username = document.querySelector('#username').value.trim();
//     const password = document.querySelector('#password').value.trim();

//     if (username && password) {
//         // Send a POST request to the API endpoint
//         const response = await fetch('/api/users/login', {
//             method: 'POST',
//             body: JSON.stringify({ username, password }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             // If successful, redirect the browser to the homepage
//             document.location.replace('/');
//         } else {
//             alert(response.statusText);
//         }
//     }
// } 

// document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);

    