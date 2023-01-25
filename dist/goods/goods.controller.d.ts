import { GoodsService } from "./goods.service";
import { CreateGoodDto } from "./dto/create-post.dto";
export declare class GoodsController {
    private goodsService;
    constructor(goodsService: GoodsService);
    getAllGoods(): Promise<import("./goods.model").Goods[]>;
    createItem(dto: CreateGoodDto, image: any): Promise<import("./goods.model").Goods>;
    deleteItem(id: number): Promise<number>;
}
