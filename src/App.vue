<template>
  <ion-app>
    <ion-router-outlet />
    <router-view :key="$route.fullPath"></router-view> <!-- Use fullPath to trigger re-render -->
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
