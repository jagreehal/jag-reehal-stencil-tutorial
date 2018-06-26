import { TestWindow } from '@stencil/core/dist/testing';
import { AlertComponentStart } from './alert-component-start';

describe('alert-component-start', () => {
  it('should build', () => {
    expect(new AlertComponentStart()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [AlertComponentStart],
        html: '<alert-component-start></alert-component-start>'
      });
    });

    it('should be able to render the component with default value', async () => {
      expect(element.querySelector('.current').textContent).toEqual('5');
    });
  });
});
