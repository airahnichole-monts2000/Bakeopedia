<template>
  <ion-page>
    <!-- Menu Drawer -->
    <ion-menu side="start" content-id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <!-- Menu List -->
        <ion-list>
          <ion-item button @click="navigateToProfile">
            <ion-label>My Profile</ion-label>
          </ion-item>
          <ion-item button @click="navigateToMyPublish">
            <ion-label>My Publish</ion-label>
          </ion-item>
          <ion-item button @click="navigateToMyRates">
            <ion-label>My Ratings</ion-label>
          </ion-item>
        </ion-list>
        <!-- Logout button -->
        <ion-item button @click="logout" class="logout-item">
          <ion-label>Log Out</ion-label>
        </ion-item>
      </ion-content>
    </ion-menu>

    <!-- Navigation Bar inside ion-header -->
    <ion-header>
      <div class="navbar">
        <img
          src="../assets/images/icons/NOTIFICATION.png"
          alt="Menu"
          class="menu-icon"
          @click="toggleMenu"
        />
        <div class="search-bar">
          <img
            src="../assets/images/icons/SEARCH_dark.png"
            alt="Search"
            class="search-icon"
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            class="search-input"
          />
        </div>
      </div>
    </ion-header>

    <ion-content id="start" class="ion-padding">
      <!-- Today's Fresh Bake Card -->
      <div class="bake-card" @click="viewDetails">
        <div class="card-header">
          <h2>Today's Fresh Bake</h2>
        </div>
        <div class="card-body">
          <!-- Image of the baked item -->
          <img
            src="../assets/images/items/5.jpg"
            alt="Fresh Bake"
            class="bake-image"
          />
          <p class="bake-description">
            Enjoy our fresh bake today, crafted with the finest ingredients to
            bring out the best flavor.
          </p>
          <!-- Clickable link inside the card -->
          <ion-text color="primary" class="clickable" @click="viewDetails">
            Click here for more details
          </ion-text>
        </div>
      </div>

      <!-- Bakeopedia's Top Picks Title -->
      <div class="top-picks-title">
        <h2>Bakeopedia's Top Picks</h2>
      </div>

      <!-- Bakeopedia's Top Picks Cards (5 items) -->
      <div class="top-picks-container">
        <!-- Repeat this block for each top pick -->
        <div class="top-pick-card" @click="viewFoodDetails">
          <div class="food-image">
            <img
              src="../assets/images/items/5.jpg"
              alt="Food Item"
              class="food-item-image"
            />
          </div>
          <div class="food-info">
            <div class="rank-number">Rank #1</div>
            <div class="food-name">Chocolate Cake</div>
            <div class="rating-count">120 Ratings</div>
          </div>
        </div>

        <div class="top-pick-card" @click="viewFoodDetails">
          <div class="food-image">
            <img
              src="../assets/images/items/5.jpg"
              alt="Food Item"
              class="food-item-image"
            />
          </div>
          <div class="food-info">
            <div class="rank-number">Rank #2</div>
            <div class="food-name">Vanilla Cupcake</div>
            <div class="rating-count">100 Ratings</div>
          </div>
        </div>

        <div class="top-pick-card" @click="viewFoodDetails">
          <div class="food-image">
            <img
              src="../assets/images/items/5.jpg"
              alt="Food Item"
              class="food-item-image"
            />
          </div>
          <div class="food-info">
            <div class="rank-number">Rank #3</div>
            <div class="food-name">Strawberry Tart</div>
            <div class="rating-count">80 Ratings</div>
          </div>
        </div>

        <div class="top-pick-card" @click="viewFoodDetails">
          <div class="food-image">
            <img
              src="../assets/images/items/5.jpg"
              alt="Food Item"
              class="food-item-image"
            />
          </div>
          <div class="food-info">
            <div class="rank-number">Rank #4</div>
            <div class="food-name">Lemon Drizzle Cake</div>
            <div class="rating-count">60 Ratings</div>
          </div>
        </div>

        <div class="top-pick-card" @click="viewFoodDetails">
          <div class="food-image">
            <img
              src="../assets/images/items/5.jpg"
              alt="Food Item"
              class="food-item-image"
            />
          </div>
          <div class="food-info">
            <div class="rank-number">Rank #5</div>
            <div class="food-name">Apple Pie</div>
            <div class="rating-count">50 Ratings</div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

