// entry for devtools page
$(function () {
	// init bootstrap alerts
	$(".alert").alert();
	console.info('app js');
	var store = new StoreDevtools();
	new SitemapController({
		store: store,
		templateDir: 'views/'
	});
});