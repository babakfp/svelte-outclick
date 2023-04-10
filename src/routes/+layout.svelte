<script lang="ts">
	import { LoadingBar } from "svelte-loading-bar"
	import { fly } from "svelte/transition"
	import { navigating, page } from "$app/stores"
	import Counter from "$lib/Counter.svelte"
	import Menu from "$lib/Menu.svelte"
	import { description } from "$lib/description.js"
	import "../app.postcss"

	$: {
		if (navigating) {
			// prettier-ignore
			if ($page.url.pathname === "/") {
				$description = `Click outside of <span class="underline">COMPONENT CONTENT</span> to increase the counter. The component captures the event for you, so you can for example use it to close a dropdown, a menu, or do whatever.`
			} else if ($page.url.pathname === "/exclude") {
				$description = "You can exclude some elements from triggering the event."
			} else if ($page.url.pathname === "/half-click") {
				$description = "Trigger the event on pointer-down instead of a full click action (pointer-down + pointer-up)."
			}
		}
	}
</script>

<LoadingBar />

<div class="relative flex items-center justify-between gap-4">
	<Counter />
	<Menu />
</div>

{#key $page.url.pathname}
	<div class="grid gap-2" in:fly={{ y: 64, duration: 300 }}>
		<slot />
	</div>

	{#if $description}
		<p
			class="font-mono text-xs leading-5 text-gray-400"
			in:fly={{ y: 32, duration: 300, delay: 100 }}
		>
			{@html $description}
		</p>
	{/if}
{/key}
