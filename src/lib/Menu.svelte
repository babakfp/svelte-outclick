<script lang="ts">
    import { page } from "$app/stores"

    const items = [
        { title: "HOME", href: "/" },
        { title: "EXCLUDE", href: "/exclude" },
        { title: "HALF CLICK", href: "/half-click" },
    ]
</script>

<header>
    <nav>
        <ul class="flex justify-center">
            {#each items as item}
                <li>
                    <a
                        class="flex h-14 items-center px-4 text-xs text-gray-400 duration-150 hover:text-gray-50"
                        class:text-gray-50={item.href === $page.url.pathname}
                        href={item.href}
                    >
                        {item.title}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</header>
