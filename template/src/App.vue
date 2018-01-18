<template>
  <div id="app">
		{{#vuetify}}
		<v-app>
			<v-navigation-drawer fixed v-model="drawer" app>
				<v-list dense>
					<v-list-tile>
						<v-list-tile-action>
							<v-icon>home</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Home</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile>
						<v-list-tile-action>
							<v-icon>contact_mail</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Contact</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
			</v-navigation-drawer>
			<v-toolbar color="indigo" dark fixed app>
				<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
				<v-toolbar-title>Application</v-toolbar-title>
			</v-toolbar>
			<v-content>
				<v-container fluid>
					<img src="./assets/logo.png">
		 			{{#router}}
					<router-view/>
				 {{/router}}
				</v-container>
			</v-content>
			<v-footer color="indigo" app>
				<span class="white--text">&copy; 2017</span>
			</v-footer>
		 {{else}}
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
		{{/router}}
	 {{/vuetify}}

		{{#vuetify}}
		</v-app>
		{{/vuetify}}
  </div>
</template>

<script>

{{/unless}}
export default {
	name: 'app',
	data(){
		return {
			{{#vuetify}}
			drawer: false
			{{#vuetify}}
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
