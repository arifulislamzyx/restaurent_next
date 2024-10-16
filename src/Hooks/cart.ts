export interface ICart{
    _id: { type: String, required: true },
    name: { type: String, required: true },
    recipe: { type: String },
    category: { type: String },
    image: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
}