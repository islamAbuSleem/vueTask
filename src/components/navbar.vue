<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="navbar-brand"
        ><img :src="src"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <form class="d-flex justify-content-center">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-if="searchInput"
          />
          <span class="search mx-3" @click="searchInput = !searchInput">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search h-100"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </span>

          <div class="btn-group position-relative">
            <span data-bs-toggle="dropdown" aria-expanded="false">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots-vertical h-100"
                viewBox="0 0 16 16"
              >
                <path
                  d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                />
              </svg>
            </span>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      src: require("../assets/Logo_4.png"),
      searchInput: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: #ccc 1px -3px 7px;
  .navbar-brand {
    width: 259px;
  }
  .collapse {
    .form-control {
      border: none;
      border-bottom: 1px solid #ccc;
      border-radius: 0;
      

    }
    span {
      cursor: pointer;
      color: #572589;
     
    }
  }
  .dropdown-menu {
    left: -135px;
    top: 35px;

  }
}
</style>
