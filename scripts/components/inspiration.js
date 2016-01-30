var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Partisan;
(function (Partisan) {
    var Components;
    (function (Components) {
        var Inspiration = (function (_super) {
            __extends(Inspiration, _super);
            function Inspiration() {
                _super.call(this);
            }
            Inspiration.prototype.render = function () {
                return (React.createElement("div", null, React.createElement("h2", null, "Inspiring venues"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "Partisan is inspired by other workers’ co-operatives, social spaces and independent or alternative venues. For some idea of where we’ve come from and where we are heading:"), React.createElement("ul", null, React.createElement("li", null, "The Common House - ", React.createElement("a", {href: "www.commonhouse.org.uk"}, "http://www.commonhouse.org.uk")), React.createElement("li", null, "Wharf Chambers - ", React.createElement("a", {href: "www.wharfchambers.org.uk"}, "http://www.wharfchambers.org.uk")), React.createElement("li", null, "DIY Space for London – ", React.createElement("a", {href: "http://diyspaceforlondon.org"}, "http://diyspaceforlondon.org"))))), React.createElement("h2", null, "Interesting and alternative spaces in Manchester"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "Please get in touch with us if you would like to connect with us and have your venue listed here.")))));
            };
            return Inspiration;
        }(React.Component));
        Components.Inspiration = Inspiration;
    })(Components = Partisan.Components || (Partisan.Components = {}));
})(Partisan || (Partisan = {}));
