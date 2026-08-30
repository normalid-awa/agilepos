import type { IUser } from "./user.js";

export enum PaymentStatus {
	PENDING = "pending",
	COMPLETED = "completed",
	FAILED = "failed",
	REFUNDED = "refunded",
}

export interface IPayment {
	id: string;
	paymentId: string;
	referenceId: string; //provided by payment gateway provider
	status: PaymentStatus;
	paidBy?: IUser;
	createdAt: Date;
	updatedAt: Date;
}
