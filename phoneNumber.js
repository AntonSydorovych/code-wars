// describe('Basic tests', () => {
//     Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
//     Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
//     Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
//   });

let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(numbers){
    if(numbers.length != 10){
        console.log('wrong numbers quantity')
    }

    let arr = numbers.toString().split(',').join('');
    console.log('arr: ', arr)    

    let arr_1 = arr.slice(0, 3);
    let arr_2 = arr.slice(3, 6);
    let arr_3 = arr.slice(6, 10);
  
    return (`(${arr_1})` + ' ' + `${arr_2}-${arr_3}`)

}

createPhoneNumber(myNumbers);
