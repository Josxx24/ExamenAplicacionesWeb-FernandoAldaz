"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasaController = void 0;
const common_1 = require("@nestjs/common");
const casa_service_1 = require("./casa.service");
let CasaController = class CasaController {
    casaService;
    constructor(casaService) {
        this.casaService = casaService;
    }
    getCasa(idCasa) {
        if (idCasa) {
            const id = parseInt(idCasa);
            const casa = this.casaService.findById(id);
            if (!casa) {
                throw new common_1.NotFoundException('No se encuentra');
            }
            return [casa];
        }
        return this.casaService.findAll();
    }
};
exports.CasaController = CasaController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('idCasa')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CasaController.prototype, "getCasa", null);
exports.CasaController = CasaController = __decorate([
    (0, common_1.Controller)('casa'),
    __metadata("design:paramtypes", [casa_service_1.CasaService])
], CasaController);
//# sourceMappingURL=casa.controller.js.map