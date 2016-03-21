var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Partisan;
(function (Partisan) {
    var Components;
    (function (Components) {
        var Fundraising = (function (_super) {
            __extends(Fundraising, _super);
            function Fundraising() {
                _super.call(this);
            }
            Fundraising.prototype.render = function () {
                return (React.createElement("div", null, 
                    React.createElement("h2", null, "Donate"), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-xs-12"}, 
                            React.createElement("p", null, "We're currently raising money to open get a space for Partisan through fundraising events and donations. If you would like to make a donation for any amount, no matter how small, then press the button below to make a donation online on our PayPal donation page."), 
                            React.createElement("form", {action: "https://www.paypal.com/cgi-bin/webscr", method: "post", target: "_top"}, 
                                React.createElement("input", {type: "hidden", name: "cmd", value: "_s-xclick"}), 
                                React.createElement("input", {type: "hidden", name: "hosted_button_id", value: "G8W99ES3Q978A"}), 
                                React.createElement("button", {type: "submit", className: "btn btn-info", "aria-label": "Left Align"}, "Donate")))
                    )));
            };
            return Fundraising;
        }(React.Component));
        Components.Fundraising = Fundraising;
    })(Components = Partisan.Components || (Partisan.Components = {}));
})(Partisan || (Partisan = {}));
