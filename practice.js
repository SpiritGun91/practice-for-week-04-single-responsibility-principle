/******************************** CONSTANTS *********************************/
const applePieRecipe = [
	{ name: "pie crust", cost: 10.0, quantity: 1 },
	{ name: "sugar", cost: 3.0, quantity: 0.5 },
	{ name: "butter", cost: 1.0, quantity: 1 },
	{ name: "apples", cost: 6.0, quantity: 7 },
	{ name: "cinnamon", cost: 5.5, quantity: 1 },
	{ name: "eggs", cost: 2.0, quantity: 1 },
];

const pumpkinPieRecipe = [
	{ name: "pie crust", cost: 10.0, quantity: 1 },
	{ name: "sugar", cost: 3.0, quantity: 0.5 },
	{ name: "butter", cost: 1.0, quantity: 1 },
	{ name: "pumpkin", cost: 3.75, quantity: 2 },
	{ name: "cinnamon", cost: 5.5, quantity: 1 },
	{ name: "eggs", cost: 2.0, quantity: 1 },
];

const cherryPieRecipe = [
	{ name: "pie crust", cost: 10.0, quantity: 1 },
	{ name: "sugar", cost: 3.0, quantity: 0.5 },
	{ name: "butter", cost: 1.0, quantity: 1 },
	{ name: "cherries", cost: 12.0, quantity: 10 },
	{ name: "eggs", cost: 2.0, quantity: 1 },
];

const recipes = {
	applePie: applePieRecipe,
	pumpkinPie: pumpkinPieRecipe,
	cherryPie: cherryPieRecipe,
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/
// Main function that orchestrates the process
const bakeAndSellPies = (pieType, pieQuantity, profitMargin) => {
	const recipe = bakePies(pieType, pieQuantity);

	const costPerPie = calculatePieCost(recipe);
	console.log(`Cost per pie: ${costPerPie}`);

	sellPies(costPerPie, pieQuantity, profitMargin);
};

// Get recipe for specific pie type
const getRecipe = (pieType) => {
	return recipes[pieType];
};

// Print ingredients being combined
const printCombiningIngredients = (pieType, recipe) => {
	let combiningMsg = `Combining ingredients for ${pieType}: `;
	combiningMsg += recipe.map((ingredient) => ingredient.name).join(", ");
	console.log(combiningMsg);
};

// Bake a single pie and log it
const bakeSinglePie = (pieNumber) => {
	console.log(`Baked pie ${pieNumber}!`);
};

// Bake multiple pies
const bakePies = (pieType, pieQuantity) => {
	const recipe = getRecipe(pieType);

	for (let i = 0; i < pieQuantity; i++) {
		printCombiningIngredients(pieType, recipe);
		bakeSinglePie(i + 1);
	}

	return recipe;
};

// Calculate cost per pie - exactly matching original implementation
const calculatePieCost = (recipe) => {
	// This is the exact implementation from the original code
	const costOfPie = recipe.reduce((prev, current) => {
		return prev + current.cost;
	}, recipe[0].cost);

	return costOfPie;
};

// Calculate revenue from pies
const calculateRevenue = (costPerPie, pieQuantity, profitMargin) => {
	const totalCost = costPerPie * pieQuantity;
	return totalCost * (profitMargin || 1.2);
};

// Sell pies and report revenue
const sellPies = (costPerPie, pieQuantity, profitMargin) => {
	const revenue = calculateRevenue(costPerPie, pieQuantity, profitMargin);
	console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
};

/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
	bakeAndSellPies,
};
