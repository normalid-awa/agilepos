import { BetterAuthOptions } from "better-auth";
import { openAPI } from "better-auth/plugins";
import { adapter as mikroOrmAdapter } from "@lubiah/better-auth-mikro-orm";
import { BasePostgreSqlEntityManager, MikroORM } from "@mikro-orm/sql";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

export const authOption = (
	orm: MikroORM<
		PostgreSqlDriver,
		BasePostgreSqlEntityManager<PostgreSqlDriver>,
		string[]
	>,
) =>
	({
		database: mikroOrmAdapter(orm),
		advanced: {
			database: {
				generateId: false,
			},
		},
		emailAndPassword: {
			enabled: true,
		},
		plugins: [openAPI()],
	}) satisfies BetterAuthOptions;
