# tagReplacr
jquery plugin to replace html tags with or without classes or attributes

**usage:**


_**keep existing classes and attributes**_

$('.tagsToChange').replaceTag('<span>', true); 


_**don't keep existing classes and attributes**_

$('#tagToChange').replaceTag('<span>', false);


_**replace all divs with spans, copy classes and attributes, add extra classname**_

$('div').replaceTag($('<span>').addClass('wasDiv'), true);
