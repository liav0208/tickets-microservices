import { Publisher, Subjects, TicketUpdatedEvent } from "@liavtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
