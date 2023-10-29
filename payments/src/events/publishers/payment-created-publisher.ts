import { PaymentCreatedEvent, Publisher, Subjects } from "@liavtickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
