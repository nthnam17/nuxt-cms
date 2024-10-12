import moment from 'moment';

// Check ký tự đặc biệt
const isHasSpecial = (str: string) => {
    let sp = "~;+@#$%^&*(){}`\\! |=-'";
    let strLower = str.toLowerCase();
    let isOK = false;
    for (let i = 0; i < strLower.length; i++) {
        if (sp.indexOf(strLower[i]) >= 0) {
            isOK = true;
            break;
        }
    }
    return isOK;
};

// Check tiếng việt
const isHasVietnamese = (str: string) => {
    const vn = 'àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ';
    const strLower = str.toLowerCase();

    let isOK = false;
    for (let i = 0; i < strLower.length; i++) {
        if (vn.indexOf(strLower[i]) >= 0) {
            isOK = true;
            break;
        }
    }
    return isOK;
};

const isNumeric = (str: any) => {
    if (typeof str != 'string') return false; // we only process strings!
    return (
        !isNaN(str as any) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str))
    ); // ...and ensure strings of whitespace fail
};

const convetVietnamese = (str: string) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str
        .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
        .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp

    // Thay ký tự đĐ
    str = str.replace(/[đĐ]/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    //str = str.replace(/(\s+)/g, '-');

    // Xóa ký tự - liên tiếp
    str = str.replace(/-+/g, '-');

    // xóa phần dư - ở đầu & cuối
    str = str.replace(/^-+|-+$/g, '');

    // return
    return str;
};

const formatNumber = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

// Check rỗng
const isNullOrEmpty = (str: string) => {
    return str === null || str === undefined || str === 'undefined' || str === 'null' || str === '' || str.length === 0;
};

const isObject = (obj: object) => {
    return obj == null || obj == undefined;
};

// regex check sdt mobifone
const isMobilePhone = (str: string) => {
    const phoneNot84 = /[0]{1}[35789]{1}[0-9]{8}$/;
    const phone84 = /^[84]{2}[35789]{1}[0-9]{8}$/;
    const phone024 = /^[024]{2}[23456789]{1}[0-9]{8}$/;
    return phoneNot84.test(str) || phone84.test(str) || phone024.test(str);
};

// check email
const isEmail = (str: string) => {
    const email =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.test(str);
};

// check userName
const isUserName = (str: string) => {
    const userName = /^\w+$/;
    return userName.test(str);
};

const isNumber = (str: string) => {
    try {
        // eslint-disable-next-line no-unused-vars
        const number = parseInt(str);
        return true;
    } catch {
        return false;
    }
};

// max length
function validateMaxLength(value: string, maxLength = 250): boolean {
    if (value.length > maxLength) {
        return false;
    }
    return true;
}

// check formMoney
const formatMoney = (str: any) => {
    try {
        return str == null || str.amount == null
            ? ''
            : str.amount
                  .toString()
                  .replace(/\D/g, '')
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    } catch (e) {}
};

// check formMoney
const toSlug = (str: string) => {
    try {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str
            .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
            .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp

        // Thay ký tự đĐ
        str = str.replace(/[đĐ]/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // Xóa ký tự - liên tiếp
        str = str.replace(/-+/g, '-');

        // xóa phần dư - ở đầu & cuối
        str = str.replace(/^-+|-+$/g, '');

        // return
        return str;
    } catch (err) {
        console.error(err);
        return '';
    }
};

/**
 * formatDate
 * @param num datetime type number
 * @param typeFormat string format 'DD/MM/YYYY', 'DD/MM/YYYY hh:mm:ss'
 * @returns
 */
const formatDate = (num: any, typeFormat = 'DD/MM/YYYY') => {
    let date = new Date(num);
    if (isNaN(date.getTime())) {
        return null;
    }
    return moment(date).format(typeFormat);
};

const convertDateToTimestamp = (strDate: string) => {
    const date = new Date(strDate);
    return date.getTime();
};

const toHHMMSS = (value: number) => {
    const dateObj = new Date(value);
    const hours = dateObj.getUTCHours() + 7;
    const minutes = dateObj.getUTCMinutes();
    const seconds = dateObj.getSeconds();

    const timeString =
        hours.toString().padStart(2, '0') +
        ':' +
        minutes.toString().padStart(2, '0') +
        ':' +
        seconds.toString().padStart(2, '0');

    return timeString;
};

/**
 * formatDateTime
 * @param _date
 * @param flag true: start 00:00:00, false: end 23:59:59
 */
const formatDateTime = (_date: any, flag: boolean) => {
    const dateString = moment(_date).format('YYYY-MM-DD');
    const _flag = flag ? 'T00:00:00' : 'T23:59:59';

    var dateFormat = new Date(dateString + _flag);
    return dateFormat.getTime();
};

/**
 * trimObjectProperties
 * @param objectToTrim
 * @returns
 */
const trimObjectProperties = (objectToTrim: any) => {
    for (var key in objectToTrim) {
        if (objectToTrim[key] && typeof objectToTrim[key] == 'object') trimObjectProperties(objectToTrim[key]);
        else if (objectToTrim[key])
            objectToTrim[key] = typeof objectToTrim[key] == 'string' ? objectToTrim[key].trim() : objectToTrim[key];
    }

    return objectToTrim;
};

/**
 * isValidURL
 * @param string
 * @returns
 */
const isValidURL = (string: string) => {
    var res = string.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    );
    return res !== null;
};

/**
 * required
 * @param str
 * @returns
 */
const required = (str: string) => (e: string | null) => !!e?.toString().trim() || str;

export {
    isEmail,
    isMobilePhone,
    toSlug,
    isUserName,
    isHasVietnamese,
    isHasSpecial,
    isNullOrEmpty,
    isObject,
    formatMoney,
    isNumber,
    validateMaxLength,
    formatDate,
    convertDateToTimestamp,
    convetVietnamese,
    toHHMMSS,
    formatDateTime,
    trimObjectProperties,
    formatNumber,
    isValidURL,
    required,
    isNumeric,
};
