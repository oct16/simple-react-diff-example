declare module '*.svg' {
    const content: any
    export default content
}
declare module '*.styl' {
    const content: any
    export default content
}

declare namespace JSX {
    interface ElementAttributesProperty {
        // specify the property name to use
        props: any;
    }
}
