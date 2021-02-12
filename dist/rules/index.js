"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparisonValue = exports.wordRange = exports.url = exports.isEmpty = exports.required = exports.range = exports.numeric = exports.notContain = exports.minWord = exports.minChar = exports.min = exports.maxWord = exports.maxChar = exports.max = exports.matchLength = exports.match = exports.macAddress = exports.ipAddress = exports.integer = exports.equal = exports.email = exports.decimal = exports.containsNumbers = exports.contains = exports.charRange = exports.alphaNumeric = exports.alpha = void 0;
var alpha_1 = require("./alpha");
Object.defineProperty(exports, "alpha", { enumerable: true, get: function () { return alpha_1.alpha; } });
var alphaNumeric_1 = require("./alphaNumeric");
Object.defineProperty(exports, "alphaNumeric", { enumerable: true, get: function () { return alphaNumeric_1.alphaNumeric; } });
var charRange_1 = require("./charRange");
Object.defineProperty(exports, "charRange", { enumerable: true, get: function () { return charRange_1.charRange; } });
var contains_1 = require("./contains");
Object.defineProperty(exports, "contains", { enumerable: true, get: function () { return contains_1.contains; } });
var containsNumbers_1 = require("./containsNumbers");
Object.defineProperty(exports, "containsNumbers", { enumerable: true, get: function () { return containsNumbers_1.containsNumber; } });
var decimal_1 = require("./decimal");
Object.defineProperty(exports, "decimal", { enumerable: true, get: function () { return decimal_1.decimal; } });
var email_1 = require("./email");
Object.defineProperty(exports, "email", { enumerable: true, get: function () { return email_1.email; } });
var equal_1 = require("./equal");
Object.defineProperty(exports, "equal", { enumerable: true, get: function () { return equal_1.equal; } });
var integer_1 = require("./integer");
Object.defineProperty(exports, "integer", { enumerable: true, get: function () { return integer_1.integer; } });
var ipAddress_1 = require("./ipAddress");
Object.defineProperty(exports, "ipAddress", { enumerable: true, get: function () { return ipAddress_1.ipAddress; } });
var macAddress_1 = require("./macAddress");
Object.defineProperty(exports, "macAddress", { enumerable: true, get: function () { return macAddress_1.macAddress; } });
var match_1 = require("./match");
Object.defineProperty(exports, "match", { enumerable: true, get: function () { return match_1.match; } });
var matchLength_1 = require("./matchLength");
Object.defineProperty(exports, "matchLength", { enumerable: true, get: function () { return matchLength_1.matchLength; } });
var max_1 = require("./max");
Object.defineProperty(exports, "max", { enumerable: true, get: function () { return max_1.max; } });
var maxChar_1 = require("./maxChar");
Object.defineProperty(exports, "maxChar", { enumerable: true, get: function () { return maxChar_1.maxChar; } });
var maxWord_1 = require("./maxWord");
Object.defineProperty(exports, "maxWord", { enumerable: true, get: function () { return maxWord_1.maxWord; } });
var min_1 = require("./min");
Object.defineProperty(exports, "min", { enumerable: true, get: function () { return min_1.min; } });
var minChar_1 = require("./minChar");
Object.defineProperty(exports, "minChar", { enumerable: true, get: function () { return minChar_1.minChar; } });
var minWord_1 = require("./minWord");
Object.defineProperty(exports, "minWord", { enumerable: true, get: function () { return minWord_1.minWord; } });
var notContain_1 = require("./notContain");
Object.defineProperty(exports, "notContain", { enumerable: true, get: function () { return notContain_1.notContain; } });
var numeric_1 = require("./numeric");
Object.defineProperty(exports, "numeric", { enumerable: true, get: function () { return numeric_1.numeric; } });
var range_1 = require("./range");
Object.defineProperty(exports, "range", { enumerable: true, get: function () { return range_1.range; } });
var required_1 = require("./required");
Object.defineProperty(exports, "required", { enumerable: true, get: function () { return required_1.required; } });
Object.defineProperty(exports, "isEmpty", { enumerable: true, get: function () { return required_1.isEmpty; } });
var url_1 = require("./url");
Object.defineProperty(exports, "url", { enumerable: true, get: function () { return url_1.url; } });
var wordRange_1 = require("./wordRange");
Object.defineProperty(exports, "wordRange", { enumerable: true, get: function () { return wordRange_1.wordRange; } });
exports.comparisonValue = (val) => {
    if (typeof val === "string")
        val = val.trim();
    return Array.isArray(val) ? val.length : !isNaN(parseFloat(val)) ? parseFloat(val) : (val + "").length;
};
