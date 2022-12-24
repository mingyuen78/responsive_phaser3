export default class GameUtil {
    static setDataKeyValue(key, value) {
        this[key] = value;
    }
    static getDataKeyValue(key) {
        return this[key];
    }
};