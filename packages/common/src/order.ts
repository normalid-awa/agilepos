import type { IUsedCoupon } from "./coupon.js";
import type { IOrderableItem } from "./orderableItem.js";
import type { IPayment } from "./payment.js";
import type { IUser } from "./user.js";

export enum OrderStatus {
	PLACED = "placed",
	CONFIRMED = "confirmed",
	PREPARING = "preparing",
	READY = "ready",
	TIMEDOUT = "timedout",
	CANCELLED = "cancelled",
}

export interface IOrder {
	id: string;
	orderId: string;
	items: IOrderableItem[];
	coupons: IUsedCoupon[];
	status: OrderStatus;
	orderBy?: IUser;
	payment: IPayment;
	createdAt: Date;
	updatedAt: Date;
}
