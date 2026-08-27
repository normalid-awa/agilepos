import {
	type IMultipleChoiceOption,
	type IOptionSet,
	type IPickOption,
	type IQuantityOption,
	type ITextOption,
} from "./orderableItem.js";
import type { Ref } from "./utils.js";

//!IMPORTANT: All class/interface should be solidifed before storing

/**
 * An interface represent an item that order by user
 * could mixed with `IHasImages`
 */
export interface IOrderedItem {
	uuid: string;
	item: Ref<IOrderedItem, "uuid">;
	name: string;
	price: number;
	optionSetsValue: IOptionSetValue[];
}

export interface IOptionSetValue {
	uuid: string;
	optionSet: Ref<IOptionSet, "uuid">;
	name: string;
	values: OptionValue[];
}

export interface IMultipleChoiceOptionValue {
	uuid: string;
	type: "multiple-choice";
	option: Ref<IMultipleChoiceOption, "uuid">;
	name: string;
	description?: string;
	values: OptionChoicesValue[];
}

export interface IPickOptionValue {
	uuid: string;
	type: "pick";
	option: Ref<IPickOption, "uuid">;
	name: string;
	description?: string;
	value: OptionChoicesValue;
}

export interface IQuantityOptionValue {
	uuid: string;
	type: "quantity";
	option: Ref<IQuantityOption, "uuid">;
	name: string;
	description?: string;
	value: number;
}

export interface ITextOptionValue {
	uuid: string;
	type: "text";
	option: Ref<ITextOption, "uuid">;
	name: string;
	description?: string;
	value: string;
}

export type OptionValue =
	| IMultipleChoiceOptionValue
	| IPickOptionValue
	| IQuantityOptionValue
	| ITextOptionValue;

export interface IItemChoiceValue {
	type: "item";
	value: IOrderedItem;
	price: number;
}

export interface IPreferenceChoiceValue {
	type: "preference";
	name: string;
	description?: string;
	price: number;
}

export type OptionChoicesValue = IItemChoiceValue | IPreferenceChoiceValue;
