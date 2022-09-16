"use strict";
exports.__esModule = true;
exports.EpisodioProviders = void 0;
var episodio_entity_1 = require("../entity/episodio.entity");
exports.EpisodioProviders = [
    {
        provide: 'EPISODIO_REPOSITORY',
        useFactory: function (dataSource) { return dataSource.getRepository(episodio_entity_1.episodio); },
        inject: ['DATA_SOURCE']
    },
];
