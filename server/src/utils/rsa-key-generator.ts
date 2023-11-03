import { appendFile } from "node:fs/promises";
import { pki } from "node-forge";

import { rsaPemKeyFolderSavePath } from "src/config/constant";

/**
 * 동기적으로 RSA Key(Private, Public) 생성
 */
export function rsaKeyGenerator() {
    const rsa = pki.rsa;

    rsa.generateKeyPair({ bits: 2048, workers: 2 }, (err, data) => {
        const privatePemKey = pki.privateKeyToPem(data.privateKey);
        const publicPemKey = pki.publicKeyToPem(data.publicKey);

        appendFile(
            rsaPemKeyFolderSavePath + "private.pem",
            privatePemKey,
            "utf-8",
        );
        appendFile(
            rsaPemKeyFolderSavePath + "public.pem",
            publicPemKey,
            "utf-8",
        );
    });
}
