import type { ICoupon } from "./coupon.js";
import type { IItem } from "./item.js";

export interface IShoppingCart {
	items: IItem[];
	coupon: ICoupon[];
}
