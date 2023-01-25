"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const goods_model_1 = require("./goods.model");
const files_service_1 = require("../files/files.service");
let GoodsService = class GoodsService {
    constructor(goodsRepository, fileService) {
        this.goodsRepository = goodsRepository;
        this.fileService = fileService;
    }
    async getAll() {
        const goods = await this.goodsRepository.findAll({ include: { all: true } });
        return goods;
    }
    async create(dto, image) {
        const fileName = await this.fileService.createFile(image);
        const goodsItem = await this.goodsRepository.create(Object.assign(Object.assign({}, dto), { img: fileName }));
        return goodsItem;
    }
    async delete(id) {
        return await this.goodsRepository.destroy({
            where: {
                id: id
            }
        });
    }
};
GoodsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(goods_model_1.Goods)),
    __metadata("design:paramtypes", [Object, files_service_1.FilesService])
], GoodsService);
exports.GoodsService = GoodsService;
//# sourceMappingURL=goods.service.js.map