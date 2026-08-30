import {
	Entity,
	Enum,
	ManyToOne,
	PrimaryKey,
	Property,
	Unique,
} from "@mikro-orm/decorators/legacy";
import { PaymentStatus } from "@agilepos/common";
import { User } from "./auth";

@Entity()
export class Payment {
	@PrimaryKey({ type: "uuid", defaultRaw: "gen_random_uuid()" })
	id!: string;

	@Property()
	@Unique()
	paymentId!: string;

	@Property()
	@Unique()
	referenceId!: string;

	@Enum({ items: () => PaymentStatus })
	status!: PaymentStatus;

	@ManyToOne()
	paidBy?: User;

	@Property({ type: "datetime", defaultRaw: "now()" })
	createdAt: Date = new Date();

	@Property({
		type: "datetime",
		defaultRaw: "now()",
		onUpdate: () => new Date(),
	})
	updatedAt: Date = new Date();
}
