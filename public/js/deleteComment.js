const deleteCommentHandler = async (event) => {
    if (event.target.classList.contains('delete-comment')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to delete comment.');
        }
    }
};

document.querySelectorAll('.comment').forEach(comment => {
    comment.addEventListener('click', deleteCommentHandler);
});