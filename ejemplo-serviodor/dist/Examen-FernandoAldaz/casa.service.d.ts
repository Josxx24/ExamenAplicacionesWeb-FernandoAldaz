export declare class CasaService {
    private casas;
    findAll(): {
        id: number;
        nombre: string;
    }[];
    findById(id: number): {
        id: number;
        nombre: string;
    } | undefined;
}
