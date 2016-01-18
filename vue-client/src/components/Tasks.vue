<template>
  <div class="tasks">
		<ul>
			<li v-for="task in tasks">
				{{task.name}}
			</li>
		</ul>
  </div>
</template>

<script>
export default {
  data: {
		tasks: [
			{ name: 'Task1'}
		]
  }
}
</script>
