import { CreateOrderDto } from "./dto/create-order.dto";
import { Order } from "./orders.model";
export declare class OrdersService {
    private ordersRepository;
    constructor(ordersRepository: typeof Order);
    create(dto: CreateOrderDto): Promise<Order>;
    getAllOrders(): Promise<Order[]>;
    getTodayOrders(): Promise<Order[]>;
    getWeekOrders(): Promise<Order[]>;
    getMonthOrders(): Promise<Order[]>;
}
