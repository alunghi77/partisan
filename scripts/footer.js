var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Partisan;
(function (Partisan) {
    var Components;
    (function (Components) {
        var Footer = (function (_super) {
            __extends(Footer, _super);
            function Footer() {
                _super.apply(this, arguments);
            }
            Footer.prototype.render = function () {
                var cx = React.addons.classSet;
                return (React.createElement("footer", {className: "footer"}, React.createElement("div", {className: "container"}, React.createElement("a", {href: "this.props.twitterUrl"}, React.createElement("strong", null, "Click here for twitter")), React.createElement("a", {href: "this.props.facebookUrl"}, React.createElement("strong", null, "Click here for facebook")))));
            };
            return Footer;
        })(React.Component);
        Components.Footer = Footer;
    })(Components = Partisan.Components || (Partisan.Components = {}));
})(Partisan || (Partisan = {}));
