
// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text
function ClozeCard (text,cloze){
    if(this instanceof ClozeCard){
        if (text.indexOf(cloze)== -1){
            console.log("This text doesn't exist.");
        } else{
// The constructed object should have a fullText property that contains only the full text.
            this.text = text; 
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
            this.cloze = cloze;
// Make a constructor that has a function that will remove the cloze from the question
// The constructed object should have a partial property that contains only the partial text.
            this.partial = this.text.replace(this.cloze,'...');
            };
    }
    else{
        return new ClozeCard (text,cloze);
    }        
};

module.exports = ClozeCard;


var firstPresidentCloze = ClozeCard("George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log('Answer:' + firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial());
console.log('Question: ' + firstPresidentCloze.partial);

// "George Washington was the first president of the United States."
console.log('Full Statement: '+ firstPresidentCloze.text);

// "Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = ClozeCard("This doesn't work", "oops");