import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'alert-component-props'
})
export class AlertComponentProps {
  /**
 * The initial value
 */
  @Prop() initialValue: number = 5;
  /**
  * The alert value
  */
  @Prop() alertValue: number = 10;

  render() {
    return (
      [
        <slot>Alert Component</slot>,
        <button name="decrement">-</button>,
        <div class="current">{this.initialValue}</div>,
        <button name="increment">+</button>
      ]
    );
  }
}
