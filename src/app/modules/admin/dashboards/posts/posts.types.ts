export interface Category{
    id? : string;
    title?: string;
    slug?: string;
}

export interface Post{
    id?: string;
    title?: string;
    slug?: string;
    description? : string;
    thumbnail? : string;
    images ? : string[]
    category? : string;
    updatedAt? : string;
    featured?: boolean;
    author? : string;
}