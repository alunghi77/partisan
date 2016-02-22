var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Partisan;
(function (Partisan) {
    var Components;
    (function (Components) {
        var Blogs = (function (_super) {
            __extends(Blogs, _super);
            function Blogs() {
                _super.call(this);
            }
            Blogs.prototype.render = function () {
                var blogCollection = [];
                for (var i = 0; i < this.props.model.length; i++) {
                    blogCollection.push(React.createElement(Partisan.Components.Blog, {model: this.props.model[i], key: i}));
                }
                return (React.createElement("div", null, blogCollection));
            };
            return Blogs;
        }(React.Component));
        Components.Blogs = Blogs;
    })(Components = Partisan.Components || (Partisan.Components = {}));
})(Partisan || (Partisan = {}));
