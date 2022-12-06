<script>
	import OutClick from "svelte-outclick"
	import { beforeNavigate } from "$app/navigation"

	const items = [
		{ title: "HOME", href: "/" },
		{ title: "EXCLUDE", href: "/exclude" },
		{ title: "HALF CLICK", href: "/half-click" },
	]

	let isOpen = false
	let toggleBtn

	beforeNavigate(() => (isOpen = false))
</script>

<button
	class="flex items-center justify-center w-8 h-8 bg-gray-800 rounded text-gray-400 duration-150 hover:bg-gray-700"
	bind:this={toggleBtn}
	on:click={() => (isOpen = !isOpen)}
>
	<!-- prettier-ignore -->
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
		<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
	</svg>
</button>

<OutClick on:outclick={() => (isOpen = false)} excludeElements={toggleBtn}>
	<nav
		class="
			z-20 absolute top-0 inset-x-12 duration-200 ease-in-out origin-top bg-gray-800 rounded overflow-hidden
			scale-0 -translate-y-4 pointer-events-none opacity-0 invisible
			{isOpen && '!scale-100 !translate-y-0 !pointer-events-auto !opacity-100 !visible'}
		"
	>
		<ul>
			{#each items as item}
				<li>
					<a class="block px-4 py-2.5 text-xs duration-150 hover:bg-gray-700" href={item.href}>
						{item.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</OutClick>

<style lang="postcss">
	nav li:first-of-type a {
		@apply pt-3.5;
	}
	nav li:last-of-type a {
		@apply pb-3.5;
	}
</style>
