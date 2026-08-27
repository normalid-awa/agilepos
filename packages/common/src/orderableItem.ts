/**
 *	An interface represent an item that could be ordered by user,
 *	could mixed with `IHasImages`, `IHasDescription`
 */
export interface IOrderableItem {
	uuid: string;
	name: string;
	price: number;
	optionSets?: IOptionSet[];
	hidden?: boolean;
}

/**
 * 	could mixed with `IHasImages`, `IHasDescription`
 */
export interface IOptionSet {
	uuid: string;
	/** Shown to admin only  */
	name: string;
	options: Option[];
}

//#region Options type
export interface IMultipleChoiceOption {
	uuid: string;
	type: "multiple-choice";
	name: string;
	description?: string;
	min?: number;
	max?: number;
	choices: OptionChoice[];
}

export interface IPickOption {
	uuid: string;
	type: "pick";
	name: string;
	description?: string;
	required: boolean;
	choices: OptionChoice[];
}

export interface IQuantityOption {
	uuid: string;
	type: "quantity";
	name: string;
	description?: string;
	min?: number;
	max?: number;
	/* default min */
	default?: number;
}

export interface ITextOption {
	uuid: string;
	type: "text";
	name: string;
	description?: string;
	max?: number;
}
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

export interface IPreferenceChoice {
	type: "preference";
	name: string;
	description?: string;
	price: number;
}

type OptionChoice = IItemChoice | IPreferenceChoice;
