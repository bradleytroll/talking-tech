const newCommentFormHandler = async (event) => {
    event.preventDefault();

    const postId = event.target.getAttribute('data-post-id');
    const comment_text = event.target.querySelector('textarea[name="comment_text"]').value.trim();

    if (comment_text) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_text, post_id: postId }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add comment.');
        }
    }
};

document.querySelectorAll('.new-comment-form').forEach(form => {
    form.addEventListener('submit', newCommentFormHandler);
});
