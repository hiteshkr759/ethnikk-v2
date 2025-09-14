import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { CustomerModel } from "./base";

export class CustomerCreate extends D1CreateEndpoint<HandleArgs> {
  _meta = {
    model: CustomerModel,
    fields: CustomerModel.schema.pick({
        id : true,
        name : true,
        phone_no : true,
        pincode : true,
        address : true,
        points_earned : true,
        created_at : true,
        updated_at : true,
        modified_by : true
    })
  };
}
