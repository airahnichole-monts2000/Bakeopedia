<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar> </ion-toolbar>
      </ion-header>

      <!-- Main container -->
      <div id="container">
        <h2 class="fs-1 fw-bold custom-text">LOGIN</h2>

        <!-- Username TextField -->
        <div class="form-group">
          <ion-item class="custom-input">
            <ion-input
              v-model="username"
              class="form-control"
              type="text"
              placeholder="Enter your username"
            ></ion-input>
          </ion-item>
        </div>

        <!-- Password TextField -->
        <div class="form-group">
          <ion-item class="custom-input">
            <ion-input
              v-model="password"
              class="form-control"
              type="password"
              placeholder="Enter your password"
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
          If you don't have an account,
          <ion-text color="primary" class="clickable" @click="goToRegister">
            Click here to register.
          </ion-text>
        </p>

        <!-- Login Button -->
        <div class="form-group">
          <ion-button class="custom-button" @click="login">Login</ion-button>
        </div>

        <!-- Warning Message (if needed) -->
        <p v-if="warningMessage" class="warning-text">{{ warningMessage }}</p>
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
const warningMessage = ref(""); // Warning message for failed login

// Simulate a login check (remove validation for now)
const login = () => {
  // Commented out validation logic to bypass warning
  // if (username.value.trim() !== "" && password.value.trim() !== "") {
  //   console.log("Login successful!");
  //   router.push("/dashboard"); // Redirect to the dashboard
  // } else {
  //   warningMessage.value = "Please enter both username and password.";
  // }

  // For now, just proceed to dashboard without validation
  router.push("/dashboard");
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

/* Custom input style */
.custom-input {
  --background: white;
  --border-radius: 25px;
  --padding-start: 15px;
  --padding-end: 15px;
  --min-height: 45px;
  --box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
}

.custom-input ion-label {
  color: #555;
  font-size: 0.6rem;
}

.custom-input ion-input {
  font-size: 1rem;
  color: #000;
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

.warning-text {
  color: lightpink;
  font-size: 0.8rem;
  margin-top: 10px;
}
</style>
