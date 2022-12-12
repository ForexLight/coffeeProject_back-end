import { Injectable } from '@nestjs/common';
import {CreateGoodDto} from "./dto/create-post.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Goods} from "./goods.model";
import {FilesService} from "../files/files.service";

@Injectable()
export class GoodsService {

    constructor(@InjectModel(Goods) private  goodsRepository: typeof Goods,
                private fileService: FilesService) {}

    async getAll() {
        const goods = await this.goodsRepository.findAll({include: {all: true}})
        return goods
    }
    async create(dto: CreateGoodDto, image: any) {
        const fileName = await this.fileService.createFile(image)
        const goodsItem = await this.goodsRepository.create({...dto, img: fileName})
        return goodsItem
    }

    async delete(id: number) {
        return await this.goodsRepository.destroy(
    {
                where:
                    {
                        id: id
                    }
            }
        )
    }
}
