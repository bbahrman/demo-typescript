/**
 *
 * @NApiVersion 2.1
 * @NModuleScope Public
 * @NScriptType MapReduceScript
 */
define(["require", "exports", "N/log"], function (require, exports, log) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.map = exports.getInputData = void 0;
    const getInputData = () => {
        log.debug({ title: 'Get Input Data', details: '' });
    };
    exports.getInputData = getInputData;
    const map = (scriptContext) => {
        log.debug({ title: 'Map', details: scriptContext });
    };
    exports.map = map;
});
