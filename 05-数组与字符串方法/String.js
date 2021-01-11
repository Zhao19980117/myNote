var str = 'abcdef'
//   1.charAt() 返回指定下标位置的的一个字符，如果没有找到则返回空字符
// console.log(str.charAt(2));


//  2.indexOf()   返回子字符串在原始字符串中的下标  如果没有则返回-1
// console.log(str.indexOf('c'));


//  3.split()  将字符串转换为数组  不在原字符串上操作
// console.log(str.split()); //[ 'abcdef' ]
// console.log(str.split('')); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]



//  4.slice()   抽取一个子串
// console.log(str.slice(2, 4));


//  5.substr()  在原始字符串 返回一个子字符串
// console.log(str.substr(2, 3));     //cde


//  6.substring()  在原始字符串 返回一个子字符串 
// console.log(str.substring(2, 3)); //c