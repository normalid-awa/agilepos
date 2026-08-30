import { OptionChoiceType, OptionType } from "@agilepos/common";
import { ArrayType, Collection } from "@mikro-orm/core";
import {
	Embeddable,
	Embedded,
	Entity,
	Enum,
	ManyToMany,
	ManyToOne,
	PrimaryKey,
	Property,
} from "@mikro-orm/decorators/legacy";

@Entity()
export class OrderableItem {
	@PrimaryKey({ type: "uuid", defaultRaw: "gen_random_uuid()" })
	id!: string;

	@Property()
	name!: string;

	@Property()
	description?: string;

	@Property({ type: ArrayType })
	imagesUrl!: string[];

	@Property()
	price!: number;

	//TODO:
	@ManyToMany()
	optionSets = new Collection<OptionSet>(this);

	@Property()
	hidden?: boolean;
}

@Entity()
export class OptionSet {
	@PrimaryKey({ type: "uuid", defaultRaw: "gen_random_uuid()" })
	id!: string;

	@Property()
	name!: string;

	@Property()
	description?: string;

	@Property({ type: ArrayType })
	imagesUrl!: string[];

	@Embedded({ object: true })
	options!: Option[];
}

@Embeddable({ abstract: true, discriminator: "type" })
export abstract class OptionChoice {
	@Enum()
	type!: OptionChoiceType;
}

@Embeddable({ discriminatorValue: OptionChoiceType.ITEM })
export class ItemChoice extends OptionChoice {
	@ManyToOne()
	item!: OrderableItem;

	@Property()
	price!: number;
}

@Embeddable({ discriminatorValue: OptionChoiceType.PREFERENCE })
export class PreferenceChoice extends OptionChoice {
	@Property()
	name!: string;

	@Property()
	price!: number;
}

@Embeddable({ abstract: true, discriminator: "type" })
export abstract class Option {
	@Enum()
	type!: OptionType;

	@Property()
	name!: string;

	@Property()
	description?: string;
}

@Embeddable({ discriminatorValue: OptionType.MC })
export class MultipleChoiceOption extends Option {
	@Property()
	min?: number;

	@Property()
	max?: number;

	@Embedded({ object: true })
	choices!: OptionChoice[];
}

@Embeddable({ discriminatorValue: OptionType.PICK })
export class PickOption extends Option {
	@Property()
	required!: boolean;

	@Embedded({ object: true })
	choices!: OptionChoice[];
}

@Embeddable({ discriminatorValue: OptionType.QUANTITY })
export class QuantityOption extends Option {
	@Property()
	min?: number;

	@Property()
	max?: number;

	@Property()
	default?: number;
}

@Embeddable({ discriminatorValue: OptionType.TEXT })
export class TextOption extends Option {
	@Property()
	max?: number;
}
