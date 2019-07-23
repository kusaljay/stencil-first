import { Component, h } from '@stencil/core';
import { CssClassMap } from '../../utils/interfaces';

@Component ({
  tag: 'kf-tabs',
  styleUrl: 'kf-tabs.scss',
  shadow: true
})

export class Tabs {
  render() {
    const classMap = this.getCssClassMap();

    return (
      <div class={classMap}>
        <button role="tab" class="active">
          Tab 1
        </button>
        <button role="tab">
          Tab 2
        </button>
        <button role="tab">
          Tab 3
        </button>

      </div>
    );
  }

  private getCssClassMap(): CssClassMap {
    return {
      'tabs-list': true,
      //'tab-button': true
    }
  }
}