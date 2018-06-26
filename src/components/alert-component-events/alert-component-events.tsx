import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';

export interface AlertRaised {
  message: string
}

@Component({
  tag: 'alert-component-events'
})
export class AlertComponentEvents {
  /**
 * The initial value
 */
  @Prop() initialValue: number = 5;
  /**
  * The alert value
  */
  @Prop() alertValue: number = 10;

  @State() currentValue: number = 2;

  @Event() alertRaised: EventEmitter<AlertRaised>;

  buttonHandler = (e) => {
    e.target.name === 'increment' ?
      this.currentValue++ : this.currentValue--;
    if (this.currentValue === this.alertValue) {
      this.alertRaised.emit({ message: 'alert!' });
    }
  }

  render() {
    return (
      [
        <slot>Alert Component</slot>,
        <button name="decrement" onClick={this.buttonHandler}>-</button>,
        <div class="current">{this.currentValue}</div>,
        <button name="increment" onClick={this.buttonHandler}>+</button>
      ]
    );
  }
}
