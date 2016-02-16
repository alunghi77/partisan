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
                this.showUserGroups = function () {
                    return (React.createElement("div", null, React.createElement("h2", null), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "The following groups are involved in getting the space off the ground and will be user groups for various events and happenings:"), React.createElement("ul", null, React.createElement("li", null, "Arthouse"), React.createElement("li", null, "Feminist Fightback"), React.createElement("li", null, "Beefcake Charlie"), React.createElement("li", null, "Manchester and Salford Housing Action (MaSHA)")), React.createElement("p", null, "Please ", React.createElement("a", {href: "#contact"}, "contact us"), " if you would like to become a User Group.")))));
                };
            }
            Blog.prototype.render = function () {
                return (React.createElement("div", null, React.createElement("h2", null, "What is Partisan?"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "We want to create a space for independent, DIY, cultural and political activities in Manchester."), React.createElement("p", null, "We hope that it will be an organisational hub in Manchester, consisting primarily of two rooms – a café-bar and a flexible social space – hopefully with some outdoor space. The social space will be an events space which progressive groups and independent cultural groups can use for free for meetings, film screening, book launches, parties and gigs."), React.createElement("p", null, "Our main aim is to try to respond to feelings of exhaustion and disconnection in a context of austerity. Partisan can be a collective resource to bring groups together in Manchester and its central location will make it accessible to as wide a range of people as possible. We want the space to be accessible, child friendly and to be a space to socialize in without the pressure to consume or purchase food or drink"), React.createElement("p", null, "The space will complement existing ", React.createElement("a", {href: "#inspiration"}, "alternative spaces and social centres"), " creating a network of alternative spaces in the city."), React.createElement("p", null, "We hope that it will be an organisational hub in Manchester, consisting primarily of two rooms – a café-bar and a flexible social space – hopefully with some outdoor space. The social space will be an events space which progressive groups and independent cultural groups can use for free for meetings, film screening, book launches, parties and gigs."), React.createElement("p", null, "We need you - the space will be shaped by those who use it and will only happen with collective effort to get it off the ground. If you are a community group, progressive campaign or individual with an idea for an alternative event then ", React.createElement("a", {href: "#contact"}, "get in touch"), "."), React.createElement("h2", null, "Why is this important for Manchester?"), React.createElement("p", null, "Local community groups and campaigners (including us) know that there are few suitable places to meet in Manchester and hardly any for free. At Partisan, revenue generated by music events and the café-bar will subsidise the free use of the space."), React.createElement("ul", null, React.createElement("li", null, "We want to provide space for free, so that people can channel their energies into political action and organizing"), React.createElement("li", null, "We want to provide well-paid, sustainable work for people in the context of declining wages and low pay; the café-bar will (eventually) provide high quality work"), React.createElement("li", null, "Any future ‘profits’ will be directed to creating housing co-operatives, to provide good quality, secure housing in the city."))))));
            };
            return Blog;
        }(React.Component));
        Components.Blog = Blog;
    })(Components = Partisan.Components || (Partisan.Components = {}));
})(Partisan || (Partisan = {}));
