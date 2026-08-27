import { inspect } from "node:util";
import type { IHasDescription } from "./hasDescription.js";
import type {
	IOptionSet,
	IOrderableItem,
	IPickOption,
} from "./orderableItem.js";
import type { IOrderedItem } from "./orderedItem.js";

export const TestCokeItem: IOrderableItem = {
	uuid: "2",
	name: "Coke",
	price: 12,
};

export const TestHotChocoletteItem: IOrderableItem = {
	uuid: "3",
	name: "Hot Chocolatte",
	price: 6,
};

export const TestDrinkOption: IPickOption = {
	uuid: "ddfqw132t",
	name: "Choose drink",
	type: "pick",
	required: false,
	choices: [
		{
			type: "preference",
			name: "No",
			price: 0,
		},
		{
			type: "item",
			item: TestCokeItem,
			price: 6,
		},
		{
			type: "item",
			item: TestHotChocoletteItem,
			price: 3,
		},
	],
};

export const TestOptionDrinkSet: IOptionSet = {
	uuid: "1",
	name: "Drinks",
	options: [TestDrinkOption],
};

export const TestEggFriedRiceItem: IOrderableItem & IHasDescription = {
	uuid: "1",
	name: "Egg Fried Rice",
	description: "With egg",
	price: 60,
	optionSets: [TestOptionDrinkSet],
} as const;

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
console.log(inspect(TestEggFriedRiceItem, true, null, true));
