
import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/post/meu-novo-álbum1').reply(200, {
    id: 1,
    title:
        'Meu novo álbum!!',
    slug: 'meu-novo-álbum1',
    date: moment().subtract(1, 'day').toDate().getTime(),
    autor: {
        id: 1,
        name: 'Roberta Fly',
        avatar: '/images/avatars/avatar2_loira.jpg',
    },
    image: '/images/posts/post2_loira.jpg',
    likes: 10,
    comments: 30,
});

mock.onGet('/api/feed').reply(200, {
    posts: [
        {
            id: 1,
            title:
                'Meu novo álbum! 1',
            slug: 'meu-novo-álbum1',
            date: moment().subtract(1, 'day').toDate().getTime(),
            autor: {
                id: 1,
                name: 'Roberta Fly',
                avatar: '/images/avatars/avatar2_loira.jpg',
            },
            image: '/images/posts/post2_loira.jpg',
            likes: 10,
            comments: 30,
        },
        {
            id: 2,
            title: 'Meu novo álbum! 2',
            slug: 'meu-novo-álbum2',
            date: moment().subtract(1, 'day').toDate().getTime(),
            autor: {
                id: 1,
                name: 'Roberta Fly',
                avatar: '/images/avatars/avatar2_loira.jpg',
            },
            image: "/images/posts/post4_loira.jpg",
            likes: 10,
            comments: 30,
        },
        {
            id: 3,
            title: 'Meu novo álbum! 3',
            slug: 'meu-novo-álbum2',
            date: moment().subtract(1, 'day').toDate().getTime(),
            autor: {
                id: 1,
                name: 'Roberta Fly',
                avatar: '/images/avatars/avatar2_loira.jpg',
            },
            image: "/images/posts/dale.png",
            likes: 10,
            comments: 30,
        },
    ],
});

mock.onGet('/api/posts/user/robertafly').reply(200, {
    posts: [
        {
            id: 1,
            title:
                'Meu novo álbum! 1',
            slug: 'meu-novo-álbum1',
            date: moment().subtract(1, 'day').toDate().getTime(),
            autor: {
                id: 1,
                name: 'Roberta Fly',
                avatar: '/images/avatars/avatar2_loira.jpg',
            },
            image: '/images/posts/post2_loira.jpg',
            likes: 10,
            comments: 30,
        },
        {
            id: 2,
            title: 'Meu novo álbum! 2',
            slug: 'meu-novo-álbum2',
            date: moment().subtract(1, 'day').toDate().getTime(),
            autor: {
                id: 1,
                name: 'Roberta Fly',
                avatar: '/images/avatars/avatar2_loira.jpg',
            },
            image: '/images/posts/post4_loira.jpg',
            likes: 10,
            comments: 30,
        },
    ],
})
mock.onGet('/api/posts/user/sircaio21').reply(200, {
    posts: [
        {
            id: 1,
            title:
                'Meu novo álbum! 1',
            slug: 'meu-novo-álbum1',
            date: moment().subtract(1, 'day').toDate().getTime(),
            autor: {
                id: 1,
                name: 'Roberta Fly',
                avatar: '/images/avatars/avatar2_loira.jpg',
            },
            image: '/images/posts/post2_loira.jpg',
            likes: 10,
            comments: 30,
        },
        {
            id: 2,
            title: 'Meu novo álbum! 2',
            slug: 'meu-novo-álbum2',
            date: moment().subtract(1, 'day').toDate().getTime(),
            autor: {
                id: 1,
                name: 'Roberta Fly',
                avatar: '/images/avatars/avatar2_loira.jpg',
            },
            image: '/images/posts/post4_loira.jpg',
            likes: 10,
            comments: 30,
        },
    ],
})

