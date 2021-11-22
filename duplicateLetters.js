/*

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice


describe("Tests", () => {
  it("test", () => {
Test.assertEquals(duplicateCount(""), 0);
Test.assertEquals(duplicateCount("abcde"), 0);
Test.assertEquals(duplicateCount("aabbcde"), 2);
Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
Test.assertEquals(duplicateCount("Indivisibility"), 1)
Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")

  });
});

*/

let text = 'abcdfg';

let func = (text) => {
    let arr = [...text.toLowerCase()]  
    let arrCopy = [...arr];
    let repeatElS = [];
    let isElNeedToPush;
    
    arr.forEach((el_1, i_1, arr_1) => {
        arrCopy.forEach((el_2, i_2, arr_2) => {
            
            if(el_2 === el_1 && i_2 != i_1){
                if(repeatElS.length === 0) {
                    repeatElS.push(el_2)
                }

                if(repeatElS.length > 0){
                    isElNeedToPush = true;
                    repeatElS.forEach((el_3, i_3, arr_3) => {
                        if(el_2 === el_1 && i_2 != i_1 && el_3 === el_2) {
                            isElNeedToPush = false;
                        }
                    })

                    if(isElNeedToPush){
                        repeatElS.push(el_2);
                    }
                }
            }
            
        })
    })

    console.log('repeatElS.length', repeatElS.length)
    return repeatElS.length
}

func(myArray);




















