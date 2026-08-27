export interface IHasDescription {
	description?: string;
}

export function hasDescription(obj: object): obj is IHasDescription {
	return "description" in obj;
}
