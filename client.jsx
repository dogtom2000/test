if (Meteor.isClient) {
  Meteor.startup(function () {
    ReactDOM.render(<BuildPage />, document.getElementById("build-page"));
  });
}