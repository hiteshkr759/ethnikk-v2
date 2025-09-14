import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { ItemModel } from "./base";

export class ItemList extends D1ListEndpoint<HandleArgs> {
  _meta = {
    model: ItemModel,
  };
  searchFields = ["name", "product_code"];
  defaultOrderBy = "id DESC";
}
