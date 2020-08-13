import mock from '../utils/mock';

mock.onGet('/api/connections/followers/robertafly').reply(200, {
    followers: [
        {
            id: 1,
            user: {
                id: 1,
                name: 'Fernanda Souza',
                username: 'fersouza10',
                avatar: '/images/avatars/avatar1_ruiva.jpg',
            },
            following: false,
        },
        {
            id: 2,
            user: {
                id: 2,
                name: 'Joana',
                username: 'jojo',
                avatar: '/images/avatars/avatar4_loira.jpg',
            },
            following: true,
        },
        {
            id: 3,
            user: {
                id: 3,
                name: 'Perola',
                username: 'prola',
                avatar: '/images/avatars/avatar3_japa.jpg',
            },
            following: true,
        },
    ],
});

mock.onGet('/api/connections/following/robertafly').reply(200, {
    following: [
        {
            id: 1,
            user: {
                id: 1,
                name: 'Joana',
                username: 'jojo',
                avatar: '/images/avatars/avatar4_loira.jpg',
            },
        },
        {
            id: 2,
            user: {
                id: 2,
                name: 'Perola',
                username: 'prola',
                avatar: '/images/avatars/avatar3_japa.jpg',
            },
        },
    ],
});