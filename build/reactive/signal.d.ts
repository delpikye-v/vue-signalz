type VueSignal<T> = {
    (): T;
    set(value: T): void;
};
export declare function signal<T>(initial: T): VueSignal<T>;
export {};
