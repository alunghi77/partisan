namespace Partisan.Components {

  export class AboutUs extends React.Component<IAboutUsProps, {}> {

    constructor() {
      super();
    }

    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help
    public render() {
      return (
        <div>
            <div className="page-header">
              <h1>{this.props.model.header} <small>community venue vibes</small></h1>
            </div>
            <p>{this.props.model.content}</p>
        </div>
      );
    }
  }
}
