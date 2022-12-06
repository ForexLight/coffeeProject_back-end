import {HttpException, HttpStatus} from "@nestjs/common";
import {response} from "express";

export class ValidationException extends HttpException {
    message

    constructor(response) {
        super(response, HttpStatus.BAD_REQUEST);
        this.message = response
    }
}
