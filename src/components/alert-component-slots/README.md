# Step 2 - Slots

To allow the user to provide their own title we can add render a slot element.

Here we can provide a fallback value.

```jsx
<slot>Alert Component</slot>
```

## See it running

Change src/index.html to render the component

```html
<alert-component-slots>
  My Alert Component Slot
</alert-component-slots>
```