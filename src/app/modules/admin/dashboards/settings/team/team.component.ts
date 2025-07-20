import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'settings-team',
    templateUrl    : './team.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsTeamComponent implements OnInit
{
    members!: any[];
    roles!: any[];

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Setup the team members
        this.members = [
            {
                id    : 'aaravsharma',
                avatar: 'assets/images/avatars/male-01.jpg',
                name  : 'Aarav Sharma',
                email : 'aaravsharma@mail.org',
                role  : 'admin'
            },
            {
                id    : 'adityakapoor',
                avatar: 'assets/images/avatars/male-03.jpg',
                name  : 'Aditya Kapoor',
                email : 'adityakapoor@mail.me',
                role  : 'admin'
            },
            {
                id    : 'kavitaverma',
                avatar: 'assets/images/avatars/female-02.jpg',
                name  : 'Kavita Verma',
                email : 'kavitaverma@mail.ca',
                role  : 'write'
            },
            {
                id    : 'nehapatel',
                avatar: 'assets/images/avatars/female-03.jpg',
                name  : 'Neha Patel',
                email : 'nehapatel@mail.us',
                role  : 'read'
            },
            {
                id    : 'rahulsingh',
                avatar: 'assets/images/avatars/male-07.jpg',
                name  : 'Rahul Singh',
                email : 'rahulsingh@mail.me',
                role  : 'read'
            },
            {
                id    : 'vikramgupta',
                avatar: 'assets/images/avatars/male-08.jpg',
                name  : 'Vikram Gupta',
                email : 'vikramgupta@mail.biz',
                role  : 'read'
            },
            {
                id    : 'priyasharma',
                avatar: 'assets/images/avatars/female-07.jpg',
                name  : 'Priya Sharma',
                email : 'priyasharma@mail.ca',
                role  : 'read'
            }
        ];

        // Setup the roles
        this.roles = [
            {
                label      : 'Read',
                value      : 'read',
                description: 'Can read and clone this repository. Can also open and comment on issues and pull requests.'
            },
            {
                label      : 'Write',
                value      : 'write',
                description: 'Can read, clone, and push to this repository. Can also manage issues and pull requests.'
            },
            {
                label      : 'Admin',
                value      : 'admin',
                description: 'Can read, clone, and push to this repository. Can also manage issues, pull requests, and repository settings, including adding collaborators.'
            }
        ];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
