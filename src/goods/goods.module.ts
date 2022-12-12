import { Module } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsController } from './goods.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Goods} from "./goods.model";
import {FilesModule} from "../files/files.module";

@Module({
  providers: [GoodsService],
  controllers: [GoodsController],
  imports: [
      SequelizeModule.forFeature([ Goods]),
      FilesModule
  ]
})
export class GoodsModule {}
