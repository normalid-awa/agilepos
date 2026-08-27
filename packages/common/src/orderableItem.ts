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

//#region Options type
export interface IMultipleChoiceOption extends HasDescription<{
	uuid: string;
	type: "multiple-choice";
	name: string;
	min?: number;
	max?: number;
	choices: OptionChoice[];
}> {}

export interface IPickOption extends HasDescription<{
	uuid: string;
	type: "pick";
	name: string;
	required: boolean;
	choices: OptionChoice[];
}> {}

export interface IQuantityOption extends HasDescription<{
	uuid: string;
	type: "quantity";
	name: string;
	min?: number;
	max?: number;
	/* default min */
	default?: number;
}> {}

export interface ITextOption extends HasDescription<{
	uuid: string;
	type: "text";
	name: string;
	max?: number;
}> {}
//#endregion

export type Option =
	| IMultipleChoiceOption
	| IPickOption
	| IQuantityOption
	| ITextOption;

export interface IItemChoice {
	type: "item";
	item: IOrderableItem;
	price: number;
}

export interface IPreferenceChoice extends HasDescription<{
	type: "preference";
	name: string;
	price: number;
}> {}

type OptionChoice = IItemChoice | IPreferenceChoice;
