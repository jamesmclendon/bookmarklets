# bookmarklets

## email link
Email link to current page in the default mail client. Populates subject with the page's title, and the body with the URL, as well as any selected text.

	javascript: (function() {
	    location.href = "mailto:?subject=" + encodeURIComponent(document.title) + "&body=" + (encodeURIComponent(window.location) + escape("\n\n")) + window.getSelection()
	})();

## toggle full window videos at YouTube and Vimeo

	javascript: if (window.location.href.match(/watch\?v\=/)) {
	    window.location.href = document.URL.replace("watch?v=", "v/")
	} else
	if (window.location.href.match(/youtube.googleapis.com\/v\//)) {
	    window.location.href = document.URL.replace("youtube.googleapis.com/v/", "youtube.com/watch?v=")
	} else if (window.location.href.match(/v\//)) {
	    window.location.href = document.URL.replace("v/", "watch?v=")
	} else if (window.location.href.match(/\/vimeo/)) {
	    window.location.href = document.URL.replace("vimeo.com", "player.vimeo.com/video")
	} else if (window.location.href.match(/player.vimeo/)) {
	    window.location.href = document.URL.replace("player.vimeo.com/video", "vimeo.com")
	} else {
	    alert("Try again at youtube.com or vimeo.com")
	}

## redirect Wikimedia and nytimes.com pages to/from mobile subdomains

	javascript: if (window.location.hostname.match(".wik")) {
		if (window.location.hostname.match(".m.")) {
    	window.location.hostname = window.location.hostname.replace(".m.", ".");
		} else {
    	window.location.hostname = window.location.hostname.replace(".wik", ".m.wik");
		}
	} else if (window.location.hostname.match("nytimes.com")) {
		if (window.location.hostname.match("mobile.")) {
    	window.location.hostname = window.location.hostname.replace("mobile.", "");
		} else {
    	window.location.hostname = window.location.hostname.replace("www.nytimes.com", "mobile.nytimes.com");
		}
	}

## define selected text at Wiktionary

	javascript: function getSelText() {
	    var e = "";
	    if (window.getSelection) e = window.getSelection();
	    else if (document.getSelection) e = document.getSelection();
	    else {
	        if (!document.selection) return "";
	        e = document.selection.createRange().text
	    }
	    return e
	}
	var q = getSelText();
	window.location = "https://en.m.wiktionary.org/wiki/" + escape(q);

## Google selected text

	javascript: function getSelText() {
	    var e = "";
	    if (window.getSelection) e = window.getSelection();
	    else if (document.getSelection) e = document.getSelection();
	    else {
	        if (!document.selection) return "";
	        e = document.selection.createRange().text
	    }
	    return e
	}
	var query = getSelText();
	window.location = "http://google.com/search?q=" + escape(query);

## iOS

### search selected text in Google Maps app

	javascript: function getSelText() {
	    var e = "";
	    if (window.getSelection) e = window.getSelection();
	    else if (document.getSelection) e = document.getSelection();
	    else {
	        if (!document.selection) return "";
	        e = document.selection.createRange().text
	    }
	    return e
	}
	var q = getSelText(),
	    load = window.open("comgooglemaps://?q=" + escape(q));

### transit directions to selected text in Google Maps app

	javascript: function getSelText() {
	    var txt = '';
	    if (window.getSelection) {
	        txt = window.getSelection();
	    } else if (document.getSelection) {
	        txt = document.getSelection();
	    } else if (document.selection) {
	        txt = document.selection.createRange().text;
	    } else return '';
	    return txt;
	}
	var q = getSelText();
	var load = window.open('comgooglemaps://?saddr=My+location&daddr=' + escape(q) + '&directionsmode=transit')

### selected text to Drafts 4

	javascript: function getSelText() {
	    var e = "";
	    if (window.getSelection) e = window.getSelection();
	    else if (document.getSelection) e = document.getSelection();
	    else {
	        if (!document.selection) return "";
	        e = document.selection.createRange().text
	    }
	    return e
	}
	var q = getSelText(),
	    load = window.open("drafts4://x-callback-url/create?text=" + escape(q));
