import { Injectable } from '@nestjs/common';
import {CreateOrderDto} from "./dto/create-order.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Order} from "./orders.model";
import {Op} from "sequelize";

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
    async getTodayOrders () {
        const orders = await this.ordersRepository.findAll({
            where: {
                createdAt: {
                    [Op.between]: [new Date(new Date().getTime() - 24 * 60 * 60 * 1000), new Date()]
                }
            }
        })
        return orders
    }
    async getWeekOrders() {
        const orders = await this.ordersRepository.findAll({
            where: {
                createdAt: {
                    [Op.between]: [new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), new Date()]
                }
            }
        })
        return orders
    }

    async getMonthOrders() {
        const orders = await this.ordersRepository.findAll({
            where: {
                createdAt: {
                    [Op.between]: [new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000), new Date()]
                }
            }
        })
        return orders
    }

}
