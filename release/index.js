const isObject = (v) => {
    return Object.prototype.toString.call(v) === '[object Object]';
};
function mobiusbye(object) {
    const arr = [];
    const trave = (obj, path) => {
        const keys = Object.keys(obj);
        for (let i = 0, len = keys.length; i < len; i++) {
            const key = keys[i];
            const v = obj[key];
            if (isObject(v)) {
                const idx = arr.findIndex((item) => {
                    return item.value === v;
                });
                const p = [...path, key];
                if (idx > -1) {
                    const returnValue = {
                        path: [
                            p,
                            arr[idx].path,
                        ],
                        value: v,
                    };
                    arr.length = 0;
                    return returnValue;
                }
                arr.push({
                    value: v,
                    path: p,
                });
                return trave(v, p);
            }
        }
        return null;
    };
    return trave(object, []);
}
export default mobiusbye;
