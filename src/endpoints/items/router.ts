import { Hono } from "hono";
import { fromHono } from "chanfana";
import { ItemCreate } from "./itemCreate";
import { ItemList } from "./itemList";
// import { TaskList } from "./taskList";
// import { TaskCreate } from "./taskCreate";
// import { TaskRead } from "./taskRead";
// import { TaskUpdate } from "./taskUpdate";
// import { TaskDelete } from "./taskDelete";

export const itemsRouter = fromHono(new Hono());

itemsRouter.get("/", ItemList);
itemsRouter.post("/", ItemCreate);