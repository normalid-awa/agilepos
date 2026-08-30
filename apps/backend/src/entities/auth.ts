import {
	Entity,
	Property,
	PrimaryKey,
	ManyToOne,
} from "@mikro-orm/decorators/legacy";

// -----------------------------------------------------------------------------
// User Entity
// -----------------------------------------------------------------------------
@Entity({ tableName: "user" })
export class User {
	@PrimaryKey({ type: "uuid", defaultRaw: "gen_random_uuid()" })
	id!: string;

	@Property({ type: "text" })
	name!: string;

	@Property({ type: "text" })
	email!: string;

	@Property({ type: "boolean" })
	emailVerified!: boolean;

	@Property({ type: "text", nullable: true })
	image?: string;

	@Property({ type: "datetime" })
	createdAt: Date = new Date();

	@Property({ type: "datetime", onUpdate: () => new Date() })
	updatedAt: Date = new Date();
}

// -----------------------------------------------------------------------------
// Session Entity
// -----------------------------------------------------------------------------
@Entity({ tableName: "session" })
export class Session {
	@PrimaryKey({ type: "uuid", defaultRaw: "gen_random_uuid()" })
	id!: string;

	@ManyToOne({
		entity: () => User,
		fieldNames: ["userId"],
	})
	user?: User;

	@Property({ type: "text" })
	token!: string;

	@Property({ type: "datetime" })
	expiresAt!: Date;

	@Property({ type: "text", nullable: true })
	ipAddress?: string;

	@Property({ type: "text", nullable: true })
	userAgent?: string;

	@Property({ type: "datetime" })
	createdAt: Date = new Date();

	@Property({ type: "datetime", onUpdate: () => new Date() })
	updatedAt: Date = new Date();
}

// -----------------------------------------------------------------------------
// Account Entity
// -----------------------------------------------------------------------------
@Entity({ tableName: "account" })
export class Account {
	@PrimaryKey({ type: "uuid", defaultRaw: "gen_random_uuid()" })
	id!: string;

	@ManyToOne({
		entity: () => User,
	})
	user?: User;

	@Property({ type: "text" })
	accountId!: string;

	@Property({ type: "text" })
	providerId!: string;

	@Property({ type: "text", nullable: true })
	accessToken?: string;

	@Property({ type: "text", nullable: true })
	refreshToken?: string;

	@Property({ type: "datetime", nullable: true })
	accessTokenExpiresAt?: Date;

	@Property({ type: "datetime", nullable: true })
	refreshTokenExpiresAt?: Date;

	@Property({ type: "text", nullable: true })
	scope?: string;

	@Property({ type: "text", nullable: true })
	idToken?: string;

	@Property({ type: "text", nullable: true })
	password?: string;

	@Property({ type: "datetime" })
	createdAt: Date = new Date();

	@Property({ type: "datetime", onUpdate: () => new Date() })
	updatedAt: Date = new Date();
}

// -----------------------------------------------------------------------------
// Verification Entity
// -----------------------------------------------------------------------------
@Entity({ tableName: "verification" })
export class Verification {
	@PrimaryKey({ type: "uuid", defaultRaw: "gen_random_uuid()" })
	id!: string;

	@Property({ type: "text" })
	identifier!: string;

	@Property({ type: "text" })
	value!: string;

	@Property({ type: "datetime" })
	expiresAt!: Date;

	@Property({ type: "datetime" })
	createdAt: Date = new Date();

	@Property({ type: "datetime", onUpdate: () => new Date() })
	updatedAt: Date = new Date();
}
