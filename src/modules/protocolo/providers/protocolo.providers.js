"use strict";
exports.__esModule = true;
exports.ProtocoloProviders = void 0;
var protocolo_entity_1 = require("../entity/protocolo.entity");
exports.ProtocoloProviders = [
    {
        provide: 'PROTOCOLO_REPOSITORY',
        useFactory: function (dataSource) { return dataSource.getRepository(protocolo_entity_1.protocolo); },
        inject: ['DATA_SOURCE']
    },
];
