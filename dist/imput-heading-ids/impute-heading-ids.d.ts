declare module 'mdast' {
    interface HeadingData {
        id: string;
    }
}
export declare const imputeHeadingIds: ({ prefix }?: {
    prefix?: string;
} | undefined) => {
    transforms: ((root: import("mdast").Root) => void)[];
};
