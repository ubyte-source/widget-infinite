# Documentation widget-infinite

Widget Javascript Infinite is a library used to create an infinite scoll list in your web page.

## Structure

library:

- [window.Infinite](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfinite-usable-methods)
- [window.Infinite.Event](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfiniteevent-usable-methods)
- [window.Infinite.Plugin](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfiniteplugin-usable-methods)
- [window.Infinite.Plugin.Text](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfiniteplugintext-usable-methods)
- [window.Infinite.Body](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfinitebody-usable-methods)
- [window.Infinite.Body.Parserdate](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfinitebodyparsedate-usable-methods)
- [window.Infinite.Body.TR](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfinitebodytr-usable-methods)
- [window.Infinite.Body.TD](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfinitebodytd-usable-methods)
- [window.Infinite.Body.Checkbox](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfinitebodycheckbox-usable-methods)
- [window.Infinite.Head](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfinitehead-usable-methods)
- [window.Infinite.Head.TH](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfiniteheadth-usable-methods)
- [window.Infinite.Head.TH.Resize](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfiniteheadthresize-usable-methods)
- [window.Infinite.Head.Checkbox](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfiniteheadcheckbox-usable-methods)
- [window.Infinite.Preloader](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfinitepreloader-usable-methods)
- [window.Infinite.Preloader.Scroll](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfinitepreloaderscroll-usable-methods)
- [window.Infinite.Notice](https://github.com/energia-source/widget-infinite/tree/main/lib/dropdown#class-windowinfinitenotice-usable-methods)

<br>

#### ***Class window.Infinite usable methods***

##### `static handle()`

It returns a string.

 * **Returns:** The `handle` method returns a string.

##### `static complete()`

It returns a string.

 * **Returns:** The `complete` method returns a string.

##### `constructor()`

The constructor function creates the object and sets up the event listeners

##### `getHead()`

Return the head of the list

 * **Returns:** The head of the linked list.

##### `getBody()`

Get the body element of the page

 * **Returns:** The body element of the page.

##### `getLoaderScroll()`

Get the scroll position of the loader

 * **Returns:** The scroll position of the loader.

##### `getPreloader()`

Get the preloader element

 * **Returns:** The preloader element.

##### `getSetting()`

Get the setting element from the page

 * **Returns:** The `getSetting()` method returns the `setting` element.

##### `getNotice()`

Get the notice element

 * **Returns:** The getNotice() method returns the notice element.

##### `setDebug(status)`

Set the debug status of the current session

 * **Parameters:** `status` — The status of the debug mode.
 * **Returns:** The `setDebug` method returns the `this` object.

##### `getDebug()`

Get the debug setting for the current session

 * **Returns:** The debug property of the class.

##### `setContainer(container)`

Set the container element for the scrollable element

 * **Parameters:** `container` — The element that will contain the scrollable area.
 * **Returns:** The instance of the class.

##### `getContainer()`

Get the container element for the chart

 * **Returns:** The container element.

##### `setOptionStructure(human)`

Set the structure of the page

 * **Parameters:** `human` — The human to set the structure of.
 * **Returns:** The object itself.

##### `getOptionStructure()`

Get the option structure

 * **Returns:** The option structure.

##### `setOptionSetting(option)`

Set the option setting for the current page

 * **Parameters:** `option` — The name of the option to be set.
 * **Returns:** The `setOptionSetting` method returns the `this` object.

##### `getOptionSetting()`

Get the option setting for the current option

 * **Returns:** The option setting for the option group.

##### `setCallbackSuccess(func)`

Set the success callback for the XHR object

 * **Parameters:** `func` — The function to be called when the request is successful.
 * **Returns:** The `ajax` function is being returned.

##### `getCallbackSuccess()`

Get the callback function for the success event

 * **Returns:** The success callback function.

##### `setCallbackFail(func)`

Set the callback function for the XHR request

 * **Parameters:** `func` — The function to call when the request is complete.
 * **Returns:** The `ajax` function is being returned.

##### `getCallbackFail()`

Get the callback function for the XHR request

 * **Returns:** The callback function for the fail event.

##### `setCallbackEverywhere(func)`

Set a callback function that will be called for every request

 * **Parameters:** `func` — The function to be called when the request is complete.
 * **Returns:** The `ajax` function.

##### `getCallbackEverywhere()`

Returns a boolean indicating whether or not the callback is enabled for all requests

 * **Returns:** The callback function.

##### `getXHR()`

It returns the XHR object.

 * **Returns:** The constructor function of the XMLHttpRequest object.

##### `setRequestUrl(url)`

Set the URL of the request

 * **Parameters:** `url` — The URL to send the request to.
 * **Returns:** The object itself.

##### `getRequestUrl()`

Get the URL of the request

 * **Returns:** The URL of the request.

##### `setRequestOffset(offset)`

Set the offset of the request

 * **Parameters:** `offset` — The offset to start reading from.
 * **Returns:** The object itself.

##### `getRequestOffset()`

Get the current offset of the request

 * **Returns:** The offset of the request.

##### `setRequestCount(count_max)`

Set the maximum number of times the JavaScript will try to download the file

 * **Parameters:** `count_max` — The maximum number of times to retry the request.
 * **Returns:** The request object.

##### `getRequestCount()`

It returns the number of requests that have been made to the server.

 * **Returns:** The number of requests made to the server.

##### `setResponseKey(key)`

Set the key to use when iterating over an array

 * **Parameters:** `key` — The key to use for the array.
 * **Returns:** The XHR object.

##### `getResponseKey()`

It returns the response key.

 * **Returns:** The response key.

##### `setResponseUnique(key)`

Set the unique identifier for the response

 * **Parameters:** `key` — The unique key to identify the response.
 * **Returns:** The `setResponseUnique` method returns the `xhr` object.

##### `getResponseUnique()`

Get the unique identifier for the response

 * **Returns:** The unique ID of the request.

##### `addEventSelect(func)`

Add a function to the select event

 * **Parameters:** `func` — The function to be called when the event is triggered.
 * **Returns:** The `Infinite` object.

##### `getEventSelect()`

It returns the select event from the events object.

 * **Returns:** The select method of the events property.
 
#####  `setHardcode(key, value)` 

Set a hardcoded value for a key

 * **Parameters:** `key` — The name of the parameter.
 * **Parameters:** `value` — The value to set.
 * **Returns:** The `Infinite` object.
 
#####  `getHardcode()` 

Get the hardcode value from the xhr object

 * **Returns:** The hardcode property of the XHR object. 

#####  `deleteHardcode(key)` 

Delete a hardcoded value from the hardcoded object

 * **Parameters:** `key` — The key to delete from the hardcode object.
 * **Returns:** The object itself.
 
##### `get()`

Get the values of all the input fields in the table

 * **Returns:** The associative array of the matrix names and their values.

##### `request(everywhere)`

Send a POST request to the server with the current offset and count

 * **Parameters:** `everywhere` — A function that will be called when the request is complete.
 * **Returns:** Nothing

##### `error()`

If the request fails, try again after a second

##### `load()`

Load the data from the server and display it in the table

 * **Returns:** Nothing

##### `filter(ev)`

When the user clicks on the "Filter" button, the filter function is called. The filter function sets the request offset to 0, and then calls the request function

 * **Parameters:** `ev` — The event object.

##### `getTable()`

Create a table element and append the head and body elements to it

 * **Returns:** The table element.

##### `out()`

`out()` is a function that returns the HTML table

 * **Returns:** The table.

##### `handleEvent(event)`

If the event type matches the event type in the attribute, or if the event type is empty, then execute the function

 * **Parameters:** `event` — The event object that was passed to the handler.
 * **Returns:** Nothing

##### `close(event)`

Close the plugin

 * **Parameters:** `event` — The event object that was passed to the close() method.

##### `scroll(event)`

When the user scrolls to the bottom of the page, the function requests more data

 * **Parameters:** `event` — The event that triggered the scroll.
 * **Returns:** Nothing

##### `static closestAttribute(target, attribute, html)`

Find the closest attribute to the target element

 * **Parameters:**
   * `target` — The element to search for the attribute.
   * `attribute` — The attribute to search for.
   * `html` — If true, the attribute is searched for in the HTML code of the page.
 * **Returns:** The closest attribute.

##### `static removeElementDOM(element)`

Remove the element from the DOM

 * **Parameters:** `element` — The element to remove from the DOM.
 * **Returns:** The return value is a boolean value.

##### `static getIcon(name)`

Create an HTML element with the given name and return it

 * **Parameters:** `name` — The name of the icon.
 * **Returns:** The icon element.

#### ***Class window.Infinite.Event usable methods***

##### `static select()`

This function returns the number 4.

 * **Returns:** The number 4.

##### `static unselect()`

It returns 2.

 * **Returns:** The number 2.

##### `static always()`

This function always returns 1.

 * **Returns:** A 

##### `constructor(type, func)`

Create a new JavaScript event object

 * **Parameters:**
   * `type` — The type of the event. This can be any string.
   * `func` — The function that will be called when the event is triggered.

##### `getType()`

Get the type of the current node

 * **Returns:** The type of the object.

##### `getFunction()`

Get the function that was passed in to the constructor

 * **Returns:** The function that was passed in.

##### `static caller(context, parameter, events, type)`

*Call the function of each event in the event list that matches the type.*

The function is called with the context and parameter

 * **Parameters:**
   * `context` — The context in which the event is being raised.
   * `parameter` — The parameter that is passed to the event function.
   * `events` — An array of Event objects.
   * `type` — The type of event to be called.

#### ***Class window.Infinite.Plugin usable methods***

##### `constructor(th)`

Create a new instance of the JavaScript class

 * **Parameters:** `th` — The thread object.

##### `getTH()`

Get the current thread's `this` value

 * **Returns:** The th element.

#### ***Class window.Infinite.Plugin.Text usable methods***

##### `static void()`

Return the JavaScript string 'NULL'

 * **Returns:** The string 'NULL'

##### `constructor(th)`

Creates a new instance of the JavaScript plugin

 * **Parameters:** `th` — The table header.
 * **Returns:** The result of the function.

##### `getSearch()`

Create a div with a class of "search" and append an input element to it

 * **Returns:** The search element.

##### `getInput()`

Create an input element and add it to the table header

 * **Returns:** The input element.

##### `out()`

Get the search string from the user

 * **Returns:** The search method is being called.

#### ***Class window.Infinite.Body usable methods***

##### `constructor(infinite)`

Create a new instance of the InfiniteScroll class

 * **Parameters:** `infinite` — If set to true, the table will be rendered with an infinite scroll.

##### `getInfinite()`

Get the infinite value

 * **Returns:** The infinite property of the object.

##### `getTbody()`

Create a new tbody element if it doesn't already exist

 * **Returns:** The tbody element.

##### `emptyTbody()`

*Remove all child elements from the tbody.*

 * **Returns:** The Infinite object.

##### `getTR()`

Get the table row element for this table cell

 * **Returns:** The `getTR()` method returns the `tr` element.

##### `addTR(matrix)`

Add a new TR to the TR collection

 * **Parameters:** `matrix` — The matrix that will be used to create the TR.
 * **Returns:** The TR object.

##### `findTR(key)`

Find the TR element that contains the specified key

 * **Parameters:** `key` — The key to look for in the TR.
 * **Returns:** The value of the key in the TR object.

##### `removeTR(key)`

Remove a TR element from the table

 * **Parameters:** `key` — The key of the row to remove.
 * **Returns:** Nothing

##### `getChecked()`

Get the checked checkboxes from the table

 * **Returns:** The getChecked() method returns an array of the checked checkboxes.

##### `update()`

*Update the table by adding new rows and removing old rows.*



The function is pretty simple. It first empties the table body, then it loops through the table rows and inserts them into the table body

 * **Returns:** Nothing

##### `compare(line, comparison)`

If the comparison is greater than the line, return false. If the comparison is less than the line, return true. If the comparison is equal to the line, return false

 * **Parameters:**
   * `line` — the line to compare to comparison
   * `comparison` — The comparison object to compare against.
 * **Returns:** The result of the comparison.

##### `sort(line)`

* Get the TR element from the table. * Get the keys from the TR object. * Iterate through the TR object. * Get the data attribute from the TR element. * If the data attribute is null or the TR object does not have the data attribute, continue. * Compare the line and the data attribute. * If the comparison is false, continue. * Return the TR element

 * **Parameters:** `line` — The line to be sorted.
 * **Returns:** The next row in the table.

##### `destroy()`

Destroy the table

 * **Returns:** The table object.

##### `static casting(td)`

* If the matrix type is :number, then cast the value to a number. * If the matrix type is :datetime and the matrix has a pattern, then cast the value to a date. * Otherwise, return the value as a string

 * **Parameters:** `td` — The table cell that is being converted.
 * **Returns:** The value of the cell, casted to the type of the column.

#### ***Class window.Infinite.Body.Parserdate usable methods***

##### `constructor(value, format)`

Create a new JavaScript Date object with the given value and format

 * **Parameters:**
   * `value` — The value to be set.
   * `format` — The format of the date.

##### `setFormat(string)`

Set the format of the output

 * **Parameters:** `string` — The string to be formatted.
 * **Returns:** The object itself.

##### `getFormat()`

Get the format of the data

 * **Returns:** The format property of the object.

##### `setValue(string)`

Set the value of the object to an array of strings split on non-word characters

 * **Parameters:** `string` — The string to be split.
 * **Returns:** The object itself.

##### `getValue()`

Get the value of the current node

 * **Returns:** The value of the node.

##### `getParsed()`

* Get the value of the datepicker input field. * Get the format of the datepicker input field. * If the format and value are not the same length, return null. * Create an array of the datepicker input value. * Create an array of the datepicker input format. * Create an array of the datepicker input value in order of the datepicker input format. * Create a string of the datepicker input value in order of the datepicker input format. * Create a date object from the string of the datepicker input value in order of the datepicker input format. * Return the date object

 * **Returns:** The date in milliseconds.

#### ***Class window.Infinite.Body.TR usable methods***

##### `static data()`

*This function returns a string that is used as an attribute on the table row DOM elements.*

The `data()` function is used to return a string that is used as an attribute on the table row DOM elements.

The attribute is used to identify the row in the table DOM element.

This attribute is used to identify the row in the table DOM element when the table is being sorted or filtered.

 * **Returns:** The `data-infinite-row-id` is a string that is being returned.

##### `constructor(body, matrix)`

Create a new table row element and add it to the body

 * **Parameters:**
   * `body` — The body object that this element is associated with.
   * `matrix` — The matrix that contains the data.

##### `getBody()`

Get the body of the request

 * **Returns:** The body of the message.

##### `getMatrix()`

Get the matrix of the current state of the game

 * **Returns:** The matrix.

##### `getCheckbox()`

Get the checkbox element

 * **Returns:** The checkbox element.

##### `getTD()`

Returns the TD element of the table

 * **Returns:** The TD element.

##### `findTD(name)`

Find a TD element by its matrix name

 * **Parameters:** `name` — The name of the matrix to be found.
 * **Returns:** The TD object that has the name that matches the name parameter.

##### `getTR()`

Create a new table row element and return it

 * **Returns:** The TR element.

##### `emptyTR()`

*Create a new table row and add it to the table.*

 * **Returns:** The object itself.

##### `emptyTD()`

Create an empty table row and add it to the table

 * **Returns:** The table object.

##### `build()`

If the response has a unique key, then set the attribute of the table row to the value of that key

 * **Returns:** The object itself.

##### `update()`

* Create a new table row and add it to the table. * Create a new table data and add it to the table row. * Create a new checkbox and add it to the table data. * Create a new event listener and add it to the table row. * Set the table row's attribute to the event listener. * Set the table row's class to "use". * Set the table row's attribute to the checkbox. * Set the checkbox's input to the status of the checkbox

 * **Returns:** Nothing

##### `handleEvent(event)`

If the event target has a class attribute that matches the handle class attribute, then execute the function that matches the event type

 * **Parameters:** `event` — The event object that was passed to the function.
 * **Returns:** The `Infinite` object.

##### `click(event)`

*Get the checkbox element from the DOM and store it in a variable.*

*Stop the event from propagating.*

 * **Parameters:** `event` — The event object that was triggered.

##### `change()`

* When the checkbox is checked, add the `active` class to the `<tr>` element. * When the checkbox is unchecked, remove the `active` class from the `<tr>` element

#### ***Class window.Infinite.Body.TD usable methods***

##### `static handling()`

The function returns the string 'handling'

 * **Returns:** The string 'handling'

##### `constructor(tr, value, matrix)`

Create a new JavaScript object that represents a matrix

 * **Parameters:**
   * `tr` — The translation vector.
   * `value` — The value of the matrix.
   * `matrix` — The matrix that the transformation is applied to.

##### `getTR()`

Get the current row's TR element

 * **Returns:** The `getTR()` method returns the `tr` property of the `Table` object.

##### `getMatrix()`

Get the matrix of the current state of the game

 * **Returns:** The matrix.

##### `getMatrixName()`

Get the name of the matrix

 * **Returns:** The name of the matrix.

##### `getValue()`

Get the value of the current node

 * **Returns:** The value of the variable.

##### `getTD()`

Create a new <td> element and return it

 * **Returns:** The TD element.

##### `build()`

* If the value is null or undefined, return the void text. * Otherwise, return the value

 * **Returns:** The object itself.

##### `out()`

Returns the HTML table data element for the current cell

 * **Returns:** The TD element.

#### ***Class window.Infinite.Body.Checkbox usable methods***

##### `static icons()`

* Define the icons that will be used for the checkboxes

 * **Returns:** A dictionary of icons.

##### `constructor(tr)`

Create a new instance of the JavaScript class

 * **Parameters:** `tr` — The table row element.

##### `getTR()`

Get the TR element of the current row

 * **Returns:** The `getTR()` method returns the `tr` property of the `this` object.

##### `getIcon()`

Create an icon element and add it to the DOM

 * **Returns:** The icon element.

##### `setIcon(material)`

Set the icon of the material

 * **Parameters:** `material` — The material to set the icon to.
 * **Returns:** The object itself.

##### `getTD()`

Create a new `td` element, and add the input and icon to it

 * **Returns:** The `getTD()` method returns the `td` element that contains the `input` and `icon`

     elements.

##### `getInput()`

Create an input element, set its type to checkbox, set its name to checkbox, set its event listener for change, and add it to the table row

 * **Returns:** The input element.

##### `setInput(checked)`

* Set the checked property of the input element to the value of the checked parameter

 * **Parameters:** `checked` — Boolean
 * **Returns:** The `setInput` method returns the `Checkbox` instance.

##### `out()`

* Get the icon element from the table cell. * If the icon element's inner text is empty, set the icon to the blank icon. * Return the table cell

 * **Returns:** The TD element.

##### `handleEvent(event)`

* For each attribute in the element, split the attribute into a list of words. * For each word in the list, split the word into a word and a function name. * If the word is the event type or is empty, execute the function

 * **Parameters:** `event` — The event object that was passed to the function.
 * **Returns:** The `Infinite` object.

##### `click(event)`

When the user clicks on the checkbox, the checkbox is toggled

 * **Parameters:** `event` — The event object that was triggered.

##### `change(event)`

When the checkbox is clicked, the icon is updated to reflect the new status, and the event is fired

 * **Parameters:** `event` — The event object that was passed to the function.

#### ***Class window.Infinite.Head usable methods***

##### `constructor(infinite)`

Create a new instance of the Infinite.Head class

 * **Parameters:** `infinite` — The infinite object that is calling the constructor.

##### `getInfinite()`

Get the infinite value

 * **Returns:** The value of the infinite property.

##### `getCheckbox()`

Get the checkbox element

 * **Returns:** The checkbox element.

##### `getThead()`

Get the table header

 * **Returns:** The thead element.

##### `getTR()`

Create a new table row element and return it

 * **Returns:** The TR element.

##### `emptyTR()`

*Remove all child elements from the table row.*

 * **Returns:** The object itself.

##### `getTH()`

Get the table header element

 * **Returns:** The `getTH` method returns the `th` element.

##### `getTHCount()`

Get the number of TH elements in the table

 * **Returns:** The number of TH elements that are being displayed.

##### `findTH(name)`

Find a table header by name

 * **Parameters:** `name` — The name of the matrix.
 * **Returns:** The TH object that matches the name.

##### `emptyTH()`

Remove all the table header elements from the table

 * **Returns:** The object itself.

##### `build()`

Create a new `TH` for each column in the `optionStructure` array

 * **Returns:** The object itself.

##### `update()`

Update the table header

 * **Returns:** The Head object.

##### `handleEvent(event)`

If the event target has a class attribute that matches the handle class attribute, then execute the function that matches the event type

 * **Parameters:** `event` — The event object that was passed to the function.
 * **Returns:** The `Infinite` object.

#### ***Class window.Infinite.Head.TH usable methods***

##### `constructor(head, matrix)`

Create a new instance of the JavaScript class

 * **Parameters:**
   * `head` — The head of the matrix.
   * `matrix` — The matrix that contains the field.

##### `getHead()`

Get the head of the list

 * **Returns:** The head of the linked list.

##### `getMatrix()`

Get the matrix of the current state of the game

 * **Returns:** The matrix.

##### `getMatrixName()`

Get the name of the matrix

 * **Returns:** The name of the matrix.

##### `getMatrixType()`

Get the type of the matrix

 * **Returns:** The type of the matrix.

##### `getResize()`

Get the resize option

 * **Returns:** The resize option.

##### `getTH()`

Create a `th` element with the `inside` and `resize` elements as children

 * **Returns:** The `getTH()` method returns the `th` element.

##### `getInside()`

Create a div element with the class name "inside" and return it

 * **Returns:** The inside element.

##### `shouldPlugin()`

* If the matrix type is not a string, or is an empty string, return null. * Split the matrix type by the colon character. * Reverse the split array. * For each item in the reversed array, check if it contains the word "enum". * If it does, and the window object does not contain a function called "Dropdown", continue. * Otherwise, return "Dropdown". * Otherwise, return "Text"

 * **Returns:** The `shouldPlugin` function returns a string that is the name of the plugin that

     should be used for the current matrix type.

##### `setPlugin(name)`

* Sets the plugin for the infinite scroll

 * **Parameters:** `name` — The name of the plugin.
 * **Returns:** The instance of the plugin.

##### `getPlugin()`

Get the plugin object for the current session

 * **Returns:** The plugin object.

##### `removePlugin()`

Remove the plugin from the form

 * **Returns:** Nothing

##### `out()`

Get the HTML of the table header

 * **Returns:** The getTH method is being called.

#### ***Class window.Infinite.Head.TH.Resize usable methods***

##### `static limit()`

The JavaScript function `limit` returns the number 64.

 * **Returns:** The limit() function returns the number 64.

##### `constructor(th)`

The constructor function creates a new instance of the class and sets the instance's properties

 * **Parameters:** `th` — The element that will be the target of the event.

##### `getTH()`

Get the current thread's `this` object

 * **Returns:** The th element.

##### `getPrevious()`

Get the previous node in the linked list

 * **Returns:** The previous node.

##### `setPrevious(size)`

Set the previous size of the array

 * **Parameters:** `size` — The size of the buffer.
 * **Returns:** The object itself.

##### `getGadget()`

Get the gadget element if it exists, otherwise create it

 * **Returns:** The gadget icon.

##### `out()`

It returns the gadget.

 * **Returns:** The getGadget() method returns the value of the gadget property.

##### `handleEvent(event)`

* If the event type is a mouse down event, then call the mousedown function. * If the event type is a mouse move event, then call the resize function. * If the event type is a mouse up event, then call the mouseup function

 * **Parameters:** `event` — The event object that is passed to the function.

##### `resize(event)`

* When the user drags the mouse to the left, the width of the table header is reduced

 * **Parameters:** `event` — The event object that was passed to the callback.
 * **Returns:** Nothing

##### `mouseup()`

When the mouse button is released, stop listening for mousemove events

##### `mousedown(event)`

When the mouse button is pressed, set the previous position to the current position

 * **Parameters:** `event` — The event object that was passed to the callback.

#### ***Class window.Infinite.Head.Checkbox usable methods***

##### `static disabled()`

*This function returns a string that is the JavaScript disabled attribute.*

 * **Returns:** The string 'disabled'

##### `static icons()`

* Define the icons that will be used for the checkboxes

 * **Returns:** A dictionary of icons.

##### `constructor(head)`

Create a new JavaScript object with a single property, `head`, that is the head of a linked list

 * **Parameters:** `head` — The head of the linked list.

##### `getHead()`

Get the head of the list

 * **Returns:** The head of the linked list.

##### `getIcon()`

Create a new icon element and add it to the DOM

 * **Returns:** The icon element.

##### `setIcon(material)`

Set the icon of the material

 * **Parameters:** `material` — The material to set the icon to.
 * **Returns:** The object itself.

##### `getTH()`

Create a `th` element with an `input` element and an `i` element as its children

 * **Returns:** The `getTH()` method returns the `th` element.

##### `getInput()`

Create a checkbox and set it's name to "checkbox"

 * **Returns:** The input element.

##### `setInput(status)`

* Set the checked property of the input element to the value of the status parameter

 * **Parameters:** `status` — The status of the checkbox.
 * **Returns:** The `setInput` method returns the `Checkbox` instance.

##### `setDisabled(status)`

Set the disabled attribute of the input element and the disabled class of the icon

 * **Parameters:** `status` — Boolean
 * **Returns:** The current instance of the component.

##### `out()`

* Get the icon element from the table header. * If the icon element has no text, set the icon to the blank icon. * Return the table header

 * **Returns:** The `out()` method returns the `<th>` element.

##### `all(status, except)`

Set the status of all checkboxes in the table except the one passed in

 * **Parameters:**
   * `status` — The status of the checkbox.
   * `except` — The row to be excluded from the checkbox change.
 * **Returns:** The current instance of the class.

##### `click(event)`

* When the checkbox is clicked, the function will check all the other checkboxes in the same group

 * **Parameters:** `event` — The event object that was triggered.

##### `change()`

* When the checkbox is checked, the icon is set to the check icon. * When the checkbox is unchecked, the icon is set to the blank icon

#### ***Class window.Infinite.Preloader usable methods***

##### `constructor(infinite)`

Create a new instance of the InfiniteScroll class

 * **Parameters:** `infinite` — If true, the iterator will never terminate.

##### `getInfinite()`

Returns the value of the infinite property

 * **Returns:** The value of the infinite property.

##### `getPreloader()`

Create a new div element and set its class to "table-infinite-preloader"

 * **Returns:** The preloader div.

##### `getSpinner()`

Create a spinner element if it doesn't exist, and return it

 * **Returns:** The spinner element.

##### `showSpinner()`

Show a spinner on the page

 * **Returns:** The object itself.

##### `hideSpinner()`

Hide the spinner

 * **Returns:** The infinite scroll instance.

##### `show()`

Show the preloader

 * **Returns:** The object itself.

##### `hide()`

Hide the preloader

 * **Returns:** The object itself.

##### `status()`

Returns a boolean indicating whether the preloader is currently visible

 * **Returns:** The status() function returns a boolean value.

#### ***Class window.Infinite.Preloader.Scroll usable methods***

##### `constructor(infinite)`

Create a new instance of the InfiniteScroll class

 * **Parameters:** `infinite` — If true, the iterator will never terminate.

##### `getInfinite()`

Get the infinite value

 * **Returns:** The value of the infinite property.

##### `getLoader()`

*Get the loader element if it exists, otherwise create it.*

 * **Returns:** The loader element.

##### `getTD()`

Create a new `td` element and append a `Loader` element to it

 * **Returns:** The `getTD` method returns the `td` element.

##### `getTR()`

*Get the table row element for this cell.*

 * **Returns:** The tr element.

##### `getSpinner()`

Create a spinner element if it doesn't exist, and return it

 * **Returns:** The spinner element.

##### `show()`

Add a row to the grid

 * **Returns:** The object itself.

##### `hide()`

Hide the row from the table

 * **Returns:** The current instance of the class.

##### `status()`

Returns true if the table row is attached to the DOM

 * **Returns:** The status() method returns a boolean value.

##### `grid()`

*This function sets the colSpan attribute of the TD element to the number of columns in the grid.*

 * **Returns:** The object itself.

#### ***Class window.Infinite.Notice usable methods***

##### `static void()`

It returns a string.

 * **Returns:** The string 'developer\infinite\notice\empty'

##### `constructor(infinite)`

Create a new instance of the JavaScript class

 * **Parameters:** `infinite` — A boolean value that indicates whether the stream is infinite.

##### `getInfinite()`

Get the infinite value

 * **Returns:** The infinite property of the object.

##### `setTextEmpty(text)`

Set the text to be displayed when the list is empty

 * **Parameters:** `text` — The text to display when the input is empty.
 * **Returns:** The `setTextEmpty` method returns the `this` object.

##### `getTextEmpty()`

Get the text of the empty element

 * **Returns:** The empty string.

##### `getTR()`

Create a new table row element and append a table cell element to it

 * **Returns:** The tr element.

##### `getTD()`

Create a new `td` element and append the `notice` element to it

 * **Returns:** The TD element.

##### `getNotice()`

Create a div element with the class of "inside result error" and return it if it doesn't exist

 * **Returns:** The `getNotice()` method returns the `notice` element.

##### `setText(message)`

Set the text of the notice

 * **Parameters:** `message` — The message to display in the notice.
 * **Returns:** The object itself.

##### `show()`

Add a row to the grid

 * **Returns:** The object itself.

##### `hide()`

Hide the row from the table

 * **Returns:** The current instance of the class.

##### `status()`

Returns true if the table row is attached to the DOM

 * **Returns:** The status() method returns a boolean value.

##### `grid()`

*This function sets the colSpan attribute of the TD element to the number of columns in the grid.*

 * **Returns:** The object itself.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript
