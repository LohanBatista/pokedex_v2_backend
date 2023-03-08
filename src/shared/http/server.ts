import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import routes from "./routes";
import AppError from "../errors/AppError";
import "@shared/typeorm"; // Import the typeorm connection

const app = express(); // Create a new express application

const port = 3333; // Port to listen to

app.use(cors()); // Allow all origins to access the API
app.use(express.json()); // Allow the API to receive JSON requests
app.use(routes); // Use the routes defined in src/shared/http/routes/index.ts

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    // Handle errors
    if (error instanceof AppError) {
      // If the error is an instance of AppError
      return response.status(error.statusCode).json({
        status: "Error",
        error: error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(port, () => {
  // Start the server
  console.log(`Server is running on port ${port}`);
});
