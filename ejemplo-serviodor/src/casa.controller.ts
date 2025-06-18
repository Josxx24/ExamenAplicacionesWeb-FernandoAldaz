import { Controller, Get, Query, NotFoundException } from '@nestjs/common';
import { CasaService } from './casa.service';

@Controller('casa')
export class CasaController {
  constructor(private readonly casaService: CasaService) {}

  @Get()
  getCasa(@Query('idCasa') idCasa: string) {
    if (idCasa) {
      const id = parseInt(idCasa);
      const casa = this.casaService.findById(id);
      if (!casa) {
        throw new NotFoundException('No se encuentra');
      }
      return [casa];
    }
    return this.casaService.findAll();
  }
}
