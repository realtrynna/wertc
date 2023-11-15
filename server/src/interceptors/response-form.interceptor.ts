import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

export class ResponseFormInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            tap({
                next: (value) => {
                    return !!value;
                },
                error: (err) => {
                    console.log("error", err);
                },
            }),
        );
    }
}
