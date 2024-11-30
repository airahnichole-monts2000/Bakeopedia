<template>
  <ion-page>
    <!-- Header with navigation bar -->
    <ion-header>
      <ion-toolbar>
        <!-- Burger button -->
        <ion-buttons>
          <ion-menu-button></ion-menu-button>
        </ion-buttons>

        <!-- Search bar -->
        <ion-searchbar placeholder="Search for items..."></ion-searchbar>

        <!-- Profile and notifications -->
        <ion-buttons>
          <!-- Profile button -->
          <ion-button @click="toggleProfileDropdown">
            <ion-icon name="person-circle-outline"></ion-icon>
          </ion-button>

          <!-- Notifications button -->
          <ion-button>
            <ion-icon name="notifications-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <!-- Dropdown profile (conditionally rendered) -->
    <div v-if="showProfileDropdown" class="profile-dropdown">
      <div class="profile-card">
        <img
          src="../assets/images/items/10.png"
          alt="Profile"
          class="profile-image"
        />
        <p class="username">Username</p>
      </div>
    </div>

    <!-- Content -->
    <ion-content>
      <div class="dashboard-container">
        <!-- Today's Fresh Pick -->
        <div class="fresh-pick">
          <h2>Today's Fresh Pick</h2>
          <div class="fresh-item">
            <img src="../assets/images/items/10.png" alt="Fresh Pick" />
            <p>Short message about today's pick.</p>
            <ion-text color="primary" @click="goToItem">View More</ion-text>
          </div>
        </div>

        <!-- Bakeopedia's Top Picks -->
        <div class="top-picks">
          <h2>Bakeopedia's Top Picks</h2>
          <div class="top-item" v-for="pick in topPicks" :key="pick.id">
            <img :src="pick.image" :alt="pick.name" />
            <div>
              <p>{{ pick.rank }}. {{ pick.name }}</p>
              <p>Votes: {{ pick.votes }}</p>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showProfileDropdown = ref(false);

// Sample data for top picks
const topPicks = ref([
  {
    id: 1,
    image: "../assets/images/items/10.png",
    name: "Item 1",
    rank: 1,
    votes: 150,
  },
  {
    id: 2,
    image: "../assets/images/items/10.png",
    name: "Item 2",
    rank: 2,
    votes: 120,
  },
  // Add more items as needed
]);

const toggleProfileDropdown = () => {
  showProfileDropdown.value = !showProfileDropdown.value;
};

const goToItem = () => {
  router.push("/item-page");
};
</script>

<style scoped>
/* Profile dropdown styling */
.profile-dropdown {
  position: absolute;
  top: 60px;
  right: 10px;
  z-index: 1000;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
}

.profile-card {
  display: flex;
  align-items: center;
  padding: 10px;
}

.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.username {
  font-size: 1rem;
  font-weight: bold;
}

/* Content styling */
.dashboard-container {
  padding: 16px;
}

.fresh-pick,
.top-picks {
  margin-bottom: 24px;
}

.fresh-item img,
.top-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.top-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
</style>
