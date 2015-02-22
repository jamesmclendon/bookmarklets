javascript:
if (window.location.href.match(/watch\?v\=/)) {
	window.location.href = document.URL.replace("watch?v=", "v/");
} else if (window.location.href.match(/youtube.googleapis.com\/v\//)) {
window.location.href = document.URL.replace("youtube.googleapis.com/v/", "youtube.com/watch?v=");
} else if (window.location.href.match(/v\//)) {
window.location.href = document.URL.replace("v/", "watch?v=");
} else if (window.location.href.match(/\/vimeo/)) {
	window.location.href = document.URL.replace("vimeo.com", "player.vimeo.com/video");
} else if (window.location.href.match(/player.vimeo/)) {
	window.location.href = document.URL.replace("player.vimeo.com/video", "vimeo.com");
} else {
	alert("Try again at youtube.com or vimeo.com");
}
