import { AppService } from './app.service';
export declare class CatsController {
    private readonly appService;
    constructor(appService: AppService);
    findAll(): string;
}
