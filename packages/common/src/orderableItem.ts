import type { HasDescription } from "./hasDescription.js";
import type { HasImages } from "./hasImage.js";

/**
 *	An interface represent an item that could be ordered by user,
 */
export interface IOrderableItem extends HasDescription<
	HasImages<{
		uuid: string;
		name: string;
		price: number;
		optionSets?: IOptionSet[];
		hidden?: boolean;
	}>
> {}

export interface IOptionSet extends HasDescription<
	HasImages<{
		uuid: string;
		name: string;
		options: Option[];
	}>
> {}

export enum OptionType {
	MC = "multiple-choice",
	PICK = "pick",
	QUANTITY = "quantity",
	TEXT = "text",
}

//#region Options type
export interface IMultipleChoiceOption extends HasDescription<{
	uuid: string;
	type: OptionType.MC;
	name: string;
	min?: number;
	max?: number;
	choices: OptionChoice[];
}> {}

export interface IPickOption extends HasDescription<{
	uuid: string;
	type: OptionType.PICK;
	name: string;
	required: boolean;
	choices: OptionChoice[];
}> {}

export interface IQuantityOption extends HasDescription<{
	uuid: string;
	type: OptionType.QUANTITY;
	name: string;
	min?: number;
	max?: number;
	/* default min */
	default?: number;
}> {}

export interface ITextOption extends HasDescription<{
	uuid: string;
	type: OptionType.TEXT;
	name: string;
	max?: number;
}> {}
//#endregion

export type Option =
	IMultipleChoiceOption | IPickOption | IQuantityOption | ITextOption;

export enum OptionChoiceType {
	ITEM = "item",
	PREFERENCE = "preference",
}

export interface IItemChoice {
	type: OptionChoiceType.ITEM;
	item: IOrderableItem;
	price: number;
}

export interface IPreferenceChoice extends HasDescription<{
	type: OptionChoiceType.PREFERENCE;
	name: string;
	price: number;
}> {}

type OptionChoice = IItemChoice | IPreferenceChoice;
