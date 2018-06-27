# Step 10 - Shadow

Using the Shadow DOM will stop styles on the host page can overriding styling within the component.

To switch to using the Shadow DOM is one line change in the component metadata.

```jsx
@Component({
  tag: 'alert-component-styling',
  styleUrl: 'alert-component-styling.css'm
  shadow: true
})
```

In the future it's likely this will be the default setting.

The main element within the css file uses ':host' rather than the component name

```css
:host {

}
```

## See it running

Note: the use of 'componentOnReady' before the event listener is added.  This ensures the Stencil component has been loaded.

Change src/index.html to render the component

```html
<alert-component-shadow initial-value="2" alert-value="4">
  Shadow
</alert-component-shadow>
<button id="resetButton">Reset</button>
<script>
  const el = document.querySelector('alert-component-shadow');
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