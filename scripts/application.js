var router = Router({
    '/': this.renderWhatIsPartisan(),
    '/howtogetinvolved': this.renderHowToGetInvolved()
});
router.init('/');
function renderWhatIsPartisan() {
    ReactDOM.render(React.createElement(Partisan.Components.PartisanApp, {header: "What is Partisan?"}), document.getElementById("partisan-app"));
}
function renderHowToGetInvolved() {
    ReactDOM.render(React.createElement(Partisan.Components.HowToGetInvolved, {header: "How to get involved?"}), document.getElementById("partisan-app"));
}
