
$.extend({
    replaceTag: function (currentElem, newTagObj, keepProps) {
        var $currentElem = $(currentElem);
        var $newTag = $(newTagObj).clone(true, true);
        if (keepProps) {
            $.each($currentElem.prop('attributes'), function () {
                $newTag.attr(this.name, this.value);
            });
        }
        $currentElem.wrapAll($newTag);
        $currentElem.contents().unwrap();
        return this;
    }
});

$.fn.extend({
    replaceTag: function (newTagObj, keepProps) {
        return this.each(function() {
            jQuery.replaceTag(this, newTagObj, keepProps);
        });
    }
});
