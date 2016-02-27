FlowRouter.route('/', {
	action: function() {
		ReactLayout.render(App, {
			content: <Home />
		});
	}
});

FlowRouter.route('/build', {
	action: function() {
		ReactLayout.render(App, {
			content: <BuildPage />
		});
	}
});


FlowRouter.route('/launch', {
	action: function() {
		ReactLayout.render(App, {
			content: <LaunchPage />
		});
	}
});

