# Step 11 - CSS variables

Using CSS variables enables the host to change styling whist still using the shadow DOM.  

```css
.current {
  margin: 0 20px;
  font-size: 5rem;
  color: var(--current-color, red);
}
```

## See it running

Note: the use of 'componentOnReady' before the event listener is added.  This ensures the Stencil component has been loaded.

Note: the host can specify the a value for the current-color variable.

Change src/index.html to render the component

```html
<style>
  alert-component-css-variables {
    --current-color: green;
  }
</style>
<alert-component-css-variables initial-value="2" alert-value="4">
</alert-component-css-variables>
<button id="resetButton">Reset</button>
<script>
  const el = document.querySelector('alert-component-css-variables');
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