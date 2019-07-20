import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'fa-accordion',
  styleUrl: 'fa-accordion.css',
  shadow: true
})
export class FaAccordion {
  @Element() el: HTMLElement;
  @Prop() text: any;

  render() {
    return (
    <div class="fa-accordion">
      <input class="accordion-checkbox" type="checkbox" id="fa-accordion"/>
        <label class="accordion-label" htmlFor="fa-accordion">{this.text}</label>
        <div class="accordion-content">
          <slot />
        </div>
    </div>);
  }
}
