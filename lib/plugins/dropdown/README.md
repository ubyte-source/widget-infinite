# Documentation widget-infinite

Widget Javascript Infinite is a library used to create an infinite scoll list in your web page.

## Structure

library:
- [window.Infinite.Plugin.Dropdown](https://github.com/energia-source/widget-infinite/tree/main/lib/plugins/dropdown#class-windowinfiniteplugindropdown-usable-methods)
- [window.Infinite.Plugin.Dropdown.Handler](https://github.com/energia-source/widget-infinite/tree/main/lib/plugins/dropdown#class-windowinfiniteplugindropdownhandler-usable-methods)
- [window.Infinite.Plugin.Dropdown.Li](https://github.com/energia-source/widget-infinite/tree/main/lib/plugins/dropdown#class-windowinfiniteplugindropdownli-usable-methods)
- [window.Infinite.Plugin.Dropdown.Li.Icon](https://github.com/energia-source/widget-infinite/tree/main/lib/plugins/dropdown#class-windowinfiniteplugindropdownliicon-usable-methods)

<br>

#### ***Class window.Infinite.Plugin.Dropdown usable methods***

##### `static text()`

*Returns the text of the dropdown list pattern.*

 * **Returns:** The `text()` method returns the text of the dropdown list.

##### `static void()`

It returns a string that is a hexadecimal representation of the MD5 hash of the string 'd64bc1eb577b062fa13ed20ddbc130f3'.

 * **Returns:** The string 'd64bc1eb577b062fa13ed20ddbc130f3'

##### `static found()`

* If the search box is empty, return the string 'material-icons search'. * If the search box is not empty, return the string 'material-icons close'

 * **Returns:** The `found()` function returns the string `'material-icons search'`.

##### `constructor(th)`

Create the dropdown's input element, and append it to the content element

 * **Parameters:** `th` — The instance of the TableHandler class.
 * **Returns:** The `this` object.

##### `getTH()`

Get the current thread's `this` value

 * **Returns:** The th element.

##### `getHandler()`

Get the handler element from the DOM

 * **Returns:** The handler element.

##### `getMatrixPatterns()`

Get the patterns from the matrix

 * **Returns:** The patterns are being returned as an array of arrays.

##### `getMatrixPatternsNormalize(value)`

*Normalizes the matrix patterns to a single object.*

The above function is used to normalize the matrix patterns to a single object

 * **Parameters:** `value` — The value to be normalized.
 * **Returns:** The result is a dictionary of the form (ex.):

     ```

     {
      "columns": [
        {
          "name": "column_name",

          "type": "column_type",

          "length": column_length,

          "precision": column_precision,

          "scale": column_scale
        }
      ]
     }

     ```

##### `setOptionLimit(limit)`

Set the limit for the number of rows to return

 * **Parameters:** `limit` — The number of rows to return.
 * **Returns:** The `setOptionLimit` function returns the `this` object.

##### `getOptionLimit()`

Get the limit value from the options object

 * **Returns:** The limit value.

##### `getOptionVoid()`

Get the value of the void option

 * **Returns:** The void option.

##### `setValue(value)`

* Set the value of the input element to the value of the option element

 * **Parameters:** `value` — The value to set the input to.
 * **Returns:** The question object.

##### `setSelected(value)`

Set the selected value

 * **Parameters:** `value` — The value of the selected item.
 * **Returns:** The `this` object.

##### `getInput()`

Get the input element from the DOM

 * **Returns:** The input element.

##### `getUL()`

Create a new <ul> element and add it to the content of the handler

 * **Returns:** The ul element.

##### `getList()`

Get the list element from the elements object

 * **Returns:** The list object.

##### `emptyList()`

Remove all the items from the list

 * **Returns:** The object itself.

##### `findLi(value)`

Find a list item by its ID

 * **Parameters:** `value` — The value of the item to be found.
 * **Returns:** The list item that has the same ID as the value.

##### `getLiFirst()`

Get the first item in a list

 * **Returns:** The first item in the list.

##### `populateUl(patterns)`

Populates the dropdown list with the given object

 * **Parameters:** `patterns` — The patterns to populate the dropdown with.
 * **Returns:** The dropdown object.

##### `populateUlHaveIcon(patterns)`

* For each pattern in the patterns array, check if the pattern has an icon property. * If the pattern has an icon property, return true. * If the pattern does not have an icon property, continue to the next pattern. * If no pattern has an icon property, return false

 * **Parameters:** `patterns` — an array of objects that contain the following properties:
 * **Returns:** `` — boolean value.

##### `out()`

Get the content of the current page

 * **Returns:** The content of the file.

##### `show()`

Show the dropdown list

 * **Returns:** The object itself.

##### `hide()`

Hide the dropdown menu

 * **Returns:** The current instance of the class.

##### `status()`

*Returns* `true` if the dropdown is open, `false` otherwise

 * **Returns:** The status() method returns a boolean value.

##### `handleEvent(event)`

If the event target has a class attribute that matches the handle class, then execute the function

 * **Parameters:** `event` — The event object that was passed to the function.
 * **Returns:** The `Infinite` object.

##### `open()`

Open the list of options

 * **Returns:** Nothing 

##### `close(event)`

When the user clicks on the dropdown, the dropdown is hidden

 * **Parameters:** `event` — The event object that was passed to the function.
 * **Returns:** Nothing 

##### `reset()`

Reset the selected item to the first item in the list

 * **Returns:** The object itself.

##### `find(event)`

Finds the list item that matches the search term and triggers the click event on that item

 * **Parameters:** `event` — The event object that was triggered.
 * **Returns:** The `find` method returns the `actived` array.

##### `select(event)`

*When the user clicks on an option, set the selected option to the ID of the option they clicked on.*

 * **Parameters:** `event` — The event object that was passed to the callback.

#### ***Class window.Infinite.Plugin.Dropdown.Handler usable methods***

##### `constructor(plugin)`

The constructor function creates an object that has a property called plugin. This property holds a reference to the plugin object that created the object. The object also has a property called elements. This property holds an empty object.

The constructor function is called when you create an instance of the object. For example, the following code creates an instance of the object:

 * **Parameters:** `plugin` — The plugin object that is calling the constructor.

##### `getPlugin()`

Get the plugin object for the current session

 * **Returns:** The plugin object.

##### `getContent()`

Create the content of the dropdown

 * **Returns:** The content of the dropdown.

##### `getAction()`

Create a div element with the class `action` and append an icon to it

 * **Returns:** The action element.

##### `setIcon(clonable)`

* Set the icon of the button

 * **Parameters:** `clonable` — The element to clone.
 * **Returns:** The `setIcon` method returns the `this` object.

##### `getIcon()`

Get the icon element from the elements object

 * **Returns:** The icon property of the elements object.

##### `removeIcon()`

Remove the icon from the content

 * **Returns:** The `Infinite` instance.

##### `setLabel(text)`

Set the label of the button

 * **Parameters:** `text` — The text to be displayed in the label.
 * **Returns:** The object itself.

##### `getLabel()`

Create a label element if it doesn't exist, and return it

 * **Returns:** The label element.

##### `cleanLabel()`

Remove all child elements from the label

 * **Returns:** The question object.

##### `getSearch()`

Create a new input element and set its type to text

 * **Returns:** The search input element.

##### `showSearch()`

*Show the search box on the label.*

 * **Returns:** The current instance of the object.

##### `hideSearch()`

Hide the search bar

 * **Returns:** The object itself.

#### ***Class window.Infinite.Plugin.Dropdown.Li usable methods***

##### `static data()`

*This function returns the value of the attribute that will be used to identify the list item that is currently selected.*

 * **Returns:** The data-infinite-dropdown-li-value attribute is being returned.

##### `constructor(plugin, id, text, icon)`

Creates a new instance of the Dropdown.Li class

 * **Parameters:**
   * `plugin` — The plugin that this dropdown belongs to.
   * `id` — The id of the dropdown.
   * `text` — The text to display in the dropdown.
   * `icon` — The icon to use for the dropdown.

##### `getPlugin()`

Get the plugin object for the current session

 * **Returns:** The plugin object.

##### `getID()`

Get the ID of the element

 * **Returns:** The id of the element.

##### `getIcon()`

Get the icon element from the DOM

 * **Returns:** The icon element.

##### `getLabel()`

Create a label element if it doesn't exist, and return it

 * **Returns:** The label element.

##### `getWrapper()`

Create a wrapper element for the label element

 * **Returns:** The wrapper element.

##### `getLI()`

Create a new list item element and set its ID and data attributes

 * **Returns:** The li element.

##### `out()`

Return the HTML for the list item

 * **Returns:** The getLI() method is being called.

#### ***Class window.Infinite.Plugin.Dropdown.Li.Icon usable methods***

##### `static default()`

It returns the default value for the icon class.

 * **Returns:** The `default` function returns a string.

##### `constructor(li)`

Create a new JavaScript object that contains a reference to the HTML list element

 * **Parameters:** `li` — The list item that contains the button.

##### `getLI()`

Get the list item element for this menu item

 * **Returns:** The li element.

##### `get()`

Get the icon element from the elements object, or create a new icon element if it doesn't exist

 * **Returns:** The icon property is being returned.

##### `set(icon)`

Set the icon for the button

 * **Parameters:** `icon` — The icon to use.
 * **Returns:** The object itself.

##### `show()`

*Inserts the icon before the first child of the list item.* * # #

 * **Returns:** The `Icon` object.

##### `hide()`

Hide the icon

 * **Returns:** The object itself.

##### `status()`

Returns true if the element is attached to the DOM

 * **Returns:** The status() method returns a boolean value.

##### `out()`

Get the value of the current node

 * **Returns:** The value of the `get` method.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript