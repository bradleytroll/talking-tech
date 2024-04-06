const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-content"]').value;

    const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

const deleteClickHandler = async function() {
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    };

document
    .querySelector('.edit-post-form')
    .addEventListener('submit', editFormHandler);   
document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteClickHandler); 
}