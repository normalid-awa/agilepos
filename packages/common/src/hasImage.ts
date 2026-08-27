export interface IHasImages {
	imagesUrl: string[];
}

export function hasImages(obj: object): obj is IHasImages {
	return "imagesUrl" in obj;
}
