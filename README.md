# tagReplacr
jquery plugin to replace html tags with or without classes or attributes

**usage:**

_keep existing classes and attributes_
$('.tagsToChange').replaceTag('<span>', true); 

_don't keep existing classes and attributes_
$('#tagToChange').replaceTag('<span>', false);

_replace all divs with spans, copy classes and attributes, add extra classname._
$('div').replaceTag($('<span>').addClass('wasDiv'), true);
