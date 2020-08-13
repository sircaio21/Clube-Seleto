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


mock.onGet('/api/home/user/sircaio21').reply(200, {
    id: 1,
    name: 'Caio Luiz Dos Santos',
    username: 'sircaio21',
    email: 'caio21122001@gmail.com',
    accessToken: '01010101010101',
    avatar: '/images/avatars/avatar0_eu.jpeg',
    joinedIn: '21 de janeiro, 2019',
    work: 'Desenvolvedor Web',
    totalPost: '404',
});
mock.onGet('/api/home/user/robertafly').reply(200, {
    id: 1,
    name: 'Roberta Fly',
    username: 'robertafly',
    email: 'robertafly@gmail.com',
    accessToken: '01010101010101',
    avatar: '/images/avatars/avatar2_loira.jpg',
    joinedIn: '21 de janeiro, 2019',
    work: 'Jornalista',
    totalPost: '234',
});