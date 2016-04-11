# tagReplacr
jquery plugin to replace html tags with or without classes or attributes

**usage:**


_**keep existing classes and attributes**_

```javascript
$('.tagsToChange').replaceTag('<span>', true); 
```

_**don't keep existing classes and attributes**_

```javascript
$('#tagToChange').replaceTag('<span>', false);
```

_**replace all divs with spans, copy classes and attributes, add extra classname**_

```javascript
$('div').replaceTag($('<span>').addClass('wasDiv'), true);
```
