export class App {

  constructor(options) {
    this.props = {
      dom: null,
      ...options // ES6: rest properties
    };

    this.props.dom.innerHTML = 'Loading from github...';
  }

  render(template) {
    this.props.dom.innerHTML = template;
  }

}
