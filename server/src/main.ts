import { NestFactory } from "@nestjs/core";

import { AppModule } from "src/app.module";

async function bootstrap() {

    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix("api")
        .listen(3000, "0.0.0.0");
}

bootstrap();
