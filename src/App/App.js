export class App {

  constructor(options) {
    this.props = {
      dom: null,
      rest: 'test rest',
      ...options // ES6: rest properties
    };
    console.log(this.props);

    this.props.dom.innerHTML = 'Loading from github...';
  }

  render(template) {
    this.props.dom.innerHTML = template;
  }

}
