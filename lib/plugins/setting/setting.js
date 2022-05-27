(function (window) {

	'use strict';

	class NotFound {

		/**
		 * *Returns* a string that represents the text to be displayed when a search returns no results
		 * @returns The string 'developer\infinite\search\not_found'
		 */

		static text() {
			return 'developer\\infinite\\search\\not_found';
		}

		/**
		 * The constructor function creates a new instance of the JavaScript class. 
		 * 
		 * The constructor function sets the text of the JavaScript class. 
		 * @param search - The search string to use to find the elements.
		 */

		constructor(search) {
			this.search = search;
			this.elements = {};

			this.setText(this.constructor.text());
		}

		/**
		 * Get the search value from the search input field
		 * @returns The search string.
		 */

		getSearch() {
			return this.search;
		}

		/**
		 * * If the `content` property exists, return it.
		 * * Otherwise, create a new `li` element with the `not-found` class.
		 * * Then, create a new `span` element and append it to the `li` element.
		 * * Finally, return the `li` element
		 * @returns The content of the list item.
		 */

		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let span = this.getText();
			this.elements.content = document.createElement('li');
			this.elements.content.className = 'not-found';
			this.elements.content.appendChild(span);
			return this.elements.content;
		}

		/**
		 * Create a span element if it doesn't already exist, and return it
		 * @returns The text of the question.
		 */

		getText() {
			if (this.elements.hasOwnProperty('span')) return this.elements.span;
			this.elements.span = document.createElement('span');
			return this.elements.span;
		}

		/**
		 * * Create a text node and append it to the span
		 * @param text - The text to be displayed in the span.
		 * @returns The object itself.
		 */

		setText(text) {
			let node = document.createTextNode(text), span = this.getText();
			span.innerText = '';
			span.appendChild(node);
			return this;
		}

		/**
		 * Returns the content of the current cell as a string
		 * @returns The getContent() method returns the content of the page.
		 */

		out() {
			return this.getContent();
		}
	}

	class Search {

		/**
		 * *Returns the icon name for the filter list icon.*
		 * @returns The icon function returns the string 'material-icons filter_list'
		 */

		static icon() {
			return 'material-icons filter_list';
		}

		/**
		 * *Returns a string that represents the placeholder text for the search box.*
		 * @returns The placeholder function returns a string.
		 */

		static placeholder() {
			return 'developer\\infinite\\search\\placeholder';
		}

		/**
		 * It creates a new instance of the NotFound class.
		 * @param setting - The setting object that this plugin is attached to.
		 */

		constructor(setting) {
			this.setting = setting;

			this.elements = {};
			this.elements.notfound = new window.Infinite.Plugin.Setting.Search.NotFound(this);
		}

		/**
		 * Get the setting from the database
		 * @returns The setting property of the getSetting function.
		 */

		getSetting() {
			return this.setting;
		}

		/**
		 * Get the not found element
		 * @returns The element with the ID of notfound.
		 */

		getNotFound() {
			return this.elements.notfound;
		}

		/**
		 * Create a div element with the class `field` and append the input element to it
		 * @returns The field element.
		 */

		getField() {
			if (this.elements.hasOwnProperty('field')) return this.elements.field;
			let input = this.getInput();
			this.elements.field = document.createElement('div');
			this.elements.field.className = 'field';
			this.elements.field.appendChild(input);
			return this.elements.field;
		}

		/**
		 * Create an input element, set its type to text, set its placeholder to the class's placeholder, and
		 * add an event listener for input
		 * @returns The input element.
		 */

		getInput() {
			if (this.elements.hasOwnProperty('input')) return this.elements.input;
			this.elements.input = document.createElement('input');
			this.elements.input.type = 'text';
			this.elements.input.setAttribute(Infinite.handle(), ':filter');
			this.elements.input.setAttribute('placeholder', this.constructor.placeholder());
			this.elements.input.addEventListener('input', this, false);
			return this.elements.input;
		}

		/**
		 * Create a div with a class of "search" and append an icon and a field to it
		 * @returns The search bar.
		 */

		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let filter = this.constructor.icon(), icon = Infinite.getIcon(filter), field = this.getField();
			this.elements.content = document.createElement('div');
			this.elements.content.className = 'search';
			this.elements.content.appendChild(icon);
			this.elements.content.appendChild(field);
			return this.elements.content;
		}

		/**
		 * Returns the content of the current cell as a string
		 * @returns The getContent() method is being called and the return value is being passed to the out()
		 * method.
		 */

		out() {
			return this.getContent();
		}

		/**
		 * * For each attribute in the `handle` attribute, split the attribute into a type and a function
		 * name.
		 * * If the type matches the event type, or if the type is empty, then execute the function
		 * @param event - The event object that was passed to the function.
		 * @returns The `Infinite` class.
		 */

		handleEvent(event) {
			let attribute = Infinite.closestAttribute(event.target, Infinite.handle());
			if (attribute === null) return;

			let attribute_split = attribute.split(/\s+/);
			for (let item = 0; item < attribute_split.length; item++) {
				let execute = attribute_split[item].split(String.fromCharCode(58));
				if (execute.length !== 2) break;
				if (execute[0] === event.type || 0 === execute[0].length) {
					if (typeof this[execute[1]] !== 'function') continue;

					this[execute[1]].call(this, event);
				}
			}
		}

		/**
		 * * Filter the list of items in the dropdown
		 */

		filter() {
			let notfound = this.getNotFound().out(), setting = this.getSetting();
			Infinite.removeElementDOM(notfound);

			let value = this.getInput().value.toLowerCase(), ul = setting.getUL(), li = ul.getLI();
			for (let item = 0; item < li.length; item++) li[item].out().classList.remove('hide');

			let hide = 0;
			for (let item = 0; item < li.length; item++) {
				if (li[item].getLabel().innerText.toLowerCase().indexOf(value) !== -1) continue;

				li[item].out().classList.add('hide');
				++hide;
			}

			if (hide === li.length) ul.getUL().appendChild(notfound);
		}
	}

	class CheckboxOrder {

		/**
		 * The function returns a dictionary of icons
		 * @returns The icons object is being returned.
		 */

		static icons() {
			return {
				check: 'arrow_drop_up',
				blank: 'arrow_drop_down'
			};
		}

		/**
		 * The constructor function creates a new object and assigns it to the variable `this`.
		 * @param li - The list item that contains the button.
		 */

		constructor(li) {
			this.li = li;
			this.elements = {};
		}

		/**
		 * Returns the list item element that contains the current node
		 * @returns The li element.
		 */

		getLI() {
			return this.li;
		}

		/**
		 * Create an icon element and add it to the DOM
		 * @returns The icon element.
		 */

		getIcon() {
			if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
			this.elements.icon = document.createElement('i');
			this.elements.icon.className = 'material-icons';
			this.elements.icon.setAttribute(Infinite.handle(), ':click');
			this.elements.icon.addEventListener('click', this, false);
			return this.elements.icon;
		}

		/**
		 * Set the icon of the material
		 * @param material - The material to set the icon to.
		 * @returns The object itself.
		 */

		setIcon(material) {
			let text = document.createTextNode(material), icon = this.getIcon();
			icon.innerText = '';
			icon.appendChild(text);
			return this;
		}

		/**
		 * Create an input element, set its type to checkbox, and add a change event listener
		 * @returns The input element.
		 */

		getInput() {
			if (this.elements.hasOwnProperty('input')) return this.elements.input;
			this.elements.input = document.createElement('input');
			this.elements.input.type = 'checkbox';
			this.elements.input.setAttribute(Infinite.handle(), ':change');
			this.elements.input.addEventListener('change', this, false);
			return this.elements.input;
		}

		/**
		 * Set the checked state of the input element
		 * @param checked - Boolean
		 * @returns The object itself.
		 */

		setInput(checked) {
			let input = this.getInput(), trigger = new Event('change', {
				'cancelable': false,
				'bubbles': true
			});

			input.checked = checked;
			input.dispatchEvent(trigger);

			return this;
		}

		/**
		 * * For each attribute in the `handle` attribute, split the attribute into a type and a function
		 * name.
		 * * If the type matches the event type, or if the type is empty, then execute the function
		 * @param event - The event object that was passed to the function.
		 * @returns Nothing.
		 */

		handleEvent(event) {
			let attribute = Infinite.closestAttribute(event.target, Infinite.handle());
			if (attribute === null) return;

			let attribute_split = attribute.split(/\s+/);
			for (let item = 0; item < attribute_split.length; item++) {
				let execute = attribute_split[item].split(String.fromCharCode(58));
				if (execute.length !== 2) break;
				if (execute[0] === event.type || 0 === execute[0].length) {
					if (typeof this[execute[1]] !== 'function') continue;

					this[execute[1]].call(this, event);
				}
			}
		}

		/**
		 * * When the user clicks on the checkbox, the checkbox is toggled and the setting is updated
		 */

		click() {
			let input = this.getInput(), checked = input.checked === false;
			this.setInput(checked);
			this.getLI().getUL().getSetting().request();
		}

		/**
		 * When the checkbox is checked, the icon is set to the check icon. When the checkbox is unchecked, the icon is set to the blank icon
		 */

		change() {
			let input = this.getInput(), icons = this.constructor.icons(), icon = input.checked === true ? icons.check : icons.blank;
			this.setIcon(icon);
		}
	}

	class CheckboxVisibility extends CheckboxOrder {

		/**
		 * The function returns a dictionary of icons
		 * @returns The icons object is being returned.
		 */

		static icons() {
			return {
				check: 'visibility',
				blank: 'visibility_off'
			};
		}
	}

	class Li {

		/**
		 * It returns a string.
		 * @returns The data-item-id is being returned.
		 */

		static data() {
			return 'data-item-id';
		}

		/**
		 * *Returns the CSS class for the drag handle icon.*
		 * @returns The string 'material-icons drag_handle'
		 */

		static drag() {
			return 'material-icons drag_handle';
		}

		/**
		 * Create a new instance of the plugin
		 * @param ul - The ul element that this li element is a child of.
		 * @param matrix - A JSON object containing the following properties:
		 */

		constructor(ul, matrix) {
			this.ul = ul;
			this.elements = {};
			this.elements.order = new window.Infinite.Plugin.Setting.Ul.Li.CheckboxOrder(this);
			this.elements.visibility = new window.Infinite.Plugin.Setting.Ul.Li.CheckboxVisibility(this);

			let order = !matrix.hasOwnProperty('order') || matrix.order === false, visibility = !matrix.hasOwnProperty('visibility') || matrix.visibility === false;

			this.getVisibility().setInput(!visibility);
			this.getOrder().setInput(!order);

			if (matrix.hasOwnProperty('name')) this.getLI().setAttribute(this.constructor.data(), matrix.name);
			if (matrix.hasOwnProperty('text')) this.setLabel(matrix.text);
		}

		/**
		 * Returns the unordered list element
		 * @returns The ul element.
		 */

		getUL() {
			return this.ul;
		}

		/**
		 * Get the order of the current element
		 * @returns The order of the elements in the array.
		 */
		
		getOrder() {
			return this.elements.order;
		}

		/**
		 * Get the visibility of the element
		 * @returns The visibility of the element.
		 */
		
		getVisibility() {
			return this.elements.visibility;
		}

		/**
		 * Get the drag icon for the option
		 * @returns The drag handle.
		 */
		
		getDrag() {
			if (this.elements.hasOwnProperty('drag')) return this.elements.drag;
			let icon = Infinite.getIcon(this.constructor.drag());
			this.elements.drag = document.createElement('div');
			this.elements.drag.className = 'option handle';
			this.elements.drag.appendChild(icon);
			return this.elements.drag;
		}

		/**
		 * Create a div element with the class name "option" and append the order and visibility icons to it
		 * @returns The `getOption()` method returns the `option` element.
		 */
		
		getOption() {
			if (this.elements.hasOwnProperty('option')) return this.elements.option;
			let order = this.getOrder().getIcon(), visibility = this.getVisibility().getIcon();
			this.elements.option = document.createElement('div');
			this.elements.option.className = 'option right';
			this.elements.option.appendChild(order);
			this.elements.option.appendChild(visibility);
			return this.elements.option;
		}

		/**
		 * Create a label element if it doesn't already exist
		 * @returns The label element.
		 */
		
		getLabel() {
			if (this.elements.hasOwnProperty('label')) return this.elements.label;
			this.elements.label = document.createElement('label');
			return this.elements.label;
		}

		/**
		 * Create a text node and append it to the label
		 * @param text - The text to be displayed in the label.
		 * @returns The object itself.
		 */
		
		setLabel(text) {
			let node = document.createTextNode(text), label = this.getLabel();
			label.innerText = '';
			label.appendChild(node);
			return this;
		}

		/**
		 * Create a new list item element and add the draggable element, the label, and the options to it
		 * @returns The li element.
		 */
		
		getLI() {
			if (this.elements.hasOwnProperty('li')) return this.elements.li;
			let drag = this.getDrag(), label = this.getLabel(), options = this.getOption();
			this.elements.li = document.createElement('li');
			this.elements.li.className = 'active';
			this.elements.li.appendChild(drag);
			this.elements.li.appendChild(label);
			this.elements.li.appendChild(options);
			return this.elements.li;
		}

		/**
		 * Return the HTML for the list item
		 * @returns The getLI() function is being called and the return value is being passed to the out()
		 * function.
		 */
		
		out() {
			return this.getLI();
		}
	}

	class Ul {

		/**
		 * Create a new instance of the Sortable class
		 * @param setting - The setting object that is used to store the data.
		 */
		
		constructor(setting) {
			this.setting = setting;

			this.elements = {};
			this.elements.li = [];

			this.sortable = null;

			if (typeof window.Sortable === 'function') {
				let ul = this.getUL();
				this.sortable = new Sortable.create(ul, {
					animation: 150,
					ghostClass: 'ghost',
					handle: '.handle',
					reference: this,
					dataIdAttr: window.Infinite.Plugin.Setting.Ul.Li.data(),
					onEnd: function () {
						this.options.reference.getSetting().request();
					}
				});
			}
		}

		/**
		 * Get the setting from the database
		 * @returns The setting property of the getSetting function.
		 */
		
		getSetting() {
			return this.setting;
		}

		/**
		 * Returns the sortable object
		 * @returns The sortable property.
		 */
		
		getSortable() {
			return this.sortable;
		}

		/**
		 * Get the content element of the list
		 * @returns The content div.
		 */
		
		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let ul = this.getUL();
			this.elements.content = document.createElement('div');
			this.elements.content.className = 'list';
			this.elements.content.appendChild(ul);
			return this.elements.content;
		}

		/**
		 * Create a new <ul> element and return it
		 * @returns The ul element.
		 */
		
		getUL() {
			if (this.elements.hasOwnProperty('ul')) return this.elements.ul;
			this.elements.ul = document.createElement('ul');
			return this.elements.ul;
		}

		/**
		 * Get the list item element
		 * @returns The li element.
		 */
		
		getLI() {
			return this.elements.li;
		}

		/**
		 * Find the list item with the specified name
		 * @param name - The name of the data attribute to look for.
		 * @returns The li element that has the data attribute set to the name of the plugin.
		 */
		
		findLI(name) {
			let li = this.getLI();
			for (let item = 0; item < li.length; item++) {
				let data = li[item].out().getAttribute(window.Infinite.Plugin.Setting.Ul.Li.data());
				if (data === null
					|| data !== name) continue;

				return li[item];
			}

			return null;
		}

		/**
		 * Add a new list item to the list
		 * @param structure - The structure of the list item.
		 * @returns The object itself.
		 */
		
		addLI(structure) {
			let li = new window.Infinite.Plugin.Setting.Ul.Li(this, structure);
			this.elements.li.push(li);
			this.getUL().appendChild(li.out());
			return this;
		}

		/**
		 * Reset the list by removing all the items from the list
		 * @returns The object itself.
		 */
		
		reset() {
			if (this.elements.li.length === 0) return this;
			for (let item = 0; item < this.elements.li.length; item++) Infinite.removeElementDOM(this.elements.li[item].out());
			this.elements.li = [];
			return this;
		}

		/**
		 * Update the list of options
		 * @returns The object itself.
		 */
		
		update() {
			let infinite = this.getSetting().getInfinite();
			let structure = infinite.getOptionStructure(), setting = infinite.getOptionSetting();
			if (structure === null
				|| setting === null) return this;

			this.reset();

			let map = {};

			for (let item = 0; item < setting.length; item++) {
				map[setting[item].name] = setting[item];
				map[setting[item].name].visibility = true;
			}

			for (let item = 0; item < structure.length; item++) {
				if (!map.hasOwnProperty(structure[item].name)) map[structure[item].name] = {};
				map[structure[item].name] = Object.assign(map[structure[item].name], structure[item]);
			}

			for (let item in map) this.addLI(map[item]);

			return this;
		}

		/**
		 * Get the content of the current cell
		 * @returns The getContent() method returns the content of the page.
		 */
		
		out() {
			return this.getContent();
		}
	}

	class Notice {

		/**
		 * *This function returns a string.*
		 * @returns The string 'Click here to try again now!'
		 */
		
		static retry() {
			return 'Click here to try again now!';
		}

		/**
		 * The constructor function creates an object that has a setting property and an elements property
		 * @param setting - The setting object that is passed to the constructor.
		 */
		
		constructor(setting) {
			this.setting = setting;
			this.elements = {};
		}

		/**
		 * Get the setting from the database
		 * @returns The setting property of the getSetting function.
		 */
		
		getSetting() {
			return this.setting;
		}

		/**
		 * Create a div element with the class `notice error` and append the message and reload button to it it it doesn't exist
		 * @returns The content of the error notice.
		 */
		
		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let message = this.getMessage(), reload = this.getReload();
			this.elements.content = document.createElement('div');
			this.elements.content.className = 'notice error';
			this.elements.content.appendChild(message);
			this.elements.content.appendChild(reload);
			return this.elements.content;
		}

		/**
		 * Create a new element called message if it doesn't already exist, and return it
		 * @returns The message element.
		 */
		
		getMessage() {
			if (this.elements.hasOwnProperty('message')) return this.elements.message;
			this.elements.message = document.createElement('span');
			return this.elements.message;
		}

		/**
		 * * Create a text node from the message argument, and append it to the message element
		 * @param message - The message to display in the notification.
		 * @returns The object itself.
		 */
		
		setMessage(message) {
			let node = document.createTextNode(message);
			let new_message = this.getMessage();
			new_message.innerText = '';
			new_message.appendChild(node);
			return this;
		}

		/**
		 * Get the reload button if it exists, otherwise create it
		 * @returns The reload button.
		 */
		
		getReload() {
			if (this.elements.hasOwnProperty('reload')) return this.elements.reload;
			let setting = this.getSetting(), icon = Infinite.getIcon('material-icons loop'), node = document.createTextNode(this.constructor.retry());
			this.elements.reload = document.createElement('a');
			this.elements.reload.appendChild(node);
			this.elements.reload.setAttribute(Infinite.handle(), ':request');
			this.elements.reload.addEventListener('click', setting, false);
			this.elements.reload.appendChild(icon);
			return this.elements.reload;
		}

		/**
		 * Inserts the content of the setting into the list
		 * @returns The object itself.
		 */
		
		show() {
			let content = this.getContent(), list = this.getSetting().getUL().getContent();
			list.insertBefore(content, list.firstChild);
			return this;
		}

		/**
		 * Hide the content of the element
		 * @returns The object itself.
		 */
		
		hide() {
			let content = this.getContent();
			Infinite.removeElementDOM(content);
			return this;
		}
	}

	class Setting {

		/**
		 * Returns the value of the field
		 * @returns The value of the field.
		 */
		
		static field() {
			return 'value';
		}

		/**
		 * It creates a new instance of the class.
		 * @param infinite - The infinite object that is calling the plugin.
		 */
		
		constructor(infinite) {
			this.infinite = infinite;

			this.elements = {};
			this.elements.ul = new window.Infinite.Plugin.Setting.Ul(this);
			this.elements.search = new window.Infinite.Plugin.Setting.Search(this);
			this.elements.notice = new window.Infinite.Plugin.Setting.Notice(this);

			this.xhr = {
				url: null,
				hardcode: {},
				construct: new XMLHttpRequest()
			};

			this.xhr.construct.onreadystatechange = this.result.bind(this);
		}

		/**
		 * Get the infinite value
		 * @returns The value of the infinite property.
		 */
		
		getInfinite() {
			return this.infinite;
		}

		/**
		 * Get the unordered list element
		 * @returns The ul element.
		 */
		
		getUL() {
			return this.elements.ul;
		}

		/**
		 * Get the search element
		 * @returns The search element.
		 */
		
		getSearch() {
			return this.elements.search;
		}

		/**
		 * Get the notice element
		 * @returns The getNotice() method returns the notice element.
		 */
		
		getNotice() {
			return this.elements.notice;
		}

		/**
		 * Returns the XHR object
		 * @returns The XHR object.
		 */
		
		getXHR() {
			return this.xhr.construct;
		}

		/**
		 * Set the URL of the request
		 * @param url - The URL to send the request to.
		 * @returns The XHR object.
		 */
		
		setRequestUrl(url) {
			this.xhr.url = url;
			return this;
		}

		/**
		 * Get the URL of the request
		 * @returns The URL of the request.
		 */
		
		getRequestUrl() {
			return this.xhr.url;
		}

		/**
		 * Set a hardcoded value for a key
		 * @param key - The name of the parameter.
		 * @param value - The value to set.
		 * @returns The object itself.
		 */
		
		setHardcode(key, value) {
			this.xhr.hardcode[key] = value;
			return this;
		}

		/**
		 * Get the hardcode value from the xhr object
		 * @returns The hardcode property of the XHR object.
		 */
		
		getHardcode() {
			return this.xhr.hardcode;
		}

		/**
		 * Get the content of the settings page
		 * @returns The content of the settings page.
		 */
		
		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let list = this.getUL().out(), search = this.getSearch().out();
			this.elements.content = document.createElement('div');
			this.elements.content.id = 'setting';
			this.elements.content.appendChild(search);
			this.elements.content.appendChild(list);
			return this.elements.content;
		}

		/**
		 * This function returns the HTML for the list
		 * @returns The content of the list.
		 */
		
		out() {
			this.getUL().update();
			return this.getContent();
		}

		/**
		 * * For each attribute in the `handle` array, split the attribute into a string array of the form
		 * `[event_type, function_name]`.
		 * * For each event type in the `handle` array, check if the event type is equal to the event type of
		 * the event.
		 * * If the event type is equal to the event type of the event, check if the function name is equal
		 * to the function name of the event.
		 * * If the function name is equal to the function name of the event, execute the function
		 * @param event - The event object that was passed to the function.
		 * @returns The `Infinite` object.
		 */
		
		handleEvent(event) {
			let attribute = Infinite.closestAttribute(event.target, Infinite.handle());
			if (attribute === null) return;

			let attribute_split = attribute.split(/\s+/);
			for (let item = 0; item < attribute_split.length; item++) {
				let execute = attribute_split[item].split(String.fromCharCode(58));
				if (execute.length !== 2) break;
				if (execute[0] === event.type || 0 === execute[0].length) {
					if (typeof this[execute[1]] !== 'function') continue;

					this[execute[1]].call(this, event);
				}
			}
		}

		/**
		 * Send a POST request to the server to update the order of the items in the list
		 * @returns Nothing.
		 */
		
		request() {
			this.getNotice().hide();

			let infinite = this.getInfinite(), xhr = this.getXHR(), url = this.getRequestUrl();
			xhr.open('POST', url, !0);

			let ul = this.getUL(), sortable = ul.getSortable();
			if (sortable === null) return;

			let data = new FormData(), hardcode = this.getHardcode();
			for (let item in hardcode) data.append(item, hardcode[item]);

			let list = sortable.toArray(), setting = [];

			for (let item = 0; item < list.length; item++) {
				let li = ul.findLI(list[item]);
				if (li === null) continue;

				let visibility = li.getVisibility().getInput().checked;
				if (visibility !== true) continue;

				let order = li.getOrder().getInput().checked === false ? 0 : 1;

				data.append(this.constructor.field() + '[' + item + '][name]', list[item]);
				data.append(this.constructor.field() + '[' + item + '][order]', order);

				setting.push({
					name: list[item],
					order: order
				});
			}

			let preloader = infinite.getPreloader();
			if (preloader !== null) preloader.show().showSpinner();

			xhr.send(data);

			infinite.setOptionSetting(setting);
		}

		/**
		 * The JavaScript function `result()` is called when the XMLHttpRequest is done
		 * @returns Nothing.
		 */
		
		result() {
			let xhr = this.getXHR();

			if (XMLHttpRequest.DONE !== xhr.readyState
				|| 200 !== xhr.status) return;

			let preloader = this.getInfinite().getPreloader();
			if (preloader !== null) preloader.hide();

			let json;
			try {
				json = JSON.parse(xhr.responseText);
			}
			catch (message) {
				json = {
					'status': false,
					'notice': message
				};
			}

			if (json.status === true) return;

			let message = json.hasOwnProperty('notice') ? json.notice : 'Unmanaged error';
			this.getNotice().setMessage(message).show();
		}
	}

	window.Infinite.Plugin.Setting = Setting;
	window.Infinite.Plugin.Setting.Search = Search;
	window.Infinite.Plugin.Setting.Search.NotFound = NotFound;
	window.Infinite.Plugin.Setting.Notice = Notice;
	window.Infinite.Plugin.Setting.Ul = Ul;
	window.Infinite.Plugin.Setting.Ul.Li = Li;
	window.Infinite.Plugin.Setting.Ul.Li.CheckboxOrder = CheckboxOrder;
	window.Infinite.Plugin.Setting.Ul.Li.CheckboxVisibility = CheckboxVisibility;

})(window);
