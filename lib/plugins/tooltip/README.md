# Documentation widget-infinite

Widget Javascript Infinite is a library used to create an infinite scoll list in your web page.

## Structure

library:
- [window.Infinite.Plugin.Tooltip](https://github.com/energia-source/widget-infinite/tree/main/lib/plugins/dropdown#class-windowinfiniteplugintooltip-usable-methods)

<br>

#### ***Class window.Infinite.Plugin.Tooltip usable methods***

##### `static handle()`

It returns a string.

 * **Returns:** The `handle` method returns the string `data-handle-event`.

##### `static id()`

*Create a unique ID for the tooltip container.*

 * **Returns:** The `id` function returns the string `'infinite-tooltip-container'`.

##### `static attribute()`

*The attribute() function returns the data-tooltip-infinite attribute.*

 * **Returns:** The `static attribute()` method returns the string `'data-tooltip-infinite'`.

##### `constructor()`

Create a JavaScript object that will contain the tooltip elements

##### `setText(text)`

Set the text of the icon

 * **Parameters:** `text` — The text to be displayed in the icon.
 * **Returns:** The object itself.

##### `setWidth(width)`

Set the width of the chart

 * **Parameters:** `width` — The width of the chart.
 * **Returns:** The `setWidth` method returns the `this` object.

##### `getWidth()`

Get the width of the chart

 * **Returns:** The width of the chart.

##### `getIcon()`

Create an icon element, add it to the DOM, and add the necessary event listeners

 * **Returns:** The icon element.

##### `getTooltip()`

Get the tooltip element if it exists, otherwise create it

 * **Returns:** The tooltip element.

##### `show(ev)`

This function is used to create a tooltip.

 * **Parameters:** `ev` — The event object.

##### `hide()`

Hide the tooltip

##### `handleEvent(event)`

If the event target has the attribute we're looking for, execute the function

 * **Parameters:** `event` — The event object that was passed to the handler.
 * **Returns:** The `handleEvent` method is being returned.

##### `static closestAttribute(target, attribute, html)`

Find the closest attribute to the target element

 * **Parameters:**
   * `target` — The element to search for the attribute.
   * `attribute` — The attribute to search for.
   * `html` — If true, the attribute is searched for in the HTML code of the page.
 * **Returns:** The closest attribute to the target element.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript
