import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    createPost(dto: CreatePostDto, image: any): Promise<import("./posts.model").Post>;
}
