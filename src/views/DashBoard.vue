<template>
  <ion-page>
    <!-- Header with search bar and navigation -->
    <ion-header translucent>
      <ion-toolbar>
        <ion-buttons>
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-buttons>
          <ion-button>
            <ion-icon name="notifications-outline"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon name="book-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <!-- Main Content -->
    <ion-content>
      <!-- Showcase Section -->
      <section>
        <h2 class="section-title">Today's Fresh Pick</h2>
        <ion-card class="showcase-card">
          <ion-img src="/src/assets/fresh-pick.jpg" alt="Fresh Pick"></ion-img>
          <ion-card-header>
            <ion-card-title>Delicious Chocolate Cake</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>A delightful treat to brighten your day.</p>
            <a class="proceed-link" href="/item-page">Learn More</a>
          </ion-card-content>
        </ion-card>
      </section>

      <!-- Top Picks Section -->
      <section>
        <h2 class="section-title">Bakeopedia's Top Picks</h2>
        <div class="top-picks-container">
          <!-- Top Picks Card -->
          <ion-card
            class="top-pick-card"
            v-for="(item, index) in topPicks"
            :key="index"
          >
            <ion-img :src="item.image" alt="Top Pick"></ion-img>
            <ion-card-header>
              <span class="rank-number">#{{ index + 1 }}</span>
              <ion-card-title>{{ item.name }}</ion-card-title>
              <p class="votes">Votes: {{ item.votes }}</p>
            </ion-card-header>
          </ion-card>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
const topPicks = [
  { image: "/src/assets/top1.jpg", name: "Vanilla Cupcake", votes: 125 },
  { image: "/src/assets/top2.jpg", name: "Blueberry Muffin", votes: 110 },
  { image: "/src/assets/top3.jpg", name: "Red Velvet Cake", votes: 95 },
  { image: "/src/assets/top4.jpg", name: "Lemon Tart", votes: 80 },
  { image: "/src/assets/top5.jpg", name: "Banana Bread", votes: 75 },
];
</script>

<style scoped>
/* Global Styles */
ion-content {
  --background: #f4f4f9;
}

/* Section Title */
.section-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin: 1rem 1rem 0.5rem;
  color: #333;
}

/* Showcase Card */
.showcase-card {
  margin: 1rem;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}

.showcase-card ion-img {
  height: 200px;
  object-fit: cover;
}

.showcase-card .proceed-link {
  color: #6200ee;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

/* Top Picks */
.top-picks-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
}

.top-pick-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background: #fff;
}

.top-pick-card ion-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
}

.rank-number {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.votes {
  font-size: 0.9rem;
  color: #666;
}
</style>
