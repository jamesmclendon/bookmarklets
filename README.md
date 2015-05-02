# bookmarklets

## Email link
Email link to current page in the default mail client. Populates subject with the page's title, and the body with the URL, as well as any selected text.

```javascript
javascript:(function(){location.href="mailto:?subject="+encodeURIComponent(document.title)+"&body="+(encodeURIComponent(window.location)+escape("\n\n"))+window.getSelection()})();
```

## Toggle full window videos at YouTube and Vimeo

```javascript
javascript:if(window.location.href.match(/watch\?v\=/)){window.location.href=document.URL.replace("watch?v=","v/")}else if(window.location.href.match(/youtube.googleapis.com\/v\//)){window.location.href=document.URL.replace("youtube.googleapis.com/v/","youtube.com/watch?v=")}else if(window.location.href.match(/v\//)){window.location.href=document.URL.replace("v/","watch?v=")}else if(window.location.href.match(/\/vimeo/)){window.location.href=document.URL.replace("vimeo.com","player.vimeo.com/video")}else if(window.location.href.match(/player.vimeo/)){window.location.href=document.URL.replace("player.vimeo.com/video","vimeo.com")}else{alert("Try again at youtube.com or vimeo.com")}
```

## Redirect to/from mobile subdomains

```javascript
javascript:if(window.location.hostname.match(".m.")){window.location.hostname=window.location.hostname.replace(".m.",".");}else{window.location.hostname=window.location.hostname.replace(".",".m.");}
```

## Define selected text at Wiktionary

```javascript
javascript:function%20getSelText(){var%20e="";if(window.getSelection)e=window.getSelection();else%20if(document.getSelection)e=document.getSelection();else{if(!document.selection)return"";e=document.selection.createRange().text}return%20e}var%20q=getSelText();window.location="https://en.m.wiktionary.org/wiki/"+escape(q);
```

## Google selected text

```javascript
javascript:function%20getSelText(){var%20e="";if(window.getSelection)e=window.getSelection();else%20if(document.getSelection)e=document.getSelection();else{if(!document.selection)return"";e=document.selection.createRange().text}return%20e}var%20query=getSelText();window.location="http://google.com/search?q="+escape(query);
```

## iOS

### Search selected text in Google Maps app

```javascript
javascript:function%20getSelText(){var%20e="";if(window.getSelection)e=window.getSelection();else%20if(document.getSelection)e=document.getSelection();else{if(!document.selection)return"";e=document.selection.createRange().text}return%20e}var%20q=getSelText(),load=window.open("comgooglemaps://?q="+escape(q));
```

### Transit directions to selected text in Google Maps app

```javascript
javascript:function%20getSelText(){var%20txt='';if(window.getSelection){txt=window.getSelection();}else%20if(document.getSelection){txt=document.getSelection();}else%20if(document.selection){txt=document.selection.createRange().text;}else%20return%20'';return%20txt;}var%20q=getSelText();var%20load=window.open('comgooglemaps://?saddr=My+location&daddr='+escape(q)+'&directionsmode=transit')
```

### Selected text to Drafts 4

```javascript
javascript:function%20getSelText(){var%20e="";if(window.getSelection)e=window.getSelection();else%20if(document.getSelection)e=document.getSelection();else{if(!document.selection)return"";e=document.selection.createRange().text}return%20e}var%20q=getSelText(),load=window.open("drafts4://x-callback-url/create?text="+escape(q));
```
