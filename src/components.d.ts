/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyButton {
    'color': 'primary' | 'accent' | 'light';
    'disabled': boolean;
    'shape': 'square' | 'pill';
    'size': 'small' | 'default' | 'large';
    'text': string;
    'type': 'button' | 'reset' | 'submit';
  }
  interface MyComponent {
    'inverse': boolean;
    'name': string;
  }
}

declare global {


  interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {}
  var HTMLMyButtonElement: {
    prototype: HTMLMyButtonElement;
    new (): HTMLMyButtonElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'my-button': HTMLMyButtonElement;
    'my-component': HTMLMyComponentElement;
  }
}

declare namespace LocalJSX {
  interface MyButton extends JSXBase.HTMLAttributes<HTMLMyButtonElement> {
    'color'?: 'primary' | 'accent' | 'light';
    'disabled'?: boolean;
    'shape'?: 'square' | 'pill';
    'size'?: 'small' | 'default' | 'large';
    'text'?: string;
    'type'?: 'button' | 'reset' | 'submit';
  }
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {
    'inverse'?: boolean;
    'name'?: string;
  }

  interface IntrinsicElements {
    'my-button': MyButton;
    'my-component': MyComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


