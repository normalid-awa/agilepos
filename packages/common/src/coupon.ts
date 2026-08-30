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
		useRestriction: CouponRestriction[];
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

export enum CouponPropertyType {
	DISCOUNT_PRECENTAGE = "discount-precentage",
	DISCOUNT = "discount",
	GIFT = "gift",
}

export type CouponProperty =
	| {
			type: CouponPropertyType.DISCOUNT_PRECENTAGE;
			precentage: number;
	  }
	| {
			type: CouponPropertyType.DISCOUNT;
			discount: number;
	  }
	| {
			type: CouponPropertyType.GIFT;
			item: IOrderableItem;
	  };

export enum CouponRestrictionType {
	COMBINATION = "item-combination",
	MINIMUM_PRICE = "minimum-price",
	CONFLICT = "conflict",
	EXCLUSIVE = "exclusive",
	ACCUMULABLE = "accumulable",
}

export type CouponRestriction =
	| {
			type: CouponRestrictionType.COMBINATION;
			/**
			 *  e.g.  [[a,b], c] = (a or b) and c
			 *  e.g.  [[a,b]] = a or b
			 *  e.g.  [a,b] = a and b
			 */
			conditions: (IOrderableItem | IOrderableItem[])[];
	  }
	| {
			type: CouponRestrictionType.MINIMUM_PRICE;
			price: number;
	  }
	| {
			/**
			 * Could not use with certain coupon
			 */
			type: CouponRestrictionType.CONFLICT;
			exclusive: ICoupon[];
	  }
	| {
			/**
			 * Could not use with any coupon
			 */
			type: CouponRestrictionType.EXCLUSIVE;
	  }
	| {
			type: CouponRestrictionType.ACCUMULABLE;
			maxAccumulate: number;
	  };
