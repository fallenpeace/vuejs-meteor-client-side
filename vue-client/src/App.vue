<template>
  <p v-for="name in msg">
		{{name.name}}
	</p>
	<p v-for="task in taskss">
		{{task.name}}
	</p>
	<button v-on:click="meteor">Meteor</button>
</template>

<script>

export default {
  data () {
    return {
      msg: [{name: 'test'}, {name: 'test2'}]
    }
  },
	
	methods: {
		meteor: function(){

		}
	},
	reactiveData   : {
        taskss: function () {						
					return Tasks.find().fetch()
        }
    },
    created: function(){
       this.subscribe('tasks')
    }
}
</script>

<style>
</style>