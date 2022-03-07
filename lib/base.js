(function (window) {

    'use strict';

    class Resize {

        /**
         * The JavaScript function `limit` returns the number 64.
         * @returns The limit() function returns the number 64.
         */

        static limit() {
            return 64;
        }

        /**
         * The constructor function creates a new instance of the class and sets the instance's
         * properties
         * @param th - The element that will be the target of the event.
         */

        constructor(th) {
            this.th = th;
            this.previous = null;
            this.elements = {};

            document.addEventListener('mouseup', this, false);
        }

        /**
         * Get the current thread's `this` object
         * @returns The th element.
         */

        getTH() {
            return this.th;
        }

        /**
         * Get the previous node in the linked list
         * @returns The previous node.
         */

        getPrevious() {
            return this.previous;
        }

        /**
         * Set the previous size of the array
         * @param size - The size of the buffer.
         * @returns The object itself.
         */

        setPrevious(size) {
            this.previous = size;
            return this;
        }

        /**
         * Get the gadget element if it exists, otherwise create it
         * @returns The gadget icon.
         */

        getGadget() {
            if (this.elements.hasOwnProperty('gadget')) return this.elements.gadget;
            this.elements.gadget = window.Infinite.getIcon('material-icons expand');

            this.elements.gadget.addEventListener('mousedown', this, false);
            return this.elements.gadget;
        }

        /**
         * It returns the gadget.
         * @returns The getGadget() method returns the value of the gadget property.
         */

        out() {
            return this.getGadget();
        }

        /**
         * * If the event type is a mouse down event, then call the mousedown function.
         * * If the event type is a mouse move event, then call the resize function.
         * * If the event type is a mouse up event, then call the mouseup function
         * @param event - The event object that is passed to the function.
         */

        handleEvent(event) {
            let attribute = [
                'mousedown:mousedown',
                'mousemove:resize',
                'mouseup:mouseup'
            ];
            for (let item = 0; item < attribute.length; item++) {
                let execute = attribute[item].split(String.fromCharCode(58));
                if (execute.length !== 2) break;
                if (execute[0] === event.type || 0 === execute[0].length) {
                    if (typeof this[execute[1]] !== 'function') continue;

                    this[execute[1]].call(this, event);
                }
            }
        }

        /**
         * * When the user drags the mouse to the left, the width of the table header is reduced
         * @param event - The event object that was passed to the callback.
         * @returns Nothing.
         */

        resize(event) {
            let previous = this.getPrevious(),
                delta = -1 * (previous - event.x),
                th = this.getTH().getTH(),
                computed = getComputedStyle(th),
                width = parseInt(computed.width) + delta;
            if (width < this.constructor.limit()) return;

            this.setPrevious(event.x);
            th.style.width = width.toString() + 'px';
        }

        /**
         * When the mouse button is released, stop listening for mousemove events
         */

        mouseup() {
            document.removeEventListener('mousemove', this, false);
        }

        /**
         * When the mouse button is pressed, set the previous position to the current position
         * @param event - The event object that was passed to the callback.
         */

        mousedown(event) {
            this.setPrevious(event.x);
            document.addEventListener('mousemove', this, false);
        }
    }

    class Parserdate {

        /**
         * Create a new JavaScript Date object with the given value and format
         * @param value - The value to be set.
         * @param format - The format of the date.
         */

        constructor(value, format) {
            this.value = null;
            this.format = 'y-m-d h:i:s';

            this.setFormat(format);
            this.setValue(value);
        }

        /**
         * Set the format of the output
         * @param string - The string to be formatted.
         * @returns The object itself.
         */

        setFormat(string) {
            this.format = string.toLowerCase().split(/\W/).map(function (item) {
                return item.substring(0, 1);
            });
            return this;
        }

        /**
         * Get the format of the data
         * @returns The format property of the object.
         */

        getFormat() {
            return this.format;
        }

        /**
         * Set the value of the object to an array of strings split on non-word characters
         * @param string - The string to be split.
         * @returns The object itself.
         */

        setValue(string) {
            this.value = string.split(/\W/);
            return this;
        }

        /**
         * Get the value of the current node
         * @returns The value of the node.
         */

        getValue() {
            return this.value;
        }

        /**
         * * Get the value of the datepicker input field.
         * * Get the format of the datepicker input field.
         * * If the format and value are not the same length, return null.
         * * Create an array of the datepicker input value.
         * * Create an array of the datepicker input format.
         * * Create an array of the datepicker input value in order of the datepicker input format.
         * * Create a string of the datepicker input value in order of the datepicker input format.
         * * Create a date object from the string of the datepicker input value in order of the
         * datepicker input format.
         * * Return the date object
         * @returns The date in milliseconds.
         */

        getParsed() {
            let value = this.getValue(),
                format = this.getFormat();
            if (format.length !== value.length) return null;

            let ordered = [],
                ordered_date = ['m', 'd', 'y', 'h', 'i', 's', 'u'];
            for (let item = 0; item < ordered_date.length; item++) {
                let index = format.indexOf(ordered_date[item]);
                if (index !== -1) ordered.push(value[index]);
            }
            let ordered_string = ordered.slice(0, 3).join(String.fromCharCode(45));
            if (ordered.length > 3)
                ordered_string += String.fromCharCode(84) + ordered.slice(3, 6).join(String.fromCharCode(58));
            if (ordered.length > 6)
                ordered_string += String.fromCharCode(46) + ordered[ordered.length - 1];

            return new Date(ordered_string).getTime();
        }
    }

    class CustomEvent {

        /**
         * This function returns the number 4.
         * @returns The number 4.
         */

        static select() {
            return 4;
        }

        /**
         * It returns 2.
         * @returns The number 2.
         */

        static unselect() {
            return 2;
        }

        /**
         * This function always returns 1.
         * @returns 1
         */

        static always() {
            return 1;
        }

        /**
         * Create a new JavaScript event object
         * @param type - The type of the event. This can be any string.
         * @param func - The function that will be called when the event is triggered.
         */

        constructor(type, func) {
            this.type = type;
            this.func = func;
        }

        /**
         * Get the type of the current node
         * @returns The type of the object.
         */

        getType() {
            return this.type;
        }

        /**
         * Get the function that was passed in to the constructor
         * @returns The function that was passed in.
         */

        getFunction() {
            return this.func;
        }

        /**
         * *Call the function of each event in the event list that matches the type.*
         * 
         * The function is called with the context and parameter
         * @param context - The context in which the event is being raised.
         * @param parameter - The parameter that is passed to the event function.
         * @param events - An array of Event objects.
         * @param type - The type of event to be called.
         */

        static caller(context, parameter, events, type) {
            for (let item = 0; item < events.length; item++) {
                if (type !== events[item].getType()) continue;
                events[item].getFunction().call(context, parameter);
            }
        }
    }

    class Plugin {

        /**
         * Create a new instance of the JavaScript class
         * @param th - The thread object.
         */

        constructor(th) {
            this.th = th;
            this.elements = {};
        }

        /**
         * Get the current thread's `this` value
         * @returns The th element.
         */

        getTH() {
            return this.th;
        }
    }

    class Text extends Plugin {

        /**
         * Return the JavaScript string 'NULL'
         * @returns The string 'NULL'
         */

        static void() {
            return 'NULL';
        }

        /**
         * Creates a new instance of the JavaScript plugin
         * @param th - The table header.
         * @returns The result of the function.
         */

        constructor(th) {
            super(th);

            let matrix = this.getTH().getMatrix();
            if (matrix.hasOwnProperty('text')) this.getInput().placeholder = matrix.text;

            if (typeof matrix[window.Infinite.Body.TD.handling()] !== 'function') matrix[window.Infinite.Body.TD.handling()] = (function (value) {
                let text = false === String || value.length === 0 ? window.Infinite.Plugin.Text.void() : value, node = document.createTextNode(text), result = document.createElement('div');

                result.className = 'result';
                result.appendChild(node);

                if (text === window.Infinite.Plugin.Text.void()) result.classList.add('null');

                return result;
            });
        }

        /**
         * Create a div with a class of "search" and append an input element to it
         * @returns The search element.
         */

        getSearch() {
            if (this.elements.hasOwnProperty('search')) return this.elements.search;
            let input = this.getInput();
            this.elements.search = document.createElement('div');
            this.elements.search.className = 'search';
            this.elements.search.appendChild(input);
            return this.elements.search;
        }

        /**
         * Create an input element and add it to the table header
         * @returns The input element.
         */

        getInput() {
            if (this.elements.hasOwnProperty('input')) return this.elements.input;
            this.elements.input = document.createElement('input');
            this.elements.input.name = this.getTH().getMatrixName();
            this.elements.input.setAttribute(window.Infinite.handle(), ':filter');
            this.elements.input.addEventListener('change', this.getTH().getHead(), false);
            return this.elements.input;
        }

        /**
         * Get the search string from the user
         * @returns The search method is being called.
         */

        out() {
            return this.getSearch();
        }
    }

    class HeadCheckbox {

        /**
         * *This function returns a string that is the JavaScript disabled attribute.*
         * @returns The string 'disabled'
         */

        static disabled() {
            return 'disabled';
        }

        /**
         * * Define the icons that will be used for the checkboxes
         * @returns A dictionary of icons.
         */

        static icons() {
            return {
                check: 'check_box',
                blank: 'check_box_outline_blank'
            };
        }

        /**
         * Create a new JavaScript object with a single property, `head`, that is the head of a linked
         * list
         * @param head - The head of the linked list.
         */

        constructor(head) {
            this.head = head;
            this.elements = {};
        }

        /**
         * Get the head of the list
         * @returns The head of the linked list.
         */

        getHead() {
            return this.head;
        }

        /**
         * Create a new icon element and add it to the DOM
         * @returns The icon element.
         */

        getIcon() {
            if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
            this.elements.icon = document.createElement('i');
            this.elements.icon.className = 'material-icons';
            this.elements.icon.setAttribute(window.Infinite.handle(), ':click');
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
         * Create a `th` element with an `input` element and an `i` element as its children
         * @returns The `getTH()` method returns the `th` element.
         */

        getTH() {
            if (this.elements.hasOwnProperty('th')) return this.elements.th;
            let icon = this.getIcon(), input = this.getInput();
            this.elements.th = document.createElement('th');
            this.elements.th.className = 'action';
            this.elements.th.appendChild(input);
            this.elements.th.appendChild(icon);
            return this.elements.th;
        }

        /**
         * Create a checkbox and set it's name to "checkbox"
         * @returns The input element.
         */

        getInput() {
            if (this.elements.hasOwnProperty('input')) return this.elements.input;
            this.elements.input = document.createElement('input');
            this.elements.input.type = 'checkbox';
            this.elements.input.name = 'checkbox';
            this.elements.input.setAttribute(window.Infinite.handle(), ':change');
            this.elements.input.addEventListener('change', this, false);
            return this.elements.input;
        }

        /**
         * * Set the checked property of the input element to the value of the status parameter
         * @param status - The status of the checkbox.
         * @returns The `setInput` method returns the `Checkbox` instance.
         */

        setInput(status) {
            let input = this.getInput(),
                trigger = new Event('change', {
                    'cancelable': false,
                    'bubbles': true
                });

            input.checked = status === true;
            input.dispatchEvent(trigger);

            return this;
        }

        /**
         * Set the disabled attribute of the input element and the disabled class of the icon
         * @param status - Boolean
         * @returns The current instance of the component.
         */

        setDisabled(status) {
            let icon = this.getIcon(),
                checked = status === true,
                action = checked ? 'add' : 'remove';

            this.getInput().setAttribute(this.constructor.disabled(), checked);
            icon.classList[action](this.constructor.disabled());
            return this;
        }

        /**
         * * Get the icon element from the table header.
         * * If the icon element has no text, set the icon to the blank icon.
         * * Return the table header
         * @returns The `out()` method returns the `<th>` element.
         */

        out() {
            let icon = this.getIcon();
            if (icon.innerText.length === 0) {
                let icons = this.constructor.icons();
                this.setIcon(icons.blank);
            }
            return this.getTH();
        }

        /* The above code is a JavaScript function that is used to handle events. */

        handleEvent(event) {
            let attribute = window.Infinite.closestAttribute(event.target, window.Infinite.handle());
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
         * Set the status of all checkboxes in the table except the one passed in
         * @param status - The status of the checkbox.
         * @param except - The row to be excluded from the checkbox change.
         * @returns The current instance of the class.
         */

        all(status, except) {
            this.setInput(status);
            let tr = this.getHead().getInfinite().getBody().getTR();
            for (let item in tr) {
                if (tr[item] === except) continue;
                tr[item].getCheckbox().setInput(status);
            }
            return this;
        }

        /**
         * * When the checkbox is clicked, the function will check all the other checkboxes in the same
         * group
         * @param event - The event object that was triggered.
         */

        click(event) {
            let input = this.getInput(),
                status = input.checked === false;

            this.all(status);
            if (null !== status) event.stopPropagation();
        }

        /**
         * * When the checkbox is checked, the icon is set to the check icon.
         * * When the checkbox is unchecked, the icon is set to the blank icon
         */

        change() {
            let input = this.getInput(),
                status = input.checked === true,
                icons = this.constructor.icons(),
                icon = status ? icons.check : icons.blank,
                action = status ? 'add' : 'remove';

            this.getIcon().classList[action]('on');
            this.setIcon(icon);
        }
    }

    class BodyCheckbox {

        /**
         * * Define the icons that will be used for the checkboxes
         * @returns A dictionary of icons.
         */

        static icons() {
            return {
                check: 'check_box',
                blank: 'check_box_outline_blank'
            };
        }

        /**
         * Create a new instance of the JavaScript class
         * @param tr - The table row element.
         */

        constructor(tr) {
            this.tr = tr;
            this.elements = {};
        }

        /**
         * Get the TR element of the current row
         * @returns The `getTR()` method returns the `tr` property of the `this` object.
         */

        getTR() {
            return this.tr;
        }

        /**
         * Create an icon element and add it to the DOM
         * @returns The icon element.
         */

        getIcon() {
            if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
            this.elements.icon = document.createElement('i');
            this.elements.icon.className = 'material-icons';
            this.elements.icon.setAttribute(window.Infinite.handle(), ':click');
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
         * Create a new `td` element, and add the input and icon to it
         * @returns The `getTD()` method returns the `td` element that contains the `input` and `icon`
         * elements.
         */

        getTD() {
            if (this.elements.hasOwnProperty('td')) return this.elements.td;
            let icon = this.getIcon(), input = this.getInput();
            this.elements.td = document.createElement('td');
            this.elements.td.className = 'action';
            this.elements.td.appendChild(input);
            this.elements.td.appendChild(icon);
            return this.elements.td;
        }

        /**
         * Create an input element, set its type to checkbox, set its name to checkbox, set its event
         * listener for change, and add it to the table row
         * @returns The input element.
         */

        getInput() {
            if (this.elements.hasOwnProperty('input')) return this.elements.input;
            this.elements.input = document.createElement('input');
            this.elements.input.type = 'checkbox';
            this.elements.input.name = 'checkbox';
            this.elements.input.setAttribute(window.Infinite.handle(), ':change');
            this.elements.input.addEventListener('change', this, false);
            this.elements.input.addEventListener('change', this.getTR(), false);
            return this.elements.input;
        }

        /**
         * * Set the checked property of the input element to the value of the checked parameter
         * @param checked - Boolean
         * @returns The `setInput` method returns the `Checkbox` instance.
         */

        setInput(checked) {
            let input = this.getInput(),
                trigger = new Event('change', {
                    'cancelable': false,
                    'bubbles': true
                });

            input.checked = checked;
            input.dispatchEvent(trigger);

            return this;
        }

        /**
         * * Get the icon element from the table cell. 
         * * If the icon element's inner text is empty, set the icon to the blank icon. 
         * * Return the table cell
         * @returns The TD element.
         */

        out() {
            let icon = this.getIcon();
            if (icon.innerText.length === 0) {
                let icons = this.constructor.icons();
                this.setIcon(icons.blank);
            }
            return this.getTD();
        }

        /**
         * * For each attribute in the element, split the attribute into a list of words.
         * * For each word in the list, split the word into a word and a function name.
         * * If the word is the event type or is empty, execute the function
         * @param event - The event object that was passed to the function.
         * @returns The `Infinite` object.
         */

        handleEvent(event) {
            let attribute = window.Infinite.closestAttribute(event.target, Infinite.handle());
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
         * When the user clicks on the checkbox, the checkbox is toggled
         * @param event - The event object that was triggered.
         */

        click(event) {
            let input = this.getInput(),
                checked = input.checked === false;

            this.setInput(checked);
            event.stopPropagation();
        }

        /**
         * When the checkbox is clicked, the icon is updated to reflect the new status, and the event
         * is fired
         * @param event - The event object that was passed to the function.
         */

        change(event) {
            let input = this.getInput(),
                status = input.checked === true,
                icons = this.constructor.icons(),
                icon = status ? icons.check : icons.blank,
                action = status ? 'add' : 'remove';

            this.getIcon().classList[action]('on');
            this.setIcon(icon);

            let head_checkbox = this.getTR().getBody().getInfinite().getHead().getCheckbox(),
                head_checkbox_input = head_checkbox.getInput();
            if (head_checkbox_input.checked === true
                && status === false) head_checkbox.setInput(false);

            let select = this.getTR().getBody().getInfinite().getEventSelect(),
                caller = status ? 'select' : 'unselect';

            window.Infinite.Event.caller(this, event, select, window.Infinite.Event[caller]());
            window.Infinite.Event.caller(this, event, select, window.Infinite.Event.always());
        }
    }

    class HeadTH {

        /**
         * Create a new instance of the JavaScript class
         * @param head - The head of the matrix.
         * @param matrix - The matrix that contains the field.
         */

        constructor(head, matrix) {
            this.head = head;
            this.matrix = matrix;

            this.elements = {};
            this.elements.tooltips = {};

            this.options = {};
            this.options.resize = new window.Infinite.Head.TH.Resize(this);

            if (typeof window.InfiniteTooltip === 'function') {

                this.elements.tooltips.inside = new InfiniteTooltip();

                let matrix = this.getMatrix();
                if (matrix.hasOwnProperty(InfiniteTooltip.attribute())) {
                    let inside = this.getInside();

                    this.elements.tooltips.inside.setText(matrix[InfiniteTooltip.attribute()]);

                    inside.classList.add('tooltip');
                    inside.appendChild(this.elements.tooltips.inside.getIcon());
                }
            }

            try {
                let plugin = this.shouldPlugin(), name = this.getMatrixName();
                if (plugin === null) throw 'No loaded plug-in meets the need for the field ' + name;

                this.setPlugin(plugin);
            }
            catch (message) {
                let debug = this.getHead().getInfinite().getDebug();
                if (debug === true) console.log(message);
            }
        }

        /**
         * Get the head of the list
         * @returns The head of the linked list.
         */

        getHead() {
            return this.head;
        }

        /**
         * Get the matrix of the current state of the game
         * @returns The matrix.
         */

        getMatrix() {
            return this.matrix;
        }

        /**
         * Get the name of the matrix
         * @returns The name of the matrix.
         */

        getMatrixName() {
            let matrix = this.getMatrix();
            if (matrix.hasOwnProperty('name')) return matrix.name;
            return null;
        }

        /**
         * Get the type of the matrix
         * @returns The type of the matrix.
         */

        getMatrixType() {
            let matrix = this.getMatrix();
            if (matrix.hasOwnProperty('type')) return matrix.type;
            return null;
        }

        /**
         * Get the resize option
         * @returns The resize option.
         */

        getResize() {
            return this.options.resize;
        }

        /**
         * Create a `th` element with the `inside` and `resize` elements as children
         * @returns The `getTH()` method returns the `th` element.
         */

        getTH() {
            if (this.elements.hasOwnProperty('th')) return this.elements.th;
            let inside = this.getInside(),
                name = this.getMatrixName(),
                resize = this.getResize().out();

            this.elements.th = document.createElement('th');
            this.elements.th.appendChild(inside);
            this.elements.th.appendChild(resize);
            if (null !== name) this.elements.th.className = name;

            return this.elements.th;
        }

        /**
         * Create a div element with the class name "inside" and return it
         * @returns The inside element.
         */

        getInside() {
            if (this.elements.hasOwnProperty('inside')) return this.elements.inside;
            this.elements.inside = document.createElement('div');
            this.elements.inside.className = 'inside';
            return this.elements.inside;
        }

        /**
         * * If the matrix type is not a string, or is an empty string, return null.
         * * Split the matrix type by the colon character.
         * * Reverse the split array.
         * * For each item in the reversed array, check if it contains the word "enum".
         * * If it does, and the window object does not contain a function called "Dropdown", continue.
         * * Otherwise, return "Dropdown".
         * * Otherwise, return "Text"
         * @returns The `shouldPlugin` function returns a string that is the name of the plugin that
         * should be used for the current matrix type.
         */

        shouldPlugin() {
            let type = this.getMatrixType();
            if (typeof type !== 'string'
                || 0 === type.length) return null;

            let type_split = type.split(':'), type_split_reverse = type_split.reverse();
            for (let item in type_split_reverse) switch (true) {
                case type_split_reverse[item].indexOf('enum') !== -1:
                    if (typeof window.Infinite.Plugin.Dropdown !== 'function') continue;
                    return 'Dropdown';
                default:
                    return 'Text';
            }
        }

        /**
         * * Sets the plugin for the infinite scroll
         * @param name - The name of the plugin.
         * @returns The instance of the plugin.
         */

        setPlugin(name) {
            this.removePlugin();
            this.plugin = new window.Infinite.Plugin[name](this);

            let inside = this.getInside();
            inside.setAttribute('data-infinite-plugin', name.toLowerCase());
            if (typeof this.plugin.out === 'function') inside.appendChild(this.plugin.out());

            return this;
        }

        /**
         * Get the plugin object for the current session
         * @returns The plugin object.
         */

        getPlugin() {
            return this.plugin;
        }

        /**
         * Remove the plugin from the form
         * @returns Nothing.
         */

        removePlugin() {
            let plugin = this.getPlugin();
            if (plugin === null
                || typeof plugin === 'undefined'
                || typeof plugin.out !== 'function') return this;

            Form.removeElementDOM(plugin.out());
            delete this.plugin;

            return this;
        }

        /**
         * Get the HTML of the table header
         * @returns The getTH method is being called.
         */

        out() {
            return this.getTH();
        }
    }

    class Head {

        /**
         * Create a new instance of the Infinite.Head class
         * @param infinite - The infinite object that is calling the constructor.
         */

        constructor(infinite) {
            this.infinite = infinite;

            this.elements = {};
            this.elements.th = [];
            this.elements.checkbox = new window.Infinite.Head.Checkbox(this);
        }

        /**
         * Get the infinite value
         * @returns The value of the infinite property.
         */

        getInfinite() {
            return this.infinite;
        }

        /**
         * Get the checkbox element
         * @returns The checkbox element.
         */

        getCheckbox() {
            return this.elements.checkbox;
        }

        /**
         * Get the table header
         * @returns The thead element.
         */

        getThead() {
            if (this.elements.hasOwnProperty('thead')) return this.elements.thead;
            let tr = this.getTR();
            this.elements.thead = document.createElement('thead');
            this.elements.thead.appendChild(tr);
            return this.elements.thead;
        }

        /**
         * Create a new table row element and return it
         * @returns The TR element.
         */

        getTR() {
            if (this.elements.hasOwnProperty('tr')) return this.elements.tr;
            this.elements.tr = document.createElement('tr');
            return this.elements.tr;
        }

        /**
         * *Remove all child elements from the table row.*
         * @returns The object itself.
         */

        emptyTR() {
            let tr = this.getTR();
            while (tr.firstChild !== null) window.Infinite.removeElementDOM(tr.firstChild);
            return this;
        }

        /**
         * Get the table header element
         * @returns The `getTH` method returns the `th` element.
         */

        getTH() {
            return this.elements.th;
        }

        /**
         * Get the number of TH elements in the table
         * @returns The number of TH elements that are being displayed.
         */

        getTHCount() {
            let infinite = this.getInfinite(),
                setting = infinite.getOptionSetting(),
                count = 0;
            if (setting.length === 0) return count;

            for (let item = 0; item < setting.length; item++) {
                let th = this.findTH(setting[item].name);
                if (th !== null) count++;
            }

            let event = infinite.getEventSelect(), checkbox = this.getCheckbox();
            if (event.length === 0
                || !(checkbox instanceof window.Infinite.Head.Checkbox)) return count;

            return count + 1;
        }

        /**
         * Find a table header by name
         * @param name - The name of the matrix.
         * @returns The TH object that matches the name.
         */

        findTH(name) {
            let th = this.getTH();
            for (let item = 0; item < th.length; item++) {
                if (false === th[item] instanceof window.Infinite.Head.TH
                    || name !== th[item].getMatrixName()) continue;

                return th[item];
            }
            return null;
        }

        /**
         * Remove all the table header elements from the table
         * @returns The object itself.
         */

        emptyTH() {
            for (let item = 0, th = this.getTH(); item < th.length; item++) window.Infinite.removeElementDOM(th[item].out());
            this.elements.th = [];
            return this;
        }

        /**
         * Create a new `TH` for each column in the `optionStructure` array
         * @returns The object itself.
         */

        build() {
            let structure = this.getInfinite().getOptionStructure();
            if (structure.length === 0) return this;

            for (let item = 0, th = this.emptyTH().getTH(); item < structure.length; item++) {
                let column = new window.Infinite.Head.TH(this, structure[item]);
                th.push(column);
            }

            this.update();

            return this;
        }

        /**
         * Update the table header
         * @returns The Head object.
         */

        update() {
            let infinite = this.getInfinite();

            this.emptyTR();

            let tr = this.getTR();
            for (let item = 0, setting = infinite.getOptionSetting(); item < setting.length; item++) {
                let th = this.findTH(setting[item].name);
                if (th === null) continue;

                tr.appendChild(th.out());
            }

            let event = infinite.getEventSelect(), checkbox = this.getCheckbox();
            if (event.length !== 0
                && checkbox instanceof window.Infinite.Head.Checkbox) tr.insertBefore(checkbox.out(), tr.firstChild);

            infinite.getBody().update();

            return this;
        }

        /**
         * If the event target has a class attribute that matches the handle class attribute, then
         * execute the function that matches the event type
         * @param event - The event object that was passed to the function.
         * @returns The `Infinite` object.
         */

        handleEvent(event) {
            let attribute = window.Infinite.closestAttribute(event.target, window.Infinite.handle());
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
        filter() {
            this.getInfinite().setRequestOffset(0).request();
        }
    }

    class BodyTD {

        /**
         * The function returns the string 'handling'
         * @returns The string 'handling'
         */

        static handling() {
            return 'handling';
        }

        /**
         * Create a new JavaScript object that represents a matrix
         * @param tr - The translation vector.
         * @param value - The value of the matrix.
         * @param matrix - The matrix that the transformation is applied to.
         */

        constructor(tr, value, matrix) {
            this.tr = tr;
            this.value = value;
            this.matrix = matrix;

            this.elements = {};

            this.build();
        }

        /**
         * Get the current row's TR element
         * @returns The `getTR()` method returns the `tr` property of the `Table` object.
         */

        getTR() {
            return this.tr;
        }

        /**
         * Get the matrix of the current state of the game
         * @returns The matrix.
         */

        getMatrix() {
            return this.matrix;
        }

        /**
         * Get the name of the matrix
         * @returns The name of the matrix.
         */

        getMatrixName() {
            let matrix = this.getMatrix();
            if (matrix.hasOwnProperty('name')) return matrix.name;
            return null;
        }

        /**
         * Get the value of the current node
         * @returns The value of the variable.
         */

        getValue() {
            return this.value;
        }

        /**
         * Create a new <td> element and return it
         * @returns The TD element.
         */

        getTD() {
            if (this.elements.hasOwnProperty('td')) return this.elements.td;
            this.elements.td = document.createElement('td');
            return this.elements.td;
        }

        /**
         * * If the value is null or undefined, return the void text.
         * * Otherwise, return the value
         * @returns The object itself.
         */

        build() {
            let matrix = this.getMatrix();
            if (typeof matrix[this.constructor.handling()] !== 'function') return this;

            let value = this.getValue(),
                exposed = value === null
                    || typeof value === 'undefined'
                    ? window.Infinite.Plugin.Text.void()
                    : value;

            let element = matrix[this.constructor.handling()].call(this, exposed);
            this.getTD().appendChild(element);

            return this;
        }

        /**
         * Returns the HTML table data element for the current cell
         * @returns The TD element.
         */

        out() {
            return this.getTD();
        }
    }

    class BodyTR {

        /**
         * *This function returns a string that is used as an attribute on the table row DOM elements.*
         * 
         * The `data()` function is used to return a string that is used as an attribute on the table
         * row DOM elements. 
         * 
         * The attribute is used to identify the row in the table DOM element. 
         * 
         * This attribute is used to identify the row in the table DOM element when the table is being
         * sorted or filtered. 
         * @returns The `data-infinite-row-id` is a string that is being returned.
         */

        static data() {
            return 'data-infinite-row-id';
        }

        /**
         * Create a new table row element and add it to the body
         * @param body - The body object that this element is associated with.
         * @param matrix - The matrix that contains the data.
         */

        constructor(body, matrix) {
            this.body = body;
            this.matrix = matrix;

            this.elements = {};
            this.elements.td = [];
            this.elements.checkbox = new window.Infinite.Body.Checkbox(this);

            this.build();
        }

        /**
         * Get the body of the request
         * @returns The body of the message.
         */

        getBody() {
            return this.body;
        }

        /**
         * Get the matrix of the current state of the game
         * @returns The matrix.
         */

        getMatrix() {
            return this.matrix;
        }

        /**
         * Get the checkbox element
         * @returns The checkbox element.
         */

        getCheckbox() {
            return this.elements.checkbox;
        }

        /**
         * Returns the TD element of the table
         * @returns The TD element.
         */

        getTD() {
            return this.elements.td;
        }

        /**
         * Find a TD element by its matrix name
         * @param name - The name of the matrix to be found.
         * @returns The TD object that has the name that matches the name parameter.
         */

        findTD(name) {
            let td = this.getTD();
            for (let item = 0; item < td.length; item++)
                if (name === td[item].getMatrixName())
                    return td[item];
            return null;
        }

        /**
         * Create a new table row element and return it
         * @returns The TR element.
         */

        getTR() {
            if (this.elements.hasOwnProperty('tr')) return this.elements.tr;
            this.elements.tr = document.createElement('tr');
            return this.elements.tr;
        }

        /**
         * *Create a new table row and add it to the table.*
         * @returns The object itself.
         */

        emptyTR() {
            let tr = this.getTR();
            while (tr.firstChild !== null) window.Infinite.removeElementDOM(tr.firstChild);
            return this;
        }

        /**
         * Create an empty table row and add it to the table
         * @returns The table object.
         */

        emptyTD() {
            this.emptyTR();
            this.elements.td = [];
            return this;
        }

        /**
         * If the response has a unique key, then set the attribute of the table row to the value of
         * that key
         * @returns The object itself.
         */

        build() {
            let infinite = this.getBody().getInfinite(),
                unique = infinite.getResponseUnique(),
                matrix = this.getMatrix();
            if (matrix.hasOwnProperty(unique)) this.getTR().setAttribute(this.constructor.data(), matrix[unique]);

            this.emptyTD();

            let structure = infinite.getOptionStructure();
            if (structure.length !== 0) for (let item = 0, td = this.getTD(); item < structure.length; item++) {
                let nullable = !matrix.hasOwnProperty(structure[item].name) || null === matrix[structure[item].name],
                    column = new window.Infinite.Body.TD(this, nullable ? window.Infinite.Plugin.Text.void() : matrix[structure[item].name], structure[item]);
                td.push(column);
            }

            return this;
        }

        /**
         * * Create a new table row and add it to the table.
         * * Create a new table data and add it to the table row.
         * * Create a new checkbox and add it to the table data.
         * * Create a new event listener and add it to the table row.
         * * Set the table row's attribute to the event listener.
         * * Set the table row's class to "use".
         * * Set the table row's attribute to the checkbox.
         * * Set the checkbox's input to the status of the checkbox
         * @returns Nothing.
         */

        update() {
            let infinite = this.getBody().getInfinite();

            this.emptyTR();

            let tr = this.getTR();
            for (let item = 0, setting = infinite.getOptionSetting(); item < setting.length; item++) {
                let td = this.findTD(setting[item].name);
                if (td === null) continue;

                tr.appendChild(td.out());
            }

            let event = infinite.getEventSelect(), checkbox = this.getCheckbox();
            if (event.length === 0 || !(checkbox instanceof window.Infinite.Body.Checkbox)) {
                tr.removeEventListener('click', this, false);
                tr.removeAttribute(window.Infinite.handle());
                tr.classList.remove('use');

                return this;
            }

            tr.insertBefore(checkbox.out(), tr.firstChild);

            let handle = tr.getAttribute(window.Infinite.handle());
            if (handle === null || handle.toString().length === 0) {
                tr.setAttribute(window.Infinite.handle(), ':click');
                tr.addEventListener('click', this, false);
                tr.classList.add('use');
            }

            let status = infinite.getHead().getCheckbox().getInput().checked;
            if (status === true) checkbox.setInput(status);

            return this;
        }

        /**
         * If the event target has a class attribute that matches the handle class attribute, then
         * execute the function that matches the event type
         * @param event - The event object that was passed to the function.
         * @returns The `Infinite` object.
         */

        handleEvent(event) {
            let attribute = window.Infinite.closestAttribute(event.target, window.Infinite.handle());
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
         * *Get the checkbox element from the DOM and store it in a variable.*
         *  
         * *Stop the event from propagating.*
         * @param event - The event object that was triggered.
         */

        click(event) {
            let checkbox = this.getCheckbox(),
                input = checkbox.getInput(),
                checked = input.checked === false;
            checkbox.setInput(checked);

            event.stopPropagation();
        }

        /**
         * * When the checkbox is checked, add the `active` class to the `<tr>` element.
         * * When the checkbox is unchecked, remove the `active` class from the `<tr>` element
         */

        change() {
            let input = this.getCheckbox().getInput(),
                status = input.checked === true;

            let action = status ? 'add' : 'remove';
            this.getTR().classList[action]('active');
        }
    }

    class Body {

        /**
         * Create a new instance of the InfiniteScroll class
         * @param infinite - If set to true, the table will be rendered with an infinite scroll.
         */

        constructor(infinite) {
            this.infinite = infinite;
            this.elements = {
                tr: {}
            };
        }

        /**
         * Get the infinite value
         * @returns The infinite property of the object.
         */

        getInfinite() {
            return this.infinite;
        }

        /**
         * Create a new tbody element if it doesn't already exist
         * @returns The tbody element.
         */

        getTbody() {
            if (this.elements.hasOwnProperty('tbody')) return this.elements.tbody;
            this.elements.tbody = document.createElement('tbody');
            return this.elements.tbody;
        }

        /**
         * *Remove all child elements from the tbody.*
         * @returns The Infinite object.
         */

        emptyTbody() {
            let tbody = this.getTbody();
            while (tbody.firstChild !== null) window.Infinite.removeElementDOM(tbody.firstChild);
            return this;
        }

        /**
         * Get the table row element for this table cell
         * @returns The `getTR()` method returns the `tr` element.
         */

        getTR() {
            return this.elements.tr;
        }

        /**
         * Add a new TR to the TR collection
         * @param matrix - The matrix that will be used to create the TR.
         * @returns The TR object.
         */

        addTR(matrix) {
            try {
                let unique = this.getInfinite().getResponseUnique();
                if (typeof matrix !== 'object'
                    || !matrix.hasOwnProperty(unique)) throw 'No "' + unique + '" key found for this line';

                let tr = this.getTR();
                if (tr.hasOwnProperty(matrix[unique])) return tr[matrix[unique]];

                tr[matrix[unique]] = new window.Infinite.Body.TR(this, matrix);

                return tr[matrix[unique]];
            }
            catch (message) {
                let debug = this.getInfinite().getDebug();
                if (debug === true) console.log(message);
            }

            return null;
        }

        /**
         * Find the TR element that contains the specified key
         * @param key - The key to look for in the TR.
         * @returns The value of the key in the TR object.
         */

        findTR(key) {
            let tr = this.getTR();
            if (tr.hasOwnProperty(key)) return tr[key];
            return null;
        }

        /**
         * Remove a TR element from the table
         * @param key - The key of the row to remove.
         * @returns Nothing.
         */

        removeTR(key) {
            let finded = this.findTR(key),
                tr = this.getTR();
            if (null === finded) return this;

            window.Infinite.removeElementDOM(finded.getTR());
            delete tr[key];

            return this;
        }

        /**
         * Get the checked checkboxes from the table
         * @returns The getChecked() method returns an array of the checked checkboxes.
         */

        getChecked() {
            let response = [],
                tr = this.getTR();

            for (let item in tr) {
                let checkbox = tr[item].getCheckbox().getInput();
                if (checkbox.checked !== true) continue;

                response.push(item);
            }

            return response;
        }

        /**
         * *Update the table by adding new rows and removing old rows.*
         * 
         * The function is pretty simple. It first empties the table body, then it loops through the
         * table rows and inserts them into the table body
         * @returns Nothing.
         */

        update() {
            this.emptyTbody();
            let tr = this.getTR(), tbody = this.getTbody();
            for (let item in tr) tbody.insertBefore(tr[item].update().getTR(), this.sort(tr[item]));
            return true;
        }

        /**
         * If the comparison is greater than the line, return false. If the comparison is less than the
         * line, return true. If the comparison is equal to the line, return false
         * @param line - the line to compare to comparison
         * @param comparison - The comparison object to compare against.
         * @returns The result of the comparison.
         */

        compare(line, comparison) {
            let setting = this.getInfinite().getOptionSetting();
            if (setting.length === 0) return false;

            for (let item = 0; item < setting.length; item++) {
                let one = line.findTD(setting[item].name), two = comparison.findTD(setting[item].name);
                if (one === null
                    || two === null) continue;

                let one_comparison = this.constructor.casting(one),
                    two_comparison = this.constructor.casting(two),
                    lower = one_comparison < two_comparison,
                    greater = one_comparison > two_comparison;

                switch (true) {
                    case lower && !setting[item].hasOwnProperty('order'):
                    case lower && 0 === setting[item].order:
                    case 1 === setting[item].order && greater:
                        return false;
                    case setting[item].order == 1 && lower:
                    case setting[item].order == 0 && greater:
                        return true;
                }
            }

            return false;
        }

        /**
         * * Get the TR element from the table.
         * * Get the keys from the TR object.
         * * Iterate through the TR object.
         * * Get the data attribute from the TR element.
         * * If the data attribute is null or the TR object does not have the data attribute, continue.
         * * Compare the line and the data attribute.
         * * If the comparison is false, continue.
         * * Return the TR element
         * @param line - The line to be sorted.
         * @returns The next row in the table.
         */

        sort(line) {
            let tr = this.getTR(), keys = Object.keys(tr);
            if (0 === keys.length) return null;

            for (let item = 0, tbody = this.getTbody(); item < tbody.childNodes.length; item++) {
                let data = tbody.childNodes[item].getAttribute(window.Infinite.Body.TR.data());
                if (data === null
                    || !tr.hasOwnProperty(data)) continue;

                let multisort = this.compare(line, tr[data]);
                if (multisort === false) continue;

                return tbody.childNodes[item];
            }

            return null;
        }

        /**
         * Destroy the table
         * @returns The table object.
         */

        destroy() {
            let tr = this.getTR();
            for (let item in tr) this.removeTR(item);
            return this;
        }

        /**
         * * If the matrix type is :number, then cast the value to a number.
         * * If the matrix type is :datetime and the matrix has a pattern, then cast the value to a
         * date.
         * * Otherwise, return the value as a string
         * @param td - The table cell that is being converted.
         * @returns The value of the cell, casted to the type of the column.
         */

        static casting(td) {
            let value = td.getValue(),
                matrix = td.getMatrix();
            switch (true) {
                case matrix.type === ':number':
                    return Number(value);
                case matrix.type === ':datetime'
                    && matrix.patterns.hasOwnProperty(0)
                    && matrix.patterns[0].hasOwnProperty('from'):

                    let c = new window.Infinite.Body.Parserdate(value, matrix.patterns[0].from),
                        parsed = c.getParsed();
                    return parsed;
                default:
                    return value.toString().toLowerCase();
            }
        }
    }

    class LoaderScroll {

        /**
         * Create a new instance of the InfiniteScroll class
         * @param infinite - If true, the iterator will never terminate.
         */

        constructor(infinite) {
            this.infinite = infinite;
            this.elements = {};
        }

        /**
         * Get the infinite value
         * @returns The value of the infinite property.
         */

        getInfinite() {
            return this.infinite;
        }

        /**
         * *Get the loader element if it exists, otherwise create it.*
         * @returns The loader element.
         */

        getLoader() {
            if (this.elements.hasOwnProperty('loader')) return this.elements.loader;
            let spinner = this.getSpinner();
            this.elements.loader = document.createElement('div');
            this.elements.loader.className = 'result loader';
            this.elements.loader.appendChild(spinner);
            return this.elements.loader;
        }

        /**
         * Create a new `td` element and append a `Loader` element to it
         * @returns The `getTD` method returns the `td` element.
         */

        getTD() {
            if (this.elements.hasOwnProperty('td')) return this.elements.td;
            let loader = this.getLoader();
            this.elements.td = document.createElement('td');
            this.elements.td.appendChild(loader);
            return this.elements.td;
        }

        /**
         * *Get the table row element for this cell.*
         * @returns The tr element.
         */

        getTR() {
            if (this.elements.hasOwnProperty('tr')) return this.elements.tr;
            let td = this.getTD();
            this.elements.tr = document.createElement('tr');
            this.elements.tr.appendChild(td);
            return this.elements.tr;
        }

        /**
         * Create a spinner element if it doesn't exist, and return it
         * @returns The spinner element.
         */

        getSpinner() {
            if (this.elements.hasOwnProperty('spinner')) return this.elements.spinner;
            this.elements.spinner = document.createElement('div');
            this.elements.spinner.className = 'spinner';

            for (let item = 0; item < 3; item++) {
                let bounce = document.createElement('div');
                bounce.className = 'bounce-' + item;
                this.elements.spinner.appendChild(bounce);
            }

            return this.elements.spinner;
        }

        /**
         * Add a row to the grid
         * @returns The object itself.
         */

        show() {
            let tr = this.getTR();
            this.getInfinite().getBody().getTbody().appendChild(tr);
            this.grid();
            return this;
        }

        /**
         * Hide the row from the table
         * @returns The current instance of the class.
         */

        hide() {
            let tr = this.getTR();
            window.Infinite.removeElementDOM(tr);
            return this;
        }

        /**
         * Returns true if the table row is attached to the DOM
         * @returns The status() method returns a boolean value.
         */

        status() {
            return this.getTR().parentNode !== null;
        }

        /**
         * *This function sets the colSpan attribute of the TD element to the number of columns in the
         * grid.*
         * @returns The object itself.
         */

        grid() {
            let count = this.getInfinite().getHead().getTHCount();
            this.getTD().setAttribute('colSpan', count);
            return this;
        }
    }

    class Preloader {

        /**
         * Create a new instance of the InfiniteScroll class
         * @param infinite - If true, the iterator will never terminate.
         */

        constructor(infinite) {
            this.infinite = infinite;
            this.elements = {};
        }

        /**
         * Returns the value of the infinite property
         * @returns The value of the infinite property.
         */

        getInfinite() {
            return this.infinite;
        }

        /**
         * Create a new div element and set its class to "table-infinite-preloader"
         * @returns The preloader div.
         */

        getPreloader() {
            if (this.elements.hasOwnProperty('preloader')) return this.elements.preloader;

            this.elements.preloader = document.createElement('div');
            this.elements.preloader.className = 'table-infinite-preloader';

            return this.elements.preloader;
        }

        /**
         * Create a spinner element if it doesn't exist, and return it
         * @returns The spinner element.
         */

        getSpinner() {
            if (this.elements.hasOwnProperty('spinner')) return this.elements.spinner;
            this.elements.spinner = document.createElement('div');
            this.elements.spinner.className = 'spinner';

            for (let item = 0; item < 3; item++) {
                let bounce = document.createElement('div');
                bounce.className = 'bounce-' + item;
                this.elements.spinner.appendChild(bounce);
            }

            return this.elements.spinner;
        }

        /**
         * Show a spinner on the page
         * @returns The object itself.
         */

        showSpinner() {
            let spinner = this.getSpinner();
            this.getPreloader().appendChild(spinner);
            return this;
        }

        /**
         * Hide the spinner
         * @returns The infinite scroll instance.
         */

        hideSpinner() {
            let spinner = this.getSpinner();
            window.Infinite.removeElementDOM(spinner);
            return this;
        }

        /**
         * Show the preloader
         * @returns The object itself.
         */

        show() {
            let wrapper = this.getInfinite().getTable(), preloader = this.getPreloader();
            if (wrapper !== null && wrapper.parentNode instanceof HTMLElement) wrapper.parentNode.appendChild(preloader);
            return this;
        }

        /**
         * Hide the preloader
         * @returns The object itself.
         */

        hide() {
            let preloader = this.getPreloader();
            window.Infinite.removeElementDOM(preloader);
            return this;
        }

        /**
         * Returns a boolean indicating whether the preloader is currently visible
         * @returns The status() function returns a boolean value.
         */

        status() {
            return this.getPreloader().parentNode !== null;
        }
    }

    class Notice {

        /**
         * It returns a string.
         * @returns The string 'developer\infinite\notice\empty'
         */

        static void() {
            return 'developer\\infinite\\notice\\empty';
        }

        /**
         * Create a new instance of the JavaScript class
         * @param infinite - A boolean value that indicates whether the stream is infinite.
         */

        constructor(infinite) {
            this.infinite = infinite;
            this.elements = {};

            this.empty = this.constructor.void();
        }

        /**
         * Get the infinite value
         * @returns The infinite property of the object.
         */

        getInfinite() {
            return this.infinite;
        }

        /**
         * Set the text to be displayed when the list is empty
         * @param text - The text to display when the input is empty.
         * @returns The `setTextEmpty` method returns the `this` object.
         */

        setTextEmpty(text) {
            this.empty = text;
            return this;
        }

        /**
         * Get the text of the empty element
         * @returns The empty string.
         */

        getTextEmpty() {
            return this.empty;
        }

        /**
         * Create a new table row element and append a table cell element to it
         * @returns The tr element.
         */

        getTR() {
            if (this.elements.hasOwnProperty('tr')) return this.elements.tr;
            let td = this.getTD();
            this.elements.tr = document.createElement('tr');
            this.elements.tr.appendChild(td);
            return this.elements.tr;
        }

        /**
         * Create a new `td` element and append the `notice` element to it
         * @returns The TD element.
         */

        getTD() {
            if (this.elements.hasOwnProperty('td')) return this.elements.td;
            let notice = this.getNotice();
            this.elements.td = document.createElement('td');
            this.elements.td.appendChild(notice);
            return this.elements.td;
        }

        /**
         * Create a div element with the class of "inside result error" and return it if it doesn't exist
         * @returns The `getNotice()` method returns the `notice` element.
         */

        getNotice() {
            if (this.elements.hasOwnProperty('notice')) return this.elements.notice;
            this.elements.notice = document.createElement('div');
            this.elements.notice.className = 'inside result error';
            return this.elements.notice;
        }

        /**
         * Set the text of the notice
         * @param message - The message to display in the notice.
         * @returns The object itself.
         */

        setText(message) {
            let text = document.createTextNode(message), notice = this.getNotice();
            notice.innerText = '';
            notice.appendChild(text);
            return this;
        }

        /**
         * Add a row to the grid
         * @returns The object itself.
         */

        show() {
            let tr = this.getTR();
            this.getInfinite().getBody().getTbody().appendChild(tr);
            this.grid();
            return this;
        }

        /**
         * Hide the row from the table
         * @returns The current instance of the class.
         */

        hide() {
            let tr = this.getTR();
            window.Infinite.removeElementDOM(tr);
            return this;
        }

        /**
         * Returns true if the table row is attached to the DOM
         * @returns The status() method returns a boolean value.
         */

        status() {
            return this.getTR().parentNode !== null;
        }

        /**
         * *This function sets the colSpan attribute of the TD element to the number of columns in the
         * grid.*
         * @returns The object itself.
         */

        grid() {
            let count = this.getInfinite().getHead().getTHCount();
            this.getTD().setAttribute('colSpan', count);
            return this;
        }
    }

    class Infinite {

        /**
         * It returns a string.
         * @returns The `handle` method returns a string.
         */

        static handle() {
            return 'data-handle-event';
        }

        /**
         * It returns a string.
         * @returns The `complete` method returns a string.
         */

        static complete() {
            return 'complete';
        }

        /**
         * The constructor function creates the object and sets up the event listeners
         */

        constructor() {
            this.debug = true;
            this.elements = {};

            this.xhr = {
                url: null,
                offset: 0,
                count: 96,
                error: 0,
                iterate: {
                    array: 'result',
                    id: 'id'
                },
                construct: new XMLHttpRequest(),
                callback: {
                    fail: null,
                    success: null,
                    everywhere: null
                }
            };

            this.xhr.construct.addEventListener('load', this, false);
            this.xhr.construct.addEventListener('error', this, false);

            this.events = {};
            this.events.select = []; // (array)

            this.option = {};
            this.option.structure = [];
            this.option.setting = [];

            this.elements.head = new window.Infinite.Head(this);
            this.elements.body = new window.Infinite.Body(this);

            this.elements.loader = {};
            this.elements.loader.scroll = new window.Infinite.Preloader.Scroll(this);
            this.elements.notice = new window.Infinite.Notice(this);

            if (typeof window.Infinite.Plugin.Setting === 'function') {
                this.elements.setting = new window.Infinite.Plugin.Setting(this);
                this.elements.setting.setHardcode('widget', 'infinite');
            }

            this.elements.loader.preloader = new window.Infinite.Preloader(this);
        }

        /**
         * Return the head of the list
         * @returns The head of the linked list.
         */

        getHead() {
            return this.elements.head;
        }

        /**
         * Get the body element of the page
         * @returns The body element of the page.
         */

        getBody() {
            return this.elements.body;
        }

        /**
         * Get the scroll position of the loader
         * @returns The scroll position of the loader.
         */

        getLoaderScroll() {
            return this.elements.loader.scroll;
        }

        /**
         * Get the preloader element
         * @returns The preloader element.
         */

        getPreloader() {
            return this.elements.loader.preloader;
        }

        /**
         * Get the setting element from the page
         * @returns The `getSetting()` method returns the `setting` element.
         */

        getSetting() {
            return this.elements.setting;
        }

        /**
         * Get the notice element
         * @returns The getNotice() method returns the notice element.
         */

        getNotice() {
            return this.elements.notice;
        }

        /**
         * Set the debug status of the current session
         * @param status - The status of the debug mode.
         * @returns The `setDebug` method returns the `this` object.
         */

        setDebug(status) {
            this.debug = status;
            return this;
        }

        /**
         * Get the debug setting for the current session
         * @returns The debug property of the class.
         */

        getDebug() {
            return this.debug;
        }

        /**
         * Set the container element for the scrollable element
         * @param container - The element that will contain the scrollable area.
         * @returns The instance of the class.
         */

        setContainer(container) {
            if (container instanceof HTMLElement)
                container.setAttribute(this.constructor.handle(), ':scroll');

            this.elements.container = container;

            return this;
        }

        /**
         * Get the container element for the chart
         * @returns The container element.
         */

        getContainer() {
            if (this.elements.hasOwnProperty('container')) return this.elements.container;
            return null;
        }

        /**
         * Set the structure of the page
         * @param human - The human to set the structure of.
         * @returns The object itself.
         */

        setOptionStructure(human) {
            this.option.structure = human;

            this.getBody().destroy();
            this.getHead().build();

            let setting = this.getSetting();
            if (setting === null
                || typeof window.Infinite.Setting !== 'function'
                || false === setting instanceof window.Infinite.Plugin.Setting) return this;

            setting.out();

            return this;
        }

        /**
         * Get the option structure
         * @returns The option structure.
         */

        getOptionStructure() {
            return this.option.structure;
        }

        /**
         * Set the option setting for the current page
         * @param option - The name of the option to be set.
         * @returns The `setOptionSetting` method returns the `this` object.
         */

        setOptionSetting(option) {
            if (Array.isArray(option)) this.option.setting = option.filter(function (item) {
                return item.hasOwnProperty('name') && item.hasOwnProperty('order');
            });

            this.getHead().update();

            return this;
        }

        /**
         * Get the option setting for the current option
         * @returns The option setting for the option group.
         */

        getOptionSetting() {
            return this.option.setting;
        }

        /**
         * Set the success callback for the XHR object
         * @param func - The function to be called when the request is successful.
         * @returns The `ajax` function is being returned.
         */

        setCallbackSuccess(func) {
            this.xhr.callback.success = func;
            return this;
        }

        /**
         * Get the callback function for the success event
         * @returns The success callback function.
         */

        getCallbackSuccess() {
            return this.xhr.callback.success;
        }

        /**
         * Set the callback function for the XHR request
         * @param func - The function to call when the request is complete.
         * @returns The `ajax` function is being returned.
         */

        setCallbackFail(func) {
            this.xhr.callback.fail = func;
            return this;
        }

        /**
         * Get the callback function for the XHR request
         * @returns The callback function for the fail event.
         */

        getCallbackFail() {
            return this.xhr.callback.fail;
        }

        /**
         * Set a callback function that will be called for every request
         * @param func - The function to be called when the request is complete.
         * @returns The `ajax` function.
         */

        setCallbackEverywhere(func) {
            this.xhr.callback.everywhere = func;
            return this;
        }

        /**
         * Returns a boolean indicating whether or not the callback is enabled for all requests
         * @returns The callback function.
         */

        getCallbackEverywhere() {
            return this.xhr.callback.everywhere;
        }

        /**
         * It returns the XHR object.
         * @returns The constructor function of the XMLHttpRequest object.
         */

        getXHR() {
            return this.xhr.construct;
        }

        /**
         * Set the URL of the request
         * @param url - The URL to send the request to.
         * @returns The object itself.
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
         * Set the offset of the request
         * @param offset - The offset to start reading from.
         * @returns The object itself.
         */

        setRequestOffset(offset) {
            this.xhr.offset = offset;
            return this;
        }

        /**
         * Get the current offset of the request
         * @returns The offset of the request.
         */

        getRequestOffset() {
            return this.xhr.offset;
        }

        /**
         * Set the maximum number of times the JavaScript will try to download the file
         * @param count_max - The maximum number of times to retry the request.
         * @returns The request object.
         */

        setRequestCount(count_max) {
            this.xhr.count = count_max;
            return this;
        }

        /**
         * It returns the number of requests that have been made to the server.
         * @returns The number of requests made to the server.
         */

        getRequestCount() {
            return this.xhr.count;
        }

        /**
         * Set the key to use when iterating over an array
         * @param key - The key to use for the array.
         * @returns The XHR object.
         */

        setResponseKey(key) {
            this.xhr.iterate.array = key;
            return this;
        }

        /**
         * It returns the response key.
         * @returns The response key.
         */

        getResponseKey() {
            return this.xhr.iterate.array;
        }

        /**
         * Set the unique identifier for the response
         * @param key - The unique key to identify the response.
         * @returns The `setResponseUnique` method returns the `xhr` object.
         */

        setResponseUnique(key) {
            this.xhr.iterate.id = key;
            return this;
        }

        /**
         * Get the unique identifier for the response
         * @returns The unique ID of the request.
         */

        getResponseUnique() {
            return this.xhr.iterate.id;
        }

        /**
         * Add a function to the select event
         * @param func - The function to be called when the event is triggered.
         * @returns The `Infinite` object.
         */

        addEventSelect(func) {
            if (func instanceof window.Infinite.Event) this.events.select.push(func);
            return this;
        }

        /**
         * It returns the select event from the events object.
         * @returns The select method of the events property.
         */

        getEventSelect() {
            return this.events.select;
        }

        /**
         * Get the values of all the input fields in the table
         * @returns The associative array of the matrix names and their values.
         */

        get() {
            let associative = {},
                th = this.getHead().getTH();

            for (let item = 0; item < th.length; item++) {
                let plugin = th[item].getPlugin();
                if (typeof plugin.getInput === 'function') {
                    let input = plugin.getInput();
                    if (input.value.length > 0)
                        associative[th[item].getMatrixName()] = input.value;
                }
            }

            return associative;
        }

        /**
         * Send a POST request to the server with the current offset and count
         * @param everywhere - A function that will be called when the request is complete.
         * @returns Nothing.
         */

        request(everywhere) {
            let xhr = this.getXHR(),
                offset = this.getRequestOffset(),
                url = this.getRequestUrl()
                    + String.fromCharCode(63)
                    + 'offset'
                    + String.fromCharCode(61)
                    + offset
                    + String.fromCharCode(38)
                    + 'count'
                    + String.fromCharCode(61)
                    + this.getRequestCount();

            xhr.open('POST', url, !0);

            let container = this.getContainer();
            if (container === null) return;

            container.removeEventListener('scroll', this, false);
            this.setCallbackEverywhere(everywhere);

            let body = this.getBody();
            if (offset === 0) {
                let tr = body.getTR();
                for (let item in tr) {
                    let checkbox = tr[item].getCheckbox();
                    if (checkbox instanceof window.Infinite.Body.Checkbox
                        && checkbox.getInput().checked === true) continue;

                    body.removeTR(item);
                }
            }

            this.getLoaderScroll().show();
            this.getNotice().hide();

            let data = new FormData(), associative = this.get();
            for (let name in associative)
                data.append(name, associative[name]);

            xhr.send(data);
        }

        /**
         * If the request fails, try again after a second
         */

        error() {
            this.xhr.error = this.xhr.error + 1;
            if (this.xhr.error <= 4)
                setTimeout(this.request.bind(this), 1e3, this.getCallbackEverywhere());
        }

        /**
         * Load the data from the server and display it in the table
         * @returns Nothing.
         */

        load() {
            let json, xhr = this.getXHR();

            this.xhr.error = 0;

            this.getLoaderScroll().hide();

            try {
                json = JSON.parse(xhr.responseText);
            }
            catch (message) {
                json = {
                    'status': false,
                    'notice': message
                };
            }

            let everywhere = this.getCallbackEverywhere();
            if (typeof everywhere === 'function') everywhere.call(this, json);

            let key = this.getResponseKey();
            if (json.status === false || false === json.hasOwnProperty(key)) {

                let notice = json.hasOwnProperty('notice')
                    ? json.notice
                    : 'Unmanaged error';

                this.getNotice().setText(notice).show();

                let fail = this.getCallbackFail();
                if (typeof fail === 'function') fail.call(this, json);

                return;
            }

            let offset = this.getRequestOffset() + this.getRequestCount();
            this.setRequestOffset(offset);

            let container = this.getContainer();
            if (container === null) return;

            if (json[key].length > 0) {
                let body = this.getBody();
                for (let item = 0; item < json[key].length; item++) body.addTR(json[key][item]);
                body.update();
            }

            let scroller = container.scrollHeight - container.offsetHeight - container.scrollTop <= 0;
            if ((json.hasOwnProperty(this.constructor.complete()) && json[this.constructor.complete()] === false) && true === scroller
                || (0 !== json[key].length && true === scroller)) return this.request(everywhere);

            if (json[key].length === 0) {
                let count = Object.keys(this.getBody().getTR());
                if (count.length === 0)
                    this.getNotice().setText(this.getNotice().getTextEmpty()).show();

                return;
            }

            let success = this.getCallbackSuccess();
            if (typeof success === 'function') success.call(this, json);

            container.addEventListener('scroll', this, false);
        }

        /**
         * When the user clicks on the "Filter" button, the filter function is called. The filter
         * function sets the request offset to 0, and then calls the request function
         * @param ev - The event object.
         */

        filter(ev) {
            this.setRequestOffset(0);
            this.request.call(this, this.getCallbackEverywhere());
            ev.stopPropagation();
        }

        /**
         * Create a table element and append the head and body elements to it
         * @returns The table element.
         */

        getTable() {
            if (this.elements.hasOwnProperty('table')) return this.elements.table;
            let thead = this.getHead().getThead(),
                tbody = this.getBody().getTbody();

            this.elements.table = document.createElement('table');
            this.elements.table.className = 'infinite';
            this.elements.table.appendChild(thead);
            this.elements.table.appendChild(tbody);

            return this.elements.table;
        }

        /**
         * `out()` is a function that returns the HTML table
         * @returns The table.
         */

        out() {
            this.getHead().update();
            return this.getTable();
        }

        /**
         * If the event type matches the event type in the attribute, or if the event type is empty,
         * then execute the function
         * @param event - The event object that was passed to the handler.
         * @returns Nothing.
         */

        handleEvent(event) {
            if (typeof this[event.type] === 'function')
                return this[event.type].call(this, event);

            let attribute = this.constructor.closestAttribute(event.target, this.constructor.handle());
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
         * Close the plugin
         * @param event - The event object that was passed to the close() method.
         */

        close(event) {
            let th = this.getHead().getTH();
            for (let item = 0; item < th.length; item++) {
                if (th[item] instanceof window.Infinite.Head.TH === false) continue;

                let plugin = th[item].getPlugin();
                if (typeof plugin.close !== 'function') continue;

                plugin.close(event);
            }
        }

        /**
         * When the user scrolls to the bottom of the page, the function requests more data
         * @param event - The event that triggered the scroll.
         * @returns Nothing.
         */
        
        scroll(event) {
            let container = this.getContainer();
            if (container === null
                || container.scrollHeight - container.offsetHeight - container.scrollTop - 1 > 0) return;

            container.removeEventListener(event.type, this);

            this.request.call(this);
        }

        /**
         * Find the closest attribute to the target element
         * @param target - The element to search for the attribute.
         * @param attribute - The attribute to search for.
         * @param html - If true, the attribute is searched for in the HTML code of the page.
         * @returns The closest attribute.
         */
        
        static closestAttribute(target, attribute, html) {
            if (typeof attribute === 'undefined'
                || !attribute.length) return null;

            let result = null, element = target;

            do {
                let tagname = element.tagName.toLowerCase();
                if (tagname === 'body') return null;

                result = element.getAttribute(attribute);
                if (result !== null) {
                    result = result.toString();
                    if (result.length) break;
                }

                element = element.parentNode;
            } while (element !== null
                || typeof element === 'undefined');

            if (typeof html === 'undefined'
                || html !== true) return result;

            return element;
        }

        /**
         * Remove the element from the DOM
         * @param element - The element to remove from the DOM.
         * @returns The return value is a boolean value.
         */
        
        static removeElementDOM(element) {
            let parent = element === null || typeof element === 'undefined' || typeof element.parentNode === 'undefined' ? null : element.parentNode;
            if (parent === null) return false;
            parent.removeChild(element);
            return true;
        }

        /**
         * Create an HTML element with the given name and return it
         * @param name - The name of the icon.
         * @returns The icon element.
         */
        
        static getIcon(name) {
            if (name === null
                || typeof name !== 'string') name = 'material-icons lens_blur';
            let icon = document.createElement('i'), clean = name.replace(/(material\-icons(\S(\w+))?(\s+))?/, '');

            icon.className = name;
            if (clean === name) return icon;
            let text = document.createTextNode(clean);
            icon.appendChild(text);
            return icon;
        }
    }

    window.Infinite = Infinite;
    window.Infinite.Event = CustomEvent;
    window.Infinite.Plugin = Plugin;
    window.Infinite.Plugin.Text = Text;
    window.Infinite.Body = Body;
    window.Infinite.Body.Parserdate = Parserdate;
    window.Infinite.Body.TR = BodyTR;
    window.Infinite.Body.TD = BodyTD;
    window.Infinite.Body.Checkbox = BodyCheckbox;
    window.Infinite.Head = Head;
    window.Infinite.Head.TH = HeadTH;
    window.Infinite.Head.TH.Resize = Resize;
    window.Infinite.Head.Checkbox = HeadCheckbox;
    window.Infinite.Preloader = Preloader;
    window.Infinite.Preloader.Scroll = LoaderScroll;
    window.Infinite.Notice = Notice;

})(window);