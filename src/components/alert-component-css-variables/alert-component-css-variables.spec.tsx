import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { AlertComponentCssVariables } from './alert-component-css-variables';

describe('alert-component-css-variables', () => {
  it('should build', () => {
    expect(new AlertComponentCssVariables()).toBeTruthy();
  });

  function getCurrentValue(element) {
    return element.querySelector('.current').textContent;
  }

  describe('rendering', () => {
    let page: SpecPage;
    let element;

    beforeEach(async () => {
      page = await newSpecPage({
        components: [AlertComponentCssVariables],
        html:
          '<alert-component-css-variables initial-value="2" alert-value="3"></alert-component-css-variables>',
        supportsShadowDom: true,
      });
      element = page.root.shadowRoot;
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

    it('should be able to reset the value', async () => {
      element.querySelector('button[name="decrement"]').click();
      await page.waitForChanges();
      await page.root.reset();
      await page.waitForChanges();
      expect(getCurrentValue(element)).toEqual('2');
    });
  });
});
