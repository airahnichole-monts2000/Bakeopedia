<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"></ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- Main container -->
      <div id="container">
        <h2 class="fs-1 fw-bold custom-text">LOGIN</h2>

        <!-- Username TextField -->
        <div class="form-group">
          <ion-item class="custom-input">
            <ion-input
              class="form-control no-border"
              type="text"
              placeholder="Username"
            ></ion-input>
          </ion-item>
        </div>

        <!-- Password TextField -->
        <div class="form-group">
          <ion-item class="custom-input">
            <ion-input
              class="form-control no-border"
              type="password"
              placeholder="Password"
            ></ion-input>
          </ion-item>
        </div>

        <!-- Remember Me Checkbox -->
        <div class="form-group remember-me">
          <ion-checkbox class="custom-checkbox"></ion-checkbox>
          <ion-label>Remember Me</ion-label>
        </div>

        <!-- Register Text -->
        <p>
          If you don't have an account
          <ion-text color="primary" class="clickable" @click="goToRegister">
            Click here to register.
          </ion-text>
        </p>

        <!-- Login Button -->
        <div class="form-group">
          <ion-button class="custom-button" @click="login">Bake In!</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue"; // Use ref for handling input fields

const router = useRouter();

// Define reactive variables for username and password
const username = ref("");
const password = ref("");

// Simulate a login check (replace with real login logic)
const login = () => {
  // Check if username and password are entered
  if (username.value && password.value) {
    // Simulate successful login and navigate to the dashboard
    router.push("/dashboard"); // Redirect to the dashboard
  } else {
    console.log("Please enter valid credentials.");
    alert("Please enter both username and password.");
  }
};

// Navigate to the Register page
const goToRegister = () => {
  router.push("/register");
};
</script>

<style scoped>
@media (max-width: 768px) {
  /* Styles for mobile or tablet devices */
  #container {
    padding: 0 15px; /* Reduce padding */
  }
}

ion-content {
  --background: #68005a !important;
  padding-left: 20px;
  padding-right: 20px;
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh; /* Full viewport height */
  overflow-y: auto; /* Allow scrolling if content overflows */
}

#container h2 {
  font-family: "Playfair Display", serif;
  font-size: 46px !important;
  color: #ffffff;
  margin-bottom: 20px;
}

ion-label {
  margin-left: 0px; /* Remove any left margin */
  padding-left: 0px; /* Remove any padding */
  color: #ffffff; /* Set the label color to white (if you need it to be white) */
}

ion-input {
  --background: transparent; /* Remove any default background */
  --border-radius: 20px; /* Optional: round the corners */
  --padding-start: 15px; /* Add some padding inside the input box */
  --padding-end: 15px; /* Ensure the padding on both sides */
  --border-color: transparent; /* Make the border transparent if you don't want it */
}

ion-item {
  --background: transparent; /* Ensure the ion-item background is transparent */
  --border-color: transparent; /* Make border color transparent */
}

.custom-input ion-label {
  color: #555;
  font-size: 0.6rem;
}

/* Make the clickable text stand out */
.clickable {
  text-decoration: underline;
  cursor: pointer;
}

.form-group {
  width: 100%;
  margin-bottom: 1rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
}

.custom-checkbox {
  --background: transparent;
  --border-radius: 4px;
}

/* Custom button style */
.custom-button {
  --background: white;
  --border-radius: 50px;
  --box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  --padding-start: 15px;
  --padding-end: 15px;
  --min-height: 45px;
  color: #68005a;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
}
</style>
