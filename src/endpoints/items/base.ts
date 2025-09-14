import { z } from "zod";

export const item = z.object({
    name: z.string(),
    product_code: z.string(),
    color: z.string().optional(),
    price: z.number(),
    img_urls: z.string().optional(),
    stock: z.number().default(0),
    cp: z.number().optional(),
    sp: z.number().optional(),
    created_at: z.string().datetime().optional(),
    updated_at: z.string().datetime().optional(),
    modified_by: z.string().optional(),
});

export const ItemModel = {
  tableName: "items",
  primaryKeys: ["id"],
  schema: item,
  serializer: (obj: Record<string, string | number | boolean>) => {
    return {
      ...obj
    };
  },
  serializerObject: item,
};
