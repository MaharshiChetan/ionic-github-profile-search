import { USER_LIST } from './user.mocks';
import { Repository } from './../models/repository.interface';

const repositoryList: Repository[] = [
    {
        name: 'Ionic 3 Camera',
        description: 'This repository shows the usage of Camera functionality with Ionic 3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 SMS',
        description: 'This repository shows the usage of SMS functionality with Ionic 3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 Geolocation',
        description: 'This repository shows the usage of Geolocation functionality with Ionic 3',
        owner: USER_LIST[1]
    },
    {
        name: 'Ionic 3 Vibration',
        description: 'This repository shows the usage of Vibration functionality with Ionic 3',
        owner: USER_LIST[1]
    }
];

export const REPOSITORY_LIST = repositoryList;