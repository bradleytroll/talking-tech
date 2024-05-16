const editPostHandler = async (event) => {
    if (event.target.classList.contains('edit-post')) {
        const id = event.target.getAttribute('data-id');
        const title = prompt('Enter new title:');
        const content = prompt('Enter new content:');

        if (title && content) {
            const response = await fetch(`/api/posts/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, content }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to edit post.');
            }
        }
    }
};

document
    .querySelector('.post')
    .addEventListener('click', editPostHandler);

