/* eslint-disable */
import moment from 'moment';

export const labels = [
    {
        id   : 'f47c92e5-20b9-44d9-917f-9ff4ad25dfd0',
        title: 'Family'
    },
    {
        id   : 'e2f749f5-41ed-49d0-a92a-1c83d879e371',
        title: 'Work'
    },
    {
        id   : 'b1cde9ee-e54d-4142-ad8b-cf55dafc9528',
        title: 'Tasks'
    },
    {
        id   : '6c288794-47eb-4605-8bdf-785b61a449d3',
        title: 'Priority'
    },
    {
        id   : 'bbc73458-940b-421c-8d5f-8dcd23a9b0d6',
        title: 'Personal'
    },
    {
        id   : '2dc11344-3507-48e0-83d6-1c047107f052',
        title: 'Friends'
    }
];

export const notes = [
    {
        id       : '8f011ac5-b71c-4cd7-a317-857dcd7d85e0',
        title    : '',
        content  : 'Find a new company name',
        tasks    : null,
        image    : null,
        reminder : null,
        labels   : ['e2f749f5-41ed-49d0-a92a-1c83d879e371'],
        archived : false,
        createdAt: moment().hour(10).minute(19).subtract(98, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : 'ced0a1ce-051d-41a3-b080-e2161e4ae621',
        title    : '',
        content  : 'Send the photos of last summer to John',
        tasks    : null,
        image    : 'assets/images/cards/14-640x480.jpg',
        reminder : null,
        labels   : [
            'bbc73458-940b-421c-8d5f-8dcd23a9b0d6',
            'b1cde9ee-e54d-4142-ad8b-cf55dafc9528'
        ],
        archived : false,
        createdAt: moment().hour(15).minute(37).subtract(80, 'day').toISOString(),
        updatedAt: null
    },
    {
        id       : 'd3ac02a9-86e4-4187-bbd7-2c965518b3a3',
        title    : '',
        content  : 'Update the design of the theme',
        tasks    : null,
        image    : null,
        reminder : null,
        labels   : ['6c288794-47eb-4605-8bdf-785b61a449d3'],
        archived : false,
        createdAt: moment().hour(19).minute(27).subtract(74, 'day').toISOString(),
        updatedAt: moment().hour(15).minute(36).subtract(50, 'day').toISOString()
    },
    {
        id       : '89861bd4-0144-4bb4-8b39-332ca10371d5',
        title    : '',
        content  : 'Theming support for all apps',
        tasks    : null,
        image    : null,
        reminder : moment().hour(12).minute(34).add(50, 'day').toISOString(),
        labels   : ['e2f749f5-41ed-49d0-a92a-1c83d879e371'],
        archived : false,
        createdAt: moment().hour(12).minute(34).subtract(59, 'day').toISOString(),
        updatedAt: null
    }
];
