import { CreateGoodDto } from "./dto/create-post.dto";
import { Goods } from "./goods.model";
import { FilesService } from "../files/files.service";
export declare class GoodsService {
    private goodsRepository;
    private fileService;
    constructor(goodsRepository: typeof Goods, fileService: FilesService);
    getAll(): Promise<Goods[]>;
    create(dto: CreateGoodDto, image: any): Promise<Goods>;
    delete(id: number): Promise<number>;
}
