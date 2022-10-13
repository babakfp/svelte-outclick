<script>
	import { beforeNavigate } from '$app/navigation'
	import OutClick from 'svelte-outclick'

	const items = [
		{ title: 'Home', href: '/' },
		{ title: 'Exclude element', href: '/exclude-element' },
		{ title: 'Full click', href: '/full-click' },
	]
	let isOpen = false
	let toggleBtn

	beforeNavigate(()=> isOpen = false)
</script>

<button class="flex items-center justify-center | w-8 h-8 | bg-gray-800 | duration-150 | hover:bg-gray-700"
	bind:this={toggleBtn}
	on:click={_=> isOpen = !isOpen}
>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
		<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
	</svg>
</button>

<OutClick on:outclick={()=> isOpen = false} excludeByDomNode={[toggleBtn]}>
	<header class="z-20 | absolute top-12 inset-x-0 | duration-300 origin-top | {!isOpen && 'scale-0 | pointer-events-none opacity-0 invisible'}">
		<nav>
			<ul>
				{#each items as item}
					<li>
						<a class="block | px-4 py-3 | bg-gray-800 | text-center text-sm uppercase | duration-150 | hover:bg-gray-700" href={item.href}>{item.title}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</header>
</OutClick>

<style lang="postcss">
	nav li:first-of-type a { @apply pt-4 }
	nav li:last-of-type a { @apply pb-4 }
	nav li:not(:last-of-type) a { @apply border-b border-gray-700 }
</style>
