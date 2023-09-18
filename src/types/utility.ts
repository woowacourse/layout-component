export type SCProps<T> = { [K in keyof T as `$${string & K}`]: T[K] };

export type Combine<T, K> = T & Omit<K, keyof T>;
