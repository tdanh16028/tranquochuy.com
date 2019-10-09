import {Inject, Injectable} from '@nestjs/common';
import {POST_MODEL} from "../constants";
import {Model} from "mongoose";
import {Post} from "./post.interface";

@Injectable()
export class PostsService {

    constructor(@Inject(POST_MODEL) private readonly postModel: Model<Post>) {}

    list(): Promise<Post[]> {
        return this.postModel.find().exec();
    }

    get(id: string): Promise<Post> {
        return this.postModel.findById(id).exec();
    }

    create(post: Partial<Post>): Promise<Post> {
        const createdPost = new this.postModel(post);
        return createdPost.save();
    }

    update(id: string, data: Partial<Post>): Promise<Post> {
        return this.postModel.findByIdAndUpdate(id, data).exec();
    }
}
