/*had to create the application start up file in vanialla JS as
the TypeScript file wouldn't compile the ReactDOM.render call
correctly*/

declare var Router : any;

var router = Router({
  '/': this.renderWhatIsPartisan(),
  '/howtogetinvolved': this.renderHowToGetInvolved()
});

router.init('/');

function renderWhatIsPartisan() {
  ReactDOM.render(<Partisan.Components.PartisanApp header="What is Partisan?" />,
    document.getElementById("partisan-app")
  );
}

function renderHowToGetInvolved() {
  ReactDOM.render(<Partisan.Components.HowToGetInvolved header="How to get involved?" />,
    document.getElementById("partisan-app")
  );
}
