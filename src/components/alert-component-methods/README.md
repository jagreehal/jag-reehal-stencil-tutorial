# Step 8 - Methods

Public functions can be added to Stencil components by using Methods.

In this this step a public reset function will be added.

Methods can be used by importing 'Method' from Stencil.

```jsx
  /**
  * Resets the current value to the initial value
  */
  @Method()
  reset() {
    this.currentValue = this.initialValue;
  }
```

## See it running

Note: the use of 'componentOnReady' before the event listener is added.  This ensures the Stencil component has been loaded.

Change src/index.html to render the component

```html
<alert-component-methods initial-value="2" alert-value="4">
  Methods
</alert-component-methods>
<button id="resetButton">Reset</button>
<script>
  const el = document.querySelector('alert-component-methods');
  el.componentOnReady().then(() => {
    el.addEventListener('alertRaised', () => {
      console.log('alert');
    })
    document.getElementById('resetButton').addEventListener('click', () =>{
      el.reset();
    });
  })
</script>
```