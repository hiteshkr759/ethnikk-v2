import { D1ReadEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { ItemModel } from "./base";

export class ItemRead extends D1ReadEndpoint<HandleArgs> {
  _meta = {
    model: ItemModel,
  };
}
