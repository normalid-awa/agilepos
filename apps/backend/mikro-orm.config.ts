import { defineConfig } from "@mikro-orm/postgresql";
import "dotenv/config";

export default defineConfig({
	entities: ["./dist/entities"],
	entitiesTs: ["./src/entities"],
	clientUrl: process.env.PG_URL,
});
