<script>
	let selected;
	import { enchants, calculateEnchantPrice } from '$lib/enchants.js';
	import { formatNumber } from '$lib/formatter.js';
	let items = [];
	//create an array based on the enchants
	for (const item in enchants) {
		items.push({ ...enchants[item], id: item });
	}

	let enchantLevel = 0;
	let desiredLevel = 0;
	let totalCost;

	$: if (selected != 0 && selected != undefined) {
		enchantLevel = enchants[selected].startLevel;
		desiredLevel = enchants[selected].maxLevel;
	}
	$: totalCost = `${formatNumber(
		calculateEnchantPrice(selected, enchantLevel, desiredLevel)
	)} Tokens`;
</script>


<title> Enchant Calculator </title>
<h1>Enchant Calculator</h1>
<div class="selections">
	<p>Enchant</p>
	<select bind:value={selected}>
		<option value="0">Select an Enchant</option>
		{#each items as item}
			<option value={item.id}>{item.name}</option>
		{/each}
	</select>
	{#if selected != 0}
		<p>Level</p>
		<input placeholder="Enter Level" bind:value={enchantLevel} />
		<p>Desired Level</p>
		<input placeholder="Enter Desired Level" bind:value={desiredLevel} />
		<p>Total Cost</p>
		<input class="disabled" placeholder="Total Cost" disabled bind:value={totalCost} />
	{/if}
</div>

<style>
	.selections {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 300px;
	}
	.selections p {
		margin: 0px;
		width: 100%;
		text-align: left;
	}
	.selections select {
		width: 100%;
		height: 30px;
		font-size: 1.2rem;
		padding: 0px;
		text-align: center;
		border: 0px;
		transition: ease-in-out 0.2s;
		color: black;
		outline: 1px solid white;
		margin-bottom: 10px;
	}
	.selections select:hover {
		color: black;
		outline: 1px solid rgba(255, 29, 29, 0.5);
	}
	.selections select:focus {
		outline: 1px solid rgb(255, 29, 29);
		color: black;
	}
	.selections input {
		width: 100%;
		height: 30px;
		font-size: 1.2rem;
		margin-bottom: 10px;
		padding: 0px;
		text-align: center;
		border: 0px;
		outline: 0px;
		transition: ease-in-out 0.2s;
		color: black;
		outline: 1px solid white;
	}
	.selections input:hover {
		outline: 1px solid rgba(255, 29, 29, 0.5);
		color: black;
	}
	.selections input:focus {
		outline: 1px solid rgb(255, 29, 29);
		color: black;
	}
	.selections input.disabled {
		background: rgba(255, 255, 255, 0.5);
		outline: 1px solid rgba(255, 255, 255, 0.5);
	}
	.selections input.disabled:hover {
		outline: 1px solid rgba(255, 255, 255, 0.5);
	}

	h3 {
		margin: 0px;
		font-size: 1.5rem;
		color: black;
		margin-top: 20px;
	}
	h4 {
		margin: 0px;
		text-align: center;
		font-size: 1.2rem;
		color: black;
	}
</style>
