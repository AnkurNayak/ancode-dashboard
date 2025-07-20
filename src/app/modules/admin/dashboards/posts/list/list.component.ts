import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PostsService } from 'app/modules/admin/dashboards/posts/posts.service';
import { Category, Post } from 'app/modules/admin/dashboards/posts/posts.types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
    selector       : 'post-list',
    templateUrl    : './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostListComponent implements OnInit, OnDestroy{
    categories!: Category[];
    posts!: Post[];
    filteredPosts!: Post[];
    filters: {
        categorySlug$: BehaviorSubject<string>;
        query$: BehaviorSubject<string>;
    } = {
        categorySlug$ : new BehaviorSubject('all'),
        query$        : new BehaviorSubject(''),
    };
    createPost: boolean = false;
    selectedPost: Post | null = null;
    postForm!: FormGroup;
    selectedCategory: any = 'web';

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Quill Module
     */
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
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _postsService: PostsService,
        private _formBuilder: FormBuilder,
        private datePipe: DatePipe
    ){}

      // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

    ngOnInit(): void {
         //create the post form
         this.postForm = this._formBuilder.group({
            id               : [''],
            title            : ['',[Validators.required]],
            slug             : [''],
            description      : [''],
            thumbnail        : [''],
            images           : [[]],
            category         : [''],
            updatedAt        : [''],
            featured         : [true],
            author           : ['', [Validators.required]]

        })
         // Get the categories
         this._postsService.categories$
         .pipe(takeUntil(this._unsubscribeAll))
         .subscribe((categories: Category[]) => {
             this.categories = categories;

             // Mark for check
             this._changeDetectorRef.markForCheck();
         });

     // Get the posts
     this._postsService.posts$
         .pipe(takeUntil(this._unsubscribeAll))
         .subscribe((posts: Post[]) => {
             this.posts = this.filteredPosts = posts;

             // Mark for check
             this._changeDetectorRef.markForCheck();
         });

        //  console.log(this.posts);
        //  console.log(this.categories)
        // Filter the courses
        combineLatest([this.filters.categorySlug$, this.filters.query$])
            .subscribe(([categorySlug, query]) => {

                // Reset the filtered courses
                this.filteredPosts = this.posts;

                // this.filteredPosts.forEach(e=> console.log(e.category))

                // Filter by category
                if ( categorySlug !== 'all' )
                {
                    this.filteredPosts = this.filteredPosts.filter(post => post.category === categorySlug);
                }

                // Filter by search query
                if ( query !== '' )
                {
                    this.filteredPosts = this.filteredPosts.filter(post => post.title?.toLowerCase().includes(query.toLowerCase())
                        || post.description?.toLowerCase().includes(query.toLowerCase())
                        || post.category?.toLowerCase().includes(query.toLowerCase()));
                }
            });

            // Get the New Post 
            
        
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
     // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Filter by search query
     *
     * @param query
     */
    filterByQuery(query: string): void
    {
        this.filters.query$.next(query);
    }

    /**
     * Filter by category
     *
     * @param change
     */
    filterByCategory(change: MatSelectChange): void
    {
        this.filters.categorySlug$.next(change.value);
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

    /**
     * new post button activity
     */
    togglePostMode(){
        this.createPost = !this.createPost;
    }
    /**
     * select category from mat-menu
     */
    
    selectCategory(title: string) {
        this.selectedCategory = title;
    }
    /**
     * Publish post
     */
    publishPost(){
        // Get the form values
        const formData = this.postForm.value;

       if(this.postForm.invalid){
           return
       }
        // Create the post
        this._postsService.createPost().subscribe((newPost) => {
            
            newPost.title = formData.title;
            newPost.description = formData.description;
            newPost.category = this.selectedCategory;
            newPost.author = formData.author;
            newPost.updatedAt = this.datePipe.transform(new Date(), 'EEEE, MMMM d, yyyy \'at\' h:mm:ss a')!;


        // Fill the form
            this.postForm.patchValue(formData);
            // console.log(newPost);
        
        // Mark for check and return to post list
            this._changeDetectorRef.markForCheck();
            this.createPost = false;
        });
        
    }


}