import { Model } from "sequelize-typescript";
interface GoodCreationAttrs {
    id: number;
    name: string;
    price: number;
    category: string;
    img: string;
}
export declare class Goods extends Model<Goods, GoodCreationAttrs> {
    id: number;
    name: string;
    price: number;
    category: string;
    img: string;
}
export {};
