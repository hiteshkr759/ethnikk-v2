import { z } from "zod";

export const customer = z.object({
  id : z.number().int().optional(),
  name : z.string().min(1, "Name is required"),
  phone_no : z.string().min(1, "Phone number is required"),
  pincode : z.string().min(1, "Pincode is required"),
  address : z.string().min(1, "Address is required"),
  points_earned : z.number().min(0, "Points earned must be positive").default(200),
  created_at : z.string().datetime().optional(),
  updated_at : z.string().datetime().optional(),
  modified_by : z.string().optional()
});

export const CustomerModel = {
  tableName: "customers",
  primaryKeys: ["id"],
  schema: customer,
  serializer: (obj: Record<string, string | number | boolean>) => {
    return {
      ...obj
    };
  },
  serializerObject: customer,
};
