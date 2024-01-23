<template>
  <div class="dashboard">
    <div class="dashboard__menu">
      <s-menu :menu="menu" @tab="handleTabChange" />
    </div>
    <div class="dashboard__container">
      <div v-if="activeTab === 'users'" class="dashboard__user-table">
        <div v-if="loading" class="dashboard__user-table--loading">
          Loading users...
        </div>
        <h3>Users</h3>
        <table class="dashboard__user-table-table" v-if="allUsers.length">
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
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.dateOfBirth }}</td>
              <td>{{ user.createdAt }}</td>
            </tr>
          </tbody>
        </table>
        <div v-else>No users found</div>
      </div>
      <div v-if="activeTab === 'blogs'" class="dashboard__blogs">
        <h3>Blogs</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { useDashboardStore } from "@/stores/dashboard";
import { mapActions, mapState } from "pinia";

import sMenu from "@/components/dashboard/Menu.vue";

export default {
  data() {
    return {
      loading: false,
      error: null,
      menu: [
        {
          name: "Users",
          tab: "users",
        },
        {
          name: "Blogs",
          tab: "blogs",
        },
      ],
      activeTab: "users",
    };
  },
  components: {
    sMenu,
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
    handleTabChange(tab) {
      this.activeTab = tab;
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

h3 {
  margin-bottom: 3.2rem;
}

.dashboard {
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  &__user-table {
    &-table {
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
        font-weight: 400;
        letter-spacing: 0.02em;
      }

      td {
        color: $dark-color;
      }
    }
  }

  &__blogs {
  }
}
</style>
