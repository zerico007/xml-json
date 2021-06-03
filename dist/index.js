"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xml_js_1 = __importDefault(require("xml-js"));
/** convert XML document to JSON */
const convertToJSON = (xml) => JSON.parse(xml_js_1.default.xml2json(xml, { compact: true, spaces: 4 }));
const isFirstKeyAttribute = (obj) => {
    const firstKey = Object.keys(obj)[0];
    if (firstKey === "_attributes") {
        return true;
    }
    else
        return false;
};
/** Get value of first propery from an object */
const getValue = (obj) => {
    const firstValueOfObject = Object.values(obj)[0];
    //Check if object is empty
    if (!Object.keys(obj).length)
        return null;
    if (Object.keys(obj).length === 1) {
        if (isFirstKeyAttribute(obj))
            return obj;
        if (Array.isArray(firstValueOfObject))
            return firstValueOfObject.map((item) => getValue(item));
        //return value of first property, with whitespace removed if it's a string
        if (typeof firstValueOfObject === "string")
            return firstValueOfObject.trim();
        if (typeof firstValueOfObject === "object")
            return formatObject(firstValueOfObject);
    }
    else if (Object.keys(obj).length > 1) {
        return formatObject(obj);
    }
};
/** Format response object */
const formatObject = (obj) => {
    if (Object.keys(obj).length > 1) {
        for (const property in obj) {
            if (property === "_attributes") {
                obj[property] = obj[property];
            }
            else {
                obj[property] = getValue(obj[property]);
            }
        }
        return obj;
    }
    else {
        return getValue(obj);
    }
};
const toJSON = (xml) => {
    const jsonResult = convertToJSON(xml);
    const formattedJSONResult = formatObject(jsonResult);
    return formattedJSONResult;
};
exports.default = toJSON;
