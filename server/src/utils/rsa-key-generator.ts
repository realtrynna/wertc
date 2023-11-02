import fs from "fs";
import { pki } from "node-forge";

import { rsaPemKeySaveFolderPath } from "src/config/constant";

const fsPromises = fs.promises;

/**
 * 동기적으로 RSA Key(Private, Public) 생성
 */
export function rsaKeyGenerator() {
    const rsa = pki.rsa;

    rsa.generateKeyPair({ bits: 2048, workers: 2 }, (err, data) => {
        console.log("여긴 언제 실행?", data);
        const privatePemKey = pki.privateKeyToPem(data.privateKey);
        const publicPemKey = pki.publicKeyToPem(data.publicKey);

        fs.writeFile(
            rsaPemKeySaveFolderPath + "private.pem",
            privatePemKey,
            "utf-8",
            (err) => {
                if (err) {
                    console.log("에러");
                } else {
                    console.log("노 에러");
                }
            },
        );
        fs.writeFile(
            rsaPemKeySaveFolderPath + "public.pem",
            publicPemKey,
            "utf-8",
            (err) => {
                if (err) {
                    console.log("에러");
                } else {
                    console.log("노 에러");
                }
            },
        );
    });
}
