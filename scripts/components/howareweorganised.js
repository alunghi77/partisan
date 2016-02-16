var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Partisan;
(function (Partisan) {
    var Components;
    (function (Components) {
        var HowAreWeOrganised = (function (_super) {
            __extends(HowAreWeOrganised, _super);
            function HowAreWeOrganised() {
                _super.call(this);
            }
            HowAreWeOrganised.prototype.render = function () {
                return (React.createElement("div", null, React.createElement("h2", null, "How are we organised?"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "Regulated Entertainment Collective (REC) is a workers’ co-operative who will collectively own the café-bar as workers’ co-operative and social enterprise, which funds the social space so that groups can use it for free. The social space will be co-run and owned by its members."), React.createElement("p", null, "The organisational structure of Partisan social space is a work in progress – much of the organisational structure remain up for discussion and will evolve as the experiment plays out. We will hold monthly Open House Get Together’s which are open to all users where we have the broader political discussions that affect the space, think about ways of working together and provide a means for new groups to come and check us out. Representation from each group who uses the space will mean that we can develop collective decision making, where users get a say in how the space is used.")))));
            };
            return HowAreWeOrganised;
        }(React.Component));
        Components.HowAreWeOrganised = HowAreWeOrganised;
    })(Components = Partisan.Components || (Partisan.Components = {}));
})(Partisan || (Partisan = {}));
