import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@liavtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
