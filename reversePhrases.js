let text = "Hey fellow warriors";

let func = (phrase) => {
    // .join(' ')
    let newPhrase = phrase.split(' ');
    let reversePhrase = [];
    
    newPhrase.forEach((element, index, array) => {
        if (element.length > 4) {
            reversePhrase[index] = element.split('').reverse().join('');
        }
        if (element.length <= 4) {
            reversePhrase[index] = element;
        }
    })

    return reversePhrase.join(' ')
}

func(text);


/*
const chai = require("chai");
const assert = chai.assert;

describe("Spinning words",()=>{
  it("Sample tests",()=>{
    assert.strictEqual(spinWords("Welcome"), "emocleW");
    assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    assert.strictEqual(spinWords("This is a test"), "This is a test");
    assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
    assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
    assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
    assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
  });
});

*/