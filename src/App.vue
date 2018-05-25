<template>
  <div id="app">
  <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <img src="./assets/logo.png">
        </md-toolbar>
        <md-list>
          <md-list-item to="/">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Dashboard</span>
          </md-list-item>
          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>
          <md-list-item md-expand>
          <md-icon>settings</md-icon>
          <span class="md-list-item-text">Settings</span>
            <md-list slot="md-expand">
              <md-list-item to="/settings" class="md-inset">Settings</md-list-item>
              <md-list-item class="md-inset">PC</md-list-item>
              <md-list-item class="md-inset">Phone</md-list-item>
            </md-list>
          </md-list-item>
          <!-- <md-list-item to="/settings">
            <md-icon>settings</md-icon>
            <span class="md-list-item-text">Settings</span>
          </md-list-item> -->
        </md-list>
      </md-app-drawer>
    <div class="user-ava">
      <md-menu md-size="medium" md-align-trigger>
        <md-avatar md-menu-trigger class="md-medium">
        <img src="https://api.adorable.io/avatars/80/abott@adorable.png" alt="People">
        </md-avatar>
        <md-menu-content>
          <md-menu-item>My Item 1</md-menu-item>
          <md-menu-item>My Item 2</md-menu-item>
          <md-menu-item>My Item 3</md-menu-item>
        </md-menu-content>
      </md-menu>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*height:100%;*/
  /*//margin-top: 60px;*/
}
</style>
