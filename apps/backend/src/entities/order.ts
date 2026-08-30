import {
	Entity,
	Enum,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryKey,
	Property,
	Unique,
} from "@mikro-orm/decorators/legacy";
import { OrderedItem } from "./orderedItem";
import { Collection } from "@mikro-orm/core";
import { OrderStatus } from "@agilepos/common";
import { User } from "./auth";
import { Payment } from "./payment";

@Entity()
export class Order {
	@PrimaryKey({ type: "uuid", defaultRaw: "gen_random_uuid()" })
	id!: string;

	@Property()
	@Unique()
	orderId!: string;

	@OneToMany(() => OrderedItem, (order) => order.order)
	items = new Collection<OrderedItem>(this);

	//TODO: Coupon entity
	@Property()
	coupons!: string;

	@Enum({ items: () => OrderStatus })
	status!: OrderStatus;

	@ManyToOne()
	orderBy?: User;

	@OneToOne()
	payment!: Payment;

	@Property({ type: "datetime", defaultRaw: "now()" })
	createdAt: Date = new Date();

	@Property({
		type: "datetime",
		defaultRaw: "now()",
		onUpdate: () => new Date(),
	})
	updatedAt: Date = new Date();
}
