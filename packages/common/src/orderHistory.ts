import type { ICoupon } from "./coupon.js";
import type { IOrderedItem } from "./orderedItem.js";

/**
 * All data should be solidified
 */
export interface IOrderHistory {
	id: string;
	items: IOrderedItem[];
	coupon: ICoupon[];
	price: number;
}
