import {
    Body,
    Controller, Get,
    Post,
} from '@nestjs/common';
import {OrdersService} from "./orders.service";
import {CreateOrderDto} from "./dto/create-order.dto";

@Controller('orders')
export class OrdersController {

    constructor(private ordersService: OrdersService) {}

    @Post()
    createOrder(@Body() dto: CreateOrderDto){
        return this.ordersService.create(dto)
    }

    @Get()
    getOrders(){
        return this.ordersService.getAllOrders()
    }

    @Get('/day')
    getTodayOrders(){
        return this.ordersService.getTodayOrders()
    }
    @Get('/week')
    getWeekOrders(){
        return this.ordersService.getWeekOrders()
    }

    @Get('/month')
    getMonthOrders(){
        return this.ordersService.getMonthOrders()
    }
}
