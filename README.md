# Page Field Info

A module for ProcessWire CMS/CMF. Adds information about options in Page Reference fields. Supports InputfieldSelect and inputfields that extend InputfieldSelect:

* InputfieldSelect
* InputfieldRadios
* InputfieldSelectMultiple
* InputfieldCheckboxes
* InputfieldAsmSelect

Requires ProcessWire >= 3.0.61 and AdminThemeUikit.

## Screenshots

### Field config

![Field config](https://user-images.githubusercontent.com/1538852/57005777-e81cae80-6c2e-11e9-81d9-5dbcb7c15ad1.png)

### Example of changes to inputfield

![Inputfield](https://user-images.githubusercontent.com/1538852/57005778-e9e67200-6c2e-11e9-9d77-19686cf85f48.gif)

### Example of info field filled out in Page Edit
![Page Edit](https://user-images.githubusercontent.com/1538852/57006062-a5a8a100-6c31-11e9-8172-748fde96bb66.png)

## Installation

[Install](http://modules.processwire.com/install-uninstall/) the Page Field Info module.

## Configuration

In the Input tab of the settings for a Page Reference field...

* Tick the "Add info tooltips to options" checkbox to enable tooltips for the options in the field. Tooltips are not possible for Select or AsmSelect inputfield types so for those types you would want to tick the next option.
* Tick the "Append info about selected options" checkbox to append information about the selected options to the bottom of the inputfield. If the Page Reference field is a "multiple pages" field then the info for each selected option will be prefixed with the option label (so the user will know what option each line of info relates to).
* In the "Info field" dropdown select a text/textarea field that will contain information about the page, to be used in the tooltips and appended info. Of course this field should be in the template(s) of the selectable pages for the Page Reference field.

### Hook

In most cases the "Info field" will supply the text for the tooltips and appended info, but for advanced usages you can hook  `PageFieldInfo::getPageInfo()` to return the text. For example:

```php
$wire->addHookAfter('PageFieldInfo::getPageInfo', function(HookEvent $event) {
    $page = $event->arguments(0); // The page
    $inputfield = $event->arguments(1); // InputfieldPage
    $field = $event->arguments(2); // The Page Reference field
    $info = $event->return; // Text from the info field, if any
    // Set some custom text as the $event->return...
});
```
