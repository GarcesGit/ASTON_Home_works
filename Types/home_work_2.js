/* Написать функцию getLength, принимающую на вход валидное JS значение любого типа. 
Функция должна вывести в консоль длину (length) этого значения, если это возможно, иначе вывести в консоль 0. */

function getLength(value) {
    if (typeof value !== "string" && !Array.isArray(value)) {
        console.log(0);
        return;
    }

    console.log(value.length);
}
getLength(true);

/* Напишите функцию compare, принимающую на вход два объекта Node, и возвращающую true,
если они имеют одинаковую структуру и значения и false в ином случае. */

function compare(n1, n2) {
    if (n1 === null && n2 === null) {
        return true;
    }
    if (n1 === null || n2 === null) {
        return false;
    }

    while (n1 !== null && n2 !== null) {
        if (n1.data !== n2.data) {
            return false;
        }

        if (n1.left === null) {
            n1 = n1.right;
        } else {
            let pred = n1.left;
            while (pred.right !== null && pred.right !== n1) {
                pred = pred.right;
            }

            if (pred.right === null) {
                pred.right = n1;
                n1 = n1.left;
            } else {
                pred.right = null;
                n1 = n1.right;
            }
        }

        if (n2.left === null) {
            n2 = n2.right;
        } else {
            let pred = n2.left;
            while (pred.right !== null && pred.right !== n2) {
                pred = pred.right;
            }

            if (pred.right === null) {
                pred.right = n2;
                n2 = n2.left;
            } else {
                pred.right = null;
                n2 = n2.right;
            }
        }
    }

    if (n1 === null && n2 === null) {
        return true;
    }
    return false;
}
