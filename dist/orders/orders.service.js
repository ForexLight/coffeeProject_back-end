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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const orders_model_1 = require("./orders.model");
const sequelize_2 = require("sequelize");
let OrdersService = class OrdersService {
    constructor(ordersRepository) {
        this.ordersRepository = ordersRepository;
    }
    async create(dto) {
        const order = await this.ordersRepository.create(dto);
        return order;
    }
    async getAllOrders() {
        const orders = await this.ordersRepository.findAll();
        return orders;
    }
    async getTodayOrders() {
        const orders = await this.ordersRepository.findAll({
            where: {
                createdAt: {
                    [sequelize_2.Op.between]: [new Date(new Date().getTime() - 24 * 60 * 60 * 1000), new Date()]
                }
            }
        });
        return orders;
    }
    async getWeekOrders() {
        const orders = await this.ordersRepository.findAll({
            where: {
                createdAt: {
                    [sequelize_2.Op.between]: [new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), new Date()]
                }
            }
        });
        return orders;
    }
    async getMonthOrders() {
        const orders = await this.ordersRepository.findAll({
            where: {
                createdAt: {
                    [sequelize_2.Op.between]: [new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000), new Date()]
                }
            }
        });
        return orders;
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(orders_model_1.Order)),
    __metadata("design:paramtypes", [Object])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map