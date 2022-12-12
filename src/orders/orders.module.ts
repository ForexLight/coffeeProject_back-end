import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Order} from "./orders.model";

@Module({
  providers: [OrdersService],
  controllers: [OrdersController],
  imports: [
      SequelizeModule.forFeature([Order]),
  ]
})
export class OrdersModule {}
