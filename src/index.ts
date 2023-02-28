const isObject = (v: any) => {
  return Object.prototype.toString.call(v) === '[object Object]';
}

function mobiusbye(object: Record<any, any>) {
  const arr: {
    value: any;
    path: string[];
  }[] = [];

  const trave = (obj: Record<any, any>, path: string[]): null|{
    path: string[][];
    value: any;
  } => {
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
