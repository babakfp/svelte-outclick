# Svelte Click Outside
A SvelteJS component that allows you to listen for clicks outside of an element.

### Install
You need to install it in the `devDependencies`.

We are going to use [pnpm](https://pnpm.io). pnpm is a package manager like npm. You can use anything else instead.

```
pnpm add -D babakfp/svelte-click-outside
```

### Install demo
```
git clone https://github.com/babakfp/svelte-click-outside.git
cd svelte-click-outside
pnpm i
pnpm dev
```

### How to use it
See the [demo](src/App.svelte).

It works same as the Javascripts Click Event. An click event attached to the entire window and checks whether the target is contained within the element.

element/elements inside the component tags going to be wrapped inside a div element. You can style it by a `class` prop.
```HTML
<ClickOutside class="my-class my-class-two" />
```
Also you need to have a parent element to wrap the component tags to be able to add your custom styles for the component wrapper element.
```HTML
<div class="my-div">
	<ClickOutside class="my-class my-class-two" />
</div>

<style>
	div :global(.my-class) {
		/*  */
	}
</style>
```
