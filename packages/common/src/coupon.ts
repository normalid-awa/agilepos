import type { IOrderableItem } from "./orderableItem.js";

/**
 * 	could mixed with `IHasImages`, `IHasDescription`
 */
export interface ICoupon {
	uuid: string;
	name: string;
	maximumUse: number;
	expirationDate: Date;
	useCondition: CouponCondition[];
	properties: CouponProperty;
}

export type CouponProperty =
	| {
			type: "discount-precentage";
			precentage: number;
	  }
	| {
			type: "discount";
			discount: number;
	  }
	| {
			type: "gift";
			item: IOrderableItem;
	  }
	| {
			/**
			 * Could not use with any coupon
			 */
			type: "exclusive";
	  }
	| {
			/**
			 * Could not use with certain coupon
			 */
			type: "coupon-conflict";
			exclusive: ICoupon[];
	  }
	| {
			/**
			 * Could not use with certain coupon
			 */
			type: "coupon-conflict";
			exclusive: ICoupon[];
	  }
	| {
			type: "could-accumulate";
			maxAccumulate: number;
	  };

export type CouponCondition =
	| {
			type: "item-quatity";
			/**
			 *  e.g.  [[a,b], c] = (a or b) and c
			 *  e.g.  [[a,b]] = a or b
			 *  e.g.  [a,b] = a and b
			 */
			conditions: (IOrderableItem | IOrderableItem[])[];
	  }
	| {
			type: "minimum-price";
			price: number;
	  };
