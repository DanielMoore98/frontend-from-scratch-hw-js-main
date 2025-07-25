/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
const test1 = [1, 2, 3, 7]
const test2 = [2, 3, 4, 5, 6, 7]

function findCommonElements(arr1, arr2) {
    let outArr = []
    for (let i = 0; i < arr1.length; i++) {
        arr2.includes(arr1[i]) ? outArr.push(arr1[i]) : null
    }
    return outArr
}
console.log(findCommonElements(test1, test2));

