import { TestWindow } from '@stencil/core/dist/testing';
import { AlertComponentProps } from './alert-component-props';

describe('alert-component-props', () => {
  it('should build', () => {
    expect(new AlertComponentProps()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [AlertComponentProps],
        html: '<alert-component-props initial-value="2"></alert-component-props>'
      });
    });

    it('should be able to render the component with initial value', async () => {
      expect(element.querySelector('.current').textContent).toEqual('2');
    });
  });
});
