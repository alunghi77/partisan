
namespace Partisan.Components {

  export class PartisanApp extends React.Component<IBasePageModel, IBaseAppState> {

    constructor() {
      super();
    }

    // public componentDidMount() {
    //   var setState = this.setState;
    //
    //   // we will configure the Router here
    //   // our router is provided by the
    //   // director npm module
    //   // the router observes changes in the URL and
    //   // triggers some component's event accordingly
    //   var router = Router({
    //     '/': setState.bind(this, {contentType:"whatispartisan"}),
    //     '/whatispartisan': setState.bind(this, {contentType:"whatispartisan"}),
    //     '/howtogetinvolved': setState.bind(this, {contentType:"howtogetinvolved"}),
    //     '/cafebar': setState.bind(this, {contentType:"cafebar"}),
    //     '/howareweorganised': setState.bind(this, {contentType:"howareweorganised"}),
    //     '/inspiration': setState.bind(this, {contentType:"inspiration"}),
    //     '/contact': setState.bind(this, {contentType:"contact"}),
    //     '/usergroups': setState.bind(this, {contentType:"usergroups"}),
    //     });
    //   router.init('/');
    // }

    private showHowtoGetInvolved = () =>
    {
      return (
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
      );
    }

    private showCafeBar = () =>
    {
      return (
      <div>
        <h2>Café-bar</h2>
        <div className="row">
          <div className="col-xs-12">
            <p>The space will include a cafe-bar area with regular opening hours. The cafe-bar will sell affordable alcoholic and non-alcoholic drinks, snacks and possibly hot food. It will also sell a selection of books from independent publishers (e.g. PM Press, Verso, Pluto etc) and house a Feminist Library (contributed by Feminist Fightback).</p>
            <p>Although the space will not require that people within it consume food or drinks, the space as a whole will be supported by funds raised through the café-bar. So eating/drinking in it will be a way of showing solidarity and support and keeping the space running.</p>
            <p>The café-bar will be collectively and democratically owned and managed as a workers co-op.</p>
          </div>
        </div>
        <h2>Socal space</h2>
        <div className="row">
          <div className="col-xs-12">
            <p>The social space will include a flexible venue room that is separate to the cafe-bar. This space can be used by different individuals and groups for club nights and gigs, film screenings, fund raisers and meetings. The space will be freely available to non-profit and social justice groups, such as anti-cuts campaigners, migrant groups, queer collectives and others.</p>
            <p>Priority for the space will be given to community and political groups and arts organisations organized as collectives, with a commitment to progressive values.</p>
          </div>
        </div>
      </div>
        );
    }

    private showHowAreWeOrganised = () =>
    {
      return (
        <div>
          <h2>How are we organised?</h2>
          <div className="row">
            <div className="col-xs-12">
              <p>Regulated Entertainment Collective (REC) is a workers’ co-operative who will collectively own the café-bar as workers’ co-operative and social enterprise, which funds the social space so that groups can use it for free. The social space will be co-run and owned by its members.</p>
              <p>The organisational structure of Partisan social space is a work in progress – much of the organisational structure remain up for discussion and will evolve as the experiment plays out. We will hold monthly Open House Get Together’s which are open to all users where we have the broader political discussions that affect the space, think about ways of working together and provide a means for new groups to come and check us out. Representation from each group who uses the space will mean that we can develop collective decision making, where users get a say in how the space is used.</p>
          </div>
        </div>
      </div>
      );
    }

    private showInspiration = () =>
    {
      return (
        <div>
          <h2>Inspiring venues</h2>
          <div className="row">
            <div className="col-xs-12">
              <p>Partisan is inspired by other workers’ co-operatives, social spaces and independent or alternative venues. For some idea of where we’ve come from and where we are heading:</p>
              <ul>
                <li>The Common House - <a href="www.commonhouse.org.uk">http://www.commonhouse.org.uk</a></li>
                <li>Wharf Chambers - <a href="www.wharfchambers.org.uk">http://www.wharfchambers.org.uk</a></li>
                <li>DIY Space for London – <a href="http://diyspaceforlondon.org">http://diyspaceforlondon.org</a></li>
              </ul>
          </div>
        </div>
        <h2>Interesting and alternative spaces in Manchester</h2>
        <div className="row">
          <div className="col-xs-12">
            <p>Please get in touch with us if you would like to connect with us and have your venue listed here.</p>
          </div>
        </div>
      </div>
      );
    }

