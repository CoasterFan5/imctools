export let enchants = {
	efficiency: { startLevel: 50, price: 6300, increase: 125, maxLevel: 100, name: 'Efficiency'},
	fortune: { startLevel: 750, price: 337600, increase: 450, maxLevel: 2000, name: 'Fortune'},
	nightvision: { startLevel: 0, price: 30000, increase: 0, maxLevel: 1, name: 'Night Vision'},
	speed: { startLevel: 3, price: 160000, increase: 20000, maxLevel: 3, name: 'Speed'},
	jumpboost: { startLevel: 3, price: 350000, increase: 50000, maxLevel: 3, name: 'Jump Boost'},
	haste: { startLevel: 0, price: 2500, increase: 25000, maxLevel: 5, name: 'Haste'},
	explosive: { startLevel: 0, price: 50, increase: 100, maxLevel: 500, name: 'Explosive'},
	tokenbooster: { startLevel: 500, price: 150100, increase: 300, maxLevel: 1000, name: 'Token Booster'},
	blessing: { startLevel: 0, price: 50, increase: 200, maxLevel: 750, name: 'Blessing'},
	charity: { startLevel: 0, price: 50, increase: 200, maxLevel: 750, name: 'Charity'},
	jackhammer: { startLevel: 50, price: 20200, increase: 400, maxLevel: 1000, name: 'Jackhammer'},
	keyfinder: { startLevel: 0, price: 450, increase: 550, maxLevel: 750, name: 'Key Finder'},
	lottery: { startLevel: 200, price: 100150, increase: 400, maxLevel: 750, name: 'Lottery'},
	pouchfinder: { startLevel: 0, price: 500, increase: 650, maxLevel: 750, name: 'Pouch Finder'},
	scavanger: { startLevel: 150, price: 105500, increase: 700, maxLevel: 1000, name: 'Scavanger'},
	lucky: { startLevel: 0, price: 350, increase: 800, maxLevel: 1000, name: 'Lucky'},
	prestigefinder: { startLevel: 0, price: 1000, increase: 1750, maxLevel: 500, name: 'Prestige Finder'}
}

export let calculateEnchantPrice = (enchant, startLevel, endLevel) => {
	if(!enchant || !startLevel || !endLevel) {
		return 0;
	}
	let enchantment = enchants[enchant]
	console.log(enchantment)
	//calculate the intiial values based on the user input
	let realStartLevel = startLevel - enchantment.startLevel;
	let realInitialPrice = enchantment.price + enchantment.increase * realStartLevel;
	let relaLevels = endLevel - startLevel;

	//calculate the total price
	let total = 0;
	for(let i = 0; i < relaLevels; i++) {
		total += realInitialPrice + (i * enchantment.increase);
	}
	return total;
}