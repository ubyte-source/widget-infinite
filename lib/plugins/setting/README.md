# Documentation widget-infinite

Widget Javascript Infinite is a library used to create an infinite scoll list in your web page .

## Usage

Here an example of a Setting Plugin:

```
infinite.setOptionSetting(
  [
    {
      "name": "field_1",
      "order": 0,
      "visibility": true,
      "row": [],
      "unique": [],
      "patterns": [
        null
      ],
      "required": true,
      "protected": false,
      "type": ":string",
      "text": "Colonna 1"
    },
    {
      "name": "field_2",
      "order": 0,
      "visibility": true,
      "row": [],
      "unique": [],
      "patterns": [
        null
      ],
      "required": true,
      "protected": false,
      "type": ":string",
      "text": "Colonna 2"
    },
    {"name": "field_3",
      "order": 0,
      "visibility": true,
      "row": [],
      "unique": [],
      "patterns": [
        null
      ],
      "required": true,
      "protected": false,
      "type": ":string",
      "text": "Colonna 3"
    }
  ]
);

```

Here an example of how to display the setting of an infinite list:

```
let infinite_setting = infinite.getSetting();
document.appendChild(infinite_setting.out());

```
## Structure

library:
- [window.Infinite.Plugin.Setting](https://github.com/energia-source/widget-infinite/tree/main/lib/plugins/setting#class-windowinfinitepluginsetting-usable-methods)
- [window.Infinite.Plugin.Setting.Search](https://github.com/energia-source/widget-infinite/tree/main/lib/plugins/setting#class-windowinfinitepluginsettingsearch-usable-methods)
- [window.Infinite.Plugin.Setting.Search.NotFound](https://github.com/energia-source/widget-infinite/tree/main/lib/plugins/setting#class-windowinfinitepluginsettingsearchnotfound-usable-methods)
- [window.Infinite.Plugin.Setting.Notice](https://github.com/energia-source/widget-infinite/tree/main/lib/plugins/setting#class-windowinfinitepluginsettingnotice-usable-methods)
- [window.Infinite.Plugin.Setting.Ul](https://github.com/energia-source/widget-infinite/tree/main/lib/plugins/setting#class-windowinfinitepluginsettingul-usable-methods)
- [window.Infinite.Plugin.Setting.Ul.Li](https://github.com/energia-source/widget-infinite/tree/main/lib/plugins/setting#class-windowinfinitepluginsettingulli-usable-methods)
- [window.Infinite.Plugin.Setting.Ul.Li.CheckboxOrder](https://github.com/energia-source/widget-infinite/tree/main/lib/plugins/setting#class-windowinfinitepluginsettingullicheckboxorder-usable-methods)
- [window.Infinite.Plugin.Setting.Ul.Li.CheckboxVisibility](https://github.com/energia-source/widget-infinite/tree/main/lib/plugins/setting#class-windowinfinitepluginsettingullicheckboxvisinbility-usable-methods)

<br>

#### ***Class window.Infinite.Plugin.Setting usable methods***

##### `static field()`

Returns the value of the field

 * **Returns:** The value of the field.

##### `constructor(infinite)`

It creates a new instance of the class.

 * **Parameters:** `infinite` — The infinite object that is calling the plugin.

##### `getInfinite()`

Get the infinite value

 * **Returns:** The value of the infinite property.

##### `getUL()`

Get the unordered list element

 * **Returns:** The ul element.

##### `getSearch()`

Get the search element

 * **Returns:** The search element.

##### `getNotice()`

Get the notice element

 * **Returns:** The getNotice() method returns the notice element.

##### `getXHR()`

Returns the XHR object

 * **Returns:** The XHR object.

##### `setRequestUrl(url)`

Set the URL of the request

 * **Parameters:** `url` — The URL to send the request to.
 * **Returns:** The XHR object.

##### `getRequestUrl()`

Get the URL of the request

 * **Returns:** The URL of the request.

##### `setHardcode(key, value)`

Set a hardcoded value for a key

 * **Parameters:**
   * `key` — The name of the parameter.
   * `value` — The value to set.
 * **Returns:** The object itself.

##### `getHardcode()`

Get the hardcode value from the xhr object

 * **Returns:** The hardcode property of the XHR object.

##### `getContent()`

Get the content of the settings page

 * **Returns:** The content of the settings page.

##### `out()`

This function returns the HTML for the list

 * **Returns:** The content of the list.

##### `handleEvent(event)`

* For each attribute in the `handle` array, split the attribute into a string array of the form `[event_type, function_name]`. * For each event type in the `handle` array, check if the event type is equal to the event type of the event. * If the event type is equal to the event type of the event, check if the function name is equal to the function name of the event. * If the function name is equal to the function name of the event, execute the function

 * **Parameters:** `event` — The event object that was passed to the function.
 * **Returns:** The `Infinite` object.

##### `request()`

Send a POST request to the server to update the order of the items in the list

 * **Returns:** Nothing 

##### `result()`

The JavaScript function `result()` is called when the XMLHttpRequest is done

 * **Returns:** Nothing 

#### ***Class window.Infinite.Plugin.Setting.Search usable methods***

##### `static icon()`

*Returns the icon name for the filter list icon.*

 * **Returns:** The icon function returns the string 'material-icons filter_list'

##### `static placeholder()`

*Returns a string that represents the placeholder text for the search box.*

 * **Returns:** The placeholder function returns a string.

##### `constructor(setting)`

It creates a new instance of the NotFound class.

 * **Parameters:** `setting` — The setting object that this plugin is attached to.

##### `getSetting()`

Get the setting from the database

 * **Returns:** The setting property of the getSetting function.

##### `getNotFound()`

Get the not found element

 * **Returns:** The element with the ID of notfound.

##### `getField()`

Create a div element with the class `field` and append the input element to it

 * **Returns:** The field element.

##### `getInput()`

Create an input element, set its type to text, set its placeholder to the class's placeholder, and add an event listener for input

 * **Returns:** The input element.

##### `getContent()`

Create a div with a class of "search" and append an icon and a field to it

 * **Returns:** The search bar.

##### `out()`

Returns the content of the current cell as a string

 * **Returns:** The getContent() method is being called and the return value is being passed to the out()

     method.

##### `handleEvent(event)`

* For each attribute in the `handle` attribute, split the attribute into a type and a function name. * If the type matches the event type, or if the type is empty, then execute the function

 * **Parameters:** `event` — The event object that was passed to the function.
 * **Returns:** The `Infinite` class.

##### `filter()`

* Filter the list of items in the dropdown

#### ***Class window.Infinite.Plugin.Setting.Search.NotFound usable methods***

##### `static text()`

*Returns* a string that represents the text to be displayed when a search returns no results

 * **Returns:** The string 'developer\infinite\search\not_found'

##### `constructor(search)`

The constructor function creates a new instance of the JavaScript class.

The constructor function sets the text of the JavaScript class.

 * **Parameters:** `search` — The search string to use to find the elements.

##### `getSearch()`

Get the search value from the search input field

 * **Returns:** The search string.

##### `getContent()`

* If the `content` property exists, return it. * Otherwise, create a new `li` element with the `not-found` class. * Then, create a new `span` element and append it to the `li` element. * Finally, return the `li` element

 * **Returns:** The content of the list item.

##### `getText()`

Create a span element if it doesn't already exist, and return it

 * **Returns:** The text of the question.

##### `setText(text)`

* Create a text node and append it to the span

 * **Parameters:** `text` — The text to be displayed in the span.
 * **Returns:** The object itself.

##### `out()`

Returns the content of the current cell as a string

 * **Returns:** The getContent() method returns the content of the page.

#### ***Class window.Infinite.Plugin.Setting.Notice usable methods***

##### `static retry()`

*This function returns a string.*

 * **Returns:** The string 'Click here to try again now!'

##### `constructor(setting)`

The constructor function creates an object that has a setting property and an elements property

 * **Parameters:** `setting` — The setting object that is passed to the constructor.

##### `getSetting()`

Get the setting from the database

 * **Returns:** The setting property of the getSetting function.

##### `getContent()`

Create a div element with the class `notice error` and append the message and reload button to it it it doesn't exist

 * **Returns:** The content of the error notice.

##### `getMessage()`

Create a new element called message if it doesn't already exist, and return it

 * **Returns:** The message element.

##### `setMessage(message)`

* Create a text node from the message argument, and append it to the message element

 * **Parameters:** `message` — The message to display in the notification.
 * **Returns:** The object itself.

##### `getReload()`

Get the reload button if it exists, otherwise create it

 * **Returns:** The reload button.

##### `show()`

Inserts the content of the setting into the list

 * **Returns:** The object itself.

##### `hide()`

Hide the content of the element

 * **Returns:** The object itself.

#### ***Class window.Infinite.Plugin.Setting.Ul usable methods***

##### `constructor(setting)`

Create a new instance of the Sortable class

 * **Parameters:** `setting` — The setting object that is used to store the data.

##### `getSetting()`

Get the setting from the database

 * **Returns:** The setting property of the getSetting function.

##### `getSortable()`

Returns the sortable object

 * **Returns:** The sortable property.

##### `getContent()`

Get the content element of the list

 * **Returns:** The content div.

##### `getUL()`

Create a new <ul> element and return it

 * **Returns:** The ul element.

##### `getLI()`

Get the list item element

 * **Returns:** The li element.

##### `findLI(name)`

Find the list item with the specified name

 * **Parameters:** `name` — The name of the data attribute to look for.
 * **Returns:** The li element that has the data attribute set to the name of the plugin.

##### `addLI(structure)`

Add a new list item to the list

 * **Parameters:** `structure` — The structure of the list item.
 * **Returns:** The object itself.

##### `reset()`

Reset the list by removing all the items from the list

 * **Returns:** The object itself.

##### `update()`

Update the list of options

 * **Returns:** The object itself.

##### `out()`

Get the content of the current cell

 * **Returns:** The getContent() method returns the content of the page.

#### ***Class window.Infinite.Plugin.Setting.Ul.Li usable methods***

##### `static data()`

It returns a string.

 * **Returns:** The data-item-id is being returned.

##### `static drag()`

*Returns the CSS class for the drag handle icon.*

 * **Returns:** The string 'material-icons drag_handle'

##### `constructor(ul, matrix)`

Create a new instance of the plugin

 * **Parameters:**
   * `ul` — The ul element that this li element is a child of.
   * `matrix` — A JSON object containing the following properties:

##### `getUL()`

Returns the unordered list element

 * **Returns:** The ul element.

##### `getOrder()`

Get the order of the current element

 * **Returns:** The order of the elements in the array.

##### `getVisibility()`

Get the visibility of the element

 * **Returns:** The visibility of the element.

##### `getDrag()`

Get the drag icon for the option

 * **Returns:** The drag handle.

##### `getOption()`

Create a div element with the class name "option" and append the order and visibility icons to it

 * **Returns:** The `getOption()` method returns the `option` element.

##### `getLabel()`

Create a label element if it doesn't already exist

 * **Returns:** The label element.

##### `setLabel(text)`

Create a text node and append it to the label

 * **Parameters:** `text` — The text to be displayed in the label.
 * **Returns:** The object itself.

##### `getLI()`

Create a new list item element and add the draggable element, the label, and the options to it

 * **Returns:** The li element.

##### `out()`

Return the HTML for the list item

 * **Returns:** The getLI() function is being called and the return value is being passed to the out() function.

#### ***Class window.Infinite.Plugin.Setting.Ul.Li.CheckboxOrder usable methods***

##### `static icons()`

The function returns a dictionary of icons

 * **Returns:** The icons object is being returned.

##### `constructor(li)`

The constructor function creates a new object and assigns it to the variable `this`.

 * **Parameters:** `li` — The list item that contains the button.

##### `getLI()`

Returns the list item element that contains the current node

 * **Returns:** The li element.

##### `getIcon()`

Create an icon element and add it to the DOM

 * **Returns:** The icon element.

##### `setIcon(material)`

Set the icon of the material

 * **Parameters:** `material` — The material to set the icon to.
 * **Returns:** The object itself.

##### `getInput()`

Create an input element, set its type to checkbox, and add a change event listener

 * **Returns:** The input element.

##### `setInput(checked)`

Set the checked state of the input element

 * **Parameters:** `checked` — Boolean
 * **Returns:** The object itself.

##### `handleEvent(event)`

* For each attribute in the `handle` attribute, split the attribute into a type and a function name. * If the type matches the event type, or if the type is empty, then execute the function

 * **Parameters:** `event` — The event object that was passed to the function.
 * **Returns:** Nothing 

##### `click()`

* When the user clicks on the checkbox, the checkbox is toggled and the setting is updated

##### `change()`

When the checkbox is checked, the icon is set to the check icon. When the checkbox is unchecked, the icon is set to the blank icon

#### ***Class window.Infinite.Plugin.Setting.Ul.Li.CheckboxVisibility usable methods***

##### `static icons()`

The function returns a dictionary of icons

 * **Returns:** The icons object is being returned.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript