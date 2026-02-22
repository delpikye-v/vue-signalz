export declare function watch<T>(getter: () => T, callback: (value: T, old: T) => void, options?: {
    immediate?: boolean;
}): () => void;
