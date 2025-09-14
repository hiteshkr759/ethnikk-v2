import { D1DeleteEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { ItemModel } from "./base";

export class ItemDelete extends D1DeleteEndpoint<HandleArgs> {
  _meta = {
    model: ItemModel,
  };
}
