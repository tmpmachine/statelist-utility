# statelist-utility
JavaScript classList-like utility to separate styling application states with styling elements and layouts.

## Installation (CDN jsDelivr)
Include in your application :
```html
<script src="https://cdn.jsdelivr.net/gh/tmpmachine/statelist-utility@v1.0.1/statelist.js"></script>
```
or use minified version :
```html
<script src="https://cdn.jsdelivr.net/gh/tmpmachine/statelist-utility@v1.0.1/statelist.min.js"></script>
```

# Syntax
```
Element.stateList.method();
```

# Method
- add(stateName, [stateName2, ..., stateNameN])
- remove(stateName, [stateName2, ..., stateNameN])
- toggle(stateName, [force]) : returns `bool` value. `true` if a state is added.
  - force (bool) : `true` to force add, `false` to force remove.
- contains(stateName)

# Examples

> Note : It is recommended to use double dash (--) prefix for state name to easily find and distinguish it from styling elements and layouts.

Adding states :
```js
document.body.stateList.add('--dark-theme', '--collapsed-sidebar');
```
Result :
```html
<body data-state="--dark-theme --collapsed-sidebar">
...
</body>
```
---
Toggling states :
```js
let isMinimalUI = document.body.stateList.toggle('--minmal-ui');
if (isMinimalUI) {
  // todo
}
```
---
Styling application states :
```css
body[data-state~="--idle"] .app-wrapper { opacity: 30%; }
body[data-state~="--screen-off"] .app-wrapper { opacity: 0%; }
```
Read more about tilde (~) [CSS attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors).
