import { inspect } from "node:util";
import {
	OptionChoiceType,
	OptionType,
	type IOptionSet,
	type IOrderableItem,
	type IPickOption,
} from "./orderableItem.js";
import type { IOrderedItem } from "./orderedItem.js";

export const TestCokeItem: IOrderableItem = {
	id: "2",
	name: "Coke",
	price: 12,
	imagesUrl: [],
};

export const TestHotChocoletteItem: IOrderableItem = {
	id: "3",
	name: "Hot Chocolatte",
	price: 6,
	imagesUrl: [],
};

export const TestDrinkOption: IPickOption = {
	name: "Choose drink",
	type: OptionType.PICK,
	required: false,
	choices: [
		{
			type: OptionChoiceType.PREFERENCE,
			name: "No",
			price: 0,
		},
		{
			type: OptionChoiceType.ITEM,
			item: TestCokeItem,
			price: 6,
		},
		{
			type: OptionChoiceType.ITEM,
			item: TestHotChocoletteItem,
			price: 3,
		},
	],
};

export const TestOptionDrinkSet: IOptionSet = {
	id: "1",
	name: "Drinks",
	options: [TestDrinkOption],
	imagesUrl: [],
};

export const TestEggFriedRiceItem: IOrderableItem = {
	id: "1",
	name: "Egg Fried Rice",
	description: "With egg",
	price: 60,
	optionSets: [TestOptionDrinkSet],
	imagesUrl: [],
} as const;

const TestCokeOrder: IOrderedItem = {
	id: "cvwef2341",
	item: TestCokeItem,
	name: "Coke",
	imagesUrl: [],
	price: 123,
	optionSetsValue: [],
};

const TestOrder: IOrderedItem = {
	id: "14e2d23f",
	item: TestEggFriedRiceItem,
	name: TestEggFriedRiceItem.name,
	price: TestEggFriedRiceItem.price,
	imagesUrl: [],
	optionSetsValue: [
		{
			imagesUrl: [],
			id: "c2weojij1j90",
			optionSet: TestOptionDrinkSet.id,
			name: TestOptionDrinkSet.name,
			values: [
				{
					type: OptionType.PICK,
					option: TestDrinkOption,
					name: TestDrinkOption.name,
					description: TestDrinkOption.description!,
					value: {
						type: OptionChoiceType.ITEM,
						value: TestCokeOrder,
						price: 6,
					},
				},
			],
		},
	],
};

console.log(inspect(TestOrder, true, null, true));
console.log(inspect(TestEggFriedRiceItem, true, null, true));
