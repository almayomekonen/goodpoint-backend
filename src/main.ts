import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import { AppModule } from "./app.module";
import "./console-log-obj";

// הוסף את השורות האלה:
import { config } from "dotenv";
config({ path: ".env.development" });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // הגדרת CORS עם תמיכה בcredentials ודומיינים מורשים
  app.enableCors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:3000", // לפיתוח
        "https://goodpoint-frontend.vercel.app", // פרודקשן
      ];

      // אפשר לכל preview environment של Vercel
      if (
        origin &&
        origin.includes("goodpoint-frontend-") &&
        origin.includes(".vercel.app")
      ) {
        return callback(null, true);
      }

      // אפשר לorigin מהרשימה המורשית
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true, // מאפשר cookies
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  });

  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());

  if (process.env.NODE_ENV !== "production") {
    const { apiDocsMiddleware } = await import(
      "./common/middleware/apiDocs.middleware"
    );
    const { bootstrapSwagger } = await import("./lib/swagger/bootstrapSwagger");
    apiDocsMiddleware(app);
    await bootstrapSwagger(app);
  }

  const port = process.env.PORT || 8080;
  console.log("Starting server on port:", port); // הוסף debug
  await app.listen(port);
  console.log(`Server running on http://localhost:${port}`); // הוסף debug
}
bootstrap();
