import { Publisher, OrderCreatedEvent, Subjects } from "@liavtickets/common";

export class OrderCreatedPublihser extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
