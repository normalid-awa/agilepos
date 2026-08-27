export type HasDescription<T> = T & {
	description?: string;
};

export function hasDescription(obj: object): obj is HasDescription<any> {
	return "description" in obj;
}
