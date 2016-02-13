if (Meteor.isClient) {
  Meteor.startup(function () {
    ReactDOM.render(<BuildMain />, document.getElementById("build-main"));
  });
}