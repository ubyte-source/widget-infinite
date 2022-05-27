(function (window) {

    'use strict';

    class Handler {

        /**
         * The constructor function creates an object that has a property called plugin. 
         * This property holds a reference to the plugin object that created the object. 
         * The object also has a property called elements. 
         * This property holds an empty object. 
         * 
         * The constructor function is called when you create an instance of the object. 
         * For example, the following code creates an instance of the object:
         * @param plugin - The plugin object that is calling the constructor.
         */

        constructor(plugin) {
            this.plugin = plugin;
            this.elements = {};
        }

        /**
         * Get the plugin object for the current session
         * @returns The plugin object.
         */

        getPlugin() {
            return this.plugin;
        }

        /**
         * Create the content of the dropdown
         * @returns The content of the dropdown.
         */

        getContent() {
            if (this.elements.hasOwnProperty('content')) return this.elements.content;
            let label = this.getLabel(), action = this.getAction();
            this.elements.content = document.createElement('p');
            this.elements.content.className = 'dropdown';
            this.elements.content.setAttribute(Infinite.handle(), ':open');
            this.elements.content.addEventListener('click', this.getPlugin(), false);
            this.elements.content.appendChild(label);
            this.elements.content.appendChild(action);
            return this.elements.content;
        }

        /**
         * Create a div element with the class `action` and append an icon to it
         * @returns The action element.
         */

        getAction() {
            if (this.elements.hasOwnProperty('action')) return this.elements.action;
            let icon = Infinite.getIcon('material-icons expand_more');
            this.elements.action = document.createElement('div');
            this.elements.action.className = 'action';
            this.elements.action.appendChild(icon);
            return this.elements.action;
        }

        /**
         * * Set the icon of the button
         * @param clonable - The element to clone.
         * @returns The `setIcon` method returns the `this` object.
         */

        setIcon(clonable) {
            let content = this.getContent();

            this.removeIcon();
            this.elements.icon = clonable.cloneNode(true);

            content.classList.add('icon');
            content.insertBefore(this.elements.icon, content.firstChild);

            return this;
        }

        /**
         * Get the icon element from the elements object
         * @returns The icon property of the elements object.
         */
        
        getIcon() {
            if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
            return null;
        }

        /**
         * Remove the icon from the content
         * @returns The `Infinite` instance.
         */
        
        removeIcon() {
            let icon = this.getIcon();
            if (icon === null) return this;

            Infinite.removeElementDOM(icon);
            this.getContent().classList.remove('icon');

            delete this.elements.icon;

            return this;
        }

        /**
         * Set the label of the button
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
         * Create a label element if it doesn't exist, and return it
         * @returns The label element.
         */
        
        getLabel() {
            if (this.elements.hasOwnProperty('label')) return this.elements.label;
            this.elements.label = document.createElement('b');
            this.elements.label.className = 'label';
            return this.elements.label;
        }

        /**
         * Remove all child elements from the label
         * @returns The question object.
         */
        
        cleanLabel() {
            let label = this.getLabel();
            while (label.firstChild) Infinite.removeElementDOM(label.lastChild);
            return this;
        }

        /**
         * Create a new input element and set its type to text
         * @returns The search input element.
         */
        
        getSearch() {
            if (this.elements.hasOwnProperty('search')) return this.elements.search;
            this.elements.search = document.createElement('input');
            this.elements.search.type = 'text';
            this.elements.search.setAttribute(Infinite.handle(), 'input:find');
            this.elements.search.addEventListener('input', this.getPlugin(), false);
            return this.elements.search;
        }

        /**
         * *Show the search box on the label.*
         * @returns The current instance of the object.
         */
        
        showSearch() {
            let search = this.getSearch();
            this.cleanLabel().getLabel().appendChild(search);
            return this;
        }

        /**
         * Hide the search bar
         * @returns The object itself.
         */
        
        hideSearch() {
            let search = this.getSearch();
            Infinite.removeElementDOM(search);
            return this;
        }
    }

    class Icon {

        /**
         * It returns the default value for the icon class.
         * @returns The `default` function returns a string.
         */
        
        static default() {
            return 'material-icons filter_list';
        }

        /**
         * Create a new JavaScript object that contains a reference to the HTML list element
         * @param li - The list item that contains the button.
         */
        
        constructor(li) {
            this.li = li;
            this.elements = {};
        }

        /**
         * Get the list item element for this menu item
         * @returns The li element.
         */
        
        getLI() {
            return this.li;
        }

        /**
         * Get the icon element from the elements object, or create a new icon element if it doesn't
         * exist
         * @returns The icon property is being returned.
         */
        
        get() {
            if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
            let icon = this.constructor.default();
            this.set(icon);
            return this.elements.icon;
        }

        /**
         * Set the icon for the button
         * @param icon - The icon to use.
         * @returns The object itself.
         */
        
        set(icon) {
            this.elements.icon = Infinite.getIcon(icon);
            return this;
        }

        /**
         * *Inserts the icon before the first child of the list item.*         * # 
         * #
         * @returns The `Icon` object.
         */
        
        show() {
            let wrapper = this.getLI().getWrapper(), icon = this.get();
            wrapper.insertBefore(icon, wrapper.firstChild);
            return this;
        }

        /**
         * Hide the icon
         * @returns The object itself.
         */
        
        hide() {
            let icon = this.get();
            Infinite.removeElementDOM(icon);
            return this;
        }

        /**
         * Returns true if the element is attached to the DOM
         * @returns The status() method returns a boolean value.
         */
        
        status() {
            return this.get().parentNode !== null;
        }

        /**
         * Get the value of the current node
         * @returns The value of the `get` method.
         */
        
        out() {
            return this.get();
        }
    }

    class Li {

        /**
         * *This function returns the value of the attribute that will be used to identify the list
         * item that is currently selected.*
         * @returns The data-infinite-dropdown-li-value attribute is being returned.
         */
        
        static data() {
            return 'data-infinite-dropdown-li-value';
        }

        /**
         * Creates a new instance of the Dropdown.Li class
         * @param plugin - The plugin that this dropdown belongs to.
         * @param id - The id of the dropdown.
         * @param text - The text to display in the dropdown.
         * @param icon - The icon to use for the dropdown.
         */
        
        constructor(plugin, id, text, icon) {
            this.plugin = plugin;

            this.elements = {};
            this.elements.icon = new window.Infinite.Plugin.Dropdown.Li.Icon(this);

            this.options = {};
            this.options.id = id.toString();

            if (typeof icon === 'string') this.getIcon().set(icon);

            let node = document.createTextNode(text), label = this.getLabel();
            label.innerText = '';
            label.appendChild(node);
        }

        /**
         * Get the plugin object for the current session
         * @returns The plugin object.
         */
        
        getPlugin() {
            return this.plugin;
        }

        /**
         * Get the ID of the element
         * @returns The id of the element.
         */
        
        getID() {
            return this.options.id;
        }

        /**
         * Get the icon element from the DOM
         * @returns The icon element.
         */
        
        getIcon() {
            return this.elements.icon;
        }

        /**
         * Create a label element if it doesn't exist, and return it
         * @returns The label element.
         */
        
        getLabel() {
            if (this.elements.hasOwnProperty('label')) return this.elements.label;
            this.elements.label = document.createElement('span');
            return this.elements.label;
        }

        /**
         * Create a wrapper element for the label element
         * @returns The wrapper element.
         */
        
        getWrapper() {
            if (this.elements.hasOwnProperty('wrapper')) return this.elements.wrapper;
            let label = this.getLabel();
            this.elements.wrapper = document.createElement('div');
            this.elements.wrapper.className = 'wrapper ellipsis';
            this.elements.wrapper.appendChild(label);
            return this.elements.wrapper;
        }

        /**
         * Create a new list item element and set its ID and data attributes
         * @returns The li element.
         */
        
        getLI() {
            if (this.elements.hasOwnProperty('li')) return this.elements.li;
            let wrapper = this.getWrapper();
            this.elements.li = document.createElement('li');
            this.elements.li.setAttribute(this.constructor.data(), this.getID());
            this.elements.li.setAttribute(Infinite.handle(), ':select');
            this.elements.li.addEventListener('click', this, false);
            this.elements.li.appendChild(wrapper);
            return this.elements.li;
        }

        /**
         * Return the HTML for the list item
         * @returns The getLI() method is being called.
         */
        
        out() {
            return this.getLI();
        }
    }

    class Dropdown extends Infinite.Plugin {

        /**
         * *Returns the text of the dropdown list pattern.*
         * @returns The `text()` method returns the text of the dropdown list.
         */
        
        static text() {
            return 'developer\\infinite\\dropdown\\pattern\\list\\text';
        }

        /**
         * It returns a string that is a hexadecimal representation of the MD5 hash of the string
         * 'd64bc1eb577b062fa13ed20ddbc130f3'.
         * @returns The string 'd64bc1eb577b062fa13ed20ddbc130f3'
         */
        
        static void() {
            return 'd64bc1eb577b062fa13ed20ddbc130f3';
        }

        /**
         * * If the search box is empty, return the string 'material-icons search'.
         * * If the search box is not empty, return the string 'material-icons close'
         * @returns The `found()` function returns the string `'material-icons search'`.
         */
        
        static found() {
            return 'material-icons search';
        }

        /**
         * Create the dropdown's input element, and append it to the content element
         * @param th - The instance of the TableHandler class.
         * @returns The `this` object.
         */
        
        constructor(th) {
            super(th);

            this.elements.handler = new window.Infinite.Plugin.Dropdown.Handler(this);

            this.options = {
                limit: 8,
                // void: Li
            };

            this.elements.input = document.createElement('input');
            this.elements.input.name = this.getTH().getMatrixName();
            this.elements.input.type = 'hidden';
            this.elements.input.setAttribute(Infinite.handle(), ':filter');
            this.elements.input.addEventListener('change', this.getTH().getHead(), false);

            if (this.elements.input.parentNode === null) this.getHandler().getContent().appendChild(this.elements.input);

            let matrix = this.getTH().getMatrix(), text = matrix.hasOwnProperty('text') ? matrix.text : Infinite.Plugin.Text.void(), option = this.constructor.void();

            this.options.void = new window.Infinite.Plugin.Dropdown.Li(this, option, text);

            if (matrix.hasOwnProperty('patterns') && matrix.patterns.hasOwnProperty(0)) {
                let patterns = this.getMatrixPatterns();
                this.populateUl(patterns);
            }

            if (typeof matrix.handling !== 'function') matrix.handling = (function (value) {
                let li = this.findLi(value), result = document.createElement('div');
                result.className = 'result';

                if (li === null) {
                    let text = Infinite.Plugin.Text.void(), node = document.createTextNode(text);
                    result.appendChild(node);
                    result.classList.add('null');
                    return result;
                }

                let icon = li.getIcon(), element = icon.get().cloneNode(true);
                if (icon.status()) result.appendChild(element);

                let label = li.getLabel(), node = document.createTextNode(label.innerText);
                result.appendChild(node);
                return result;
            });

            if (typeof matrix.handling === 'function') matrix.handling = matrix.handling.bind(this);
        }

        /**
         * Get the current thread's `this` value
         * @returns The th element.
         */
        
        getTH() {
            return this.th;
        }

        /**
         * Get the handler element from the DOM
         * @returns The handler element.
         */
        
        getHandler() {
            return this.elements.handler;
        }

        /**
         * Get the patterns from the matrix
         * @returns The patterns are being returned as an array of arrays.
         */
        
        getMatrixPatterns() {
            let matrix = this.getTH().getMatrix();
            if (matrix === null
                || !matrix.hasOwnProperty('patterns')
                || !Array.isArray(matrix.patterns)) return null;

            let patterns = matrix.patterns.map(function (item) {
                return item.associative;
            });
            return this.getMatrixPatternsNormalize(patterns);
        }

        /**
         * *Normalizes the matrix patterns to a single object.*
         * 
         * The above function is used to normalize the matrix patterns to a single object
         * @param value - The value to be normalized.
         * @returns The result is a dictionary of the form:
         * ```
         * {
         *     "columns": [
         *         {
         *             "name": "column_name",
         *             "type": "column_type",
         *             "length": column_length,
         *             "precision": column_precision,
         *             "scale": column_scale,
         */
        
        getMatrixPatternsNormalize(value) {
            if (!Array.isArray(value)) return value;
            let result = {};
            for (let item = 0; item < value.length; item++) for (let x in value[item]) result[x] = Object.assign({}, value[item][x]);
            return result;
        }

        /**
         * Set the limit for the number of rows to return
         * @param limit - The number of rows to return.
         * @returns The `setOptionLimit` function returns the `this` object.
         */
        
        setOptionLimit(limit) {
            this.options.limit = limit;
            return this;
        }

        /**
         * Get the limit value from the options object
         * @returns The limit value.
         */
        
        getOptionLimit() {
            return this.options.limit;
        }

        /**
         * Get the value of the void option
         * @returns The void option.
         */
        
        getOptionVoid() {
            return this.options.void;
        }

        /**
         * * Set the value of the input element to the value of the option element
         * @param value - The value to set the input to.
         * @returns The question object.
         */
        
        setValue(value) {
            let input = this.getInput(),
                option = this.getOptionVoid().getID(),
                event = new Event('change', {
                    'cancelable': false,
                    'bubbles': true
                });

            let new_value = option !== value ? value : '';
            if (new_value === input.value) return this;

            input.value = new_value
            input.dispatchEvent(event);

            return this;
        }

        /**
         * Set the selected value
         * @param value - The value of the selected item.
         * @returns The `this` object.
         */
        
        setSelected(value) {
            this.hide();
            this.setValue(value);

            let li = this.findLi(value) || this.getLiFirst();
            if (li === null) return this;

            let icon = li.getIcon(), label = li.getLabel(), handler = this.getHandler();

            handler.removeIcon();
            if (icon.status()) handler.setIcon(icon.out());
            handler.setLabel(label.innerText);

            return this;
        }

        /**
         * Get the input element from the DOM
         * @returns The input element.
         */
        
        getInput() {
            return this.elements.input;
        }

        /**
         * Create a new <ul> element and add it to the content of the handler
         * @returns The ul element.
         */
        
        getUL() {
            if (this.elements.hasOwnProperty('ul')) return this.elements.ul;
            this.elements.ul = document.createElement('ul');
            this.elements.ul.className = 'option';
            this.getHandler().getContent().appendChild(this.elements.ul);
            return this.elements.ul;
        }

        /**
         * Get the list element from the elements object
         * @returns The list object.
         */
        
        getList() {
            if (!this.elements.hasOwnProperty('list')) this.elements.list = {};
            return this.elements.list;
        }

        /**
         * Remove all the items from the list
         * @returns The object itself.
         */
        
        emptyList() {
            let list = this.getList();
            for (let item in list) {
                Infinite.removeElementDOM(list[item].getLI());
                delete list[item];
            }
            return this;
        }

        /**
         * Find a list item by its ID
         * @param value - The value of the item to be found.
         * @returns The list item that has the same ID as the value.
         */
        
        findLi(value) {
            let list = this.getList();
            for (let item in list) {
                if (list[item].getID() !== value.toString()) continue;
                return list[item];
            }
            return null;
        }

        /**
         * Get the first item in a list
         * @returns The first item in the list.
         */
        
        getLiFirst() {
            let list = this.getList();
            for (let item in list) return list[item];
            return null;
        }

        /**
         * Populates the dropdown list with the given object
         * @param patterns - The patterns to populate the dropdown with.
         * @returns The dropdown object.
         */
        
        populateUl(patterns) {
            let should = this.populateUlHaveIcon(patterns);
            if (should === false) this.getHandler().removeIcon();

            let object = Object.assign({}, patterns), ul = this.getUL(), list = this.emptyList().getList(), option = this.getOptionVoid(), id = option.getID();

            list[id] = option;
            list[id].getIcon()[should ? 'show' : 'hide']();
            ul.appendChild(list[id].out());

            this.setSelected(id);

            for (let item in object) {
                let text = object[item].hasOwnProperty('text') ? object[item].text : this.constructor.text(), icon = object[item].hasOwnProperty('icon') ? object[item].icon : window.Infinite.Plugin.Dropdown.Li.Icon.default();
                list[item] = new window.Infinite.Plugin.Dropdown.Li(this, item, text, icon);
                if (should) list[item].getIcon().show();
                ul.appendChild(list[item].out());
            }

            return this;
        }

        /**
         * * For each pattern in the patterns array, check if the pattern has an icon property. 
         * * If the pattern has an icon property, return true. 
         * * If the pattern does not have an icon property, continue to the next pattern. 
         * * If no pattern has an icon property, return false
         * @param patterns - an array of objects that contain the following properties:
         * @returns a boolean value.
         */
        
        populateUlHaveIcon(patterns) {
            for (let i in patterns) {
                if (!patterns[i].hasOwnProperty('icon')) continue;
                return true;
            }
            return false;
        }

        /**
         * Get the content of the current page
         * @returns The content of the file.
         */
        
        out() {
            return this.getHandler().getContent();
        }

        /**
         * Show the dropdown list
         * @returns The object itself.
         */
        
        show() {

            let ul = this.getUL(), search = this.getHandler().getSearch();

            ul.classList.add('active');
            ul.scrollTop = ul.scrollLeft = 0;

            search.value = '';

            if (search.parentNode !== null) {
                let event = new Event('focus', {
                    'cancelable': false,
                    'bubbles': true
                });
                search.dispatchEvent(event);
            }

            return this;
        }

        /**
         * Hide the dropdown menu
         * @returns The current instance of the class.
         */
        
        hide() {
            this.getUL().classList.remove('active');
            return this;
        }

        /**
         * *Returns* `true` if the dropdown is open, `false` otherwise
         * @returns The status() method returns a boolean value.
         */
        
        status() {
            return this.getUL().classList.contains('active');
        }

        /**
         * If the event target has a class attribute that matches the handle class, then execute the
         * function
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
         * Open the list of options
         * @returns Nothing.
         */
        
        open() {
            let list = this.getList();
            if (Object.keys(list).length === 0) return;

            for (let x in list) list[x].getLI().removeAttribute('class');

            this.show();

            this.getHandler().hideSearch();

            let limit = this.getOptionLimit();
            if (Object.keys(list).length <= limit) return;

            let icon = Infinite.getIcon(this.constructor.found());
            this.getHandler().showSearch().setIcon(icon).getSearch().focus();
        }

        /**
         * When the user clicks on the dropdown, the dropdown is hidden
         * @param event - The event object that was passed to the function.
         * @returns Nothing.
         */
        
        close(event) {
            let plugin = Infinite.closestAttribute(event.target, 'data-infinite-plugin'), status = this.status();
            if (plugin === 'dropdown'
                || status === false) return;

            let input = this.getInput();
            this.setSelected(input.value);

            this.hide();
        }

        /**
         * Reset the selected item to the first item in the list
         * @returns The object itself.
         */
        
        reset() {
            let list = this.getLiFirst();
            if (list === null) return this;

            let id = list.getID();
            this.setSelected(id);

            return this;
        }

        /**
         * Finds the list item that matches the search term and triggers the click event on that item
         * @param event - The event object that was triggered.
         * @returns The `find` method returns the `actived` array.
         */
        
        find(event) {
            let actived = [], list = this.getList(), option = this.getOptionVoid().getID();

            for (let item in list) if (option !== item) {
                let li = list[item].getLI(), text = list[item].getLabel().innerText.toLowerCase();
                if (text.indexOf(event.target.value.toLowerCase()) === -1) {
                    li.classList.add('hide');
                    continue;
                }

                li.classList.remove('hide');
                actived.push(li);
            }

            if (actived.length !== 1) return;

            let trigger = new Event('click', {
                'cancelable': false,
                'bubbles': true
            });
            actived[0].dispatchEvent(trigger);
        }

        /**
         * *When the user clicks on an option, set the selected option to the ID of the option they
         * clicked on.*
         * @param event - The event object that was passed to the callback.
         */
        
        select(event) {
            let data = window.Infinite.Plugin.Dropdown.Li.data(), value = Infinite.closestAttribute(event.target, data), id = value !== null ? value : this.getOptionVoid().getID();
            this.setSelected(id);
        }
    }

    window.Infinite.Plugin.Dropdown = Dropdown;
    window.Infinite.Plugin.Dropdown.Handler = Handler;
    window.Infinite.Plugin.Dropdown.Li = Li;
    window.Infinite.Plugin.Dropdown.Li.Icon = Icon;

})(window);
