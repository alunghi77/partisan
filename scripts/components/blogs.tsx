
namespace Partisan.Components {

  export class Blogs extends React.Component<IBlogsProps, {}> {

    constructor() {
      super();
    }

    public render() {
      let blogCollection = []
      for(var i = 0; i < this.props.model.length; i++) {
        blogCollection.push(<Partisan.Components.Blog model={this.props.model[i]} key={i}/>);
      }

      return (<div>{blogCollection}</div>);
    }
  }
}
