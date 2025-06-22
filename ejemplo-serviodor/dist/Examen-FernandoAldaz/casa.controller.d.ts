import { CasaService } from '../Examen-FernandoAldaz/casa.service';
export declare class CasaController {
    private readonly casaService;
    constructor(casaService: CasaService);
    getCasa(idCasa: string): {
        id: number;
        nombre: string;
    }[];
}
