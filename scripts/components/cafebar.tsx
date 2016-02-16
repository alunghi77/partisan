
namespace Partisan.Components {

  export class CafeBar extends React.Component<IBasePageModel, IBaseAppState> {

    constructor() {
      super();
    }

    public render() {
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
  }
}
