Restart your app after updating the package.

---

## 3.3.0

- Added custom tag support. Now you can add a prop called `tag` into your `OutClick` component and change the component tag. Added with the help of the `svelte:element` feature.
- Now you can add custom attributes to the component. Added with the help of the `$$restProps` feature.

## 3.2.0

- [breaking] Removed `useWrapper` prop, because it was unnecessary.
- [breaking] Removed the default class `outclick` from the component wrapper element.
- [breaking] Renamed `excludeByDOMNode` to `excludeByDomNode`
- [breaking] Added new `fullClick` prop. Now clicking outside requires `pointerdown` and `pointerup` to fire at outside of your element. Set it to `false` so `pointerdown` can fire the `outclick` event on its own.
- Fix empty `class` attribute showing up when not using a class.
- Fix empty `style` attribute showing up when using the `class` prop.

## 3.1.0

- Changed `on:mousedown` to `on:pointerdown` and [fixed #8](https://github.com/babakfp/svelte-outclick/issues/6)

## 3.0.1

- Removed ROADMAP.todo
- Fixed some typo in README.md
- Rewrite some description in README.md

## 3.0.0

- Remplaced `exclude` prop with `excludeByDOMNode` and `excludeByQuerySelector`.
- Renamed `.outclick-wrapper` component wrapper class to `.outclick`.
- Using `on:mousedown` and `on:keydown` instead of `on:click`.
- Removed `useMousedown` and `useKeydown` props.
- If you use `class` prop, `display: contents` will be removed by default.

## 2.6.5

- Added `useMousedown` and `useKeydown` props.
- Fixed [**#4**](https://github.com/babakfp/svelte-outclick/issues/4)

## 2.5.4

- Replaced on:click with on:mousedown - fixed #4

## 2.4.3

- The `exclude` prop now accepts HTML `class` and `id` instead of DOM nodes.

## 2.3.1

- Renamed dispatch `detail.self` to `detail.wrapper`.
