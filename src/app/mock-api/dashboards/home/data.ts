/* eslint-disable */
import * as moment from 'moment';

export const home = {
    githubIssues      : {
        overview: {
            'this-week': {
                'new-issues'   : 50,
                'closed-issues': 25,
                'fixed'        : 5,
                'wont-fix'     : 4,
                're-opened'    : 8,
                'needs-triage' : 6
            },
            'last-week': {
                'new-issues'   : 47,
                'closed-issues': 29,
                'fixed'        : 6,
                'wont-fix'     : 11,
                're-opened'    : 6,
                'needs-triage' : 5
            }
        },
        labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series  : {
            'this-week': [
                {
                    name: 'New issues',
                    type: 'line',
                    data: [42, 28, 43, 34, 20, 25, 22]
                },
                {
                    name: 'Closed issues',
                    type: 'column',
                    data: [11, 10, 8, 11, 8, 10, 17]
                }
            ],
            'last-week': [
                {
                    name: 'New issues',
                    type: 'line',
                    data: [37, 32, 39, 27, 18, 24, 20]
                },
                {
                    name: 'Closed issues',
                    type: 'column',
                    data: [9, 8, 10, 12, 7, 11, 15]
                }
            ]
        }
    },
    taskDistribution  : {
        overview: {
            'this-week': {
                'new'      : 594,
                'completed': 287
            },
            'last-week': {
                'new'      : 526,
                'completed': 260
            }
        },
        labels  : ['API', 'Backend', 'Frontend', 'Issues'],
        series  : {
            'this-week': [15, 20, 38, 27],
            'last-week': [19, 16, 42, 23]
        }
    },
    schedule          : {
        today   : [
            {
                title   : 'Group Meeting',
                time    : 'in 32 minutes',
                location: 'Conference room 1B'
            },
            {
                title: 'Coffee Break',
                time : '10:30 AM'
            },
            {
                title: 'Public Beta Release',
                time : '11:00 AM'
            },
            {
                title: 'Lunch',
                time : '12:10 PM'
            },
            {
                title   : 'Dinner',
                time    : '09:30 PM',
                location: 'Nalbari'
            },
        ],
        tomorrow: [
            {
                title   : 'Marketing Meeting',
                time    : '09:00 AM',
                location: 'Conference room 1A'
            },
            {
                title: 'Public Announcement',
                time : '11:00 AM'
            },
            {
                title: 'Lunch',
                time : '12:10 PM'
            },
            {
                title   : 'Meeting with Beta Testers',
                time    : '03:00 PM',
                location: 'Conference room 2C'
            },
            {
                title: 'Live Stream',
                time : '05:30 PM'
            },
            {
                title   : 'Release Party',
                time    : '07:30 PM',
                location: 'CEO\'s house'
            },
            {
                title   : 'CEO\'s Private Party',
                time    : '09:30 PM',
                location: 'CEO\'s Penthouse'
            }
        ]
    },
    budgetDistribution: {
        categories: ['Concept', 'Design', 'Development', 'Extras', 'Marketing'],
        series    : [
            {
                name: 'Budget',
                data: [12, 20, 28, 15, 25]
            }
        ]
    },
    weeklyExpenses    : {
        amount: 17663,
        labels: [
            moment().subtract(47, 'days').format('DD MMM') + ' - ' + moment().subtract(40, 'days').format('DD MMM'),
            moment().subtract(39, 'days').format('DD MMM') + ' - ' + moment().subtract(32, 'days').format('DD MMM'),
            moment().subtract(31, 'days').format('DD MMM') + ' - ' + moment().subtract(24, 'days').format('DD MMM'),
            moment().subtract(23, 'days').format('DD MMM') + ' - ' + moment().subtract(16, 'days').format('DD MMM'),
            moment().subtract(15, 'days').format('DD MMM') + ' - ' + moment().subtract(8, 'days').format('DD MMM'),
            moment().subtract(7, 'days').format('DD MMM') + ' - ' + moment().format('DD MMM')
        ],
        series: [
            {
                name: 'Expenses',
                data: [4412, 4345, 4541, 4677, 4322, 4123]
            }
        ]
    },
    monthlyExpenses   : {
        amount: 54663,
        labels: [
            moment().subtract(31, 'days').format('DD MMM') + ' - ' + moment().subtract(24, 'days').format('DD MMM'),
            moment().subtract(23, 'days').format('DD MMM') + ' - ' + moment().subtract(16, 'days').format('DD MMM'),
            moment().subtract(15, 'days').format('DD MMM') + ' - ' + moment().subtract(8, 'days').format('DD MMM'),
            moment().subtract(7, 'days').format('DD MMM') + ' - ' + moment().format('DD MMM')
        ],
        series: [
            {
                name: 'Expenses',
                data: [15521, 15519, 15522, 15521]
            }
        ]
    },
    yearlyExpenses    : {
        amount: 648813,
        labels: [
            moment().subtract(79, 'days').format('DD MMM') + ' - ' + moment().subtract(72, 'days').format('DD MMM'),
            moment().subtract(71, 'days').format('DD MMM') + ' - ' + moment().subtract(64, 'days').format('DD MMM'),
            moment().subtract(63, 'days').format('DD MMM') + ' - ' + moment().subtract(56, 'days').format('DD MMM'),
            moment().subtract(55, 'days').format('DD MMM') + ' - ' + moment().subtract(48, 'days').format('DD MMM'),
            moment().subtract(47, 'days').format('DD MMM') + ' - ' + moment().subtract(40, 'days').format('DD MMM'),
            moment().subtract(39, 'days').format('DD MMM') + ' - ' + moment().subtract(32, 'days').format('DD MMM'),
            moment().subtract(31, 'days').format('DD MMM') + ' - ' + moment().subtract(24, 'days').format('DD MMM'),
            moment().subtract(23, 'days').format('DD MMM') + ' - ' + moment().subtract(16, 'days').format('DD MMM'),
            moment().subtract(15, 'days').format('DD MMM') + ' - ' + moment().subtract(8, 'days').format('DD MMM'),
            moment().subtract(7, 'days').format('DD MMM') + ' - ' + moment().format('DD MMM')
        ],
        series: [
            {
                name: 'Expenses',
                data: [45891, 45801, 45834, 45843, 45800, 45900, 45814, 45856, 45910, 45849]
            }
        ]
    },
    teamMembers       : [
        {
            id    : '2bfa2be5-7688-48d5-b5ac-dc0d9ac97f14',
            avatar: 'assets/images/avatars/female-10.jpg',
            name  : 'Nadia Mcknight',
            email : 'nadiamcknight@mail.com',
            phone : '+911234567890',
            title : 'Project Director'
        },
        {
            id    : '77a4383b-b5a5-4943-bc46-04c3431d1566',
            avatar: 'assets/images/avatars/male-19.jpg',
            name  : 'Arjun Kapoor',
            email : 'arjunkapoor@mail.in',
            phone : '+911234567890',
            title : 'Senior Developer'
        },
        {
            id    : '8bb0f597-673a-47ca-8c77-2f83219cb9af',
            avatar: 'assets/images/avatars/male-14.jpg',
            name  : 'Rahul Sharma',
            email : 'rahulsharma@mail.in',
            phone : '+911234567890',
            title : 'Senior Developer'
        },
        {
            id    : 'c318e31f-1d74-49c5-8dae-2bc5805e2fdb',
            avatar: 'assets/images/avatars/male-01.jpg',
            name  : 'Kiran Patel',
            email : 'kiranpatel@mail.in',
            phone : '+911234567890',
            title : 'Junior Developer'
        },
        {
            id    : '0a8bc517-631a-4a93-aacc-000fa2e8294c',
            avatar: 'assets/images/avatars/female-20.jpg',
            name  : 'Deepika Sharma',
            email : 'deepikasharma@mail.in',
            phone : '+911234567890',
            title : 'Lead Designer'
        },
        {
            id    : 'a4c9945a-757b-40b0-8942-d20e0543cabd',
            avatar: 'assets/images/avatars/female-01.jpg',
            name  : 'Priya Verma',
            email : 'priyaverma@mail.in',
            phone : '+911234567890',
            title : 'Designer'
        },
        {
            id    : 'b8258ccf-48b5-46a2-9c95-e0bd7580c645',
            avatar: 'assets/images/avatars/female-02.jpg',
            name  : 'Sneha Joshi',
            email : 'snehajoshi@mail.in',
            phone : '+911234567890',
            title : 'Designer'
        },
        {
            id    : 'f004ea79-98fc-436c-9ba5-6cfe32fe583d',
            avatar: 'assets/images/avatars/male-02.jpg',
            name  : 'Vivek Rajan',
            email : 'vivekrajan@mail.in',
            phone : '+911234567890',
            title : 'Marketing Manager'
        },
        {
            id    : '8b69fe2d-d7cc-4a3d-983d-559173e37d37',
            avatar: 'assets/images/avatars/female-03.jpg',
            name  : 'Mira Gupta',
            email : 'miragupta@mail.in',
            phone : '+911234567890',
            title : 'Consultant'
        }
    ]
};
