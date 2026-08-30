import { Module } from "@nestjs/common";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { AuthModule } from "@thallesp/nestjs-better-auth";
import { authOption } from "./auth.js";
import { ConfigModule } from "@nestjs/config";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import config from "../mikro-orm.config.js";
import { betterAuth } from "better-auth";
import { MikroORM } from "@mikro-orm/postgresql";

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule.forRootAsync({
			async useFactory() {
				return {
					auth: betterAuth(authOption(await MikroORM.init(config))),
					bodyParser: {
						rawBody: true,
					},
				};
			},
		}),
		MikroOrmModule.forRoot(config),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
