import type { IUsedCoupon } from "./coupon.js";
import type { IOrderableItem } from "./orderableItem.js";
import type { IPayment } from "./payment.js";
import type { IUser } from "./user.js";

export enum OrderStatus {
	PLACED,
	CONFIRMED,
	PREPARING,
	READY,
	CANCELLED,
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
