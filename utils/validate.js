"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.onValidate = onValidate;
function onValidate(value, states) {
        return value !== null && value.length > 3 ? states[0] : states[1];
}