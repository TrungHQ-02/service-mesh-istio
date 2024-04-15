<script setup>
import { ref, onMounted } from "vue";

const randomNumber = ref(0);
const version = ref(0);

onMounted(async () => {
  try {
    const randomResponse = await fetch("http://localhost:8081/random-number");
    const versionResponse = await fetch("http://localhost:8081/version");
    const randomData = await randomResponse.json();
    const versionData = await versionResponse.json();

    //
    console.log(randomData);
    console.log(versionData);
    randomNumber.value = randomData.randomNumber;
    version.value = versionData.version;
  } catch (error) {
    console.error("Error fetching:", error);
  }
});
</script>

<template>
  <div class="bg">
    <h1 class="banner">Version of the app goes here: {{ version }}</h1>
    <h1 class="banner2">Random number goes here: {{ randomNumber }}</h1>
  </div>
</template>

<style scoped>
body {
  background: #eee;
}

.banner {
  position: absolute;
  left: 50%;
  display: block;
  margin: 100px -200px;
  width: 400px;
  height: 60px;
  border: 1px solid #8a1;
  font: normal 30px/60px "Rye";
  text-align: center;
  color: #451;
  background: #9b2;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15) inset, 0 6px 10px rgba(0, 0, 0, 0.15);
}

.banner2 {
  position: absolute;
  left: 50%;
  top: 20%;
  display: block;
  margin: 100px -200px;
  width: 400px;
  height: 60px;
  border: 1px solid red;
  font: normal 30px/60px "Rye";
  text-align: center;
  color: white;
  background: red;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15) inset, 0 6px 10px rgba(0, 0, 0, 0.15);
}

.banner::before,
.banner::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: -70px;
  top: 24px;
  display: block;
  width: 40px;
  height: 0px;
  border: 30px solid #9b2;
  border-right: 20px solid #791;
  border-bottom-color: #94b81e;
  border-left-color: transparent;
  transform: rotate(-5deg);
}

.banner::after {
  left: auto;
  right: -70px;
  border-left: 20px solid #791;
  border-right: 30px solid transparent;
  transform: rotate(5deg);
}
</style>
