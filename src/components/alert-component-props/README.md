# Step 3 - Props

Here we'll specify the initial value and the value for which the alert should be fired using attributes.

In the component import 'Prop' from Stencil and create two props.

Note:

- the type of the props have been declared numbers and been given a default value

- the casing of property names and how they are passed in the HTML markup

```jsx
  /**
 * The initial value
 */
  @Prop() initialValue: number = 5;
  /**
  * The number when the alert should be fired
  */
  @Prop() alertValue: number = 10;
```

for now we'll also use the initial value in the markup in the render function

```jsx
...
<div class="current">{this.initialValue}</div>
...
```

## See it running

Change src/index.html to render the component

```html
<alert-component-props initial-value="2" alert-value="4">
</alert-component-props>
```