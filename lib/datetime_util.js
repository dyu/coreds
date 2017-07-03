import * as numeral from 'numeral';
import { regexDate, utcToLocal } from './util';
var //MILLIS_PER_DAY = 1000 * 60 * 60 * 24,
monthRegularArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], monthLeapArray = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export function newTimeFormatArray(one, ago, fromNow, aSecondAgo, justNow, seconds, minute, minutes, hour, hours, yesterday, tomorrow, days, lastWeek, nextWeek, weeks, lastMonth, nextMonth, months, lastYear, nextYear, years, lastCentury, nextCentury, centuries) {
    return [
        [2, aSecondAgo, justNow],
        [60, seconds, 1],
        [120, one + " " + minute + " " + ago, one + " " + minute + " " + fromNow],
        [3600, minutes, 60],
        [7200, one + " " + hour + " " + ago, one + " " + hour + " " + fromNow],
        [86400, hours, 3600],
        [172800, yesterday, tomorrow],
        [604800, days, 86400],
        [1209600, lastWeek, nextWeek],
        [2419200, weeks, 604800],
        [4838400, lastMonth, nextMonth],
        [29030400, months, 2419200],
        [58060800, lastYear, nextYear],
        [2903040000, years, 29030400],
        [5806080000, lastCentury, nextCentury],
        [58060800000, centuries, 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
}
export var defaultTimeFormatArray = newTimeFormatArray("1", "ago", "from now", "a second ago", "just now", "seconds", "minute", "minutes", "hour", "hours", "yesterday", "tomorrow", "days", "last week", "next week", "weeks", "last month", "next month", "months", "last year", "next year", "years", "last century", "next century", "centuries");
export function prettyDate(ts, targetTimeFormatArray, ago, fromNow) {
    if (ago === void 0) { ago = 'ago'; }
    if (fromNow === void 0) { fromNow = 'from now'; }
    var seconds = (new Date().getTime() - ts) / 1000, token = ago, list_choice = 1, timeFormatArray = targetTimeFormatArray || defaultTimeFormatArray;
    if (seconds < 0) {
        seconds = Math.abs(seconds);
        token = fromNow;
        list_choice = 2;
    }
    var i = 0, format;
    while (format = timeFormatArray[i++])
        if (seconds < format[0]) {
            if (typeof format[2] === 'number')
                return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
            return format[list_choice];
        }
    // TODO handle invalid date (out-of-bounds)
    return '' + new Date(ts);
}
/*
    token:     description:             example:
    #YYYY#     4-digit year             1999
    #YY#       2-digit year             99
    #MMMM#     full month name          February
    #MMM#      3-letter month name      Feb
    #MM#       2-digit month number     02
    #M#        month number             2
    #DDDD#     full weekday name        Wednesday
    #DDD#      3-letter weekday name    Wed
    #DD#       2-digit day number       09
    #D#        day number               9
    #th#       day ordinal suffix       nd
    #hhh#      military/24-based hour   17
    #hh#       2-digit hour             05
    #h#        hour                     5
    #mm#       2-digit minute           07
    #m#        minute                   7
    #ss#       2-digit second           09
    #s#        second                   9
    #ampm#     "am" or "pm"             pm
    #AMPM#     "AM" or "PM"             PM
*/
export function formatDate2(date, fmt) {
    var YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th;
    YY = ((YYYY = date.getFullYear()) + "").slice(-2);
    MM = (M = date.getMonth() + 1) < 10 ? ('0' + M) : M;
    MMM = (MMMM = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][M - 1]).substring(0, 3);
    DD = (D = date.getDate()) < 10 ? ('0' + D) : D;
    DDD = (DDDD = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()]).substring(0, 3);
    th = (D >= 10 && D <= 20) ? 'th' : ((dMod = D % 10) == 1) ? 'st' : (dMod == 2) ? 'nd' : (dMod == 3) ? 'rd' : 'th';
    fmt = fmt.replace("#YYYY#", YYYY).replace("#YY#", YY).replace("#MMMM#", MMMM).replace("#MMM#", MMM).replace("#MM#", MM).replace("#M#", M).replace("#DDDD#", DDDD).replace("#DDD#", DDD).replace("#DD#", DD).replace("#D#", D).replace("#th#", th);
    h = (hhh = date.getHours());
    if (h == 0)
        h = 24;
    if (h > 12)
        h -= 12;
    hh = h < 10 ? ('0' + h) : h;
    AMPM = (ampm = hhh < 12 ? 'am' : 'pm').toUpperCase();
    mm = (m = date.getMinutes()) < 10 ? ('0' + m) : m;
    ss = (s = date.getSeconds()) < 10 ? ('0' + s) : s;
    return fmt.replace("#hhh#", hhh).replace("#hh#", hh).replace("#h#", h).replace("#mm#", mm).replace("#m#", m).replace("#ss#", ss).replace("#s#", s).replace("#ampm#", ampm).replace("#AMPM#", AMPM);
}
export function toDay(date) {
    return daysArray[date.getDay()];
}
export function toD(date) {
    var buf = '', d = date.getDate();
    if (d < 10)
        buf += '0';
    buf += d;
    return buf;
}
export function toMD(date, separator) {
    var y = '', m = date.getMonth() + 1, d = date.getDate();
    if (m < 10)
        y += '0';
    y = y + m + separator;
    if (d < 10)
        y += '0';
    y += d;
    return y;
}
export function toYM(date, separator) {
    var y = date.getFullYear() + separator, m = date.getMonth() + 1;
    if (m < 10)
        y += '0';
    y = y + m;
    return y;
}
export function toYMD(date, separator) {
    var y = date.getFullYear() + separator, m = date.getMonth() + 1, d = date.getDate();
    if (m < 10)
        y += '0';
    y = y + m + separator;
    if (d < 10)
        y += '0';
    y += d;
    return y;
}
export function toYMDTime(dt, separator) {
    var date = new Date(dt.getTime()), time;
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    time = dt.getTime() - date.getTime();
    return toYMD(date, separator) + ' ' + numeral(Math.floor(time / 1000)).format('00:00:00');
}
export function removeTime(date) {
    date.setHours(0, 0, 0, 0);
    return date;
}
export function formatTime(v) {
    return isNaN(v) ? '' : numeral(v).format('00:00:00');
}
export function formatDate(v) {
    return !v || isNaN(v) ? '' : toYMD(new Date(utcToLocal(v)), '/');
}
export function formatDateTime(v) {
    return !v || isNaN(v) ? '' : toYMDTime(new Date(utcToLocal(v)), '/');
}
export function isValidDateStr(text) {
    if (!regexDate.test(text) || isNaN(Date.parse(text))) {
        return null;
    }
    var y = parseInt(text.substring(0, 4), 10), m = parseInt(text.substring(5, 7), 10), d = parseInt(text.substring(8, 10), 10);
    // Check the ranges of m and y
    if (y < 1000 || y > 3000 || m == 0 || m > 12)
        return null;
    // Adjust for leap ys
    var monthArray = (y % 400 == 0 || (y % 100 != 0 && y % 4 == 0)) ? monthLeapArray : monthRegularArray;
    // Check the range of the d
    return d > 0 && d <= monthArray[m - 1] ? new Date(y, m - 1, d).getTime() : null;
}
export function isValidDateTimeStr(dt) {
    var text = dt.substring(0, 10);
    if (!regexDate.test(text) || isNaN(Date.parse(text))) {
        return null;
    }
    var y = parseInt(text.substring(0, 4), 10), m = parseInt(text.substring(5, 7), 10), d = parseInt(text.substring(8, 10), 10), v;
    // Check the ranges of m and y
    if (y < 1000 || y > 3000 || m == 0 || m > 12)
        return null;
    // Adjust for leap ys
    var monthArray = (y % 400 == 0 || (y % 100 != 0 && y % 4 == 0)) ? monthLeapArray : monthRegularArray;
    // Check the range of the d
    if (d > 0 && d <= monthArray[m - 1] && (v = numeral().unformat(dt.substring(11))) <= 86399)
        return new Date(y, m - 1, d).getTime() + (v * 1000);
    return null;
}
//# sourceMappingURL=datetime_util.js.map