// navBar
// Navigate to the profile page
const navigateToProfile = () => {
  router.push("/profile");
};

// Navigate to "My Publish" page
const navigateToMyPublish = () => {
  router.push("/my-publish");
};

// Navigate to "My Rates" page
const navigateToMyRates = () => {
  router.push("/my-rates");
};

const logout = () => {
  // Add your logout logic here
  console.log("User logged out");
  router.push("/login"); // Redirect to login page
};

// Toggle the side menu
const toggleMenu = () => {
  const menu = document.querySelector("ion-menu");
  menu?.toggle();
};

// Navigate to a new page when clicking the link in "Today's Fresh Bake" card
const viewDetails = () => {
  router.push("/food-details"); // This can be changed to the desired route
};

// Navigate to the food item page when clicking the "Top Picks" card
const viewFoodDetails = () => {
  router.push("/food-item-page"); // Navigate to the food item details page
};
</script>

<style scoped>
ion-content {
  --background: #fff !important;
  padding-left: 20px;
  padding-right: 20px;
}

ion-menu {
  --background: rgba(104, 0, 90, 0.9); /* Purple background with 90% opacity */
  color: white; /* Set text color for better contrast */
}

ion-menu ion-toolbar {
  --background: rgba(104, 0, 90, 0.9); /* Toolbar matches menu background */
  color: white;
}

ion-item {
  --background-hover: rgba(104, 0, 90, 0.7); /* Lighter hover effect */
  --color: white;
}

.menu-content {
  display: flex;
  flex-direction: column;
  height: 100%; /* Full height of the menu */
}

.logout-item {
  margin-top: auto; /* Push the logout button to the bottom */
  background-color: rgba(
    104,
    0,
    90,
    0.8
  ); /* Optional: add a unique color for logout */
  color: white; /* White text for contrast */
  text-align: center;
}

.logout-item:hover {
  --background: rgba(104, 0, 90, 1); /* Darker background on hover */
}

/* Card container */
.bake-card {
  background-color: #e69cf5; /* Light background for the card */
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.card-header {
  background-color: #68005a; /* Light pink background */
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 1.5rem;
}

.card-body {
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bake-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
}

.bake-description {
  font-size: 1rem;
  color: #555;
  margin-top: 10px;
  text-align: center;
}

.clickable {
  margin-top: 15px;
  text-decoration: underline;
  color: #68005a; /* Light pink */
  cursor: pointer;
}

/* Top Picks Section */
.top-picks-title {
  text-align: left;
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
  color: #68005a;
}

.top-picks-container {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Reduced gap to make cards more compact */
}

.top-pick-card {
  display: flex;
  align-items: center;
  background-color: #fca9ff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 100%;
  max-width: 400px; /* Limit the card size */
}

.food-image {
  width: 80px;
  height: 80px;
  margin-right: 15px;
}

.food-item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.food-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: left;
}

.rank-number {
  font-size: 1.1rem;
  font-weight: bold;
  color: #68005a;
}

.food-name {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}

.rating-count {
  font-size: 0.9rem;
  color: #777;
}

/* Responsive design */
@media (max-width: 768px) {
  .top-pick-card {
    flex-direction: row;
    text-align: left;
  }

  .food-image {
    width: 60px;
    height: 60px;
  }

  .food-item-image {
    width: 100%;
    height: 100%;
  }

  .food-info {
    text-align: left;
  }
}

/* Navigation Bar Styling */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #68005a;
  padding: 10px 15px;
  height: 60px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.menu-icon {
  width: 24px;
  height: 24px;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 10px;
  flex: 1;
  margin-left: 15px;
}

.search-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.search-input {
  border: none;
  outline: none;
  font-size: 14px;
  flex: 1;
  background-color: transparent;
}
</style>
