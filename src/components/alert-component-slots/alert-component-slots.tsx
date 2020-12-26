import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'alert-component-slots',
})
export class AlertComponentSlots {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return [
      <slot>Alert Component</slot>,
      <button name="decrement">-</button>,
      <div class="current">5</div>,
      <button name="increment">+</button>,
    ];
  }
}
