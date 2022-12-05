declare class CreateCatDto {
    name: string;
    age: number;
    breed: string;
}
declare class UpdateCatDto {
}
export declare class CatsController {
    create(createCatDto: CreateCatDto): string;
    findAll(query: any): string;
    findOne(id: string): string;
    update(id: string, updateCatDto: UpdateCatDto): string;
    remove(id: string): string;
}
export {};
