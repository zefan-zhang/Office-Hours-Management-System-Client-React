const createUser = (user) =>
    fetch(`http://localhost:8080/api/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())

export default {
    createUser,
}