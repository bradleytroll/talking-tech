const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out.');
    }
};

document.querySelector('#logout').addEventListener('click', logout);

// const logout = async () => {
//     const response = await fetch('/api/users/logout', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     }
//     else {
//         alert(response.statusText);
//     }
// };  

// document.addEventListener('DOMContentLoaded', () => {
//     const logoutButton = document.querySelector('#logout');
//     if (logoutButton) {
//         logoutButton.addEventListener('click', logout);
//     }   
// });