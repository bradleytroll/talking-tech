const editCommentHandler = async (event) => {
    if (event.target.classList.contains('edit-comment')) {
        const id = event.target.getAttribute('data-id');
        const comment_text = prompt('Enter new comment text:');

        if (comment_text) {
            const response = await fetch(`/api/comments/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ comment_text }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.reload();
            } else {
                alert('Failed to edit comment.');
            }
        }
    }
};

document.querySelectorAll('.comment').forEach(comment => {
    comment.addEventListener('click', editCommentHandler);
});