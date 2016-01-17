
namespace Partisan.Components {

  export class Inspiration extends React.Component<IBasePageModel, IBaseAppState> {

    constructor() {
      super();
    }

    public render() {
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
  }
}
