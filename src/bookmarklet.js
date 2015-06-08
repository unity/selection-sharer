/* @author: Xavier Damman (@xdamman) - http://github.com/xdamman/selection-sharer - @license: MIT */
(function() {
	var baseUrl = '//unity.github.io/selection-sharer/dist';

	var loadSelectionSharer = function() {
		var s = document.createElement('script');
		s.src = baseUrl+"/selection-sharer.js";
		s.onload = runScript;
		document.body.appendChild(s);
	}

	var runScript = function() {
		var sharer = new SelectionSharer();
		sharer.show();
		sharer.setElements('p');
	}

	if(typeof jQuery != 'function') {
		var s = document.createElement('script');
		s.src="http://code.jquery.com/jquery-latest.js";
		s.onload = loadSelectionSharer;
		document.body.appendChild(s);
	} else {
		loadSelectionSharer();
	}

})();
