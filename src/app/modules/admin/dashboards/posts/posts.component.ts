import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'posts',
    templateUrl    : './posts.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
