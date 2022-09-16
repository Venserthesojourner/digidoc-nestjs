"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var enviroments_1 = require("./config/enviroments");
var database_module_1 = require("./database/database.module");
var config_1 = require("@nestjs/config");
var dataBase_config_1 = require("./config/dataBase.config");
var file_config_1 = require("./config/file.config");
var endpoint_config_1 = require("./config/endpoint.config");
//Event emitter y schedules
var event_emitter_1 = require("@nestjs/event-emitter");
var schedule_1 = require("@nestjs/schedule");
var mat_protocolo_ingreso_module_1 = require("./modules/maternidad_protocolo_ingreso/mat_protocolo_ingreso.module");
var protocolo_module_1 = require("./modules/protocolo/protocolo.module");
var typeorm_1 = require("@nestjs/typeorm");
var episodio_module_1 = require("./modules/episodio/episodio.module");
var paciente_module_1 = require("./modules/paciente/paciente.module");
var diagnostico_module_1 = require("./modules/diagnostico/diagnostico.module");
var diagnostico_feto_module_1 = require("./modules/diagnostico-feto/diagnostico-feto.module");
var diagnostico_signos_vitales_module_1 = require("./modules/diagnostico-signos-vitales/diagnostico-signos-vitales.module");
var diagnostico_tacto_vaginal_module_1 = require("./modules/diagnostico-tacto-vaginal/diagnostico-tacto-vaginal.module");
var diagnostico_estudios_module_1 = require("./modules/diagnostico-estudios/diagnostico-estudios.module");
var cli_financiador_module_1 = require("./modules/cli-financiador/cli-financiador.module");
var cli_financiador_paciente_module_1 = require("./modules/cli-financiador-paciente/cli-financiador-paciente.module");
var cli_documento_digitalizado_module_1 = require("./modules/cli-documento-digitalizado/cli-documento-digitalizado.module");
var cli_documento_digitalizado_adjunto_module_1 = require("./modules/cli-documento-digitalizado-adjunto/cli-documento-digitalizado-adjunto.module");
var antecedentes_module_1 = require("./modules/antecedentes/antecedentes.module");
var antecedentes_partos_module_1 = require("./modules/antecedentes-partos/antecedentes-partos.module");
var antecedentes_metrorragia_module_1 = require("./modules/antecedentes-metrorragia/antecedentes-metrorragia.module");
var antecedentes_ginecobstetricos_module_1 = require("./modules/antecedentes-ginecobstetricos/antecedentes-ginecobstetricos.module");
var vacunas_module_1 = require("./modules/antecedentes-vacunas/vacunas.module");
var serologia_module_1 = require("./modules/antecedentes-serologias/serologia.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.env',
                    load: [dataBase_config_1["default"], file_config_1["default"], endpoint_config_1["default"]],
                    isGlobal: true
                }),
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: process.env.MYSQL_HOST,
                    database: process.env.MYSQL_DATABASE,
                    port: parseInt(process.env.MYSQL_PORT),
                    password: process.env.MYSQL_ROOT_PASSWORD,
                    username: process.env.MYSQL_USER,
                    entities: [__dirname + 'dist/modules/**/entity/*.entity.js'],
                    autoLoadEntities: true,
                    migrations: [__dirname + 'dist/src/database/migrations/*js'],
                    synchronize: false
                }),
                database_module_1.DatabaseModule,
                schedule_1.ScheduleModule.forRoot(),
                event_emitter_1.EventEmitterModule.forRoot(),
                antecedentes_module_1.AntecedentesModule,
                antecedentes_ginecobstetricos_module_1.AntecedentesGinecobstetricosModule,
                antecedentes_metrorragia_module_1.AntecedentesMetrorragiaModule,
                antecedentes_partos_module_1.AntecedentesPartosModule,
                serologia_module_1.AntecedentesSerologiaModule,
                vacunas_module_1.AntecedentesVacunasModule,
                diagnostico_module_1.DiagnosticoModule,
                diagnostico_feto_module_1.DiagnosticoFetoModule,
                diagnostico_signos_vitales_module_1.DiagnosticoSignosVitalesModule,
                diagnostico_tacto_vaginal_module_1.DiagnosticoTactoVaginalModule,
                cli_financiador_module_1.CliFinanciadorModule,
                cli_documento_digitalizado_module_1.CliDocumentoDigitalizadoModule,
                cli_documento_digitalizado_adjunto_module_1.CliDocumentoDigitalizadoAdjuntoModule,
                diagnostico_estudios_module_1.DiagnosticoEstudiosModule,
                episodio_module_1.EpisodioModule,
                mat_protocolo_ingreso_module_1.protocoloMaternidadIngresoModule,
                paciente_module_1.PacienteModule,
                protocolo_module_1.ProtocoloModule,
                cli_financiador_paciente_module_1.CliFinanciadorPacienteModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
