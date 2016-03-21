/*had to create the application start up file in vanialla JS as
the TypeScript file wouldn't compile the ReactDOM.render call
correctly*/

declare var Router : any;

var router = Router({
  '/': this.renderWhatIsPartisan,
  '/whatispartisan': this.renderWhatIsPartisan,
  '/howtogetinvolved': this.renderHowToGetInvolved,
  '/cafebar': this.renderCafeBar,
  '/howareweorganised': this.renderHowAreWeOrganised,
  '/inspiration': this.renderInspiration,
  '/contact': this.renderContact,
  '/blog':this.renderBlogs,
  '/donate':this.renderDonate
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

function renderCafeBar() {
  ReactDOM.render(<Partisan.Components.CafeBar header="Cafe bar" />,
    document.getElementById("partisan-app")
  );
}

function renderHowAreWeOrganised() {
  ReactDOM.render(<Partisan.Components.HowAreWeOrganised header="How are we organised?" />,
    document.getElementById("partisan-app")
  );
}

function renderInspiration() {
  ReactDOM.render(<Partisan.Components.Inspiration header="Inspiration" />,
    document.getElementById("partisan-app")
  );
}

function renderContact() {
  ReactDOM.render(<Partisan.Components.Contact header="Inspiration" />,
    document.getElementById("partisan-app")
  );
}

function renderBlogs() {
  ReactDOM.render(<Partisan.Components.Blogs model={Partisan.StaticContent.Blogs} />,
    document.getElementById("partisan-app")
  );
}

function renderDonate() {
  ReactDOM.render(<Partisan.Components.Fundraising header="Donate" />,
    document.getElementById("partisan-app")
  );
}
