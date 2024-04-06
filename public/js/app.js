// app.js
document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        { title: 'Post 1', content: 'This is the first post.' },
        { title: 'Post 2', content: 'Here is the second post.' }
        // Add more posts or fetch them from an API
    ];

    const postsContainer = document.getElementById('blog-posts');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });
});
