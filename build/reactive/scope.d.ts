export declare function createScope(): {
    run: <T>(fn: () => T) => T;
    effect: (fn: () => void) => () => void;
    dispose: () => void;
};
