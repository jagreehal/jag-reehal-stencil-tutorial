import { TestWindow } from '@stencil/core/dist/testing';
import { AlertComponentState } from './alert-component-state';

describe('alert-component-state', () => {
  it('should build', () => {
    expect(new AlertComponentState()).toBeTruthy();
  });

  function getCurrentValue(element){
    return element.querySelector('.current').textContent;
  }

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [AlertComponentState],
        html: '<alert-component-state initial-value="2"></alert-component-state>'
      });
    });

    it('should be able to render the component with initial value', async () => {
      expect(getCurrentValue(element)).toEqual('2');
    });

    it('should be able to increment the value', async () => {
      element.querySelector('button[name="increment"]').click();
      await window.flush();
      expect(getCurrentValue(element)).toEqual('3');
    });

    it('should be able to decrement the value', async () => {
      element.querySelector('button[name="decrement"]').click();
      await window.flush();
      expect(getCurrentValue(element)).toEqual('1');
    });
  });
});
