import mock from "../utils/mock";

mock.onPost("/api/home/login").reply(200,
    {
        "id": 1,
        "username": "sircaio21",
        "email": "caio21122001@gmail.com"
    })