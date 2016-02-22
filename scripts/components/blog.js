var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Partisan;
(function (Partisan) {
    var Components;
    (function (Components) {
        var Blog = (function (_super) {
            __extends(Blog, _super);
            function Blog() {
                _super.call(this);
            }
            Blog.prototype.render = function () {
                var sentences = [];
                for (var i = 0; i < this.props.model.sentences.length; i++) {
                    sentences.push(React.createElement("p", {key: i}, this.props.model.sentences[i]));
                }
                return (React.createElement("div", null, React.createElement("h2", null, this.props.model.title), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, sentences, React.createElement("p", null, "Posted by ", this.props.model.author, " on ", this.props.model.publishedDate.toDateString())))));
            };
            return Blog;
        }(React.Component));
        Components.Blog = Blog;
    })(Components = Partisan.Components || (Partisan.Components = {}));
})(Partisan || (Partisan = {}));
