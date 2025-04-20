<template>
  <v-app>
    <!-- Sidebar -->
    <v-navigation-drawer app permanent color="indigo lighten-1" dark>
      <v-list dense nav>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6 font-weight-bold">VitalCheck</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="my-2"></v-divider>
        <v-list-item link><v-icon left>mdi-view-dashboard</v-icon>Dashboard</v-list-item>
        <v-list-item link><v-icon left>mdi-account-heart</v-icon>Patients</v-list-item>
        <v-list-item link><v-icon left>mdi-heart-pulse</v-icon>Vital Trends</v-list-item>
        <v-list-item link><v-icon left>mdi-bell-alert</v-icon>Alerts</v-list-item>
        <v-list-item link><v-icon left>mdi-cog</v-icon>Settings</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Top Bar -->
    <v-app-bar app color="white" flat>
      <v-toolbar-title class="text-h6">Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-bell-outline</v-icon></v-btn>
      <v-avatar size="36"><img src="https://randomuser.me/api/portraits/men/85.jpg" /></v-avatar>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container fluid>
        <!-- Summary Cards -->
        <v-row class="mt-6" dense>
          <v-col cols="12" sm="4">
            <v-card class="pa-4" color="light-blue lighten-4">
              <v-icon size="36" color="blue darken-2">mdi-heart-pulse</v-icon>
              <h4 class="text-h6">Heart Rate</h4>
              <p class="text-h5 font-weight-bold">78 BPM</p>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="pa-4" color="green lighten-4">
              <v-icon size="36" color="green darken-2">mdi-oxygen-tank</v-icon>
              <h4 class="text-h6">Oxygen Saturation</h4>
              <p class="text-h5 font-weight-bold">97%</p>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="pa-4" color="deep-purple lighten-4">
              <v-icon size="36" color="deep-purple darken-2">mdi-water</v-icon>
              <h4 class="text-h6">Blood Pressure</h4>
              <p class="text-h5 font-weight-bold">120/80 mmHg</p>
            </v-card>
          </v-col>
        </v-row>

        <!-- History Table -->
        <v-card class="mt-6" elevation="2">
          <v-card-title>Health History</v-card-title>
          <v-data-table
            :headers="headers"
            :items="records"
            dense
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Date', value: 'date' },
        { text: 'Heart Rate (BPM)', value: 'bpm' },
        { text: 'Oxygen (%)', value: 'spo2' },
        { text: 'Blood Pressure', value: 'bp' },
      ],
      records: [
        { date: '2025-04-18 09:12 AM', bpm: 76, spo2: '96%', bp: '121/82' },
        { date: '2025-04-18 12:30 PM', bpm: 79, spo2: '98%', bp: '122/80' },
        { date: '2025-04-18 04:15 PM', bpm: 74, spo2: '97%', bp: '118/78' },
      ],
    };
  },
};
</script>

<style scoped>
.v-card {
  border-radius: 16px;
}
</style>
