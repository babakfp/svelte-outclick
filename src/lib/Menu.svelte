<script lang="ts">
	import OutClick from "svelte-outclick"
	import { beforeNavigate } from "$app/navigation"
	import { page } from "$app/stores"

	const items = [
		{ title: "HOME", href: "/" },
		{ title: "EXCLUDE", href: "/exclude" },
		{ title: "HALF CLICK", href: "/half-click" },
	]

	let isOpen = false
	let toggleBtn: HTMLButtonElement

	beforeNavigate(() => (isOpen = false))
</script>

<button
	class="flex h-8 w-8 items-center justify-center rounded bg-gray-800 text-gray-400 duration-150 hover:bg-gray-700"
	bind:this={toggleBtn}
	on:click={() => (isOpen = !isOpen)}
>
	<!-- prettier-ignore -->
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/></svg>
</button>

<OutClick on:outclick={() => (isOpen = false)} excludeElements={toggleBtn}>
	<nav
		class="
			pointer-events-none invisible absolute inset-x-12 top-0 z-20 origin-top -translate-y-4 scale-0 overflow-hidden
			rounded bg-gray-800 opacity-0 duration-200 ease-in-out
			{isOpen &&
			'!pointer-events-auto !visible !translate-y-0 !scale-100 !opacity-100'}
		"
	>
		<ul>
			{#each items as item}
				<li>
					<a
						class="block px-4 py-2.5 text-xs duration-150 hover:bg-gray-700
						{item.href === $page.url.pathname && '!bg-gray-200 text-gray-800 '}
						"
						href={item.href}
					>
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
