<script>

	import { formatNumber } from '$lib/formatter.js';
	let level = 0;
	let target = 0;
	let nextPrestigeCost = 400_000_000_000;
	let totalCost = 400_000_000_000;
	$: nextPrestigeCost = Math.floor(400_000_000_000 * (1.00025 ** level));
	$: totalCost = calculateTotalCost(parseInt(level), parseInt(target))

	let calculateTotalCost = (level, target) => {
		let sum = 0;

		for(let i = level; i < target; i++) {
			sum += Math.floor(400_000_000_000 * (1.00025 ** i));
		}

		return sum;
	}

</script>

<title>Prestige Calculator</title>

<input placeholder="Enter Current Prestige" bind:value={level} />
<input placeholder="Enter Target Prestige" bind:value={target} />

<p>Next Prestige Cost: {formatNumber(nextPrestigeCost)}</p>
<p>Total Cost: {formatNumber(totalCost)}</p>

<style>
	.pagetitle {
		font-size: 3rem;
	}
	p {
		margin: 0px;
		font-size: 1.5rem;
	}
	input {
		width: 100%;
		margin: 20px;
		background-color: transparent;
		backdrop-filter: blur(10px);
		border: 1px solid #000;
		outline: 0px;
		border-radius: 5px;
		padding: 20px;
		box-sizing: border-box;
		max-width: 300px;
		height: 30px;
		font-size: 1.2rem;
	}
</style>
