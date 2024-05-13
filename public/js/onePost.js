document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.delete-post-button'); // Ensure buttons have this class

    deleteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the form from submitting
            const postId = this.getAttribute('data-post-id'); // Ensure button has data-post-id attribute

            if (confirm('Are you sure you want to delete this post?')) {
                fetch(`/api/posts/delete/${postId}`, {
                    method: 'POST'
                })
                .then(response => {
                    if (response.ok) {
                        window.location.href = '/dashboard'; // Redirect or update UI
                    } else {
                        throw new Error('Failed to delete post');
                    }
                })
                .catch(error => {
                    console.error('Error deleting post:', error);
                });
            }
        });
    });
});
