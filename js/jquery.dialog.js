/**
* Simple jQuery Dialog Extension
*
* @author Ted Coyle <ted.coyle@nutrigraphix.com>
*/


(function ( $ ) {
	$.fn.dialog = function() {
	
		this.hover(function() {
			// moused over 'a' element, get position and center
			aPos = $(this).offset();
			aCenter = $(this).outerWidth() / 2 + aPos.left;
			aHref = $(this).attr('href');
			dlgName = aHref.split("#-");
			
			// add dialog window to dom, if it's not there. initially hidden by css
			if( $('.dialog').length < 1 ) $('body').append('<div class="dialog"> </div>');
			
			// dialog object
			dlg = $('.dialog');

			// create dialog content
			switch(dlgName[1]) {
				case "ex1":
					dlg.html('<p><span>Dialog Example 1</span><br />Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>');
					break;
				case "ex2":
					dlg.html('<p><span>Dialog Example 2</span><br />Architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>');
					break;
				case "ex3":
					dlg.html('<p><span>Dialog Example 3</span><br />Sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>');
					break;
				case "ex4":
					dlg.html('<p><span>Dialog Example 4</span><br />Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>');
					break;
				default:
					dlg.html('<p><span>Default Example</span><br />Default dialog</p>');
			}

			// position dialog and fade toggle
			dlgCenter = dlg.outerWidth() / 2;
			dlg.css({
				top: aPos.top - dlg.height(),
				left: aCenter - dlgCenter
			})
			.fadeToggle('fast');			
		});
	}
}( jQuery ));

// Initialize all dialogs
(function ( $ ) {
	$('a[href*="#-"]').dialog();
}( jQuery ));