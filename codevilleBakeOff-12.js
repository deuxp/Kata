const chooseRecipe = function (bakeryA, bakeryB, recipes) {

  // return which recipes can be cooked by both the bakeries
  let menu = [];
  // both bakeries and their combined pantry list
  const combinedBakeries = bakeryA.concat(bakeryB);

  // loop through recipe list
  for (let dish = 0; dish < recipes.length; dish++) {
    let ingredient1 = recipes[dish].ingredients[0];
    let ingredient2 = recipes[dish].ingredients[1];

    // check first ingredient
    for (let i = 0; i < combinedBakeries.length; i++) {
      let bakeryItem = combinedBakeries[i];
      if (bakeryItem === ingredient1) {

        // if the first ingredient checks out, trigger search for second ingredient
        for (let j = 0; j < combinedBakeries.length; j++) {
          let nextItem = combinedBakeries[j];
          if (nextItem === ingredient2) {
            menu.push(recipes[dish].name)
          }
        }
      }
    }
  }
  return menu.join()
}





let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];




let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese'] // this one
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];



console.log(chooseRecipe(bakeryA, bakeryB, recipes)); // Persian Cheesecake






bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes)); // Nima's Famous Dijon Raisins