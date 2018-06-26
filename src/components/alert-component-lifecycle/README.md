# Step 5 - Life cycle and assigning state values from props

In step 4 a default value was given to the current value

```jsx
@State() currentValue: number = 2;
```

This should be set to the initial value but doing something like this will not work

```jsx
@State() currentValue: number = this.initialValue;
```

because the 'initialValue' will not have been set... yet.

To current value can be set to the initial value during the 'componentWillLoad' before the compoent is rendered [lifecycle](https://stenciljs.com/docs/component-lifecycle) event

```jsx
componentWillLoad() {
  this.currentValue = this.initialValue;
}
```

## See it running

Change src/index.html to render the component

```html
<alert-component-lifecycle initial-value="2" alert-value="4">
</alert-component-lifecycle>
```