// event handler for deleting post
async function deleteFormHandler(event) {
    event.preventDefault();

    // getting post id from url
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    // delete post with await
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    // if response ok, go to dashboard
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    }
}

// event listener for delete post button
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);