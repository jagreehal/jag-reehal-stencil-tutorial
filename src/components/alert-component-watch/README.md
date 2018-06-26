# Step 7 - Watch

While you could emit the event in the button handler, this could be regarded as breaking the single responsibility pattern, why should a click handler be responsible for knowing when a event should be fired?

A better practice is to watch the current value.

Import 'Watch' from Stencil.

The watch function gets passed the new and old value of the property that is being watched.

Using the code below an event will be fired when the current number is equal to the alert value.

```jsx
@Watch('currentValue')
currentValueWatcher(value) {
  if (value === this.alertValue) {
    this.alertRaised.emit({ message: 'alert!' });
  }
}
```

## See it running

Note: the use of 'componentOnReady' before the event listener is added.  This ensures the Stencil component has been loaded.

Change src/index.html to render the component

```html
<alert-component-watch initial-value="2" alert-value="4">
</alert-component-watch>
<script>
  const el = document.querySelector('alert-component-watch');
  el.componentOnReady().then(() => {
    el.addEventListener('alertRaised', () => {
      console.log('alert');
    })
  })
</script>
```