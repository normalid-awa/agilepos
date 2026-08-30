import type { HasDescription } from "./hasDescription.js";
import type { HasImages } from "./hasImage.js";
import {
	OptionChoiceType,
	OptionType,
	type IMultipleChoiceOption,
	type IOptionSet,
	type IOrderableItem,
	type IPickOption,
	type IQuantityOption,
	type ITextOption,
} from "./orderableItem.js";
import type { Ref } from "./utils.js";

//!IMPORTANT: All class/interface should be solidifed before storing

/**
 * An interface represent an item that order by user
 */
export interface IOrderedItem extends HasImages<{
	uuid: string;
	item: IOrderableItem;
	name: string;
	price: number;
	optionSetsValue: IOptionSetValue[];
}> {}

export interface IOptionSetValue extends HasDescription<
	HasImages<{
		uuid: string;
		optionSet: Ref<IOptionSet, "uuid">;
		name: string;
		values: OptionValue[];
	}>
> {}

export interface IMultipleChoiceOptionValue extends HasDescription<{
	type: OptionType.MC;
	option: IMultipleChoiceOption;
	name: string;
	values: OptionChoicesValue[];
}> {}

export interface IPickOptionValue extends HasDescription<{
	type: OptionType.PICK;
	option: IPickOption;
	name: string;
	value: OptionChoicesValue;
}> {}

export interface IQuantityOptionValue extends HasDescription<{
	type: OptionType.QUANTITY;
	option: IQuantityOption;
	name: string;
	value: number;
}> {}

export interface ITextOptionValue extends HasDescription<{
	type: OptionType.TEXT;
	option: ITextOption;
	name: string;
	value: string;
}> {}

export type OptionValue =
	| IMultipleChoiceOptionValue
	| IPickOptionValue
	| IQuantityOptionValue
	| ITextOptionValue;

export interface IItemChoiceValue {
	type: OptionChoiceType.ITEM;
	value: IOrderedItem;
	price: number;
}

export interface IPreferenceChoiceValue extends HasDescription<{
	type: OptionChoiceType.PREFERENCE;
	name: string;
	price: number;
}> {}

export type OptionChoicesValue = IItemChoiceValue | IPreferenceChoiceValue;
