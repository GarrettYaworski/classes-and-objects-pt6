const person = {
  'firstName': 'Chandler',
  "lastName": 'Bing',
  age: 30 //prefer
};

const personAge = 'age'
console.log('*******************************************************************')
console.log(person.firstName);
console.log(person[`lastName`]);
console.log(person[personAge]);

const dinner = {
  appetizer: 'dinosaur',
  entree: 'ice cream',
  dessert: 'fish tacos',
  drink: 'chocolate milk or potentially straight syrup',
  staff: {
    hostess: 'jess',
    waiter: 'Brandon',
    cooks: ['john', 'braden', 'marissa'],
  }
}

// const firstCook = 
console.log(dinner['staff'].cooks[0])

const food2 = {
  appetizer: 'chips and queso',
  entree: 'chicken burrito',
  dessert: 'churros',
  drink: 'margarita',
}

const { entree, appetizer } = dinner;
const { entree: mexicanDinnerEntree, appetizer: mexicanDinnerAppetizer } = food2;

// console.log(appetizer);
// console.log(dinner.entree, entree, appetizer);
// console.log(mexicanDinnerAppetizer, mexicanDinnerEntree)

dinner.dessert2 = 'key lime pie';
dinner['dessert3'] = 'tres leches';

// for(let course in dinner){
//   console.log(dinner[course]);
// }


//*********more modern syntax*********** */
// const food2Keys = Object.keys(food2);
// console.log(food2Keys)
// for(let i = 0; i<food2Keys.length; i++){
//   console.log(food2Keys[i])
//   console.log(food2[food2Keys[i]])
// }


class Meal {
  constructor(entree, drink){
    this.entree = entree;
    this.drink = drink;
  }

  addApp(app){
    this.appetizer = app;
  }
}

const myDinner = new Meal('chicken', 'protein shake');
const myOtherDinner = new Meal('spaghetti', 'diet soda');
myDinner.addApp('queso');
myOtherDinner.addApp('bread and oil');
console.log(myDinner)
console.log(myOtherDinner)

class RestarauntMeal extends Meal {
  constructor(staff, entree, drink){
    super(entree, drink)
    this.staff = staff;
  }

  tip(){
    console.log('thank you for gratuity');
  }
}

const fogoDeChao = new RestarauntMeal(['marisa', 'david'], 'tons of meat', 'mango mint lemonade');
fogoDeChao.addApp('salad bar');
fogoDeChao.tip();
console.log(fogoDeChao);

//dinner.tip(); will throw error because tip only exists on child


console.log('*******************************************************************')