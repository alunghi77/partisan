namespace Partisan.Components {

  export class HowToGetInvolved extends React.Component<IBasePageModel, IBaseAppState> {

    constructor() {
      super();
    }

    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help
    public render() {
      return (
        <div>
              <img className="center-block" src="./assets/images/HeaderFactoryLogo.jpg"/>
              <div>
                <h2>How to get  involved  help</h2>
                <div className="row">
                  <div className="col-xs-12">
                    <p>What we really need right now is people. We need your energy, enthusiasm and ideas to get this off the ground.</p>
                    <p>Partisan will only work with your help, support and involvement. So please do get involved in any way you can.</p>
                    <h2>Are you an individual who wants to join the collective?</h2>
                    <p>Do you want to help set up the venue? Work in it? Do you have building or design skills? Do you have fundraising skills? Do you just want to help establish an alternative venue for culture and politics in Manchester? Let us <a href="#contact">know</a>.</p>
                    <h2>Are you a community group or political organisation?</h2>
                    <p>Get in touch to tell us that you would like to become a User Group and use the space then <a href="#contact">contact us</a>.</p>
                </div>
              </div>
            </div>
       </div>
     );
    }
  }
}
