import type { ICoupon } from "./coupon.js";
import type { IOderableItem } from "./orderableItem.js";

/**
 * All data should be solidified
 */
export interface IOrderHistory {
	uuid: string;
	items: IOderableItem[];
	coupon: ICoupon[];
	price: number;
}
