/* eslint-disable */
import * as moment from 'moment';

export const folders = [
    {
        id   : '7c004a19-4506-48ef-93ab-f16381302e3b',
        title: 'Inbox',
        slug : 'inbox',
        icon : 'heroicons_outline:inbox'
    },
    {
        id   : '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        title: 'Sent',
        slug : 'sent',
        icon : 'heroicons_outline:paper-airplane'
    },
    {
        id   : 'fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5',
        title: 'Drafts',
        slug : 'drafts',
        icon : 'heroicons_outline:document'
    },
    {
        id   : '0197c436-2ef3-424d-b546-8b7f49186e15',
        title: 'Spam',
        slug : 'spam',
        icon : 'heroicons_outline:exclamation-triangle'
    },
    {
        id   : '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        title: 'Trash',
        slug : 'trash',
        icon : 'heroicons_outline:trash'
    }
];
export const filters = [
    {
        id   : 'de1b41f6-6839-4f1b-9d2c-07e55f6f8f82',
        title: 'Starred',
        slug : 'starred',
        icon : 'heroicons_outline:star'
    },
    {
        id   : '71bba1ec-a90e-4a71-9932-4bab0a99aa1c',
        title: 'Important',
        slug : 'important',
        icon : 'heroicons_outline:exclamation-circle'
    }
];
export const labels = [
    {
        id   : 'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
        title: 'Personal',
        slug : 'personal',
        color: 'blue'
    },
    {
        id   : '745cf30e-ca84-47a1-a553-b70eb630d8e7',
        title: 'Work',
        slug : 'work',
        color: 'indigo'
    },
    {
        id   : '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
        title: 'Payments',
        slug : 'payments',
        color: 'red'
    },
    {
        id   : 'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
        title: 'Invoices',
        slug : 'invoices',
        color: 'teal'
    },
    {
        id   : '184cd689-4ee4-47cf-9f8a-12233d614326',
        title: 'Accounts',
        slug : 'accounts',
        color: 'purple'
    },
    {
        id   : 'b67fc437-6118-4ec8-a3c7-9320b828e3fc',
        title: 'Forums',
        slug : 'forums',
        color: 'green'
    }
];
export const settings = {
    messageLayout: 'right'
};
export const mails = [
    {
        id         : 'f9c4c091-3ac4-4df9-ac5d-aec7b07c8e3f',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-01.jpg',
            contact: 'Pradipta Acharjee <pradipta.acharjee@company.com>'
        },
        to         : 'me <ankurnayak@ancode.com>',
        cc         : [
            'Sange Yonten <sange.yonten@company.com>'
        ],
        bcc        : [
            'Julie T. <julie.t@company.com>'
        ],
        date       : moment().hour(20).minute(13).toISOString(), // Today - 20:13
        subject    : 'Please review and sign the attached agreement',
        content    : 'Hi Ankur,\n\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, debitis iure. Tenetur doloribus maxime cum molestiae voluptatem modi placeat quidem perspiciatis deleniti aperiam, eaque architecto alias unde rerum facere in natus? Optio cum non enim nisi rerum assumenda necessitatibus error repellendus placeat quae, quos nostrum exercitationem esse deleniti reiciendis ab eligendi. Ut similique voluptate recusandae praesentium tempora molestias, quibusdam dolorem. Aliquid repellat quidem corrupti vel iusto. Atque id cum architecto, odio fugit incidunt saepe earum neque quidem maxime nulla unde dignissimos libero at eveniet. Quae placeat earum consequuntur suscipit incidunt explicabo, dicta, aliquam repellat quis, eum molestiae non a! Quos?',
        attachments: [
            {
                type       : 'image/jpeg',
                name       : 'mystery-forest.jpg',
                size       : 15539,
                preview    : 'mystery-forest_preview.jpg',
                downloadUrl: ''
            },
            {
                type       : 'application/pdf',
                name       : 'montly-invoice.pdf',
                size       : 243449,
                preview    : 'pdf',
                downloadUrl: ''
            },
            {
                type       : 'image/jpeg',
                name       : 'birds-eye-sydney.jpg',
                size       : 14294,
                preview    : 'birds-eye-sydney_preview.jpg',
                downloadUrl: ''
            }
        ],
        starred    : true,
        important  : true,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
            '745cf30e-ca84-47a1-a553-b70eb630d8e7',
            '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3'
        ]
    },
    {
        id         : 'c531bc01-8a9e-481b-adf8-95303a6938c5',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-01.jpg',
            contact: 'Ajay Nayak <Ajay.nayak@company.com>'
        },
        to         : 'me <ankurnayak@ancode.com>',
        date       : moment().hour(18).minute(56).toISOString(), // Today - 18:56
        subject    : 'Delivery address confirmation',
        content    : 'Dear Ankur,\n\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, debitis iure. Tenetur doloribus maxime cum molestiae voluptatem modi placeat quidem perspiciatis deleniti aperiam, eaque architecto alias unde rerum facere in natus? Optio cum non enim nisi rerum assumenda necessitatibus error repellendus placeat quae, quos nostrum exercitationem esse deleniti reiciendis ab eligendi. Ut similique voluptate recusandae praesentium tempora molestias, quibusdam dolorem. Aliquid repellat quidem corrupti vel iusto. Atque id cum architecto, odio fugit incidunt saepe earum neque quidem maxime nulla unde dignissimos libero at eveniet. Quae placeat earum consequuntur suscipit incidunt explicabo, dicta, aliquam repellat quis, eum molestiae non a! Quos?',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : [
            'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e'
        ]
    },
    {
        id         : 'ebc80fc3-6c56-4cae-a45a-771b15ced076',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-02.jpg',
            contact: 'Anjan Sharma <anjan.sharma@company.com>'
        },
        to         : 'me <ankurnayak@ancode.com>',
        cc         : [
            'Sange Yonten <sange.yonten@company.com>'
        ],
        date       : moment().hour(14).minute(35).toISOString(), // Today - 14:35
        subject    : 'Insurance documents',
        content    : 'Hi Ankur,\n\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, debitis iure. Tenetur doloribus maxime cum molestiae voluptatem modi placeat quidem perspiciatis deleniti aperiam, eaque architecto alias unde rerum facere in natus? Optio cum non enim nisi rerum assumenda necessitatibus error repellendus placeat quae, quos nostrum exercitationem esse deleniti reiciendis ab eligendi. Ut similique voluptate recusandae praesentium tempora molestias, quibusdam dolorem. Aliquid repellat quidem corrupti vel iusto. Atque id cum architecto, odio fugit incidunt saepe earum neque quidem maxime nulla unde dignissimos libero at eveniet. Quae placeat earum consequuntur suscipit incidunt explicabo, dicta, aliquam repellat quis, eum molestiae non a! Quos?',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : false,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : []
    },
    {
        id         : '981c5ffb-7c88-47a8-b60f-f16150eeae9d',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/male-03.jpg',
            contact: 'Pema D. <pema.dorjee@company.com>'
        },
        to         : 'me <ankurnayak@ancode.com>',
        date       : moment().hour(22).minute(26).subtract(1, 'day').toISOString(), // Yesterday - 08:22
        subject    : 'Previous clients and their invoices',
        content    : 'Dear Ankur,\n\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, debitis iure. Tenetur doloribus maxime cum molestiae voluptatem modi placeat quidem perspiciatis deleniti aperiam, eaque architecto alias unde rerum facere in natus? Optio cum non enim nisi rerum assumenda necessitatibus error repellendus placeat quae, quos nostrum exercitationem esse deleniti reiciendis ab eligendi. Ut similique voluptate recusandae praesentium tempora molestias, quibusdam dolorem. Aliquid repellat quidem corrupti vel iusto. Atque id cum architecto, odio fugit incidunt saepe earum neque quidem maxime nulla unde dignissimos libero at eveniet. Quae placeat earum consequuntur suscipit incidunt explicabo, dicta, aliquam repellat quis, eum molestiae non a! Quos?',
        attachments: [],
        starred    : false,
        important  : false,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : []
    },
    {
        id         : 'a8d0645d-ac30-4f1a-a163-06e949120289',
        type       : 'mail',
        from       : {
            avatar : 'assets/images/avatars/female-02.jpg',
            contact: 'Priya Pradhan <priya.pradhan@company.com>'
        },
        to         : 'me <ankurnayak@ancode.com>',
        cc         : [
            'Sange Yonten <sange.yonten@company.com>'
        ],
        date       : moment().hour(20).minute(5).subtract(1, 'day').toISOString(), // Yesterday - 22:05
        subject    : 'Quote for a new web design project',
        content    : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, debitis iure. Tenetur doloribus maxime cum molestiae voluptatem modi placeat quidem perspiciatis deleniti aperiam, eaque architecto alias unde rerum facere in natus? Optio cum non enim nisi rerum assumenda necessitatibus error repellendus placeat quae, quos nostrum exercitationem esse deleniti reiciendis ab eligendi. Ut similique voluptate recusandae praesentium tempora molestias, quibusdam dolorem. Aliquid repellat quidem corrupti vel iusto. Atque id cum architecto, odio fugit incidunt saepe earum neque quidem maxime nulla unde dignissimos libero at eveniet. Quae placeat earum consequuntur suscipit incidunt explicabo, dicta, aliquam repellat quis, eum molestiae non a! Quos?',
        attachments: [],
        starred    : false,
        important  : true,
        unread     : true,
        folder     : '7c004a19-4506-48ef-93ab-f16381302e3b',
        labels     : []
    }
];
