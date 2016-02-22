
namespace Partisan.Components {

  export class Blog extends React.Component<IBlogProps, {}> {

    constructor() {
      super();
    }

    public render() {

    let sentences = [];
    for (var i = 0; i < this.props.model.sentences.length; i++) {
      sentences.push(<p key={i}>{this.props.model.sentences[i]}</p>);
    }

      return (
              <div>
                <h2>{this.props.model.title}</h2>
                <div className="row">
                  <div className="col-xs-12">
                  {sentences}
                  <p>Posted by {this.props.model.author} on {this.props.model.publishedDate.toDateString()}</p>
              </div>
            </div>
       </div>
     );
    }
  }
}
