import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { CustomerModel } from "./base";

export class CustomerList extends D1ListEndpoint<HandleArgs> {
  _meta = {
    model: CustomerModel,
  };

  searchFields = ["name", "phone_no", "address"];
  defaultOrderBy = "id DESC";
}
