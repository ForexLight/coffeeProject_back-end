import { AppService } from "./app.provider";
export declare class AppController {
    private appService;
    constructor(appService: AppService);
    getUsers(): {
        id: number;
        name: string;
    }[];
}
