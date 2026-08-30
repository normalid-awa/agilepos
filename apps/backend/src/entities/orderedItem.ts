import {
	Embeddable,
	Embedded,
	Entity,
	Enum,
	ManyToOne,
	PrimaryKey,
	Property,
} from "@mikro-orm/decorators/legacy";
import { OptionSet, OrderableItem } from "./orderableItem";
import { ArrayType } from "@mikro-orm/core";
import { OptionChoiceType, OptionType } from "@agilepos/common";

@Entity()
export class OrderedItem {
	@PrimaryKey({ type: "uuid", defaultRaw: "gen_random_uuid()" })
	uuid!: string;

	@ManyToOne()
	item?: OrderableItem;

	@Property()
	name!: string;

	@Property()
	price!: number;

	@Embedded({ object: true })
	optionSetsValue!: OptionSetValue[];
}

@Embeddable()
export class OptionSetValue {
	@ManyToOne()
	optionSet?: OptionSet;

	@Property()
	name!: string;

	@Property()
	description?: string;

	@Property({ type: ArrayType })
	imagesUrl!: string[];

	@Embedded({ object: true })
	values!: OptionValue[];
}

@Embeddable({ abstract: true, discriminator: "type" })
export abstract class OptionChoicesValue {
	@Enum()
	type!: OptionChoiceType;
}

@Embeddable({ discriminatorValue: OptionChoiceType.ITEM })
export class ItemChoiceValue extends OptionChoicesValue {
	@ManyToOne()
	item!: OrderedItem;

	@Property()
	price!: number;
}

@Embeddable({ discriminatorValue: OptionChoiceType.PREFERENCE })
export class PreferenceChoiceValue extends OptionChoicesValue {
	@Property()
	name!: string;

	@Property()
	price!: number;
}

@Embeddable({ abstract: true, discriminator: "type" })
export abstract class OptionValue {
	@Enum()
	type!: OptionType;

	@Property()
	name!: string;

	@Property()
	description?: string;
}

@Embeddable({ discriminatorValue: OptionType.MC })
export class MultipleChoiceOptionValue extends OptionValue {
	@Embedded({ object: true })
	values!: OptionChoicesValue[];
}

@Embeddable({ discriminatorValue: OptionType.PICK })
export class PickOptionValue extends OptionValue {
	@Embedded({ object: true })
	value!: OptionChoicesValue;
}

@Embeddable({ discriminatorValue: OptionType.QUANTITY })
export class QuantityOptionValue extends OptionValue {
	@Property()
	value!: number;
}

@Embeddable({ discriminatorValue: OptionType.TEXT })
export class TextOptionValue extends OptionValue {
	@Property()
	value!: string;
}
