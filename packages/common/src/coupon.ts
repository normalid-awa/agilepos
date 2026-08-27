import type { IItem } from "./item.js";

/**
 * 	could mixed with `IHasImages`, `IHasDescription`
 */
export interface ICoupon {
	uuid: string;
	name: string;
	maximumUse: number;
	expirationDate: Date;
	useCondition: CouponCondition;
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
			item: IItem;
	  };

export type CouponCondition =
	| {
			type: "item-quatity";
			/**
			 *  e.g.  [[a,b], c] = (a or b) and c
			 *  e.g.  [[a,b]] = a or b
			 *  e.g.  [a,b] = a and b
			 */
			conditions: (IItem | IItem[])[];
	  }
	| {
			type: "minimum-price";
			price: number;
	  };
