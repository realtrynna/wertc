import fs from "fs";
import forge from "node-forge";

import { rsaPemKeySaveFolderPath } from "src/config/constant";

/**
 * 동기적으로 RSA Key(Private, Public) 생성
 */
export function rsaKeyGenerator() {
    const rsa = forge.pki.rsa;

    rsa.generateKeyPair({ bits: 2048, workers: 2 }, (err, data) => {
        const privatePemKey = forge.pki.privateKeyToPem(data.privateKey);
        const publicPemKey = forge.pki.publicKeyToPem(data.publicKey);

        fs.writeFileSync(
            rsaPemKeySaveFolderPath + "private.pem",
            privatePemKey,
        );
        fs.writeFileSync(rsaPemKeySaveFolderPath + "public.pem", publicPemKey);
    });
}
