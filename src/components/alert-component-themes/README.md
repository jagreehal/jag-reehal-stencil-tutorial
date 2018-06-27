# Step 12 - Themes

CSS variables are great at specifying single values but using the :host selector  provides a way of exposing themes.

Themes are a great way of allowing flexibility while ensuring standards such as contrast for accessibility etc are maintained.

In this step the host can specify if want the component to use the dark or light theme.

```css
button {
  background: #333;
  border: 0;
  color: #fff;
  font-family: inherit;
  font-size: 2rem;
}

:host(.light) button {
  background: #eee;
  border: 1px solid #eee;
  color: #222;
}
```

## See it running

Note: the use of 'componentOnReady' before the event listener is added.  This ensures the Stencil component has been loaded.

Note: the host can specify the theme by specifying a class.

Change src/index.html to render the component

```html
<alert-component-themes initial-value="2" alert-value="4">
  Default
</alert-component-themes>
<alert-component-themes class="light" initial-value="2" alert-value="4">
  Light Theme
</alert-component-themes>
<button id="resetButton">Reset</button>
<script>
  const el = document.querySelector('alert-component-themes');
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