var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Partisan;
(function (Partisan) {
    var Components;
    (function (Components) {
        var Contact = (function (_super) {
            __extends(Contact, _super);
            function Contact() {
                _super.call(this);
            }
            Contact.prototype.render = function () {
                return (React.createElement("div", null, React.createElement("h2", null, "Contact"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "We would love to hear from you."), React.createElement("ul", null, React.createElement("li", null, "Email us: ", React.createElement("a", {href: "mailto:thepartisancollective@gmail.com "}, "thepartisancollective@gmail.com ")), React.createElement("li", null, "Follow us: ", React.createElement("a", {href: "https://www.facebook.com/partisancollective"}, "https://www.facebook.com/partisancollective")), React.createElement("li", null, "Tweet us: ", React.createElement("a", {href: "https://twitter.com/PartisanCollect"}, "https://twitter.com/PartisanCollect")))))));
            };
            return Contact;
        }(React.Component));
        Components.Contact = Contact;
    })(Components = Partisan.Components || (Partisan.Components = {}));
})(Partisan || (Partisan = {}));
