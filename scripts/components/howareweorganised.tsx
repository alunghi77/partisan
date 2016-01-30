namespace Partisan.Components {

  export class HowAreWeOrganised extends React.Component<IBasePageModel, IBaseAppState> {

    constructor() {
      super();
    }

    public render() {
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
  }
}