    private showContact = () =>
    {
      return (
        <div>
          <h2>Contact</h2>
          <div className="row">
            <div className="col-xs-12">
              <p>We would love to hear from you.</p>
              <ul>
                <li>Email us: <a href="mailto:thepartisancollective@gmail.com ">thepartisancollective@gmail.com </a></li>
                <li>Follow us: <a href="https://www.facebook.com/partisancollective">https://www.facebook.com/partisancollective</a></li>
                <li>Tweet us: <a href="https://twitter.com/PartisanCollect">https://twitter.com/PartisanCollect</a></li>
              </ul>
          </div>
        </div>
      </div>
      );
    }

    private showUserGroups = () =>
    {
      return (
        <div>
          <h2>User groups</h2>
          <div className="row">
            <div className="col-xs-12">
              <p>The following groups are involved in getting the space off the ground and will be user groups for various events and happenings:</p>
              <ul>
                <li>Arthouse</li>
                <li>Feminist Fightback</li>
                <li>Beefcake Charlie</li>
                <li>Manchester and Salford Housing Action (MaSHA)</li>
              </ul>
              <p>Please <a href="#contact">contact us</a> if you would like to become a User Group.</p>
          </div>
        </div>
      </div>
      );
    }

    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help
    public render() {
      return (
        <div>
              <img className="center-block" src="./assets/images/HeaderFactoryLogo.jpg"/>
              <div>
                <h2>What is Partisan?</h2>
                <div className="row">
                  <div className="col-xs-12">
                  <p>We want to create a space for independent, DIY, cultural and political activities in Manchester.</p>
                  <p>We hope that it will be an organisational hub in Manchester, consisting primarily of two rooms – a café-bar and a flexible social space – hopefully with some outdoor space. The social space will be an events space which progressive groups and independent cultural groups can use for free for meetings, film screening, book launches, parties and gigs.</p>
                  <p>Our main aim is to try to respond to feelings of exhaustion and disconnection in a context of austerity. Partisan can be a collective resource to bring groups together in Manchester and its central location will make it accessible to as wide a range of people as possible. We want the space to be accessible, child friendly and to be a space to socialize in without the pressure to consume or purchase food or drink</p>
                  <p>The space will complement existing <a href="#inspiration">alternative spaces and social centres</a> creating a network of alternative spaces in the city.</p>
                  <p>We hope that it will be an organisational hub in Manchester, consisting primarily of two rooms – a café-bar and a flexible social space – hopefully with some outdoor space. The social space will be an events space which progressive groups and independent cultural groups can use for free for meetings, film screening, book launches, parties and gigs.</p>
                  <p>We need you - the space will be shaped by those who use it and will only happen with collective effort to get it off the ground. If you are a community group, progressive campaign or individual with an idea for an alternative event then <a href="#contact">get in touch</a>.</p>
                  <h2>Why is this important for Manchester?</h2>
                  <p>Local community groups and campaigners (including us) know that there are few suitable places to meet in Manchester and hardly any for free. At Partisan, revenue generated by music events and the café-bar will subsidise the free use of the space.</p>
                    <ul>
                      <li>We want to provide space for free, so that people can channel their energies into political action and organizing</li>
                      <li>We want to provide well-paid, sustainable work for people in the context of declining wages and low pay; the café-bar will (eventually) provide high quality work</li>
                      <li>Any future ‘profits’ will be directed to creating housing co-operatives, to provide good quality, secure housing in the city.</li>
                    </ul>
              </div>
            </div>
            </div>
       </div>
     );
    }
  }
}
