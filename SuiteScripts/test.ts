/**
 *
 * @NApiVersion 2.1
 * @NModuleScope Public
 * @NScriptType MapReduceScript
 */

import type {EntryPoints} from "N/types";
import log = require('N/log');

export const getInputData: EntryPoints.MapReduce.getInputData = () => {
  log.debug({ title: 'Get Input Data', details: ''})
}

export const map: EntryPoints.MapReduce.map = (scriptContext) => {
  log.debug({ title: 'Map', details: scriptContext})
}