import { Injectable } from '@nestjs/common';
import {CreateOrderDto} from "./dto/create-order.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Order} from "./orders.model";

@Injectable()
export class OrdersService {

    constructor(@InjectModel(Order) private  ordersRepository: typeof Order) {}

    async create(dto: CreateOrderDto) {
        const order = await this.ordersRepository.create(dto)
        return order
    }

    async getAllOrders () {
        const orders = await this.ordersRepository.findAll()
        return orders
    }
}
