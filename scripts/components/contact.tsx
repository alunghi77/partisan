
namespace Partisan.Components {

  export class Contact extends React.Component<IBasePageModel, IBaseAppState> {

    constructor() {
      super();
    }

    public render() {
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
  }
}
