export type HasImages<T> = T & {
	imagesUrl: string[];
};

export function hasImages(obj: object): obj is HasImages<any> {
	return "imagesUrl" in obj && Array.isArray(obj.imagesUrl);
}
