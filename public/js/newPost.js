const newPostHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="title"]').value;
    const content = document.querySelector('textarea[name="post_content"]').value;

    const response = await fetch(`/api/posts/`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_content: content
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

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostHandler);