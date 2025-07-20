/* eslint-disable */

import { AncodeNavigationItem } from "@ancode/components/navigation";

export const defaultNavigation: AncodeNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        subtitle: 'Ancode Dashboard',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dashboards.home',
                title: 'Home',
                type : 'basic',
                icon : 'heroicons_outline:home',
                link : '/dashboards/home'
            },
            {
                id   : 'dashboards.analytics',
                title: 'Analytics',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboards/analytics'
            },
            {
                id   : 'dashboards.posts',
                title: 'Posts',
                type : 'basic',
                icon : 'heroicons_outline:pencil',
                link : '/dashboards/posts'
            },
             {
                id   : 'dashboards.file-manager',
                title: 'File Manager',
                type : 'basic',
                icon : 'heroicons_outline:cloud',
                link : '/dashboards/file-manager'
            },
            {
                id   : 'dashboards.mailbox',
                title: 'Mailbox',
                type : 'basic',
                icon : 'heroicons_outline:envelope',
                link : '/dashboards/mailbox',
                badge: {
                    title  : '27',
                    classes: 'px-2 bg-pink-600 text-white rounded-full'
                }
            },
              {
                id   : 'dashboards.notes',
                title: 'Notes',
                type : 'basic',
                icon : 'heroicons_outline:pencil-square',
                link : '/dashboards/notes'
            },
            {
                id   : 'dashboards.tasks',
                title: 'Tasks',
                type : 'basic',
                icon : 'heroicons_outline:check-circle',
                link : '/dashboards/tasks'
            },
            {
                id      : 'dashboards.help-center',
                title   : 'Help Center',
                type    : 'collapsable',
                icon    : 'heroicons_outline:information-circle',
                link    : '/dashboards/help-center',
                children: [
                    {
                        id        : 'dashboards.help-center.home',
                        title     : 'Home',
                        type      : 'basic',
                        link      : '/dashboards/help-center',
                        exactMatch: true
                    },
                    {
                        id   : 'dashboards.help-center.faqs',
                        title: 'FAQs',
                        type : 'basic',
                        link : '/dashboards/help-center/faqs'
                    },
                    {
                        id   : 'dashboards.help-center.guides',
                        title: 'Guides',
                        type : 'basic',
                        link : '/dashboards/help-center/guides'
                    },
                    {
                        id   : 'dashboards.help-center.support',
                        title: 'Support',
                        type : 'basic',
                        link : '/dashboards/help-center/support'
                    }
                ]
            },
            {
                id   : 'dashboards.settings',
                title: 'Settings',
                type : 'basic',
                icon : 'heroicons_outline:cog-8-tooth',
                link : '/dashboards/settings'
            }
        ]
    },
    

];
