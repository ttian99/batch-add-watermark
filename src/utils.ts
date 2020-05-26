export function $(id: any) {
    return document.getElementById(id);
}

/***
 * 由于未格式化的对象不能克隆：An object could not be cloned
 */
export function jsonFormat(obj: Object) {
    return JSON.parse(JSON.stringify(obj));
}