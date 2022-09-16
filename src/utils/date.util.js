"use strict";
exports.__esModule = true;
exports.nameFolderDate = exports.last24Hours = exports.dateNow = exports.dayToStringFormat = exports.timeToStringFormat = void 0;
var luxon_1 = require("luxon");
/**
 * @description funcion que retorna la fecha actual
 * @returns Fecha actual
 */
var timeToStringFormat = function (dateFromSQL) {
    return luxon_1.DateTime.fromSQL(dateFromSQL).toFormat('HH:mm:ss');
};
exports.timeToStringFormat = timeToStringFormat;
var dayToStringFormat = function (dateFromSQL) {
    return luxon_1.DateTime.fromSQL(dateFromSQL).toFormat('yyyy-MM-dd');
};
exports.dayToStringFormat = dayToStringFormat;
var dateNow = function () {
    return luxon_1.DateTime.now();
};
exports.dateNow = dateNow;
var last24Hours = function (date) {
    return date.minus({ hours: 24 });
};
exports.last24Hours = last24Hours;
var nameFolderDate = function (date) {
    if (date === void 0) { date = new Date(); }
    var temp = date;
    if (typeof temp === 'string') {
        temp = new Date(temp);
    }
    return temp.toISOString().split('T')[0].split('-').join('');
};
exports.nameFolderDate = nameFolderDate;
