// Aqui você pode colocar as funções e lógica do site, como a validação de formulários, filtro de usuários, etc.

const users = [
    {
        id: 1,
        name: "Fulano",
        age: 25,
        location: "São Paulo"
    },
    {
        id: 2,
        name: "Ciclana",
        age: 30,
        location: "Rio de Janeiro"
    },
    {
        id: 3,
        name: "Beltrano",
        age: 28,
        location: "Curitiba"
    }
];

function displayUsers() {
    const usersList = document.querySelector("#users-list");

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        const userItem = document.createElement("li");
        userItem.textContent = `${user.name}, ${user.age}, ${user.location}`;

        usersList.appendChild(userItem);
    }
}

displayUsers();