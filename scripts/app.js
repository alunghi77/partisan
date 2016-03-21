var router = Router({
    '/': this.renderWhatIsPartisan,
    '/whatispartisan': this.renderWhatIsPartisan,
    '/howtogetinvolved': this.renderHowToGetInvolved,
    '/cafebar': this.renderCafeBar,
    '/howareweorganised': this.renderHowAreWeOrganised,
    '/inspiration': this.renderInspiration,
    '/contact': this.renderContact,
    '/blog': this.renderBlogs,
    '/donate': this.renderDonate
});
router.init('/');
function renderWhatIsPartisan() {
    ReactDOM.render(React.createElement(Partisan.Components.PartisanApp, {header: "What is Partisan?"}), document.getElementById("partisan-app"));
}
function renderHowToGetInvolved() {
    ReactDOM.render(React.createElement(Partisan.Components.HowToGetInvolved, {header: "How to get involved?"}), document.getElementById("partisan-app"));
}
function renderCafeBar() {
    ReactDOM.render(React.createElement(Partisan.Components.CafeBar, {header: "Cafe bar"}), document.getElementById("partisan-app"));
}
function renderHowAreWeOrganised() {
    ReactDOM.render(React.createElement(Partisan.Components.HowAreWeOrganised, {header: "How are we organised?"}), document.getElementById("partisan-app"));
}
function renderInspiration() {
    ReactDOM.render(React.createElement(Partisan.Components.Inspiration, {header: "Inspiration"}), document.getElementById("partisan-app"));
}
function renderContact() {
    ReactDOM.render(React.createElement(Partisan.Components.Contact, {header: "Inspiration"}), document.getElementById("partisan-app"));
}
function renderBlogs() {
    ReactDOM.render(React.createElement(Partisan.Components.Blogs, {model: Partisan.StaticContent.Blogs}), document.getElementById("partisan-app"));
}
function renderDonate() {
    ReactDOM.render(React.createElement(Partisan.Components.Fundraising, {header: "Donate"}), document.getElementById("partisan-app"));
}
