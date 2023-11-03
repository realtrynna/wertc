import { NestFactory } from "@nestjs/core";
import { VersioningType } from "@nestjs/common";

import { AppModule } from "src/app.module";
import { folderGenerator, isFolderChecker } from "src/utils";

async function bootstrap() {
    const isFolder = isFolderChecker();

    /**
     * 서버 가동 시 RSA Key 생성(한 번만 실행되어야 하므로 동기적으로 실행)
     */
    if (!isFolder) {
        folderGenerator();
    }

    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix("api")
        .enableVersioning({
            type: VersioningType.URI,
            prefix: "v",
            defaultVersion: "1",
        })
        .listen(3000, "0.0.0.0");
}

bootstrap();
