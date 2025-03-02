---
title: CHANGELOG
---

> [!IMPORTANT]
> Restart your app after updating the package.

## 4.1.0

- [feature] Added `tag` prop and rest props type suggestion support with generic type support based on the `tag` prop.

## 4.0.1

- Fixed `"svelte"` `"peerDependencies"` version by changing it to `">= 5"`.

## 4.0.0

> [!IMPORTANT]
> There are breaking changes in this version.

- [breaking] Use `e.target` instead of `e.detail.target`.
- [breaking] `OutClickEvent` now returns `pointerdown` or `pointerup` or `keydown`, depending on how the outclick event is fired.
- [breaking] Also, take a look at the migration guide below.
- Exports `OutClickEvent` type.

### Migration guide

Before:

```svelte
<script>
    import OutClick from "svelte-outclick"
</script>
```

After:

```svelte
<script>
    import { OutClick } from "svelte-outclick"
</script>
```

---

Before:

```svelte
<OutClick on:outclick={() => {}}></OutClick>
```

After:

```svelte
<OutClick onOutClick={() => {}}></OutClick>
```

## 3.7.1

- [feature] Added `e.detail.target` property.
- [breaking] Requires version `4.2.12` or higher.

## 3.7.0

- Compatible with SvelteKit version `2.0.0`.

## 3.6.2

- Now it's compatible with Svelte 5.

## 3.6.1

- Fixed some issues related to props types.

## 3.6.0

- Removed `e.detail` because it wasn't needed.

## 3.5.0

- Please update to version `3.5.0` if you were using the `3.4.0` version.

## 3.4.0

- Added TypeScript support.

## 3.3.1

- Fixed some JSDocs data types.

## 3.3.0

- [breaking] Renamed `fullClick` to `halfClick` (default: `false`).
- [breaking] Renamed `excludeByDomNode` to `excludeElements`.
- [breaking] Renamed `excludeByQuerySelector` to `excludeQuerySelectorAll`.
- Now you can set the `excludeElements` prop to the element itself instead of wrapping it with an array.
- Now the `excludeQuerySelectorAll` prop works the same as the JavaScript [`querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) method. It can contain values like `"#element1, .element2"` and `['#element1', '.element2']`.
- Added custom tag support. Now you can add a prop called `tag` to your `OutClick` component and change the wrapper tag. Added with the help of `svelte:element`.
- Now you can add custom attributes to render on the wrapper. Added with the help of `$$restProps`.

## 3.2.0

- [breaking] Removed `useWrapper` prop, because it was unnecessary.
- [breaking] Removed the default class `outclick` from the wrapper.
- [breaking] Renamed `excludeByDOMNode` to `excludeByDomNode`
- [breaking] Added new `fullClick` prop. Now clicking outside requires `pointerdown` and `pointerup` to fire at outside of your element. Set it to `false` so `pointerdown` can fire the `outclick` event on its own.
- Fix empty `class` attribute showing up when not using a class.
- Fix empty `style` attribute showing up when using the `class` prop.

## 3.1.0

- Changed `on:mousedown` to `on:pointerdown` and fixed [this issue](https://github.com/babakfp/svelte-outclick/issues/6).

## 3.0.1

- Removed `ROADMAP.todo`.
- Fixed typo in `README.md`.
- Rewrite the description in `README.md`.

## 3.0.0

- Remplaced `exclude` prop with `excludeByDOMNode` and `excludeByQuerySelector`.
- Renamed `.outclick-wrapper` component wrapper class to `.outclick`.
- Using `on:mousedown` and `on:keydown` instead of `on:click`.
- Removed `useMousedown` and `useKeydown` props.
- If you use `class` prop, `display: contents` will be removed by default.

## 2.6.5

- Added `useMousedown` and `useKeydown` props.
- Fixed [this issue](https://github.com/babakfp/svelte-outclick/issues/4).

## 2.5.4

- Replaced `on:click` with `on:mousedown` and fixed [this issue](https://github.com/babakfp/svelte-outclick/issues/4).

## 2.4.3

- The `exclude` prop now accepts HTML `class` and `id` instead of DOM nodes.

## 2.3.1

- Renamed dispatch `detail.self` to `detail.wrapper`.
