    declare module 'split-type' {
    interface SplitTypeOptions {
        absolute?: boolean;
        tagName?: string;
        lineClass?: string;
        wordClass?: string;
        charClass?: string;
        types?: string;
        split?: string;
    }

    export default class SplitType {
        constructor(target: string | HTMLElement | Array<HTMLElement> | NodeList, options?: SplitTypeOptions);
        lines: HTMLElement[] | null;
        words: HTMLElement[] | null;
        chars: HTMLElement[] | null;
        static split(target: string | HTMLElement | Array<HTMLElement> | NodeList, options?: SplitTypeOptions): SplitType;
        revert(): void;
    }
}
