import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'alert-component-state',
})
export class AlertComponentState {
  /**
   * The initial value
   */
  @Prop() initialValue: number = 5;
  /**
   * The alert value
   */
  @Prop() alertValue: number = 10;

  @State() currentValue: number = 2;

  buttonHandler = (e) => {
    e.target.name === 'increment' ? this.currentValue++ : this.currentValue--;
  };

  render() {
    return [
      <slot>Alert Component</slot>,
      <button name="decrement" onClick={this.buttonHandler}>
        -
      </button>,
      <div class="current">{this.currentValue}</div>,
      <button name="increment" onClick={this.buttonHandler}>
        +
      </button>,
    ];
  }
}
