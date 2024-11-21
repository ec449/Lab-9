//Q1
let Characters = ['Harry', 'Hermione', 'Ron', 'Draco',
    'Luna'];

console.log("Characters");
for (let i = 1; i <= 4; i++) {
  console.log(Characters[i]);
}
//Q2
let firstName = 'Harry'; 
let house = 'Gryffindor';
let greeting =`Welcome, ${firstName} of ${house}!`;
console.log(greeting);

//Q3
let characterName = 'Hermione'
console.log("\ntoUpperCase():", characterName.toUpperCase());
console.log("toLowerCase():", characterName.toLowerCase());

//Q4
let  spell = ' Expelliarmus ';
console.log("\ntrim() example:", `"${spell.trim()}"`);

//Q5
let  quote = 'I solemnly swear that I am up to no good';
console.log("slice(10, 17):", quote.slice(10, 17));

//Q6
let firstName1 = 'Ron';
let lastName = 'Weasley';
let combined = firstName1.concat(" ", lastName);
console.log("\nconcat() example:", combined);

//Q7
sentence = 'Draco is a good wizard';
let replacedSentence = sentence.replace("good", "bad");
console.log("\nreplace() example:", replacedSentence);

//Q8
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
console.log("After push('Slytherin'):", houses);
let lastElement = houses.pop();
console.log("After pop('Slytherin'):", houses);
console.log("Popped element:", lastElement);

//Q9
let  spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
console.log("After unshift('Accio'):", spells);
let firstElement = spells.shift();
console.log("After shift('Accio'):", spells);
console.log("Shifted element:", firstElement);

//Q10
let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
let slicedprofessors = professors.slice(1, 3);
console.log("\nArray slice(1, 3):", slicedprofessors);

//Q11
let students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
students.splice(1,2);
console.log("After splice(1,2):", students);

//Q12
let phrase = ' Mischief Managed '
let phrasept2='- Harry'
console.log("\ntrim() example:", `"${phrase.trim()}"`);
console.log("toLowerCase():", phrase.toLowerCase());
let combined1 = phrase.concat(" ", phrasept2);
console.log("\nconcat() example:", combined1);

//Q13
let wizards = ['Harry', 'Hermione', 'Ron']
wizards.push('Luna','Draco');
console.log("After push('Luna','Draco'):", wizards);

//Q14
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
let slicedmessage = message.slice(11, 19);
console.log("\nArray slice(11, 19):", slicedmessage);
let combined3 = slicedmessage.concat(" ", "Castle");
console.log("\nconcat() example:", combined3);



