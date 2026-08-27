import { inspect } from "node:util";
import type { IHasDescription } from "./hasDescription.js";

/**
 *	An`interface represent an item that could be ordered by usser,
 *	could mixed with `IHasImages`, `IHasDescription`
 */
export interface IItem {
	uuid: string;
	name: string;
	price: number;
	optionSets?: IOptionSet[];
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

type Option =
	| {
			type: "multiple-choice";
			name: string;
			description?: string;
			min?: number;
			max?: number;
			choices: OptionChoices;
	  }
	| {
			type: "pick";
			name: string;
			description?: string;
			choices: OptionChoices;
	  }
	| {
			type: "quantities";
			name: string;
			description?: string;
			min?: number;
			max?: number;
			/* default min */
			default?: number;
	  }
	| {
			type: "text";
			name: string;
			description?: string;
			max?: number;
	  };

type OptionChoices =
	| {
			type: "item";
			choices: {
				item: IItem;
				price: number;
			}[];
	  }
	| {
			type: "preference";
			choices: {
				name: string;
				description?: string;
				price: number;
			}[];
	  };

const TestCokeItem: IItem = {
	uuid: "2",
	name: "Coke",
	price: 12,
};

const TestHoyCokeItem: IItem = {
	uuid: "3",
	name: "HotCoke",
	price: 6,
};

const TestOptionDrinkSet: IOptionSet = {
	uuid: "1",
	name: "Drinks",
	options: [
		{
			name: "Choose drink",
			type: "pick",
			choices: {
				type: "item",
				choices: [
					{
						item: TestCokeItem,
						price: 6,
					},
					{
						item: TestHoyCokeItem,
						price: 3,
					},
				],
			},
		},
	],
};

const TestEggFriedRiceItem: IItem & IHasDescription = {
	uuid: "1",
	name: "Egg Fried Rice",
	description: "With egg",
	price: 60,
	optionSets: [TestOptionDrinkSet],
};

console.log(inspect(TestEggFriedRiceItem, true, null, true));
