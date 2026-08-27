import type { IUsedCoupon } from "./coupon.js";
import type { IOrderableItem } from "./orderableItem.js";

export interface IShoppingCart {
	items: IOrderableItem[];
	coupon: IUsedCoupon[];
}
