var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Partisan;
(function (Partisan) {
    var Components;
    (function (Components) {
        var PartisanApp = (function (_super) {
            __extends(PartisanApp, _super);
            function PartisanApp() {
                _super.call(this);
                this.getInvolved = function renderGetInvolved() {
                    var model = new Partisan.Models.Index("Partisan", "getinvolved");
                    var PartisanApp = Partisan.Components.PartisanApp;
                    ReactDOM.render(React.createElement(PartisanApp, {model: model}), document.getElementById("partisan-app"));
                };
                this.showHowWillItBeFunded = function () {
                    return (React.createElement("div", null, React.createElement("h2", null, "How will it be funded?"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "Group members have been involved in setting up and running spaces for not-for-profit groups in the past (The Space Project Leeds; The Common House, London). However, we have learnt from experience that these spaces are not sustainable if they rely on volunteers giving their time for free. As such, Partisan will be run as a workers’ cooperative that pays its members a living wage for their time. This will ensure the sustainability of the project."), React.createElement("p", null, "We will be funded initially through a combination of membership, loanstock and small pots of funding. Once the space is established, it will be solely sustainable through proceeds from the café-bar."), React.createElement("h2", null, "How are we organised?"), React.createElement("p", null, "Regulated Entertainment Collective (REC) is a workers’ co-operative who will collectively own the café-bar as social enterprise, which funds the social space so that groups can use it for free. The social space will be co-run and owned by its members."), React.createElement("p", null, "The organisational structure of Partisan social space is a work in progress –much of the organisational structure, issues and problems involved remain up for discussion and will evolve as the experiment plays out. We will hold monthly Open House Get Togethers which are open to all users where we have the broader political discussions that affect the space, think about ways of working together and provide a means for new groups to come and check us out. Representation from each group who uses the space means that we can develop collective decision making, where users get a say in how the space is fun."), React.createElement("h2", null, "Membership"), React.createElement("p", null, "For life-time membership, members can join Partisan, giving them a say over how the social space is run and to be able to use the space for their own events. Joining as a member will also help the space get off the ground and move towards sustainable work, leisure and housing."), React.createElement("ul", null, React.createElement("li", null, "Unemployed / low wage / student membership - £1"), React.createElement("li", null, "General membership - £3"), React.createElement("li", null, "Solidarity membership - £7"))))));
                };
                this.showAboutUs = function () {
                    return (React.createElement("div", null, React.createElement("h2", null, "What is Partisan?"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "We want to create a space for independent, DIY, cultural and political activities in Manchester. The space will be flexible, functioning as a cultural venue, as well as an events space such as for meetings for community groups and progressive campaigns, film screenings, and book launches. Partisan will offer somewhere to meet, organise from and most importantly to have fun in! We hope that it will be an organisational hub in Manchester, consisting primarily of two rooms – a café-bar and a flexible social space – hopefully with some outdoor space."), React.createElement("p", null, "Our main aim in setting up Partisan is to try to respond to feelings of exhaustion and disconnection across numerous groups in a context of austerity. We feel that Partisan can be a collective resource to bring groups together in Manchester and that its central location, and/or proximity to transport links, will make it accessible to as wide a range of people as possible. We want the space to be accessible, child friendly and be a space to socialize in without the pressure to consume or purchase food or drink. We felt that the space could complement existing alternative spaces and social centres – so a further aim is to create a network of alternative spaces in the city."), React.createElement("p", null, "The space is also an experiment in building a “commons” in that we imagine these resources not as objects, commodities or things we own – but instead things that are built together through shared activity."), React.createElement("p", null, "The space will be shaped by the needs of those who want to use it. Please do get in touch if you have ideas or proposals."), React.createElement("h2", null, "Where do we want to go from here?"), React.createElement("p", null, "We made a decision to rent a space rather than squat, for a number of reasons:"), React.createElement("ul", null, React.createElement("li", null, "Due to the intensity of labour that squatting – particularly in the currentclimate – requires."), React.createElement("li", null, "We want to make the space public-facing and to encourage as many different groups and people as possible to use the space."), React.createElement("li", null, "We wanted to provide space for free, so that people can channel their energies into political action and organizing."), React.createElement("li", null, "We want to provide well-paid, sustainable work for people in the context of declining wages and low pay; as such, the café-bar will provide high quality work."), React.createElement("li", null, "If there are any profits in the future, we will direct these to creating housing co-operatives, to provide good quality, secure housing in the city.")), React.createElement("h2", null, "Café-bar"), React.createElement("p", null, "The space will include a cafe-bar area that has regular opening hours. The cafe-bar will sell affordable alcoholic and non-alcoholic drinks, snacks and possibly hot food. It will also sell a selection of books from independent publishers (e.g. PM Press, Verso, Pluto etc) and house a Feminist Library (contributed by Feminist Fightback)."), React.createElement("p", null, "Although the space will not require that people within it consume food or drinks, the space as a whole will be supported by funds raised through the café-bar. So eating/drinking in it will be a way of showing solidarity and support and keeping the space running."), React.createElement("p", null, "The café-bar will be collectively and democratically owned and managed as a workers co-op."), React.createElement("h2", null, "Social space"), React.createElement("p", null, "The social space will include a flexible venue room that is separate to the cafe-bar. This space can be used by different individuals and groups for club nights and gigs, film screenings, fund raisers and meetings. The space will be freely available to non-profit and social justice groups, such as anti-cuts campaigners, migrant groups, queer collectives and others."), React.createElement("p", null, "Priority for the space will be given to community and political groups and arts organisations organized as collectives, with a commitment to progressive values."), React.createElement("h2", null, "Why is this important for Manchester?"), React.createElement("p", null, "Local community groups and campaigners that we have spoken to report that they have few suitable places to meet in Manchester and they often have to pay for space. At Partisan, revenue generated by music events and the café-bar would subsidise the free use of the space for not-for-profit groups. In addition, these groups could use the venue for fundraising events.")))));
                };
                this.showGetInvolved = function () {
                    return (React.createElement("div", null, React.createElement("h2", null, "How to get involved"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "The space will be run by its members in a cooperative and horizontal spirit based on mutual aid. That means we need as many people as are able to get involved with it wherever they can. Please email us at ", React.createElement("a", {href: "mailto:getinvolved@partisan.co.uk"}, "getinvolved@partisan.co.uk"), " "))), React.createElement("h2", null, "Others elsewhere..."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("p", null, "We have drawn a lot of inspiration from other workers’ co-operatives, social spaces and independent or alternative venues. For some idea of where we’ve come from and where we are heading:"), React.createElement("ul", null, React.createElement("li", null, "The Common House - ", React.createElement("a", {href: "www.commonhouse.org.uk"}, "http://www.commonhouse.org.uk")), React.createElement("li", null, "Wharf Chambers - ", React.createElement("a", {href: "www.wharfchambers.org.uk"}, "http://www.wharfchambers.org.uk")), React.createElement("li", null, "DIY Space for London – ", React.createElement("a", {href: "http://diyspaceforlondon.org"}, "http://diyspaceforlondon.org")))))));
                };
                this.state = {
                    contentType: "aboutus"
                };
            }
            PartisanApp.prototype.componentDidMount = function () {
                var setState = this.setState;
                var router = Router({
                    '/': setState.bind(this, { contentType: "aboutus" }),
                    '/howwillitbefunded': setState.bind(this, { contentType: "howwillitbefunded" }),
                    '/getinvolved': setState.bind(this, { contentType: "getinvolved" }),
                });
                router.init('/');
            };
            PartisanApp.prototype.componentDidUpdate = function () {
            };
            PartisanApp.prototype.render = function () {
                var _this = this;
                var content = function () {
                    switch (_this.state.contentType) {
                        case "aboutus":
                            return _this.showAboutUs();
                        case "getinvolved":
                            return _this.showGetInvolved();
                        case "howwillitbefunded":
                            return _this.showHowWillItBeFunded();
                        default:
                            return (React.createElement("div", null, "\"Page not found. Please go to the home page and try again.\""));
                    }
                };
                var main = content();
                return (React.createElement("div", null, React.createElement("div", {className: "page-header"}, React.createElement("h1", null, this.props.model.header)), main));
            };
            return PartisanApp;
        })(React.Component);
        Components.PartisanApp = PartisanApp;
    })(Components = Partisan.Components || (Partisan.Components = {}));
})(Partisan || (Partisan = {}));
function render() {
    var model = new Partisan.Models.Index("Partisan", null);
    var PartisanApp = Partisan.Components.PartisanApp;
    ReactDOM.render(React.createElement(PartisanApp, {model: model}), document.getElementById("partisan-app"));
}
render();
