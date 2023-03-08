import { Router, Request, Response } from "express";

const routes = Router();

interface HelloWorldResponse {
  message: string;
}

routes.get("/", (request: Request, response: Response<HelloWorldResponse>) => {
  return response.json({ message: "Hello World" });
});

export default routes;
