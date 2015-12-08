// We should have installed a type declaration file but
// for the director npm package but it is not available
// so we will use this declaration to avoid compilation
// errors for now.
declare var Router : any;

// var TodoModel = Partisan.Models.TodoModel;

namespace Partisan.Components {

  export class PartisanApp extends React.Component<IIndexProps, IAppState> {

    constructor() {
      super();
      this.state = {
        contentType : "aboutus"
      };
    }

    public getInvolved =
      function renderGetInvolved() {
        var model = new Partisan.Models.Index("Partisan", "getinvolved");
        var PartisanApp = Partisan.Components.PartisanApp;

        ReactDOM.render(
          <PartisanApp model={model}/>,
          document.getElementById("partisan-app")
        );
    }

    public componentDidMount() {
      var setState = this.setState;
      // we will configure the Router here
      // our router is provided by the
      // director npm module
      // the router observes changes in the URL and
      // triggers some component's event accordingly
      var router = Router({
        '/': setState.bind(this, {contentType:"aboutus"}),
        '/howwillitbefunded': setState.bind(this, {contentType:"howwillitbefunded"}),
        '/getinvolved': setState.bind(this, {contentType:"getinvolved"}),
      });
      router.init('/');
    }

    public componentDidUpdate() {
      // ReactDOM.findDOMNode().scrollTop = 0 ;
    }

    private showHowWillItBeFunded = () =>
    {
      return (
        <div>
          <h2>How will it be funded?</h2>
          <div className="row">
            <div className="col-xs-12">
            <p>Group members have been involved in setting up and running spaces for not-for-profit groups in the past (The Space Project Leeds; The Common House, London). However, we have learnt from experience that these spaces are not sustainable if they rely on volunteers giving their time for free. As such, Partisan will be run as a workers’ cooperative that pays its members a living wage for their time. This will ensure the sustainability of the project.</p>
            <p>We will be funded initially through a combination of membership, loanstock and small pots of funding. Once the space is established, it will be solely sustainable through proceeds from the café-bar.</p>
            <h2>How are we organised?</h2>
            <p>Regulated Entertainment Collective (REC) is a workers’ co-operative who will collectively own the café-bar as social enterprise, which funds the social space so that groups can use it for free. The social space will be co-run and owned by its members.</p>
            <p>The organisational structure of Partisan social space is a work in progress –much of the organisational structure, issues and problems involved remain up for discussion and will evolve as the experiment plays out. We will hold monthly Open House Get Togethers which are open to all users where we have the broader political discussions that affect the space, think about ways of working together and provide a means for new groups to come and check us out. Representation from each group who uses the space means that we can develop collective decision making, where users get a say in how the space is fun.</p>
            <h2>Membership</h2>
            <p>For life-time membership, members can join Partisan, giving them a say over how the social space is run and to be able to use the space for their own events. Joining as a member will also help the space get off the ground and move towards sustainable work, leisure and housing.</p>
              <ul>
                <li>Unemployed / low wage / student membership - £1</li>
                <li>General membership - £3</li>
                <li>Solidarity membership - £7</li>
              </ul>
        </div>
      </div>
      </div>

      )
    }

