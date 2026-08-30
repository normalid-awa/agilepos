import { Migrator } from "@mikro-orm/migrations";
import { defineConfig } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import "dotenv/config";

export default defineConfig({
	entities: ["./dist/src/entities"],
	entitiesTs: ["./src/entities"],
	metadataProvider: TsMorphMetadataProvider,
	clientUrl: process.env.PG_SQL_CONNECTION_STRING,
	extensions: [Migrator],
});
