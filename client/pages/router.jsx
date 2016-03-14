FlowRouter.route('/', {
	action: function() {
		ReactLayout.render(App, {
			content: <Home />
		});
	}
});

FlowRouter.route('/design', {
	action: function() {
		ReactLayout.render(App, {
			content: <DesignPage />
		});
	}
});

FlowRouter.route('/flight', {
	action: function() {
		ReactLayout.render(App, {
			content: <FlightPage />
		});
	}
});

FlowRouter.route('/profile', {
	action: function() {
		ReactLayout.render(App, {
			content: <ProfilePage />
		});
	}
});

FlowRouter.route('/system', {
	action: function() {
		ReactLayout.render(App, {
			content: <SystemPage />
		});
	}
});

