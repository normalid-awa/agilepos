/** Indicate soft referencing */
export type Ref<T, PK extends keyof T> = T[PK];
