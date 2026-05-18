function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comments = document.getElementById('comments').value.trim();

    if (name === '' || email === '' || comments === '') {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}