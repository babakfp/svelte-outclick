<script>
	import "../app.postcss"

	import { navigating, page } from "$app/stores"
	import { description } from "$libd/description.js"
	import Counter from "$libd/Counter.svelte"
	import Menu from "$libd/Menu.svelte"

	$: {
		if (navigating) {
			if ($page.url.pathname === "/") {
				$description =
					"If you click outside of COMPONENT CONTENT, counter goes up! So, you can capture than event and do something with it, like closing the menu."
			} else if ($page.url.pathname === "/exclude") {
				$description =
					"You can exclude an element/elements from triggering the event when clicked outside!"
			} else if ($page.url.pathname === "/half-click") {
				$description =
					"Trigger the event on pointer-down instead of a full-click action!"
			}
		}
	}
</script>

<div class="relative flex items-center justify-between gap-4">
	<Counter />
	<Menu />
</div>

<div class="grid gap-2">
	<slot />
</div>

{#if $description}
	<p class="font-mono text-xs leading-6 text-gray-400">
		{$description}
	</p>
{/if}
