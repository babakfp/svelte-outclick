<script>
	import "../app.postcss"

	import { navigating, page } from "$app/stores"
	import { description } from "$lib/description.js"
	import Counter from "$lib/Counter.svelte"
	import Menu from "$lib/Menu.svelte"

	$: {
		if (navigating) {
			if ($page.url.pathname === "/") {
				$description =
					"If you click outside of COMPONENT CONTENT, counter goes up! So, you can capture than event and do something with it, like closing the menu."
			} else if ($page.url.pathname === "/exclude") {
				$description =
					"You can exclude an element/elements from triggering the event when clicked outside!"
			} else if ($page.url.pathname === "/half-click") {
				$description = "Trigger the event on pointer-down instead of a full-click action!"
			}
		}
	}
</script>

<div class="relative | flex items-center gap-4 justify-between">
	<Counter />
	<Menu />
</div>

<div class="grid gap-2">
	<slot />
</div>

{#if $description}
	<p class="text-xs leading-6 text-gray-400 font-mono">
		{$description}
	</p>
{/if}
