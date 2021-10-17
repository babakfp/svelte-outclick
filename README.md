[**REPO**](https://github.com/babakfp/svelte-outclick) . [**DEMO**](https://github.com/babakfp/svelte-outclick-demo) . [**NPM**](https://www.npmjs.com/package/svelte-outclick)

**In short `on:outclick`** 😜. A Svelte component that allows you to listen for clicks outside of an element, by providing you an outclick event.

- Ignore wrapper ([as CSS perspective](https://caniuse.com/css-display-contents)).
- Exclude other elements so they will not trigger the event.
- Include self(wrapper) to the event target.
- Add custom classes to the wrapper.

## Installation
```
npm i -D svelte-outclick

yarn add svelte-outclick --dev
pnpm add -D svelte-outclick
```
Must be installed in 'devDependencies'.

## How to use
```HTML
<script>
	import OutClick from 'svelte-outclick'
</script>

<OutClick on:outclick={myFunction}</OutClick>
```

- [DEMO - **Simple**](https://github.com/babakfp/svelte-outclick-demo/blob/main/src/Simple.svelte)
- [DEMO - **No wrapper**](https://github.com/babakfp/svelte-outclick-demo/blob/main/src/NoWrapper.svelte)
- [DEMO - **Excluded element**](https://github.com/babakfp/svelte-outclick-demo/blob/main/src/ExcludedElement.svelte)
- [DEMO - **Include self**](https://github.com/babakfp/svelte-outclick-demo/blob/main/src/IncludeSelf.svelte)
- [DEMO - **Use wrapper**](https://github.com/babakfp/svelte-outclick-demo/blob/main/src/UseWrapper.svelte)
- [DEMO - **Wrapper custom class**](https://github.com/babakfp/svelte-outclick-demo/blob/main/src/WrapperClass.svelte)

## How it works
It works the same as Javascript click event. A click event is attached to the entire window and checks whether the event target is contained within the element.

If the element didn't contain the event target, it means that the click happened outside of the element. Therefore we can call it outside click (outclick in short).

### Props
- `exclude` - default: `[]`
- `includeSelf` - default: `false`
- `useWrapper` - default: `false`
- `class` - default: `''`

#### `exclude` - default: `[]`
By default, clicking on any element outside of the wrapper will cause the event to trigger. You can specify elements that will not trigger the event. For example, a button that triggers a popup must be excluded. Otherwise, it will immediately close the popup when it is opened. The `exclude` prop expects an array of DOM nodes. Clicks on those nodes (and their children) will be ignored.

#### `includeSelf` - default: `false`
For example, if you want to close the dropdown when you click on its items, set the prop value to `true`, so the self(wrapper) can trigger the event.

#### `useWrapper` - default: `false`
By default, the wrapper is ignored [as CSS perspective](https://caniuse.com/css-display-contents). For special reasons, if you don't want to use `display: contents`, set the value to `true`.

**You need to do extra work to get the desired result.** Your elements (that goes inside the component tags) going to wrapped between a `div` element. This element has a default class called `outclick-wrapper`. You can also add your custom classes if you are using tools like TailwindCSS. Read "`class` - default: `null`" section for more information about styling the wrapper.

#### `class` - default: `''`
This is the same as CSS `class` property. Add your custom styles for the wrapper element. You don't need to use this if `useWrapper` prop **wasn't** equal to `true` (it is by default).
```HTML
<OutClick class="outclick-wrapper my-custom-class" />
```
The `outclick-wrapper` class is available by default. You don't need to add it yourself.

If you are going to add the wrapper styles in the same Svelte file, you must wrap the `OutClick` component inside another element, so you can do the following code example, so your styles won't be ignored by the Svelte compiler.
```HTML
<section>
	<OutClick class="outclick-wrapper" />
</section>

<style>
	section :global(.outclick-wrapper) {}
</style>
```
