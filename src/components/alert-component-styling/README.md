# Step 9 - Styling

You can add styles within the component itself

```jsx
const style = {
  border: '5px solid blue',
};

render() {
  return (
    <div style={style}>
    </div>
  );
}
```

or you use can specify a css or scss file to use within the component metadata.
```jsx
@Component({
  tag: 'alert-component-styling',
  styleUrl: 'alert-component-styling.css'
})
```

Stencil comes built in with autoprefixer with use can enable in the stencil.config.js file.

```js
autoprefixer: [
    '> 1%',
    'last 2 versions',
    'IE 11'
  ]
```

Note: If you want to use scss file you will need to use the [Stencil Sass Plugin](https://github.com/ionic-team/stencil-sass).

There is also a [Stencil postcss plugin](https://github.com/ionic-team/stencil-postcss)

In this step a CSS file has used.

Note: as the component is being rendered in the 'light DOM' the styles have leaked onto the host page.  Styles on the host page can override element styling within the component.

## See it running

Note: the use of 'componentOnReady' before the event listener is added.  This ensures the Stencil component has been loaded.

Change src/index.html to render the component

```html
<alert-component-styling initial-value="2" alert-value="4">
</alert-component-styling>
<button id="resetButton">Reset</button>
<script>
  const el = document.querySelector('alert-component-styling');
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