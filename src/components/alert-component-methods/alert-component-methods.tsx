import {
  Component,
  h,
  Event,
  EventEmitter,
  Prop,
  Method,
  State,
  Watch,
} from '@stencil/core';

export interface AlertRaised {
  message: string;
}

@Component({
  tag: 'alert-component-methods',
})
export class AlertComponentMethods {
  /**
   * The initial value
   */
  @Prop() initialValue: number = 5;
  /**
   * The alert value
   */
  @Prop() alertValue: number = 10;

  /**
   * Resets the current value to the initial value
   */
  @Method()
  async reset() {
    this.currentValue = this.initialValue;
  }

  @State() currentValue: number = 2;

  @Event() alertRaised: EventEmitter<AlertRaised>;

  @Watch('currentValue')
  currentValueWatcher(value) {
    if (value === this.alertValue) {
      this.alertRaised.emit({ message: 'alert!' });
    }
  }

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
