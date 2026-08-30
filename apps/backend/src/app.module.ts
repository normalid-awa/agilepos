import { Module } from "@nestjs/common";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { AuthModule } from "@thallesp/nestjs-better-auth";
import { auth } from "./auth.js";
import { ConfigModule } from "@nestjs/config";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import config from "../mikro-orm.config.js";

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule.forRoot(auth, { bodyParser: { rawBody: true } }),
		MikroOrmModule.forRoot(config),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
