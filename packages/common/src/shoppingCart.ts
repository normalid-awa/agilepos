import type { ICoupon } from "./coupon.js";
import type { IOrderableItem } from "./orderableItem.js";

export interface IShoppingCart {
	items: IOrderableItem[];
	coupon: ICoupon[];
}
