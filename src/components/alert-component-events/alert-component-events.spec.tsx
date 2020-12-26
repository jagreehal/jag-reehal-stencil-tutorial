import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { AlertComponentEvents } from './alert-component-events';

describe('alert-component-events', () => {
  it('should build', () => {
    expect(new AlertComponentEvents()).toBeTruthy();
  });

  function getCurrentValue(element) {
    return element.querySelector('.current').textContent;
  }

  describe('rendering', () => {
    let page: SpecPage;
    let element;

    beforeEach(async () => {
      page = await newSpecPage({
        components: [AlertComponentEvents],
        html:
          '<alert-component-events initial-value="2" alert-value="3"></alert-component-events>',
      });
      element = page.root;
    });

    it('should be able to render the component with initial value', async () => {
      expect(getCurrentValue(element)).toEqual('2');
    });

    it('should be able to increment the value', async () => {
      element.querySelector('button[name="increment"]').click();
      await page.waitForChanges();
      expect(getCurrentValue(element)).toEqual('3');
    });

    it('should be able to decrement the value', async () => {
      element.querySelector('button[name="decrement"]').click();
      await page.waitForChanges();
      expect(getCurrentValue(element)).toEqual('1');
    });

    it('should emit event when alert and current value are equal', async () => {
      const _callback = jest.fn();
      page.doc.addEventListener('alertRaised', _callback);
      element.querySelector('button[name="increment"]').click();
      await page.waitForChanges();
      expect(_callback).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: {
            message: 'alert!',
          },
        }),
      );
    });
  });
});
