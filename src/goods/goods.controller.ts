import {
    Body,
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
    Delete, Get
} from '@nestjs/common';
import {GoodsService} from "./goods.service";
import {CreateGoodDto} from "./dto/create-post.dto";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('goods')
export class GoodsController {

    constructor(private goodsService: GoodsService) {}

    @Get()
    getAllGoods(){
        return this.goodsService.getAll()
    }
    @Post()
    @UseInterceptors(FileInterceptor('img'))
    createItem(@Body() dto: CreateGoodDto, @UploadedFile() image){
        return this.goodsService.create(dto, image)
    }

    @Delete()
    deleteItem(@Body() id: number) {
        return this.goodsService.delete(id)
    }
}
