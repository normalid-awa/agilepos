import type { HasDescription } from "./hasDescription.js";
import type { HasImages } from "./hasImage.js";
import {
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
	uuid: string;
	type: "multiple-choice";
	option: Ref<IMultipleChoiceOption, "uuid">;
	name: string;
	values: OptionChoicesValue[];
}> {}

export interface IPickOptionValue extends HasDescription<{
	uuid: string;
	type: "pick";
	option: Ref<IPickOption, "uuid">;
	name: string;
	value: OptionChoicesValue;
}> {}

export interface IQuantityOptionValue extends HasDescription<{
	uuid: string;
	type: "quantity";
	option: Ref<IQuantityOption, "uuid">;
	name: string;
	value: number;
}> {}

export interface ITextOptionValue extends HasDescription<{
	uuid: string;
	type: "text";
	option: Ref<ITextOption, "uuid">;
	name: string;
	value: string;
}> {}

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

export interface IPreferenceChoiceValue extends HasDescription<{
	type: "preference";
	name: string;
	price: number;
}> {}

export type OptionChoicesValue = IItemChoiceValue | IPreferenceChoiceValue;
