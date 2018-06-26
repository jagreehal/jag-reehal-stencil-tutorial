import { Component } from '@stencil/core';

@Component({
  tag: 'alert-component-start'
})
export class AlertComponentStart {

  render() {
    return (
      [
        <button name="decrement">-</button>,
        <div class="current">5</div>,
        <button name="increment">+</button>
      ]
    );
  }
}
