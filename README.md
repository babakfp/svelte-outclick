`on:outclick`

**V3.0.0** . [**DEMO**][demo] . [**REPO**][repo] . [**NPM**][npm] . [**CHANGELOG**][changelog]

---

A Svelte component that allows you to listen to the clicks that happen outside of an element.

Why choose this one over the other packages?
- [No extra wrapper](#no-extra-wrapper)
- [Supports `class` prop](#class---default----demo---code)
- [Exclude elements from triggering the event](#excludebydomnode-and-excludebyqueryselector)
- It uses `on:mousedown` and `on:keydown` instead of `on:click` to capture the event
- [You can trigger the event on component itself](#includeself---default-false---demo---code)

## Install
Please check out the [**CHANGELOG**][changelog] before updating to a new version. Restart your app after the update.
```
pnpm add -D svelte-outclick
```

## How it works
It works the same as the Javascript click event. A click event is attached to the window and it checks whether the event target is contained within the element. If the element didn't contain the event target, it means the click happened outside of the element.

### Simple Example
```HTML
<script>
	import OutClick from 'svelte-outclick'
</script>

<OutClick on:outclick={myFunction}>...</OutClick>
```

## Examples
- Main: [**Demo**][example__main__demo] - [**Code**][example__main__code]
- Exclude By DOM Node: [**Demo**][example__exclude_by_dom_node__demo] - [**Code**][example__exclude_by_dom_node__code]
- Exclude By Query Selector: [**Demo**][example__main__demo] - [**Code**][example__main__code]
- Include Self: [**Demo**][example__include_self__demo] - [**Code**][example__include_self__code]
- Use Wrapper: [**Demo**][example__use_wrapper__demo] - [**Code**][example__use_wrapper__code]
- `class` Prop: [**Demo**][example__class_prop__demo] - [**Code**][example__class_prop__code]

---

## Props

### `excludeByDOMNode` and `excludeByQuerySelector`
Clicking on any element outside of the component will cause the event to trigger and this can cause issues, for example, a button that triggers a popup must be excluded, otherwise, it will immediately close the popup when it's opened.

### `excludeByDOMNode` - default: `[]` - [**Code**][example__exclude_by_dom_node__code]
This prop expects an array of DOM nodes. Clicks on those nodes (and their children) will be ignored. Learn about [`bind:this`](https://svelte.dev/tutorial/bind-this).

```HTML
<script>
	let btn
</script>

<button bind:this={btn}>...</button>
<OutClick excludeByDOMNode={[btn]}>...</OutClick>
```

### `excludeByQuerySelector` - default: `[]` - [**Code**][example__main__code]
This prop expects an array of query selectors. Clicks on those nodes (and their children) will be ignored. Selectors element most be present on the document or it will cause an error.

```HTML
<button class="my-button"}>...</button>
<OutClick excludeByQuerySelector={['.my-button']}>...</OutClick>
```

### `includeSelf` - default: `false` - [**Demo**][example__include_self__demo] - [**Code**][example__include_self__code]
For example, if you want to close the dropdown when you click on its items, set the value to `true`, so the self(wrapper) can trigger the event.

### `useWrapper` - default: `false` - [**Demo**][example__use_wrapper__demo] - [**Code**][example__use_wrapper__code]
As we already know, your content that goes inside the componetn tags, will be wrapper inside a `<div class="outclick">HERE</div>`.By default, the [wrapper is ignored](#no-extra-wrapper). Set the prop value to `true` to be able to style the wrapper. Please check out the demo source code to learn about how to style the wrapper.

### `class` - default: `''` - [**Demo**][example__class_prop__demo] - [**Code**][example__class_prop__code]
This is the same as the CSS `class` property. Add your custom classes to the wrapper element. You can use tools like TailwindCSS without any problems, just add your classes how you normally do. The wrapper element have a class named `.outclick` by default. Please check out the demo source code to learn about how to style the wrapper.

```HTML
<OutClick class="my-custom-class my-custom-class my-second-custom-class" />
<!--  -->
<OutClick class="bg-gray-800 text-white font-bold" />
```

---

## No extra wrapper
Actually, there is an HTML `<div>` wrapper, but it doesn't affect anything because of [`display: contents`](https://caniuse.com/css-display-contents).

## Why `on:mousedown` instead of `on:click`?
See this [issue #4](https://github.com/babakfp/svelte-outclick/issues/4).

## Extra info
- `keydown` on `document.body` is ignored, because this is how it works with `on:click`'s `keydown`.
- `keydown` only triggers with these keys `['Enter', 'NumpadEnter', 'Space']`.

[repo]: https://github.com/babakfp/svelte-outclick
[demo]: https://svelte-outclick.vercel.app
[npm]: https://www.npmjs.com/package/svelte-outclick
[changelog]: CHANGELOG.md

[example__main__demo]: https://svelte-outclick.vercel.app
[example__main__code]: https://github.com/babakfp/svelte-outclick-demo/blob/main/src/routes/index.svelte

[example__include_self__demo]: https://svelte-outclick.vercel.app/include-self
[example__include_self__code]: https://github.com/babakfp/svelte-outclick-demo/blob/main/src/routes/include-self.svelte

[example__exclude_by_dom_node__demo]: https://svelte-outclick.vercel.app/exclude-by-dom-node
[example__exclude_by_dom_node__code]: https://github.com/babakfp/svelte-outclick-demo/blob/main/src/routes/exclude-by-dom-node.svelte

[example__use_wrapper__demo]: https://svelte-outclick.vercel.app/use-wrapper
[example__use_wrapper__code]: https://github.com/babakfp/svelte-outclick-demo/blob/main/src/routes/use-wrapper.svelte

[example__class_prop__demo]: https://svelte-outclick.vercel.app/class-prop
[example__class_prop__code]: https://github.com/babakfp/svelte-outclick-demo/blob/main/src/routes/class-prop.svelte
