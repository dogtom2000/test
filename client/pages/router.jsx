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

FlowRouter.route('/profile', {
	action: function() {
		ReactLayout.render(App, {
			content: <ProfilePage />
		});
	}
});

