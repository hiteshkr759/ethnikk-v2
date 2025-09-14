import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { ItemModel } from "./base";

export class ItemCreate extends D1CreateEndpoint<HandleArgs> {
  _meta = {
    model: ItemModel,
    fields: ItemModel.schema.pick({
        // this is purposely missing the id, because users shouldn't be able to define it
        name: true,
        product_code: true,
        color: true,
        price: true,
        img_urls: true,
        stock: true,
        cp: true,
        sp: true,
    }),
  };
}
