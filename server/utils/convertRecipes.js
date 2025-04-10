const fs = require('fs');
const csv = require('csv-parser');

const recipes = {};

fs.createReadStream('recipes.csv')
  .pipe(csv())
  .on('data', (row) => {
    if (!recipes[row['Dish name']]) {
      recipes[row['Dish name']] = [];
    }
    recipes[row['Dish name']].push({
      name: row['Ingredients'],
      quantity: row['Quantity'] || null,
      unit: row['Unit of Measure'] || null
    });
  })
  .on('end', () => {
    const mongoData = Object.entries(recipes).map(([name, ingredients]) => ({
      name,
      ingredients,
      servings: 8 // Default value
    }));
    
    fs.writeFileSync('mongo_recipes.json', JSON.stringify(mongoData, null, 2));
    console.log('Conversion complete! Use mongo_recipes.json for import');
  });