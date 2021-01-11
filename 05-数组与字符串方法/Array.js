var arr = [200, 100, 1, 3, 5, 9, 99];

//   1.join()方法将数组转换为字符串   返回值为转换的字符串  不在原数组上操作
// console.log(arr.join(''));
// var arr_new = arr.join('');
// console.log(arr_new);
// console.log(arr);

//    2.数组颠倒  reverse()             在原数组上操作
// console.log(arr.reverse());
// console.log(arr);


//    3.shift()   pop()   返回值为删除掉的成员   在原数组上操作
// console.log(arr.shift());
// console.log(arr.pop());
// console.log(arr);


//    4.unshift()   push()  添加一个或多个数组元素   返回值为添加后的数组length   在原数组上操作
// console.log(arr.unshift(11, 22, 33));
// console.log(arr.push(44, 55));
// console.log(arr);

//    5.concat()  拼接 返回值为拼接后的数组   不在原数组上操作
// var arr2 = [200]
// console.log(arr.concat(arr2));
// console.log(arr);


//    6. slice()  截取  返回值为截取的部分   不在原数组上操作
//console.log(arr.slice(1, 3)); //参数为数组索引  包左不包右
// console.log(arr);


//    7.sort()   将数组排序   在原数组上操作  
//    但是sort方法有问题   sort方法会调用每个数组元素的toString方法得到字符串，然后再根据Unicode编码对得到的字符串进行排序。


/*Unicode
最终，美国人意识到他们应该提出一种标准方案来展示世界上所有语言中的所有字符，出于这个目的，Unicode诞生了。
Unicode 当然是一本很厚的字典，记录着世界上所有字符对应的一个数字。具体是怎样的对应关系，又或者说是如何进行划分的，就不是我们考虑的问题了，我们只用知道 Unicode 给所有的字符指定了一个数字用来表示该字符。
对于 Unicode 有一些误解，它仅仅只是一个字符集，规定了符合对应的二进制代码，至于这个二进制代码如何存储则没有任何规定。它的想法很简单，就是为每个字符规定一个用来表示该字符的数字，仅此而已。*/

// var arr = [100, 2, 4, 55, 22]
// //从小到大
// console.log(arr.sort((a, b) => {
//     return a - b
// }));

// // 从大到小
// var arr = [100, 2, 4, 55, 22]
// console.log(arr.sort((a, b) => {
//     return b - a
// }));

// console.log(arr);





//     8.splice()   增 删 改   在原数组上操作
//     1. 删除功能
//第一个参数为第一项位置，第二个参数为要删除几个。
// 用法：array.splice(index,num)，返回值为删除内容，array为结果值。

//      2. 插入功能，
//第一个参数（插入位置），第二个参数（0），第三个参数（插入的项）。
// 用法：array.splice(index,0,insertValue)，返回值为空数组，array值为最终结果值。


//      3. 替换功能，
//第一个参数（起始位置），第二个参数（删除的项数），第三个参数（插入任意数量的项）。

// 用法：array.splice(index,num,insertValue)，返回值为删除内容，array为结果值。


//     9. forEach(function (item,index){})  遍历
// arr.forEach(function (item, index) {
//     console.log(index);
// })