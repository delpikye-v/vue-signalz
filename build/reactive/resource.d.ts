export declare function resource<T>(loader: (signal: AbortSignal) => Promise<T>): {
    state: {
        (): T | undefined;
        set(value: T | undefined): void;
    };
    loading: {
        (): boolean;
        set(value: boolean): void;
    };
    error: {
        (): any;
        set(value: any): void;
    };
};
