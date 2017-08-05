// Modified from https://github.com/LinusU/base32-encode/blob/master/index.js
var alphabet = '0123456789abcdefghijklmnopqrstuv';
//const BASE32_ENCODE_CHAR = alphabet.split('')
export function encodeAscii(str, padding) {
    var bits = 0;
    var value = 0;
    var output = '';
    for (var i = 0, l = str.length; i < l; i++) {
        value = (value << 8) | str.charCodeAt(i);
        bits += 8;
        while (bits >= 5) {
            output += alphabet[(value >>> (bits - 5)) & 31];
            bits -= 5;
        }
    }
    if (bits > 0) {
        output += alphabet[(value << (5 - bits)) & 31];
    }
    if (padding) {
        while ((output.length % 8) !== 0) {
            output += '=';
        }
    }
    return output;
}
export function encode(u8array, padding) {
    var bits = 0;
    var value = 0;
    var output = '';
    for (var i = 0, l = u8array.length; i < l; i++) {
        value = (value << 8) | u8array[i];
        bits += 8;
        while (bits >= 5) {
            output += alphabet[(value >>> (bits - 5)) & 31];
            bits -= 5;
        }
    }
    if (bits > 0) {
        output += alphabet[(value << (5 - bits)) & 31];
    }
    if (padding) {
        while ((output.length % 8) !== 0) {
            output += '=';
        }
    }
    return output;
}
/*function encodeAscii(str, padding) {
    var v1, v2, v3, v4, v5, output = '', length = str.length;
    for (var i = 0, count = parseInt(length / 5) * 5; i < count;) {
        v1 = str.charCodeAt(i++);
        v2 = str.charCodeAt(i++);
        v3 = str.charCodeAt(i++);
        v4 = str.charCodeAt(i++);
        v5 = str.charCodeAt(i++);
        output += BASE32_ENCODE_CHAR[v1 >>> 3] +
            BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
            BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
            BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
            BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
            BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
            BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] +
            BASE32_ENCODE_CHAR[v5 & 31];
    }

    // remain char
    var remain = length - count;
    if (remain === 1) {
        v1 = str.charCodeAt(i);
        output += BASE32_ENCODE_CHAR[v1 >>> 3] +
            BASE32_ENCODE_CHAR[(v1 << 2) & 31]// + '======';
    } else if (remain === 2) {
        v1 = str.charCodeAt(i++);
        v2 = str.charCodeAt(i);
        output += BASE32_ENCODE_CHAR[v1 >>> 3] +
            BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
            BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
            BASE32_ENCODE_CHAR[(v2 << 4) & 31]// + '====';
    } else if (remain === 3) {
        v1 = str.charCodeAt(i++);
        v2 = str.charCodeAt(i++);
        v3 = str.charCodeAt(i);
        output += BASE32_ENCODE_CHAR[v1 >>> 3] +
            BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
            BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
            BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
            BASE32_ENCODE_CHAR[(v3 << 1) & 31]// + '===';
    } else if (remain === 4) {
        v1 = str.charCodeAt(i++);
        v2 = str.charCodeAt(i++);
        v3 = str.charCodeAt(i++);
        v4 = str.charCodeAt(i);
        output += BASE32_ENCODE_CHAR[v1 >>> 3] +
            BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
            BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
            BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
            BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
            BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
            BASE32_ENCODE_CHAR[(v4 << 3) & 31]// + '=';
    }

    if (padding) {
        while ((output.length % 8) !== 0) {
            output += '='
        }
    }

    return output
}*/
//# sourceMappingURL=b32.js.map