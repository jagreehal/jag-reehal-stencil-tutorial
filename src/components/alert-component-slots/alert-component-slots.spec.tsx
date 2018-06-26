import { TestWindow } from '@stencil/core/dist/testing';
import { AlertComponentSlots } from './alert-component-slots';

describe('alert-component-slots', () => {
  it('should build', () => {
    expect(new AlertComponentSlots()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [AlertComponentSlots],
        html: '<alert-component-slots></alert-component-slots>'
      });
    });

    it('should be able to render the component with default value', async () => {
      expect(element.querySelector('.current').textContent).toEqual('5');
    });
  });
});
