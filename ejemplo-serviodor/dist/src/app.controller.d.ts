import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    ejemplo(id: any, hola: any, escuela: any, monto: any): string;
}
