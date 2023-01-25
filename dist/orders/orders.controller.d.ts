import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    createOrder(dto: CreateOrderDto): Promise<import("./orders.model").Order>;
    getOrders(): Promise<import("./orders.model").Order[]>;
    getTodayOrders(): Promise<import("./orders.model").Order[]>;
    getWeekOrders(): Promise<import("./orders.model").Order[]>;
    getMonthOrders(): Promise<import("./orders.model").Order[]>;
}
