In short `on:clickOutside`. This is a simple Svelte component that allows you to listen for clicks outside of an element.
- No extra wrapper (it's optional)
- Exclude other elements from event target

## Installation
```
pnpm add -D babakfp/svelte-click-outside
```
Most installed in 'devDependencies'.

[Pnpm](https://pnpm.io) is a package manager like npm. You can use any other package manager instead.

## How to use
It works same as the Javascripts Click Event. An click event attached to the entire window and checks whether the target is contained within the element, or not. if not, it's a outside click. There is also a `exclude` prop taht you can use (continue to learn more).

### No Wrapper & With Wrapper
You can visit the demo files [NoWrapper demo](https://github.com/babakfp/svelte-click-outside-demo/blob/main/src/NoWrapper.svelte) / [WithWrapper demo](https://github.com/babakfp/svelte-click-outside-demo/blob/main/src/WithWrapper.svelte) to learn how to use the component.

#### With Wrapper
element/elements inside the component tags going to be wrapped inside a div element. You can style it by a `class` prop.
```HTML
<ClickOutside class="your-class" />
```

Also you need to have a parent element to wrap the component inside it, to be able to add your custom styles for the component wrapper element.
```HTML
<section>
	<ClickOutside class="your-class" />
</section>

<style>
	section :global(.your-class) {}
</style>
```

In [NoWrapper demo](https://github.com/babakfp/svelte-click-outside-demo/blob/main/src/NoWrapper.svelte) we use a value calleed `contents` for CSS `display` property (`display: contents`). In [WithWrapper demo](https://github.com/babakfp/svelte-click-outside-demo/blob/main/src/WithWrapper.svelte) we don't use that CSS property.

### Props

#### `exclude` (default: `[]`)
By default, clicking on any element outside of the wrapped element will cause the event to trigger. You can specify excluded elements that will not trigger the event. For example, a button that triggers a popup must be excluded. Otherwise, it will immediately close the popup when it is opened. The component has an `exclude` prop that expects an array of DOM nodes. Clicks on those nodes (and their children) will be ignored.

#### `class` (default: nothing)
same as the CSS `class` property, it's for the wrapper class. You don't need to use this if `disableWrapper` prop was equal to `true` (it is by default).

#### disableWrapper (default: `true`)
If it was equal to `true`, the component wrapper `<div><slot /></div>` going to be ignored by the browser because of the `display: contents`. It's only ignored by the CSS perspective. For spacial reasons, if you need this wrapper, look at the "With Wrapper" explanation.

## Install demo
[Demo repo](https://github.com/babakfp/svelte-click-outside-demo)
```
git clone https://github.com/babakfp/svelte-click-outside-demo.git
cd svelte-click-outside-demo
pnpm i
pnpm dev
```
