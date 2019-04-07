import { EventEmitter } from "events";

export class Operation extends EventEmitter {
    on(eventType, callback) {
        if (!eventType || !callback) {
            throw new Error('Invalid Parameter.');
        }

        return this.addListener(eventType, callback);
    }
}