<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="splash-container">
        <div id="container">
          <div class="d-flex flex-column align-items-center text-center">
            <ion-img
              src="@/assets/icon_app.png"
              alt="logo"
              class="img-fluid mb-3"
              style="max-width: 250px"
            />
            <p class="fs-1 fw-bold custom-text">BAKEOPEDIA</p>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

// Use Vue Router for navigation
const router = useRouter();

setTimeout(() => {
  router.push("/login"); // Navigate to the login page
}, 3000);
</script>

<style scoped>
ion-content {
  --background: #68005a !important;
}

#container p {
  font-family: "Playfair Display", serif;
  font-size: 46px !important; /* Adjust size as needed */
  color: #ffffff; /* Change color if needed */
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container a {
  text-decoration: none;
}

ion-img {
  display: block !important;
  visibility: visible !important;
}

.splash-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
