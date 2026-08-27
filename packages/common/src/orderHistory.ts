import type { ICoupon } from "./coupon.js";
import type { IItem } from "./item.js";

/**
 * All data should be solidified
 */
export interface IOrderHistory {
	uuid: string;
	items: IItem[];
	coupon: ICoupon[];
	price: number;
}
