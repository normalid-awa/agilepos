import type { HasDescription } from "./hasDescription.js";
import type { HasImages } from "./hasImage.js";
import type { IOrderableItem } from "./orderableItem.js";

//TODO: this need to be redesigna to support user ownership on coupon

export interface ICoupon extends HasImages<
	HasDescription<{
		id: string;
		name: string;
		maximumUse: number;
		expirationDate: Date;
		useCondition: CouponCondition[];
		properties: CouponProperty[];
	}>
> {}

export interface IUsedCoupon extends HasImages<
	HasDescription<{
		id: string;
		name: string;
		properties: CouponProperty[];
	}>
> {}

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
			type: "item-combination";
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
