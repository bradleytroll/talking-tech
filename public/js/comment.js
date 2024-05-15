const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#comment-text').value.trim();
    const post_id = document.querySelector('#post-id').value;

    if (comment_text) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_text, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add comment.');
        }
    }
};

document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);


// const commentFormHandler = async function(event) {
//     event.preventDefault();

//     const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
//     const post_id = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];

//     if (comment_text) {
//         const response = await fetch('/api/comments', {
//             method: 'POST',
//             body: JSON.stringify({
//                 post_id,
//                 comment_text
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (response.ok) {
//             document.location.reload();
//         } else {
//             alert(response.statusText);
//         }
//     }
// };

// document
//     .querySelector('.comment-form')
//     .addEventListener('submit', commentFormHandler);
    