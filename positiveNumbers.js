//[1,2,'aasf','1','123',123]),[1,2,123]

let array = [1,2,'aasf','1','123',123];

let func = (l) => {
    let numArr = [];
    l.forEach((el) => {
        if(typeof(el) === 'number' && el > 0) numArr.push(el);
    })

    console.log(numArr);
}




func(array);
