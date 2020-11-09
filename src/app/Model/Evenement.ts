import { Customer } from './Customer';
import { EventType } from './EventType';

export class Evenement {
    event_id: number;
    event_name: String;
    customer_id: number;
    customer_name: String;
    publication: String;
    city: String;
    state: String;
    zip: String;
    location: String;
    contact: String;
    contact_phone: String;
    event_type_id: number;
    event_type: String;
    order_id: number;
    time_stamp: String;
    user: String;
    zone: String;
    category: String;
    alt_date: String;
    customer: Customer;
    eventType: EventType;
    numberOfDate: number;
    dates: any;
}