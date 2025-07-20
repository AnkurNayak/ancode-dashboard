declare module '*.scss'
{
    const content: { [className: string]: string };
    export = content;
}

declare module 'quill-blot-formatter/dist/BlotFormatter';