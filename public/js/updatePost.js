// updating post
async function updateFormHandler(event) {
    event.preventDefault();

    // getting post id from url
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    // getting title and text from form
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="post-text"]').value;

    // calling put route
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
 // if update works, go to dashboard
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', updateFormHandler);