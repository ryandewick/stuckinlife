<template>
  <div class="container">
    <div v-if="loading">Loading users...</div>
    <h2>Admin Dashboard</h2>
    <h3>Users</h3>
    <table class="admin-table" v-if="allUsers.length">
      <thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Created Account</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in allUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <!-- Email -->
          <td>{{ user.firstName }}</td>
          <!-- First Name -->
          <td>{{ user.lastName }}</td>
          <!-- Last Name -->
          <td>{{ user.dateOfBirth }}</td>
          <!-- Date of Birth -->
          <td>{{ user.createdAt }}</td>
          <!-- Created Account -->
        </tr>
      </tbody>
    </table>
    <div v-else>No users found</div>
  </div>
</template>

<script>
import { useDashboardStore } from "@/stores/dashboard";
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {
      loading: false,
      error: null,
    };
  },
  methods: {
    ...mapActions(useDashboardStore, {
      fetchAllUsers: "fetchAllUsers",
    }),
    async loadUsers() {
      this.loading = true;
      try {
        await this.fetchAllUsers();
        this.error = null;
      } catch (error) {
        console.error("Error fetching users:", error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {
    ...mapState(useDashboardStore, ["allUsers"]),
  },
  mounted() {
    this.loadUsers();
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.table-container {
  overflow-x: auto;
}

.admin-table {
  max-width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 16px;
  line-height: 1.5;

  thead {
    tr {
      background-color: $primary-color;
      color: #f3f3f3;
    }
  }

  th,
  td {
    padding: 12px 20px;
    border-bottom: 1px solid $primary-color;
  }

  th {
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  td {
    color: $dark-color;
  }

  // tr:hover {
  //   background-color: $secondary-color;
  //   color: $primary-color;
  // }
}
</style>
