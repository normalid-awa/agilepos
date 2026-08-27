import { inspect } from "node:util";
import {
	TestCokeItem,
	TestDrinkOption,
	TestEggFriedRiceItem,
	TestOptionDrinkSet,
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

const TestCokeOrder: IOrderedItem = {
	uuid: "cvwef2341",
	item: TestCokeItem.uuid,
	name: "Coke",
	price: 123,
	optionSetsValue: [],
};

const TestOrder: IOrderedItem = {
	uuid: "14e2d23f",
	item: TestEggFriedRiceItem.uuid,
	name: TestEggFriedRiceItem.name,
	price: TestEggFriedRiceItem.price,
	optionSetsValue: [
		{
			uuid: "c2weojij1j90",
			optionSet: TestOptionDrinkSet.uuid,
			name: TestOptionDrinkSet.name,
			values: [
				{
					uuid: "ff1h92843",
					type: "pick",
					option: TestDrinkOption.uuid,
					name: TestDrinkOption.name,
					description: TestDrinkOption.description!,
					value: {
						type: "item",
						value: TestCokeOrder,
						price: 6,
					},
				},
			],
		},
	],
};

console.log(inspect(TestOrder, true, null, true));
