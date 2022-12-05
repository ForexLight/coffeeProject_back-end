import { Cat } from './interfaces/cats.interface';
export declare class CatsService {
    private readonly cats;
    create(cat: Cat): void;
    findAll(): Cat[];
}
