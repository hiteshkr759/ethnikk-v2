import { contentJson, D1ReadEndpoint, OpenAPIRoute } from "chanfana";
import { HandleArgs } from "../../types";
import { z } from "zod";
// import { OrderModel } from "../../models/order.model";
// import { CustomerModel } from "../../models/customer.model";
// import { ItemModel } from "../../models/item.model";

export class OrderRead extends OpenAPIRoute {
//   _meta = {
//     docs: {
//       tags: ["Orders"],
//       summary: "Get Order by ID",
//       description: "Fetches an order with customer info and order items",
//       parameters: [
//         {
//           name: "id",
//           in: "path",
//           required: true,
//           schema: { type: "integer" },
//           description: "Order ID",
//         },
//       ],
//     },
//   };

    public schema = {
    // tags: ["Dummy"],
    // summary: "this endpoint is an example",
    // operationId: "example-endpoint", // This is optional
    request: {
      params: z.object({
        id: z.string(),
      }),
    //   body: contentJson(
    //     z.object({
    //       name: z.string(),
    //     }),
    //   ),
    },
    responses: {
      "200": {
        description: "Returns the log details",
        ...contentJson({
          success: Boolean,
          result: z.object({
            msg: z.string(),
            slug: z.string(),
            name: z.string(),
          }),
        }),
      },
    },
  };

  async handle(c:any) {
    console.log("Handling OrderRead request");
    //return c.json({ message: "OrderRead endpoint is under construction" }, 200);
    const id = Number(c.req.param("id"));

    // 1️⃣ Fetch the order
    const orderRes = await c.env.DB.prepare(
      `SELECT * FROM orders WHERE id = ?`
    ).first();
    if (!orderRes) return c.json({ error: "Order not found" }, 404);

    // // 2️⃣ Fetch the customer
    // const customerRes = await c.env.DB.prepare(
    //   `SELECT * FROM customers WHERE id = ?`
    // ).first(orderRes.customer_id);

    // // 3️⃣ Fetch order items
    // const itemsRes = await c.env.DB.prepare(
    //   `SELECT oi.*, i.name, i.product_code, i.price AS item_price
    //    FROM order_items oi
    //    JOIN items i ON i.id = oi.product_id
    //    WHERE oi.order_id = ?`
    // ).all(id);

    // // 4️⃣ Return combined response
    // return c.json({
    //   ...orderRes,
    //   customer: customerRes || null,
    //   order_items: itemsRes.results || [],
    // });
  }
}