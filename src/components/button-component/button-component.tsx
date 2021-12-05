import { Component, h, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.css',
  shadow: true,
})
export class ButtonComponent {
  @Prop() content: string;
  @State() disabled: boolean = false;

  @Listen('click')
  handleDisabledButton() {
    this.disabled = !this.disabled;
  }

  render() {
    return (
      <button disabled={this.disabled}>
        {this.content || '-'}
      </button>
    );
  }
}
