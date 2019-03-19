import { User } from '../models/user.interface';

const userList: User[] = [
    {
        name:'Chetan',
        company: 'Google',
        location: 'Mumbai',
        bio: 'Programmer',
        email: 'chetan@gmail.com',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
    },
    {
        name: 'Deep',
        company: 'Facebook',
        location: 'Pune',
        bio: 'Tester',
        avatar_url: 'http://i.imgur.com/TzWcihb.jpg',
        email: 'deep@gmail.com'
    }
];

export const USER_LIST = userList;