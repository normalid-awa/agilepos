import type { IUser } from "./user.js";

export enum PaymentStatus {
	PENDING,
	COMPLETED,
	FAILED,
	REFUNDED,
}

export interface IPayment {
	id: string;
	paymentId: string;
	referenceId: string; //provided by payment gateway provider
	status: PaymentStatus;
	paidBy?: IUser;
	createdAt: Date;
}
