FlowRouter.route('/', {
	action: function() {
		ReactLayout.render(MainLayout, {
			content: <Home />
		});
	}
});

FlowRouter.route('/build', {
	action: function() {
		ReactLayout.render(MainLayout, {
			content: <BuildPage />
		});
	}
});


FlowRouter.route('/launch', {
	action: function() {
		ReactLayout.render(MainLayout, {
			content: <LaunchPage />
		});
	}
});

