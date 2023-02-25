<script>
  import Navbar from "$lib/Navbar.svelte";
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet">
<div class="main">
  <div class="imgOverlay">
    <Navbar />
    <slot />
  </div>
</div>

<style>
:global(body) {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.main {
  font-family: 'Nanum Gothic', sans-serif;
  height: 100vh;
  width: 100vw;
  background-image: url("/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: auto;
}
.imgOverlay {
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(10px);
}
</style>