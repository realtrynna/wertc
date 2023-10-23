import { NestFactory } from "@nestjs/core";
import { VersioningType } from "@nestjs/common";

import { AppModule } from "src/app.module";
import { folderGenerator, isFolderChecker, rsaKeyGenerator } from "src/utils";

async function bootstrap() {
    const isFolder = isFolderChecker();

    /**
     * 서버 가동 시 RSA Key 생성(한 번만 실행되어야 하므로 동기적으로 실행)
     */
    if (!isFolder) {
        folderGenerator();
        rsaKeyGenerator();

        console.log("RSA Key has been created successfully.");
    }

    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix("api");
    app.enableVersioning({
        type: VersioningType.URI,
        prefix: "v",
        defaultVersion: "1",
    });

    await app.listen(3000);
}

bootstrap();
