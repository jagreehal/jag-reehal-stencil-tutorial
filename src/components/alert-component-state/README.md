# Step 4 - State and handlers

At the moment clicking on the buttons do NOT change the value.

onClick handlers need to be added to the buttons.

A state variable also needs to be added, as prop values should NOT be modified (although you can do this using Stencil by allowing mutation).

Import 'State' form Stencil and create the variable

```jsx
@State() currentValue: number = 2;
```

Instead of creating two event handlers for the increment and decrement actions, a single event handler will do the job. Here the event target name will determine the action.

```jsx
buttonHandler = (e) => {
  e.target.name === 'increment' ?
    this.currentValue++ : this.currentValue--;
}
```

Use both the state variable and the buttonHandler in the render function

```jsx
render() {
    return (
      [
        <slot>Alert Component</slot>,
        <button name="decrement" onClick={this.buttonHandler}>-</button>,
        <div class="current">{this.currentValue}</div>,
        <button name="increment" onClick={this.buttonHandler}>+</button>
      ]
    );
  }
```

## Run the test

Additional tests are added to test the button handlers.

Note the usage of

```jsx
await window.flush();

```

which flushes the component

```bash
npm t
```

## See it running

Change src/index.html to render the component and click on the buttons!

```html
<alert-component-state initial-value="2" alert-value="4">
</alert-component-state>
```