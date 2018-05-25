<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">Dashboard</span>
      </md-app-toolbar>

      <!-- <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <img src="../assets/logo.png">
        </md-toolbar>

        <md-list>
          <md-list-item>
          <router-link to="/login">Login</router-link>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer> -->

      <md-app-content>
        <div class="md-layout">
          <md-card class="md-layout-item">
            <md-card-header>
              <div class="md-title">
                <b>Majors</b>
              </div>
            </md-card-header>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
            </md-card-content>
          </md-card>
          <md-card class="md-layout-item">
            <md-card-header>
              <div class="md-title">
                <b>About</b>
              </div>
            </md-card-header>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
            </md-card-content>
          </md-card>
        </div>

      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'Dashboard'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  // .md-app {
  //   max-height: 400px;
  //   border: 1px solid rgba(#000, .12);
  // }

  //  // Demo purposes only
  // .md-drawer {
  //   width: 230px;
  //   max-width: calc(100vw - 125px);
  // }
</style>
