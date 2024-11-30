<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Register</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- Main container -->
      <div id="container">
        <h2 class="fs-1 fw-bold custom-text">REGISTER</h2>

        <!-- Name TextField -->
        <div class="form-group">
          <ion-item class="custom-input">
            <ion-label position="floating">Name</ion-label>
            <ion-input
              class="form-control"
              type="text"
              placeholder="Enter your name"
            ></ion-input>
          </ion-item>
        </div>

        <!-- Username TextField -->
        <div class="form-group">
          <ion-item class="custom-input">
            <ion-label position="floating">Username</ion-label>
            <ion-input
              class="form-control"
              type="text"
              placeholder="Enter your username"
            ></ion-input>
          </ion-item>
        </div>

        <!-- Email TextField -->
        <div class="form-group">
          <ion-item class="custom-input">
            <ion-label position="floating">Email</ion-label>
            <ion-input
              class="form-control"
              type="email"
              placeholder="Enter your email"
            ></ion-input>
          </ion-item>
        </div>

        <!-- Password TextField -->
        <div class="form-group">
          <ion-item class="custom-input">
            <ion-label position="floating">Password</ion-label>
            <ion-input
              class="form-control"
              type="password"
              placeholder="Enter your password"
            ></ion-input>
          </ion-item>
        </div>

        <!-- Repeat Password TextField -->
        <div class="form-group">
          <ion-item class="custom-input">
            <ion-label position="floating">Repeat Password</ion-label>
            <ion-input
              class="form-control"
              type="password"
              placeholder="Repeat your password"
            ></ion-input>
          </ion-item>
        </div>

        <!-- Terms and Conditions -->
        <div class="form-group terms-condition">
          <ion-checkbox class="custom-checkbox"></ion-checkbox>
          <ion-label>Agree to terms and conditions</ion-label>
        </div>

        <!-- Register Button -->
        <div class="form-group">
          <ion-button class="custom-button" @click="register"
            >Register</ion-button
          >
        </div>

        <!-- Already have an account text -->
        <p>
          Already have an account?
          <ion-text color="primary" class="clickable" @click="goToLogin">
            Click here to login.
          </ion-text>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue"; // Use ref for handling input fields

const router = useRouter();

// Define reactive variables for registration form
const name = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

// Simulate a registration process
const register = () => {
  // Check if all fields are filled and passwords match
  if (
    name.value &&
    username.value &&
    email.value &&
    password.value &&
    confirmPassword.value &&
    password.value === confirmPassword.value
  ) {
    // Simulate registration success
    console.log("Registration successful!");
    // Redirect to the login page after registration
    router.push("/login");
  } else {
    alert("Please fill in all fields and make sure passwords match.");
  }
};

// Navigate to the Login page
const goToLogin = () => {
  router.push("/login");
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

.terms-condition {
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
