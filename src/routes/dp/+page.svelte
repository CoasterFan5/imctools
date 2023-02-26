<script>
	let dpSeconds = 77400000;
	let time = Date.now();
	console.log(time / 86400000);

	setInterval(() => {
		time = Date.now();
		if (Date.now() % 86400000 > dpSeconds) {
			dpSeconds += 86400000;
		}
	}, 500);

	let secondsInDay;
	$: secondsInDay = time % 86400000;

	let msToDp;
	let secsToDp;
	let minsToDp;
	let hoursToDp;

	$: msToDp = dpSeconds - secondsInDay;
	$: secsToDp = msToDp / 1000;
	$: minsToDp = secsToDp / 60;
	$: hoursToDp = minsToDp / 60;

	let displaySeconds;
	let displayMinutes;
	let displayHours;

	$: displayHours = Math.floor(hoursToDp);
	$: displayMinutes = Math.floor(minsToDp) - displayHours * 60;
	$: displaySeconds = Math.floor(secsToDp) - displayMinutes * 60 - displayHours * 60 * 60;
</script>

<title>Drop Party Coundown</title>
<div class="wrap">
	<div class="clock">
		<div class="clockSection">
			<h1>{displayHours < 10 ? `0${displayHours}` : displayHours}</h1>
			<p>{displayHours == 1 ? 'hour' : 'hours'}</p>
		</div>
		<h1>:</h1>
		<div class="clockSection">
			<h1>{displayMinutes < 10 ? `0${displayMinutes}` : displayMinutes}</h1>
			<p>{displayMinutes == 1 ? 'minute' : 'minutes'}</p>
		</div>
		<h1>:</h1>
		<div class="clockSection">
			<h1>{displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}</h1>
			<p>{displaySeconds == 1 ? 'second' : 'seconds'}</p>
		</div>
	</div>
</div>

<style>
	.wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;
	}
	.clock h1 {
		font-size: 10rem;
		font-weight: 500;
		margin: 0px;
	}
	.clock p {
		margin: 0px;
	}
	.clock {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.clockSection {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
