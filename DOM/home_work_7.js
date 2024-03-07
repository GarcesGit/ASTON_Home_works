// Базовый:
// Написать функцию pattern, принимающую на вход число n и возвращающую в консоли паттерн:

(function pattern(num) {
    let str = "";

    for (let i = 1; i <= num - 1; i++) {
        for (let j = 1; j < num - i + 1; j++) {
            str += " ";
        }
        for (let k = 1; k <= i; k++) {
            str += k;
        }
        for (let l = 1; l < i; l++) {
            str += i - l;
        }
        str += "\n";
    }

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j < i; j++) {
            str += " ";
        }
        for (let k = 1; k <= num - i; k++) {
            str += k;
        }
        for (let l = 1; l <= num - i + 1; l++) {
            str += num - l - i + 2;
        }
        str += "\n";
    }

    console.log(str);
})(5);

// Продвинутый:
// Написать класс PaginationUtil. Класс принимает массив значений (типы не имеют значения) и число, отображающее количество элементов на странице.
// pageIndex - принимает индекс элемента в массиве значений и возвращает его страницу, иначе -1

class PaginationUtil {
    constructor(array, itemsOnPage) {
        this.array = array;
        this.itemsOnPage = itemsOnPage;
    }

    pageCount() {
        return Math.ceil(this.array.length / this.itemsOnPage);
    }

    itemCount() {
        return this.array.length;
    }

    pageItemCount(pageIndex) {
        return pageIndex < this.pageCount()
            ? Math.min(this.itemsOnPage, this.array.length - pageIndex * this.itemsOnPage)
            : -1;
    }

    pageIndex(itemIndex) {
        return itemIndex < this.array.length && itemIndex >= 0
            ? Math.floor(itemIndex / this.itemsOnPage)
            : -1;
    }
}

const helper = new PaginationUtil(["a", "b", "c", "d", "e", "f"], 4);

console.log(helper.pageCount()); // 2
console.log(helper.itemCount()); // 6
console.log(helper.pageItemCount(0)); // 4
console.log(helper.pageItemCount(1)); //  2
console.log(helper.pageItemCount(2)); // -1
console.log(helper.pageIndex(5)); // 1
console.log(helper.pageIndex(2)); // 0
console.log(helper.pageIndex(20)); // -1
console.log(helper.pageIndex(-10)); //-1
