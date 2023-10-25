import { Publisher, OrderCancelledEvent, Subjects } from "@liavtickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
