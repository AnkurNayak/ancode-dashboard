import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatTabGroup } from '@angular/material/tabs';
import { Subject, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Category, Post } from 'app/modules/admin/dashboards/posts/posts.types';
import { PostsService } from 'app/modules/admin/dashboards/posts/posts.service';
import { AncodeMediaWatcherService } from '@ancode/services/media-watcher';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Quill from "quill";
import BlotFormatter from "quill-blot-formatter";
import { AncodeConfirmationService } from '@ancode/services/confirmation';
import { ActivatedRoute, Router } from '@angular/router';

Quill.register("modules/blotFormatter", BlotFormatter);

@Component({
    selector       : 'academy-details',
    templateUrl    : './details.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostDetailComponent implements OnInit, OnDestroy{

    @ViewChild('postActions', {static: true}) postActions!: MatTabGroup;
    categories!: Category[];
    post!: Post;
    posts! : Post[];
    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    progressValue = 0;
    currentTab: number = 0;
    postForm!: FormGroup;
    flashMessage: 'success' | 'error' | null = null;
    selectedCategory: any;
    

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    quillModules: any = {
        blotFormatter: {},
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
          
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
          
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [ 'link', 'image', 'video', 'formula' ],          // add's image support
          
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
          
            ['clean']                                  
        ]
    };

     /**
     * Constructor
     */
     constructor(
        @Inject(DOCUMENT) private _document: Document,
        private _postsService: PostsService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _elementRef: ElementRef,
        private _ancodeMediaWatcherService: AncodeMediaWatcherService,
        private _formBuilder:FormBuilder,
        private _ancodeConfirmationService: AncodeConfirmationService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute){}

        //set the progress bar value on scroll
        @HostListener('document:scroll', ['$event'])
        onScroll(event: Event) {
          const scrollContainer = document.querySelector('.flex-auto.overflow-y-auto');
          if (scrollContainer) {
            const scrollPosition = scrollContainer.scrollTop || 0;
            const scrollHeight = scrollContainer.scrollHeight || scrollContainer.clientHeight || 1;
            const windowHeight = scrollContainer.clientHeight || 1;
            const scrollPercentage = (scrollPosition / (scrollHeight - windowHeight)) * 100;
            this.progressValue = scrollPercentage;
          }
        }
    
     // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    ngOnInit(): void {

        //create the post form
        this.postForm = this._formBuilder.group({
            id               : [''],
            title            : ['', [Validators.required]],
            slug             : [''],
            description      : [''],
            thumbnail        : [''],
            images           : [[]],
            category         : [''],
            updatedAt        : [''],
            featured         : [false],
            author           : ['', [Validators.required]]

        })
       
        this._postsService.categories$
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe((categories: Category[]) =>{
            //get the categories
            this.categories = categories;
            this.selectedCategory = categories;
            //mark for check
            this._changeDetectorRef.markForCheck()
        });

        //get the posts 
         this._postsService.posts$
         .pipe(takeUntil(this._unsubscribeAll))
         .subscribe((posts: Post[]) => {
             this.posts = posts;

             // Mark for check
             this._changeDetectorRef.markForCheck();
         });
       
        //get the post
        this._postsService.post$
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe((post: Post)=>{
            //get the post
            this.post = post;
            
            //Set Category in edit form
            this.selectedCategory = this.post.category;

            //mark for change 
            this._changeDetectorRef.markForCheck();
        })
        // console.log(this.post)
        //subscribe to media changes 
        this._ancodeMediaWatcherService.onMediaChange$
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(({matchingAliases})=>{
            //set drawerMode and drawerOpened
            if(matchingAliases.includes('lg')){
                this.drawerMode = 'side';
                this.drawerOpened = true
            }
            else
                {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
        });

        
    }
    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next;
        this._unsubscribeAll.complete();
    }
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
      
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

        /**
     * Show flash message
     */
        showFlashMessage(type: 'success' | 'error'): void
        {
            // Show the message
            this.flashMessage = type;
    
            // Mark for check
            this._changeDetectorRef.markForCheck();
    
            // Hide it after 3 seconds
            setTimeout(() => {
    
                this.flashMessage = null;
    
                // Mark for check
                this._changeDetectorRef.markForCheck();
            }, 3000);
        }

    /**
     * Go to given tab
     *
     * @param tab
     */
    goToTab(tab: number): void
    {
        // Set the current tab
        this.currentTab = tab;

        // Go to the step
        this.postActions.selectedIndex = this.currentTab;

        // Mark for check
        this._changeDetectorRef.markForCheck();

        if(tab === 1){
            // Get the post by id
            this.postForm.patchValue(this.post);
                    
        }
        else{
            return
        }
    }

    /**
     * Update the post
     */
    updatePost(): void
    {
        if(this.postForm.invalid)
        {
            return
        }
            // Get the post object
        const post = this.postForm.getRawValue();
        // Set Category
        post.category = this.selectedCategory;

        // Update the post on the server

        this._postsService.updatePost(post.id, post).subscribe(() => {

            // Toggle the edit mode off
            // this.toggleEditMode(false);
            // Show a success message
            this.showFlashMessage('success');
        });    
        
    }
    /**
     * Delete the post
     */
    deletePost(): void
    {
        // Open the confirmation dialog
        const confirmation = this._ancodeConfirmationService.open({
            title  : 'Delete post',
            message: 'Are you sure you want to delete this post? This action cannot be undone!',
            actions: {
                confirm: {
                    label: 'Delete'
                }
            }
        });

        // Subscribe to the confirmation dialog closed action
        confirmation.afterClosed().subscribe((result) => {

            // If the confirm button pressed...
            if ( result === 'confirmed' )
            {

                // Get the current post's id
                const id = this.post.id;

                // Get the next/previous post's id
                const currentPostIndex = this.posts.findIndex(item => item.id === id);
                const nextPostIndex = currentPostIndex + ((currentPostIndex === (this.posts.length - 1)) ? -1 : 1);
                const nextPostId = (this.posts.length === 1 && this.posts[0].id === id) ? null : this.posts[nextPostIndex].id;

                // Delete the post
                if(id){
                    this._postsService.deletePost(id)
                    .subscribe((isDeleted) => {

                        // Return if the post wasn't deleted...
                        if ( !isDeleted )
                        {
                            return;
                        }

                        //Navigate to the post list 
                        this._router.navigate(['../'], {relativeTo: this._activatedRoute});

                        // Or We can Navigate to the next post if available
                        // if ( nextPostId )
                        // {
                        //     this._router.navigate(['../', nextPostId], {relativeTo: this._activatedRoute});
                        // }
                        // // Otherwise, navigate to the parent
                        // else
                        // {
                        //     this._router.navigate(['../'], {relativeTo: this._activatedRoute});
                        // }
                    });
                }
                else{
                    throwError('Invalid Post ID')
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
            }
        });
    }
    //cancel button return to Post View
    cancel() {
        this.postActions.selectedIndex = 0;
      }

    /**
     * select category from mat-menu
     */
    
    selectCategory(title: string) {
        this.selectedCategory = title;
    }

}
