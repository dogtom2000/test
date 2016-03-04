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

FlowRouter.route('/launch', {
	action: function() {
		ReactLayout.render(App, {
			content: <LaunchPage />
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

