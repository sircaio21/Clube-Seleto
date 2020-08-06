import mock from "../utils/mock";
import moment from "moment"


mock.onGet("/api/notifications").reply(200, {
    notifications: [
        {
            id: "a",
            title: "Novas avaliações recebidas",
            description: "Você recebeu 1 nova avaliação",
            type: "reviews",
            createAt: moment()
                .subtract(2, "hours")
                .toDate()
                .getTime()
        },
        {
            id: "b",
            title: "Novo depósito de diamantes",
            description: "Você recebeu 25 diamantes",
            type: "diamonds",
            createAt: moment()
                .subtract(1, "hours")
                .toDate()
                .getTime()
        },
        {
            id: "c",
            title: "Nova mensagens recebidas",
            description: "Você recebeu 1 mensagem",
            type: "messages",
            createAt: moment()
                .subtract(3, "hours")
                .toDate()
                .getTime()
        },
        {
            id: "c",
            title: "Novos likes recebidos",
            description: "Você recebeu 1 like",
            type: "likes",
            createAt: moment()
                .subtract(3, "hours")
                .toDate()
                .getTime()
        },

    ]
});