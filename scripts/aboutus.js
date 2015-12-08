var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Partisan;
(function (Partisan) {
    var Components;
    (function (Components) {
        var AboutUs = (function (_super) {
            __extends(AboutUs, _super);
            function AboutUs() {
                _super.call(this);
            }
            AboutUs.prototype.render = function () {
                return (React.createElement("div", null, React.createElement("div", {className: "page-header"}, React.createElement("h1", null, this.props.model.header, " ", React.createElement("small", null, "community venue vibes"))), React.createElement("p", null, this.props.model.content)));
            };
            return AboutUs;
        })(React.Component);
        Components.AboutUs = AboutUs;
    })(Components = Partisan.Components || (Partisan.Components = {}));
})(Partisan || (Partisan = {}));
