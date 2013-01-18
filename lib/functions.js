

	(function($) {

		$(function() {
			$('.answer').each(function() {
				var this_id = $(this).attr('id');
				var url = window.location.protocol + window.location.hostname + window.location.pathname;
				url = url + '#' + this_id;
				$(this).prepend('<div class="ia_so_ext_link"><a href="' + url + '">Copy Link to this Answer</a><div class="ia_so_ext_copy_msg">Copied URL</div></div>');
			});

			$('body').on('click', '.ia_so_ext_link a', function(e) {
				if(e.preventDefault) {
					e.preventDefault();
				}
				var url = $(this).attr('href');
				//borrowed from http:stackoverflow.com/questions/8794633/chrome-extension-copy-text#answer-8807145
				chrome.extension.sendRequest(
					{
						link : url
					}
				);
				//end borrowed code
				$(this).next('.ia_so_ext_copy_msg').addClass('show');
				var remove = setTimeout(
					function() {
						$('.ia_so_ext_copy_msg').removeClass('show');
					},
					1500
				);
			});
		});

	})(jQuery);