<div class="wrap">
	<div class="bar">
		<div class="leftText">
			<h1><a href="/">IMC Tools</a></h1>
		</div>
		<div class="rightText">
			<a href="/enchants">Enchant Calculator</a>
			<a href="/prestiges">Prestige Calculator</a>
			<a href="/dp">DP Countdown</a>
		</div>
	</div>
</div>

<style>
	.wrap {
		position: relative;
		width: 100vw;
		height: 50px;
		background: rgba(255, 255, 255, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.bar {
		width: 80%;
		height: 100%;
	}
	.leftText {
		display: flex;
		justify-content: center;
		align-items: center;
		float: left;
		height: 100%;
	}
	.leftText h1 {
		font-weight: 700;
		margin: 0px;
		padding: 0px;
	}
	.leftText h1 a {
		color: black;
		text-decoration: none;
	}
	.rightText {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		float: right;
		height: 100%;
	}
	.rightText a {
		font-weight: 400;
		color: black;
		text-decoration: none;
		transition: all 0.2s ease-in-out;
		padding-left: 30px;
	}
	.rightText a:hover {
		color: #ff1d1d;
	}
	.rightText a:focus {
		color: #ff1d1d;
	}
</style>