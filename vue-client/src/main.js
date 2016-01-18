import Vue from 'vue'
import App from './App'
import Meteor from 'meteor-client-side'
var VueMeteorData = require('vue-meteor-data')

Tasks = new Mongo.Collection('tasks')

Vue.mixin(VueMeteorData)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

