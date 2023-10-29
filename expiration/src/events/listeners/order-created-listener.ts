import { Listener, Subjects, OrderCreatedEvent } from "@liavtickets/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";

import { expirationQueue } from "../../queues/expiration-queue";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    const delay = new Date(data.expeirsAt).getTime() - new Date().getTime();
    console.log("Waiting this many milliseoconds to process the job:", delay);

    await expirationQueue.add(
      {
        orderId: data.id,
      },
      {
        delay,
      }
    );

    msg.ack();
  }
}
