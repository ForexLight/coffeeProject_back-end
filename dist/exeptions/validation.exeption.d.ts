import { HttpException } from "@nestjs/common";
export declare class ValidationExeption extends HttpException {
    message: any;
}
