import { Publisher, Subjects, TicketCreatedEvent } from "@liavtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
