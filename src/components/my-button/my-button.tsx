import { Component, Prop, h } from '@stencil/core';
import { CssClassMap } from '../../utils/interfaces';

@Component ({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true
})

export class MyButton {
  @Prop() text: string;

  @Prop({reflectToAttr: true}) disabled: boolean;

  @Prop() type: 'button' | 'reset' | 'submit' = 'button';

  @Prop() color: 'primary' | 'accent' | 'light' = 'primary';

  @Prop() shape: 'square' | 'pill' = 'square';

  @Prop() size: 'small' | 'default' | 'large' = 'default';
 
  render() {
    const classMap = this.getCssClassMap();

    return (
      <button type={this.type} class={classMap} disabled={this.disabled}>
        {this.text}
      </button>
    );
  }

  private getCssClassMap(): CssClassMap {
    return {
      [this.color]: true,
      [this.shape]: true,
      [this.size]: true
    }
  }

}