    private showAboutUs = () =>
    {
      return (
        <div>
          <h2>What is Partisan?</h2>
          <div className="row">
            <div className="col-xs-12">
            <p>We want to create a space for independent, DIY, cultural and political activities in Manchester. The space will be flexible, functioning as a cultural venue, as well as an events space such as for meetings for community groups and progressive campaigns, film screenings, and book launches. Partisan will offer somewhere to meet, organise from and most importantly to have fun in! We hope that it will be an organisational hub in Manchester, consisting primarily of two rooms – a café-bar and a flexible social space – hopefully with some outdoor space.</p>
            <p>Our main aim in setting up Partisan is to try to respond to feelings of exhaustion and disconnection across numerous groups in a context of austerity. We feel that Partisan can be a collective resource to bring groups together in Manchester and that its central location, and/or proximity to transport links, will make it accessible to as wide a range of people as possible. We want the space to be accessible, child friendly and be a space to socialize in without the pressure to consume or purchase food or drink. We felt that the space could complement existing alternative spaces and social centres – so a further aim is to create a network of alternative spaces in the city.</p>
            <p>The space is also an experiment in building a “commons” in that we imagine these resources not as objects, commodities or things we own – but instead things that are built together through shared activity.</p>
            <p>The space will be shaped by the needs of those who want to use it. Please do get in touch if you have ideas or proposals.</p>
            <h2>Where do we want to go from here?</h2>
            <p>We made a decision to rent a space rather than squat, for a number of reasons:</p>
              <ul>
                <li>Due to the intensity of labour that squatting – particularly in the currentclimate – requires.</li>
                <li>We want to make the space public-facing and to encourage as many different groups and people as possible to use the space.</li>
                <li>We wanted to provide space for free, so that people can channel their energies into political action and organizing.</li>
                <li>We want to provide well-paid, sustainable work for people in the context of declining wages and low pay; as such, the café-bar will provide high quality work.</li>
                <li>If there are any profits in the future, we will direct these to creating housing co-operatives, to provide good quality, secure housing in the city.</li>
              </ul>
            <h2>Café-bar</h2>
            <p>The space will include a cafe-bar area that has regular opening hours. The cafe-bar will sell affordable alcoholic and non-alcoholic drinks, snacks and possibly hot food. It will also sell a selection of books from independent publishers (e.g. PM Press, Verso, Pluto etc) and house a Feminist Library (contributed by Feminist Fightback).</p>
            <p>Although the space will not require that people within it consume food or drinks, the space as a whole will be supported by funds raised through the café-bar. So eating/drinking in it will be a way of showing solidarity and support and keeping the space running.</p>
            <p>The café-bar will be collectively and democratically owned and managed as a workers co-op.</p>
            <h2>Social space</h2>
            <p>The social space will include a flexible venue room that is separate to the cafe-bar. This space can be used by different individuals and groups for club nights and gigs, film screenings, fund raisers and meetings. The space will be freely available to non-profit and social justice groups, such as anti-cuts campaigners, migrant groups, queer collectives and others.</p>
            <p>Priority for the space will be given to community and political groups and arts organisations organized as collectives, with a commitment to progressive values.</p>
            <h2>Why is this important for Manchester?</h2>
            <p>Local community groups and campaigners that we have spoken to report that they have few suitable places to meet in Manchester and they often have to pay for space. At Partisan, revenue generated by music events and the café-bar would subsidise the free use of the space for not-for-profit groups. In addition, these groups could use the venue for fundraising events.</p>
        </div>
      </div>
      </div>
      );
    }

    private showGetInvolved = () =>
    {
      return (
      <div>
        <h2>How to get involved</h2>
        <div className="row">
          <div className="col-xs-12">
            <p>The space will be run by its members in a cooperative and horizontal spirit based on mutual aid. That means we need as many people as are able to get involved with it wherever they can. Please email us at <a href="mailto:getinvolved@partisan.co.uk">getinvolved@partisan.co.uk</a> </p>
          </div>
        </div>
        <h2>Others elsewhere...</h2>
        <div className="row">
          <div className="col-xs-12">
            <p>We have drawn a lot of inspiration from other workers’ co-operatives, social spaces and independent or alternative venues. For some idea of where we’ve come from and where we are heading:</p>
            <ul>
              <li>The Common House - <a href="www.commonhouse.org.uk">http://www.commonhouse.org.uk</a></li>
              <li>Wharf Chambers - <a href="www.wharfchambers.org.uk">http://www.wharfchambers.org.uk</a></li>
              <li>DIY Space for London – <a href="http://diyspaceforlondon.org">http://diyspaceforlondon.org</a></li>
            </ul>
          </div>
        </div>

      </div>
        );
    }


    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help
    public render() {

      var content = () =>
      {
      switch(this.state.contentType)
        {
          case "aboutus":
            return this.showAboutUs();
          case "getinvolved":
            return this.showGetInvolved();
          case "howwillitbefunded":
            return this.showHowWillItBeFunded();
          default:
            return (<div>"Page not found. Please go to the home page and try again."</div>)
        }
      }

      var main = content();

      return (
        <div>
            <div className="page-header">
              <h1>{this.props.model.header}</h1>
            </div>
            {main}
       </div>
     );
    }
  }
}

function render() {
  var model = new Partisan.Models.Index("Partisan", null);
  var PartisanApp = Partisan.Components.PartisanApp;

  ReactDOM.render(
    <PartisanApp model={model}/>,
    document.getElementById("partisan-app")
  );
}

render();
