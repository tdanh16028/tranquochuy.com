import {Connection} from 'mongoose';
import {DATABASE_CONNECTION, POST_MODEL} from "../constants";
import {PostSchema} from "./post.schema";
import {Post} from "./post.interface";

export const postProviders = [
    {
        provide: POST_MODEL,
        useFactory: (connection: Connection) => connection.model<Post>('Post', PostSchema, 'Post'),
        inject: [DATABASE_CONNECTION],
    },
];
