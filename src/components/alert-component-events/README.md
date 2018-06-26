# Step 6 - Emitting Events

Next we need to add code to emit an 'alertRaised' event when the current number is equal to the alert value.

To do this we import 'Event' and 'Event Emitter' from Stencil.

As were using TypeScript we can export an interface for  object that will be emitted.

```jsx
export interface AlertRaised {
  message: string
}

@Event() alertRaised: EventEmitter<AlertRaised>;
```

And emit the event when the current number is equal to the alert value

```jsx
buttonHandler = (e) => {
  e.target.name === 'increment' ?
    this.currentValue++ : this.currentValue--;
  if (this.currentValue === this.alertValue) {
    this.alertRaised.emit({ message: 'alert!' });
  }
}
```

## See it running

Note: the use of 'componentOnReady' before the event listener is added.  This ensures the Stencil component has been loaded.

Change src/index.html to render the component

```html
<alert-component-events initial-value="2" alert-value="4">
</alert-component-events>
<script>
  const el = document.querySelector('alert-component-events');
  el.componentOnReady().then(() => {
    el.addEventListener('alertRaised', () => {
      console.log('alert');
    })
  })
</script>
```