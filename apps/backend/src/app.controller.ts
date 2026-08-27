import { Controller, Get, Session } from "@nestjs/common";
import { AppService } from "./app.service.js";
import {
	AllowAnonymous,
	OptionalAuth,
	type UserSession,
} from "@thallesp/nestjs-better-auth";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Get("public")
	@AllowAnonymous()
	async getPublic() {
		return { message: "Public route" };
	}
	@Get("optional")
	@OptionalAuth() // Authentication is optional
	async getOptional(@Session() session: UserSession) {
		return { authenticated: !!session };
	}
}
