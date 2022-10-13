`on:outclick`

**v3.1.0** . [**DEMO**][demo] . [**REPO**][repo] . [**NPM**][npm] . [**CHANGELOG**][changelog]

---

A Svelte component that allows you to listen to the clicks that happen outside of an element.

Why choose this one over the other packages?
- [No extra wrapper](#no-extra-wrapper)
- [Supports `class` prop](#class---default----demo---code)
- [Exclude elements from triggering the event](#excludebydomnode-and-excludebyqueryselector)
- [It uses `on:pointerdown` and `on:keydown` instead of `on:click` to capture the event](#why-onpointerdown-instead-of-onclick-and-onmousedown)
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

### `excludeByDomNode` and `excludeByQuerySelector`
Clicking on any element outside of the component will cause the event to trigger and this can cause issues, for example, a button that triggers a popup must be excluded, otherwise, it will immediately close the popup when it's opened.

### `excludeByDomNode` - default: `[]` - [**Code**][example__exclude_by_dom_node__code]
This prop expects an array of DOM nodes. Clicks on those nodes (and their children) will be ignored. Learn about [`bind:this`](https://svelte.dev/tutorial/bind-this).

```HTML
<script>
	let btn
</script>

<button bind:this={btn}>...</button>
<OutClick excludeByDomNode={[btn]}>...</OutClick>
```

### `excludeByQuerySelector` - default: `[]` - [**Code**][example__main__code]
This prop expects an array of query selectors. Clicks on those nodes (and their children) will be ignored. Selectors element most be present on the document or it will cause an error.

```HTML
<button class="my-button"}>...</button>
<OutClick excludeByQuerySelector={['.my-button']}>...</OutClick>
```

### `includeSelf` - default: `false` - [**Demo**][example__include_self__demo] - [**Code**][example__include_self__code]
For example, if you want to close the dropdown when you click on its items, set the value to `true`, so the self(wrapper) can trigger the event.

### `class` - default: `''` - [**Demo**][example__class_prop__demo] - [**Code**][example__class_prop__code]
This is the same as the CSS `class` attribute. You can use tools like TailwindCSS without any problems, just add your classes how you normally do. Please check out the demo source code to learn about how to add styles to your custom class.

```HTML
<OutClick class="custom-class custom-class-two" />
<OutClick class="bg-gray-800 text-white font-bold" />
```

---

## No extra wrapper
Actually, there is an HTML `<div>` wrapper, but it doesn't affect anything because of [`display: contents`](https://caniuse.com/css-display-contents).

## Why `on:pointerdown` instead of `on:click` and `on:mousedown`?

At first, we were using the `on:click` event to capture the `outclick` action,  but later because of [this issue](https://github.com/babakfp/svelte-outclick/issues/4) we started using the `on:mousedown` event instead; and later because of [this issue](https://github.com/babakfp/svelte-outclick/issues/6) we started using the `on:pointerdown` even instead.

## Also read

- `keydown` event on `document.body` is ignored because this is how it works when you use `click` event instead of `pointerdown` event.
- `keydown` event only triggers with `Enter`, `NumpadEnter`, and `Space` keys (because this is how it works when you use `click` event instead of `pointerdown` event).

## RoadMap
- Maybe add Typescript support

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
