let users = [
    {name: "Federico", street: "Laprida 4215", city: "Quilmes", state: "Buenos Aires", country: "Argentina", telephone: "123456", birthday: "01/01/2000" },
    {name: "Gabriel", street: "Francia 6753", city: "Rosario", state: "Santa Fe", country: "Argentina", telephone: "123456", birthday: "01/01/2000" },
    {name: "Cristian", street: "Pellegrini 2162", city: "Resistencia", state: "Chaco", country: "Argentina", telephone: "123456", birthday: "01/01/2000" },
    {name: "Ezequiel", street: "Mendoza 1268", city: "Oran", state: "Salta", country: "Argentina", telephone: "123456", birthday: "01/01/2000" },
    {name: "Santiago", street: "Roca 1474", city: "Vera", state: "Santa Fe", country: "Argentina", telephone: "123456", birthday: "01/01/2000" },
];

users.forEach((user) => {
    let container = document.getElementById("list");
    let userRender = document.createElement("h1");
    userRender.textContent = user.name
    container.appendChild(userRender);
});

let userList = document.getElementById("list");
let usersRender = Array.from(userList.children);

usersRender.forEach((userData) => {
    userData.addEventListener("click", () => {
        let name = userData.textContent;
        let index = searchUser(name);
        
        renderData(users[index]);
    });

    userData.addEventListener("mouseover", () => {
        let name = userData.textContent;
        let index = searchUser(name);
        
        renderData(users[index]);
    })
});


function searchUser(name) {
    let index;
    users.forEach((user, i) => {
        if(name == user.name) {
            return index = i
        };
    });
    return index;
};

function renderData(user) {
    document.getElementById("name").textContent = `Name: ${user.name}`;
    document.getElementById("street").textContent = `Street: ${user.street}`;
    document.getElementById("city").textContent = `City: ${user.city}`;
    document.getElementById("state").textContent = `State: ${user.state}`;
    document.getElementById("country").textContent = `Country: ${user.country}`;
    document.getElementById("telephone").textContent = `Telephone: ${user.telephone}`;
    document.getElementById("birthday").textContent = `Birthday: ${user.birthday}`;
};