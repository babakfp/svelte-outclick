### 3.0.0
- Supports Typescript.
- Renamed `.outclick-wrapper` component wrapper class to `.outclick`.
- Remplaced `exclude` prop with `excludeByDOMNode` and `excludeByQuerySelector`.
- If you use `class` prop, `display: contents` will be removed by default.
- Using `on:mousedown` and `on:keydown` instead of `on:click`.
- Removed `useMousedown` and `useKeydown` props.

### 2.6.5
- Added `useMousedown` and `useKeydown` props.
- Fixed [**#4**](https://github.com/babakfp/svelte-outclick/issues/4)

### 2.5.4
- Replaced on:click with on:mousedown - fixed #4

### 2.4.3
- The `exclude` prop now accepts HTML `class` and `id` instead of DOM nodes.

### 2.3.1
- Renamed dispatch `detail.self` to `detail.wrapper`.
