// Задание 1 – Создать объект counter всеми возможными способами;
// способ 1
const counter = {};
counter.count = 0;

// способ 2
const counter = new Object();
counter.count = 0;

// способ 3
class Counter {}
const counter = new Counter();
counter.count = 0;

// способ 4
const counter = new Map();
counter.set("count", 0);

// способ 5
const counter = new Map([["count", 0]]);

// способ 6
const counter = Object.fromEntries([["count", 0]]);

// способ 7
const key = ["count"];
const value = [0];
const counter = key.reduce((acc, cur, i) => ({ ...acc, [cur]: value[i] }), {});

// способ 8
const count = [1, 2, 3];
const json = JSON.stringify({ ...count });
const counter = JSON.parse(json);

// Задание 2 – Скопировать объект counter всеми возможными способами;
// способ 1
const counter = { count: 0 };
const counterCopy = Object.assign({}, counter);

// способ 2
const counter = { count: 0 };
const counterCopy = {};
for (let key in counter) {
    counterCopy[key] = counter[key];
}

// способ 3
const counter = { count: 0 };
let counterCopy = Object.create(
    Object.getPrototypeOf(counter),
    Object.getOwnPropertyDescriptors(counter)
);

// способ 4
const counter = { count: 0 };
const counterCopy = { ...counter };

// способ 5
const counter = { count: 0 };
let counterCopy = structuredClone(counter);

// способ 6
const counter = { count: 0 };
const counterCopy = _.cloneDeep(counter);

// способ 7
const counter = { count: 0 };
let counterCopy = JSON.parse(JSON.stringify(counter));

// способ 8
const deepClone = (obj) => {
    if (obj === null) return null;
    const clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
        (key) =>
            (clone[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
    );
    if (Array.isArray(obj)) {
        clone.length = obj.length;
        return Array.from(clone);
    }
    return clone;
};
const counter = { count: 0 };
const counterCopy = deepClone(counter);

// способ 9
class Counter {
    count = 0;
}
const counter = new Counter();
const counterCopy = new Counter();

// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
// способ 1
function makeCounter() {
    const counter = 0;
    while (counter <= 5) {
        console.log(counter++);
    }
}

// способ 2
const makeCounter = function () {
    const counter = 0;
    while (counter <= 5) {
        console.log(counter++);
    }
};

// способ 3
const makeCounter = () => {
    const counter = 0;
    while (counter <= 5) {
        console.log(counter++);
    }
};

// способ 4
const counter = function makeCounter() {
    const counter = 0;
    while (counter <= 5) {
        console.log(counter++);
    }
};

// способ 5
(function makeCounter() {
    const counter = 0;
    while (counter <= 5) {
        console.log(counter++);
    }
})();

// способ 6
const makeCounter = new Function(
    "counter = 0",
    "while (counter <= 5) { console.log(counter++)}"
);

// способ 7
const counter = {
    makeCounter() {
        const counter = 0;
        while (counter < 5) {
            console.log(counter++);
        }
    },
};

// Продвинутое:
//Задание 1 – Развернуть строку в обратном направлении при помощи методов массивов

function reverseStr(str) {
    return str.split("").reverse().join("");
}

//Задание 2 – Написать функцию глубокого сравнения двух объектов

const deepEqual = (object1, object2) => {
    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);

    if (objKeys1.length !== objKeys2.length) return false;

    for (let key of objKeys1) {
        const value1 = object1[key];
        const value2 = object2[key];

        const isObject = (object) => {
            return object != null && typeof object === "object";
        };

        const isObjects = isObject(value1) && isObject(value2);

        if (
            (isObjects && !deepEqual(value1, value2)) ||
            (!isObjects && value1 !== value2)
        ) {
            return false;
        }
    }
    return true;
};
