// new form handler for post
async function newFormHandler(event) {
    event.preventDefault();

// get title and text from form
const title = document.querySelector('input[name="post-title"]').value;
const post_text = document.querySelector('textarea[name="post-text"]').value;

// calling post route (session info is in route) + data body format
const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
        title,
        post_text
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});
// if response ok, show dashboard

if (response.ok) {
    document.location.replace('/dashboard');
    } else {
    alert(response.statusText);
    }
}

// event listener for post submit button
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);