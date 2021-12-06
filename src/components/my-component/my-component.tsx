import { Component, h, State } from '@stencil/core';
import { Country } from '../../interfaces/country.interface';
import { DataController } from '../../utils/services/DataServices';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() data: Country[] = [];
  dataServices = new DataController();

  componentWillLoad() {
    console.log('componentWillLoad');
    this.dataServices.getAllCountries().then(e => {
      this.data = e;
    });
  }

  render() {
    return (
      <div class="wrapper">
        <div class="container">
          {this.data &&
            this.data.length > 0 &&
            this.data.map((item) => {
              return (
                <div class="card">
                  <div class="card-image">
                    <img src={item.flags.svg} />
                    <span class="card-title">{item.name.official}</span>
                  </div>
                  <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                  </div>
                </div>
              );
            })}
        </div>
        <button-component content="Siguiente"></button-component>
      </div>
    );
  }
}
