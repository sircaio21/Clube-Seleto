import mock from "../utils/mock";

mock.onPost("/api/home/me").reply(200, {
    user: {
        "id": 1,
        "name": "Caio Santos",
        "username": "sircaio21",
        "email": "caio21122001@gmail.com",
        "avatar": "/images/avatars/avatar0_eu.jpeg"
    }
});

mock.onPost("/api/home/login").reply((config) => {
    const { email, password } = JSON.parse(config.data);
    if (email !== "caio21122001@gmail.com" || password !== "admin") {
        return [400, { message: "Seu email ou senha estão incorretos" }]
    }
    const user = {
        id: 1,
        name: "Caio Santos",
        username: "sircaio21",
        email: "caio21122001@gmail.com",
        avatar: "/images/avatars/avatar0_eu.jpeg"
    }
    return [200, { user }]
})