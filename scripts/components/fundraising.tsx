
namespace Partisan.Components {

  export class Fundraising extends React.Component<IBasePageModel, IBaseAppState> {

    constructor() {
      super();
    }

    public render() {
      return (
          <div>
            <h2>Donate</h2>
            <div className="row">
              <div className="col-xs-12">
              <p>We're currently raising money to open get a space for Partisan through fundraising events and donations. If you would like to make a donation for any amount, no matter how small, then press the button below to make a donation online on our PayPal donation page.</p>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick"/>
                  <input type="hidden" name="hosted_button_id" value="G8W99ES3Q978A"/>
                  <button type="submit" className="btn btn-info" aria-label="Left Align">Donate</button>
                </form>
            </div>
          </div>
       </div>
     );
    }
  }
}
