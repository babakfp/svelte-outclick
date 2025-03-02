# Svelte OutClick

[![NPM](https://img.shields.io/npm/v/svelte-outclick?style=for-the-badge&label=NPM&color=%23cb0000)](https://www.npmjs.com/package/svelte-outclick)

A Svelte component that allows you to listen to the clicks that happen outside of an element.

- 📺 [Demo](https://svelte-outclick.vercel.app)
- 🪵 [CHANGELOG](https://github.com/babakfp/svelte-outclick/blob/main/README.md)

> [!IMPORTANT]
> The latest version of this package is not compatible with Svelte 4. Please use the version `3.7.1` for Svelte 4 compatibility.

---

`onOutClick`

A Svelte component that allows you to listen to the clicks that happen outside of an element.

Why choose this over the other packages?

- [No extra wrapper](#no-extra-wrapper)
- Supports [`class`](#class-prop) prop
- [Exclude elements](#excluding-elements) from triggering the event
- [Half click](#halfclick) support
- TypeScript support

## Install

Please check out the [**CHANGELOG**](svelte-outclick/changelog) before updating to the newest version. Restart your app after the update.

```bash
pnpm add -D svelte-outclick
```

## How it works

It works the same as the Javascript click event. A few events are attached to the window and it checks whether the event target is contained within the element. If the element didn't contain the event target, it means the click happened outside of the element.

<!-- prettier-ignore -->
```svelte
<script>
	import { OutClick } from "svelte-outclick"
	let count = 0
</script>

<OutClick
	onOutClick={() => count += 1}
>
	{count} times clicked outside
</OutClick>
```

## Props

### Excluding elements

You may want to exclude some elements from triggering the event. For example, a button that opens a popup must be excluded, so the popup doesn't get closed immediately after you open it. Since the button that triggers the popup is located outside of the popup itself, in any time clicking on it will trigger the event.

#### `excludeElements`

- Type: `HTMLElement | HTMLElement[]`

This prop expects HTML elements. Clicks on those elements (and their children) will be ignored. Learn about [`bind:this`](https://svelte.dev/tutorial/bind-this).

<!-- prettier-ignore -->
```svelte
<script lang="ts">
	import { OutClick } from "svelte-outclick"
	let excludedElement: HTMLDivElement
	let count = 0
</script>

<OutClick
	onOutClick={() => count += 1}
	excludeElements={excludedElement}
>
	{count} times clicked outside
</OutClick>

<div bind:this={excludedElement}>
	This doesn't trigger outclick
</div>
```

This prop can receive a single element or an array of elements.

#### `excludeQuerySelectorAll`

- Type: `string`

This prop expects a string of css selectors. Clicks on those elements (and their children) will be ignored.

<!-- prettier-ignore -->
```svelte
<script>
	import { OutClick } from "svelte-outclick"
	let count = 0
</script>

<OutClick
	onOutClick={() => count += 1}
	excludeQuerySelectorAll=".excluded-element"
>
	{count} times clicked outside
</OutClick>

<div class="excluded-element">
	This doesn't trigger outclick
</div>
```

This prop works the same as the `querySelectorAll` method. It can contain any valid CSS selectors, for example: `"#element1, .element2"`.

### `class` prop

- Type: `string`

This is equivalent to the CSS class attribute. You can seamlessly utilize tools such as Tailwind CSS by adding your classes in the usual manner, without encountering any issues.

<!-- prettier-ignore -->
```svelte
<script>
	import { OutClick } from "svelte-outclick"
	let count = 0
</script>

<div>
	<OutClick
		class="my-custom-class another-class"
		onOutClick={() => count += 1}
	>
		{count} times clicked outside
	</OutClick>
</div>

<style>
	/* You need to use :global() here because of some stupid issue with Svelte. You also need to use an extra element (div) to wrap the component inside it, to scope the styles. */
	div :global(.my-custom-class) {
		color: red;
	}
</style>
```

### `includeSelf`

- Type: `boolean`
- Default: `false`

For example, if you want to close the dropdown when you click on any of its items, set the value of this option to `true`, so a self-click can trigger the event.

### `halfClick`

- Type: `boolean`
- Default: `true`

If `true`, `pointerdown` can solely determine the click outside. If `false`, outclick will happen when `pointerdown` and `pointerup` events happen after each other, outside of the element.

### `tag`

- Type: `string`
- Default: `"div"`

You can change the tag name of the wrapper element.

### Custom attributes

You can add any custom attributes to the wrapper element.

```svelte
<OutClick aria-label="Hello, World!" />
```

## No extra wrapper

Actually, there is an HTML `<div>` wrapper, but it doesn't affect the layout because of [`display: contents`](https://caniuse.com/css-display-contents). If you use the `class` prop, the default display will be automatically removed.

## FAQ

### Why are we not using the `click` event to capture the `outclick` event?

At first, we were using the `click` event to capture the `outclick` event, but later because of [this issue](https://github.com/babakfp/svelte-outclick/issues/4) we started using the `mousedown` event instead; and later because of [this issue](https://github.com/babakfp/svelte-outclick/issues/6) we started using the `pointerdown` even. Later I added the ability to use `pointerup` event with the `pointerdown` event to fully simulate the click event.

### Learn more

- `keydown` event on `document.body` is ignored because this is how it works when you use `click` event instead.
- `keydown` event only triggers with `Enter`, `NumpadEnter`, and `Space` keys (because this is how it works when you use the `click` event instead).
