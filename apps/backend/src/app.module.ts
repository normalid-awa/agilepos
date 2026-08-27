import { Module } from "@nestjs/common";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { AuthModule } from "@thallesp/nestjs-better-auth";
import { auth } from "./auth.js";
import { ConfigModule } from "@nestjs/config";

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule.forRoot(auth, { bodyParser: { rawBody: true } }),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
