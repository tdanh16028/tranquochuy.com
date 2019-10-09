import * as mongoose from 'mongoose';

const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const EstateLocation = new Schema({
    city: String,
    province: String,
    ward: String,
    address: String
});

const Price = new Schema({
    amount: Number,
    unit: String
});

const EstateProperties = new Schema({
    width: Number, // Chieu rong
    length: Number, // Chieu dai
    area: Number, // Dien tich
    price: Price,
    project: String, // Du an
    direction: String, // Huong
    roadWidth: Number, // Lo gioi (chieu rong mat duong)
    juridical: String // Phap ly
});

export const PostSchema = new Schema({
    title: String,
    postCategory: String, // Loai tin (Ban | Cho Thue)
    estateCategory: String, // Loai BDS (Nha | Dat,...)
    estateLocation: EstateLocation, // Vi tri BDS
    estateProperties: EstateProperties, // Cac thuoc tinh cua BDS
    moreInfo: String,
    images: [String]
});

PostSchema.plugin(mongoose_delete, { deletedAt: true, deletedBy: true });
