import { Model } from "sequelize-typescript";
interface PostCreationAttrs {
    orderItems: string;
}
export declare class Order extends Model<Order, PostCreationAttrs> {
    id: number;
    orderItems: string;
}
export {};
