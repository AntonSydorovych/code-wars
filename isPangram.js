let myString = "The quick brown fox jumps over the lazy dog.";

function isPangram(string){
    let example = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z';
    let exampleArray = [...example.split(', ')];
    let checkedArray = [...string.toUpperCase().split('')];

    exampleArray.forEach((el_1, i_1, arr_1) => {
        checkedArray.forEach((el_2, i_2, arr_2) => {
            if(el_2 === el_1){
                delete arr_1[i_1];
            }
        })
    })

    if(exampleArray.filter(el=>el).length === 0){
        console.log(true)
        return true
    }

    return false
  }

  isPangram(myString);

  /* Other decisions
 =========================================================================================================== 
  function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}
===========================================================================================================
function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}
===========================================================================================================
function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}
===========================================================================================================
function isPangram(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate";
    for (var i = 0; i < 26; i++)
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    return true;
}
===========================================================================================================
function isPangram(string) {
  return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}
===========================================================================================================
function isPangram(string){
  const str = string.replace(/[^a-zA-Z]/gi,'').toLowerCase()
  const set = new Set([...str]);
  return set.size === 26;
}
===========================================================================================================

  */
