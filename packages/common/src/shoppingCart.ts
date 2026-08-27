import type { ICoupon } from "./coupon.js";
import type { IOderableItem } from "./orderableItem.js";

export interface IShoppingCart {
	items: IOderableItem[];
	coupon: ICoupon[];
}
