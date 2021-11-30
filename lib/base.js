(function (window) {

    'use strict';

    class Resize {

        static limit() {
            return 64;
        }

        constructor(th) {
            this.th = th;
            this.previous = null;
            this.elements = {};

            document.addEventListener('mouseup', this, false);
        }

        getTH() {
            return this.th;
        }
        getPrevious() {
            return this.previous;
        }
        setPrevious(size) {
            this.previous = size;
            return this;
        }
        getGadget() {
            if (this.elements.hasOwnProperty('gadget')) return this.elements.gadget;
            this.elements.gadget = Infinite.getIcon('material-icons expand');

            this.elements.gadget.addEventListener('mousedown', this, false);
            return this.elements.gadget;
        }
        out() {
            return this.getGadget();
        }
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
        mouseup() {
            document.removeEventListener('mousemove', this, false);
        }
        mousedown(event) {
            this.setPrevious(event.x);
            document.addEventListener('mousemove', this, false);
        }
    }

    class Parserdate {

        constructor(value, format) {
            this.value = null;
            this.format = 'y-m-d h:i:s';

            this.setFormat(format);
            this.setValue(value);
        }

        setFormat(string) {
            this.format = string.toLowerCase().split(/\W/).map(function (item) {
                return item.substring(0, 1);
            });
            return this;
        }
        getFormat() {
            return this.format;
        }
        setValue(string) {
            this.value = string.split(/\W/);
            return this;
        }
        getValue() {
            return this.value;
        }
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

        static select() {
            return 4;
        }
        static unselect() {
            return 2;
        }
        static always() {
            return 1;
        }

        constructor(type, func) {
            this.type = type;
            this.func = func;
        }

        getType() {
            return this.type;
        }
        getFunction() {
            return this.func;
        }
        static caller(context, parameter, events, type) {
            for (let item = 0; item < events.length; item++) {
                if (type !== events[item].getType()) continue;
                events[item].getFunction().call(context, parameter);
            }
        }
    }

    class Plugin {

        constructor(th) {
            this.th = th;
            this.elements = {};
        }

        getTH() {
            return this.th;
        }
    }

    class Text extends Plugin {

        static void() {
            return 'NULL';
        }

        constructor(th) {
            super(th);

            let matrix = this.getTH().getMatrix();
            if (matrix.hasOwnProperty('text')) this.getInput().placeholder = matrix.text;

            if (typeof matrix.handling !== 'function') matrix.handling = (function (value) {
                let text = false === String || value.length === 0 ? Text.void() : value, node = document.createTextNode(text), result = document.createElement('div');

                result.className = 'result';
                result.appendChild(node);

                if (text === Text.void()) result.classList.add('null');

                return result;
            });
        }

        getSearch() {
            if (this.elements.hasOwnProperty('search')) return this.elements.search;
            let input = this.getInput();
            this.elements.search = document.createElement('div');
            this.elements.search.className = 'search';
            this.elements.search.appendChild(input);
            return this.elements.search;
        }
        getInput() {
            if (this.elements.hasOwnProperty('input')) return this.elements.input;
            this.elements.input = document.createElement('input');
            this.elements.input.name = this.getTH().getMatrixName();
            this.elements.input.setAttribute(Infinite.handle(), ':filter');
            this.elements.input.addEventListener('change', this.getTH().getHead(), false);
            return this.elements.input;
        }
        out() {
            return this.getSearch();
        }
    }

    class HeadCheckbox {

        static disabled() {
            return 'disabled';
        }
        static icons() {
            return {
                check: 'check_box',
                blank: 'check_box_outline_blank'
            };
        }

        constructor(head) {
            this.head = head;
            this.elements = {};
        }

        getHead() {
            return this.head;
        }
        getIcon() {
            if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
            this.elements.icon = document.createElement('i');
            this.elements.icon.className = 'material-icons';
            this.elements.icon.setAttribute(Infinite.handle(), ':click');
            this.elements.icon.addEventListener('click', this, false);
            return this.elements.icon;
        }
        setIcon(material) {
            let text = document.createTextNode(material), icon = this.getIcon();
            icon.innerText = '';
            icon.appendChild(text);
            return this;
        }
        getTH() {
            if (this.elements.hasOwnProperty('th')) return this.elements.th;
            let icon = this.getIcon(), input = this.getInput();
            this.elements.th = document.createElement('th');
            this.elements.th.className = 'action';
            this.elements.th.appendChild(input);
            this.elements.th.appendChild(icon);
            return this.elements.th;
        }
        getInput() {
            if (this.elements.hasOwnProperty('input')) return this.elements.input;
            this.elements.input = document.createElement('input');
            this.elements.input.type = 'checkbox';
            this.elements.input.name = 'checkbox';
            this.elements.input.setAttribute(Infinite.handle(), ':change');
            this.elements.input.addEventListener('change', this, false);
            return this.elements.input;
        }
        setInput(status) {
            let input = this.getInput(),
                trigger = document.createEvent('HTMLEvents');

            trigger.initEvent('change', true, false);
            input.checked = status === true;
            input.dispatchEvent(trigger);
            return this;
        }
        setDisabled(status) {
            let icon = this.getIcon(),
                checked = status === true,
                action = checked ? 'add' : 'remove';

            this.getInput().setAttribute(this.constructor.disabled(), checked);
            icon.classList[action](this.constructor.disabled());
            return this;
        }
        out() {
            let icon = this.getIcon();
            if (icon.innerText.length === 0) {
                let icons = this.constructor.icons();
                this.setIcon(icons.blank);
            }
            return this.getTH();
        }
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
        all(status, except) {
            this.setInput(status);
            let tr = this.getHead().getInfinite().getBody().getTR();
            for (let item in tr) {
                if (tr[item] === except) continue;
                tr[item].getCheckbox().setInput(status);
            }
            return this;
        }
        click(event) {
            let input = this.getInput(),
                status = input.checked === false;

            this.all(status);

            event.stopPropagation();
        }
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

        static icons() {
            return {
                check: 'check_box',
                blank: 'check_box_outline_blank'
            };
        }

        constructor(tr) {
            this.tr = tr;
            this.elements = {};
        }

        getTR() {
            return this.tr;
        }
        getIcon() {
            if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
            this.elements.icon = document.createElement('i');
            this.elements.icon.className = 'material-icons';
            this.elements.icon.setAttribute(Infinite.handle(), ':click');
            this.elements.icon.addEventListener('click', this, false);
            return this.elements.icon;
        }
        setIcon(material) {
            let text = document.createTextNode(material), icon = this.getIcon();
            icon.innerText = '';
            icon.appendChild(text);
            return this;
        }
        getTD() {
            if (this.elements.hasOwnProperty('td')) return this.elements.td;
            let icon = this.getIcon(), input = this.getInput();
            this.elements.td = document.createElement('td');
            this.elements.td.className = 'action';
            this.elements.td.appendChild(input);
            this.elements.td.appendChild(icon);
            return this.elements.td;
        }
        getInput() {
            if (this.elements.hasOwnProperty('input')) return this.elements.input;
            this.elements.input = document.createElement('input');
            this.elements.input.type = 'checkbox';
            this.elements.input.name = 'checkbox';
            this.elements.input.setAttribute(Infinite.handle(), ':change');
            this.elements.input.addEventListener('change', this, false);
            this.elements.input.addEventListener('change', this.getTR(), false);
            return this.elements.input;
        }
        setInput(checked) {
            let trigger = document.createEvent('HTMLEvents'),
                input = this.getInput();
            input.checked = checked;
            trigger.initEvent('change', true, false);
            input.dispatchEvent(trigger);

            return this;
        }
        out() {
            let icon = this.getIcon();
            if (icon.innerText.length === 0) {
                let icons = this.constructor.icons();
                this.setIcon(icons.blank);
            }
            return this.getTD();
        }
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
        click(event) {
            let input = this.getInput(),
                checked = input.checked === false;

            this.setInput(checked);
            event.stopPropagation();
        }
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

            CustomEvent.caller(this, event, select, CustomEvent[caller]());
            CustomEvent.caller(this, event, select, CustomEvent.always());
        }
    }

    class HeadTH {

        constructor(head, matrix) {
            this.head = head;
            this.matrix = matrix;

            this.elements = {};
            this.elements.tooltips = {};

            this.options = {};
            this.options.resize = new Resize(this);

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

        getHead() {
            return this.head;
        }
        getMatrix() {
            return this.matrix;
        }
        getMatrixName() {
            let matrix = this.getMatrix();
            if (matrix.hasOwnProperty('name')) return matrix.name;
            return null;
        }
        getMatrixType() {
            let matrix = this.getMatrix();
            if (matrix.hasOwnProperty('type')) return matrix.type;
            return null;
        }
        getResize() {
            return this.options.resize;
        }
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
        getInside() {
            if (this.elements.hasOwnProperty('inside')) return this.elements.inside;
            this.elements.inside = document.createElement('div');
            this.elements.inside.className = 'inside';
            return this.elements.inside;
        }
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
        setPlugin(name) {
            this.removePlugin();
            this.plugin = new window.Infinite.Plugin[name](this);

            let inside = this.getInside();
            inside.setAttribute('data-infinite-plugin', name.toLowerCase());
            if (typeof this.plugin.out === 'function') inside.appendChild(this.plugin.out());

            return this;
        }
        getPlugin() {
            return this.plugin;
        }
        removePlugin() {
            let plugin = this.getPlugin();
            if (plugin === null
                || typeof plugin === 'undefined'
                || typeof plugin.out !== 'function') return this;

            Form.removeElementDOM(plugin.out());
            delete this.plugin;

            return this;
        }
        out() {
            return this.getTH();
        }
    }

    class Head {

        constructor(infinite) {
            this.infinite = infinite;

            this.elements = {};
            this.elements.th = [];
            this.elements.checkbox = new window.Infinite.Head.Checkbox(this);
        }

        getInfinite() {
            return this.infinite;
        }
        getCheckbox() {
            return this.elements.checkbox;
        }
        getThead() {
            if (this.elements.hasOwnProperty('thead')) return this.elements.thead;
            let tr = this.getTR();
            this.elements.thead = document.createElement('thead');
            this.elements.thead.appendChild(tr);
            return this.elements.thead;
        }
        getTR() {
            if (this.elements.hasOwnProperty('tr')) return this.elements.tr;
            this.elements.tr = document.createElement('tr');
            return this.elements.tr;
        }
        emptyTR() {
            let tr = this.getTR();
            while (tr.firstChild !== null) Infinite.removeElementDOM(tr.firstChild);
            return this;
        }
        getTH() {
            return this.elements.th;
        }
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
                || !(checkbox instanceof HeadCheckbox)) return count;

            return count + 1;
        }
        findTH(name) {
            let th = this.getTH();
            for (let item = 0; item < th.length; item++) {
                if (false === th[item] instanceof HeadTH
                    || name !== th[item].getMatrixName()) continue;

                return th[item];
            }
            return null;
        }
        emptyTH() {
            for (let item = 0, th = this.getTH(); item < th.length; item++) Infinite.removeElementDOM(th[item].out());
            this.elements.th = [];
            return this;
        }
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
                && checkbox instanceof HeadCheckbox) tr.insertBefore(checkbox.out(), tr.firstChild);

            infinite.getBody().update();

            return this;
        }
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
        filter() {
            this.getInfinite().setRequestOffset(0).request();
        }
    }

    class BodyTD {

        constructor(tr, value, matrix) {
            this.tr = tr;
            this.value = value;
            this.matrix = matrix;

            this.elements = {};

            this.build();
        }

        getTR() {
            return this.tr;
        }
        getMatrix() {
            return this.matrix;
        }
        getMatrixName() {
            let matrix = this.getMatrix();
            if (matrix.hasOwnProperty('name')) return matrix.name;
            return null;
        }
        getValue() {
            return this.value;
        }
        getTD() {
            if (this.elements.hasOwnProperty('td')) return this.elements.td;
            this.elements.td = document.createElement('td');
            return this.elements.td;
        }
        build() {
            let matrix = this.getMatrix();
            if (typeof matrix.handling !== 'function') return this;

            let value = this.getValue(),
                exposed = value === null
                    || typeof value === 'undefined'
                    ? Text.void()
                    : value;

            let element = matrix.handling.call(this, exposed);
            this.getTD().appendChild(element);

            return this;
        }
        out() {
            return this.getTD();
        }
    }

    class BodyTR {

        static data() {
            return 'data-infinite-row-id';
        }

        constructor(body, matrix) {
            this.body = body;
            this.matrix = matrix;

            this.elements = {};
            this.elements.td = [];
            this.elements.checkbox = new window.Infinite.Body.Checkbox(this);

            this.build();
        }

        getBody() {
            return this.body;
        }
        getMatrix() {
            return this.matrix;
        }
        getCheckbox() {
            return this.elements.checkbox;
        }
        getTD() {
            return this.elements.td;
        }
        findTD(name) {
            let td = this.getTD();
            for (let item = 0; item < td.length; item++)
                if (name === td[item].getMatrixName())
                    return td[item];
            return null;
        }
        getTR() {
            if (this.elements.hasOwnProperty('tr')) return this.elements.tr;
            this.elements.tr = document.createElement('tr');
            return this.elements.tr;
        }
        emptyTR() {
            let tr = this.getTR();
            while (tr.firstChild !== null) Infinite.removeElementDOM(tr.firstChild);
            return this;
        }
        emptyTD() {
            this.emptyTR();
            this.elements.td = [];
            return this;
        }
        build() {
            let infinite = this.getBody().getInfinite(),
                unique = infinite.getResponseUnique(),
                matrix = this.getMatrix();
            if (matrix.hasOwnProperty(unique)) this.getTR().setAttribute(this.constructor.data(), matrix[unique]);

            this.emptyTD();

            let structure = infinite.getOptionStructure();
            if (structure.length !== 0) for (let item = 0, td = this.getTD(); item < structure.length; item++) {
                let nullable = !matrix.hasOwnProperty(structure[item].name) || null === matrix[structure[item].name],
                    column = new window.Infinite.Body.TD(this, nullable ? Text.void() : matrix[structure[item].name], structure[item]);
                td.push(column);
            }

            return this;
        }
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
            if (event.length === 0 || !(checkbox instanceof BodyCheckbox)) {
                tr.removeEventListener('click', this, false);
                tr.removeAttribute(Infinite.handle());
                tr.classList.remove('use');

                return this;
            }

            tr.insertBefore(checkbox.out(), tr.firstChild);

            let handle = tr.getAttribute(Infinite.handle());
            if (handle === null || handle.toString().length === 0) {
                tr.setAttribute(Infinite.handle(), ':click');
                tr.addEventListener('click', this, false);
                tr.classList.add('use');
            }

            let status = infinite.getHead().getCheckbox().getInput().checked;
            if (status === true) checkbox.setInput(status);

            return this;
        }
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
        click(event) {
            let checkbox = this.getCheckbox(),
                input = checkbox.getInput(),
                checked = input.checked === false;
            checkbox.setInput(checked);

            event.stopPropagation();
        }
        change() {
            let input = this.getCheckbox().getInput(),
                status = input.checked === true;

            let action = status ? 'add' : 'remove';
            this.getTR().classList[action]('active');
        }
    }

    class Body {

        constructor(infinite) {
            this.infinite = infinite;
            this.elements = {
                tr: {}
            };
        }

        getInfinite() {
            return this.infinite;
        }
        getTbody() {
            if (this.elements.hasOwnProperty('tbody')) return this.elements.tbody;
            this.elements.tbody = document.createElement('tbody');
            return this.elements.tbody;
        }
        emptyTbody() {
            let tbody = this.getTbody();
            while (tbody.firstChild !== null) Infinite.removeElementDOM(tbody.firstChild);
            return this;
        }
        getTR() {
            return this.elements.tr;
        }
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
        findTR(key) {
            let tr = this.getTR();
            if (tr.hasOwnProperty(key)) return tr[key];
            return null;
        }
        removeTR(key) {
            let finded = this.findTR(key),
                tr = this.getTR();
            if (null === finded) return this;

            Infinite.removeElementDOM(finded.getTR());
            delete tr[key];
            return this;
        }
        getChecked() {
            let tr = this.getTR(), response = [];
            for (let item in tr) {
                let checkbox = tr[item].getCheckbox().getInput();
                if (checkbox.checked !== true) continue;

                response.push(item);
            }
            return response;
        }
        update() {
            this.emptyTbody();
            let tr = this.getTR(), tbody = this.getTbody();
            for (let item in tr) tbody.insertBefore(tr[item].update().getTR(), this.sort(tr[item]));
            return true;
        }
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
        sort(line) {
            let tr = this.getTR(), keys = Object.keys(tr);
            if (0 === keys.length) return null;

            for (let item = 0, tbody = this.getTbody(); item < tbody.childNodes.length; item++) {
                let data = tbody.childNodes[item].getAttribute(BodyTR.data());
                if (data === null
                    || !tr.hasOwnProperty(data)) continue;

                let multisort = this.compare(line, tr[data]);
                if (multisort === false) continue;

                return tbody.childNodes[item];
            }

            return null;
        }
        destroy() {
            let tr = this.getTR();
            for (let item in tr) this.removeTR(item);
            return this;
        }
        static casting(td) {
            let value = td.getValue(),
                matrix = td.getMatrix();
            switch (true) {
                case matrix.type === ':number':
                    return Number(value);
                case matrix.type === ':datetime'
                    && matrix.patterns.hasOwnProperty(0)
                    && matrix.patterns[0].hasOwnProperty('from'):

                    let c = new Parserdate(value, matrix.patterns[0].from),
                        parsed = c.getParsed();
                    return parsed;
                default:
                    return value.toString().toLowerCase();
            }
        }
    }

    class LoaderScroll {

        constructor(infinite) {
            this.infinite = infinite;
            this.elements = {};
        }

        getInfinite() {
            return this.infinite;
        }
        getLoader() {
            if (this.elements.hasOwnProperty('loader')) return this.elements.loader;
            let spinner = this.getSpinner();
            this.elements.loader = document.createElement('div');
            this.elements.loader.className = 'result loader';
            this.elements.loader.appendChild(spinner);
            return this.elements.loader;
        }
        getTD() {
            if (this.elements.hasOwnProperty('td')) return this.elements.td;
            let loader = this.getLoader();
            this.elements.td = document.createElement('td');
            this.elements.td.appendChild(loader);
            return this.elements.td;
        }
        getTR() {
            if (this.elements.hasOwnProperty('tr')) return this.elements.tr;
            let td = this.getTD();
            this.elements.tr = document.createElement('tr');
            this.elements.tr.appendChild(td);
            return this.elements.tr;
        }
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
        show() {
            let tr = this.getTR();
            this.getInfinite().getBody().getTbody().appendChild(tr);
            this.grid();
            return this;
        }
        hide() {
            let tr = this.getTR();
            Infinite.removeElementDOM(tr);
            return this;
        }
        status() {
            return this.getTR().parentNode !== null;
        }
        grid() {
            let count = this.getInfinite().getHead().getTHCount();
            this.getTD().setAttribute('colSpan', count);
            return this;
        }
    }

    class Preloader {

        constructor(infinite) {
            this.infinite = infinite;
            this.elements = {};
        }

        getInfinite() {
            return this.infinite;
        }
        getPreloader() {
            if (this.elements.hasOwnProperty('preloader')) return this.elements.preloader;

            this.elements.preloader = document.createElement('div');
            this.elements.preloader.className = 'table-infinite-preloader';

            return this.elements.preloader;
        }
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
        showSpinner() {
            let spinner = this.getSpinner();
            this.getPreloader().appendChild(spinner);
            return this;
        }
        hideSpinner() {
            let spinner = this.getSpinner();
            Infinite.removeElementDOM(spinner);
            return this;
        }
        show() {
            let wrapper = this.getInfinite().getTable(), preloader = this.getPreloader();
            if (wrapper !== null && wrapper.parentNode instanceof HTMLElement) wrapper.parentNode.appendChild(preloader);
            return this;
        }
        hide() {
            let preloader = this.getPreloader();
            Infinite.removeElementDOM(preloader);
            return this;
        }
        status() {
            return this.getPreloader().parentNode !== null;
        }
    }

    class Notice {

        static void() {
            return 'developer\\infinite\\notice\\empty';
        }

        constructor(infinite) {
            this.infinite = infinite;
            this.elements = {};

            this.empty = this.constructor.void();
        }

        getInfinite() {
            return this.infinite;
        }
        setTextEmpty(text) {
            this.empty = text;
            return this;
        }
        getTextEmpty() {
            return this.empty;
        }
        getTR() {
            if (this.elements.hasOwnProperty('tr')) return this.elements.tr;
            let td = this.getTD();
            this.elements.tr = document.createElement('tr');
            this.elements.tr.appendChild(td);
            return this.elements.tr;
        }
        getTD() {
            if (this.elements.hasOwnProperty('td')) return this.elements.td;
            let notice = this.getNotice();
            this.elements.td = document.createElement('td');
            this.elements.td.appendChild(notice);
            return this.elements.td;
        }
        getNotice() {
            if (this.elements.hasOwnProperty('notice')) return this.elements.notice;
            this.elements.notice = document.createElement('div');
            this.elements.notice.className = 'inside result error';
            return this.elements.notice;
        }
        setText(message) {
            let text = document.createTextNode(message), notice = this.getNotice();
            notice.innerText = '';
            notice.appendChild(text);
            return this;
        }
        show() {
            let tr = this.getTR();
            this.getInfinite().getBody().getTbody().appendChild(tr);
            this.grid();
            return this;
        }
        hide() {
            let tr = this.getTR();
            Infinite.removeElementDOM(tr);
            return this;
        }
        status() {
            return this.getTR().parentNode !== null;
        }
        grid() {
            let count = this.getInfinite().getHead().getTHCount();
            this.getTD().setAttribute('colSpan', count);
            return this;
        }
    }

    class Infinite {

        static handle() {
            return 'data-handle-event';
        }

        constructor() {
            this.debug = true;
            this.elements = {
                loader: {
                    // scroll: LoaderScroll
                    // preloader: Preloader
                }
                // head: Head
                // body: Body
                // notice: Notice
                // setting: Infinite.Plugin.Setting
            };

            this.xhr = {
                url: null,
                offset: 0,
                count: 96,
                iterate: {
                    array: 'result',
                    id: 'id'
                },
                construct: new XMLHttpRequest()
            };
            this.xhr.construct.onreadystatechange = this.result.bind(this);

            this.events = {};
            this.events.select = []; // (array)

            this.option = {};
            this.option.structure = [];
            this.option.setting = [];

            this.elements.head = new window.Infinite.Head(this);
            this.elements.body = new window.Infinite.Body(this);

            this.elements.loader.scroll = new window.Infinite.Preloader.Scroll(this);
            this.elements.notice = new window.Infinite.Notice(this);

            if (typeof window.Infinite.Plugin.Setting === 'function') {
                this.elements.setting = new Infinite.Plugin.Setting(this);
                this.elements.setting.setHardcode('widget', 'infinite');
            }

            this.elements.loader.preloader = new window.Infinite.Preloader(this);
        }

        getHead() {
            return this.elements.head;
        }
        getBody() {
            return this.elements.body;
        }
        getLoaderScroll() {
            return this.elements.loader.scroll;
        }
        getPreloader() {
            return this.elements.loader.preloader;
        }
        getSetting() {
            return this.elements.setting;
        }
        getNotice() {
            return this.elements.notice;
        }
        setDebug(status) {
            this.debug = status;
            return this;
        }
        getDebug() {
            return this.debug;
        }
        setContainer(container) {
            if (container instanceof HTMLElement) container.setAttribute(this.constructor.handle(), ':scroll');
            this.elements.container = container;
            return this;
        }
        getContainer() {
            if (this.elements.hasOwnProperty('container')) return this.elements.container;
            return null;
        }
        setOptionStructure(human) {
            this.option.structure = human;
            this.getBody().destroy();
            this.getHead().build();

            let setting = this.getSetting();
            if (setting === null
                || typeof window.Infinite.Setting !== 'function'
                || false === setting instanceof Infinite.Plugin.Setting) return this;

            setting.out();

            return this;
        }
        getOptionStructure() {
            return this.option.structure;
        }
        setOptionSetting(option) {
            if (Array.isArray(option)) this.option.setting = option.filter(function (item) {
                return item.hasOwnProperty('name') && item.hasOwnProperty('order');
            });

            this.getHead().update();

            return this;
        }
        getOptionSetting() {
            return this.option.setting;
        }
        getXHR() {
            return this.xhr.construct;
        }
        setRequestUrl(url) {
            this.xhr.url = url;
            return this;
        }
        getRequestUrl() {
            return this.xhr.url;
        }
        setRequestOffset(offset) {
            this.xhr.offset = offset;
            return this;
        }
        getRequestOffset() {
            return this.xhr.offset;
        }
        setRequestCount(count_max) {
            this.xhr.count = count_max;
            return this;
        }
        getRequestCount() {
            return this.xhr.count;
        }
        setResponseKey(key) {
            this.xhr.iterate.array = key;
            return this;
        }
        getResponseKey() {
            return this.xhr.iterate.array;
        }
        setResponseUnique(key) {
            this.xhr.iterate.id = key;
            return this;
        }
        getResponseUnique() {
            return this.xhr.iterate.id;
        }
        addEventSelect(func) {
            if (func instanceof CustomEvent) this.events.select.push(func);
            return this;
        }
        getEventSelect() {
            return this.events.select;
        }
        request() {
            let xhr = this.getXHR(), offset = this.getRequestOffset(), url = this.getRequestUrl() + '?offset=' + offset + '&count=' + this.getRequestCount();
            xhr.open('POST', url, !0);

            let container = this.getContainer();
            if (container === null) return;
            container.removeEventListener('scroll', this, false);

            let body = this.getBody();
            if (offset === 0) {
                let tr = body.getTR();
                for (let item in tr) {
                    let checkbox = tr[item].getCheckbox();
                    if (checkbox instanceof BodyCheckbox && checkbox.getInput().checked === true) continue;

                    body.removeTR(item);
                }
            }

            this.getLoaderScroll().show();
            this.getNotice().hide();

            let data = new FormData(), thead = this.getHead(), th = thead.getTH();
            for (let item = 0; item < th.length; item++) {
                if (false === th[item] instanceof HeadTH) continue;

                let plugin = th[item].getPlugin(), name = th[item].getMatrixName();
                if (typeof plugin.getInput !== 'function') continue;

                let input = plugin.getInput();
                data.append(name, input.value);
            }
            xhr.send(data);
        }
        result() {
            let xhr = this.getXHR();

            if (XMLHttpRequest.DONE !== xhr.readyState
                || 200 !== xhr.status) return;

            this.getLoaderScroll().hide();

            let response;
            try {
                response = JSON.parse(xhr.responseText);
            }
            catch (message) {
                response = {
                    'status': false,
                    'notice': message
                };
            }

            let key = this.getResponseKey();

            if (response.status === false || !response.hasOwnProperty(key)) {
                let notice = response.hasOwnProperty('notice') ? response.notice : 'Unmanaged error';
                this.getNotice().setText(notice).show();

                return;
            }

            let offset = this.getRequestOffset() + this.getRequestCount();
            this.setRequestOffset(offset);

            let container = this.getContainer();
            if (container === null) return;

            if (response[key].length > 0) {
                let body = this.getBody();
                for (let item = 0; item < response[key].length; item++)
                    body.addTR(response[key][item]);
                body.update();
            }

            let scroller = container.scrollHeight - container.offsetHeight - container.scrollTop <= 0;
            if ((response.hasOwnProperty('complete') && response.complete === false) && true === scroller
                || (0 !== response[key].length && true === scroller)) return this.request();

            if (response[key].length === 0) {
                let tr = this.getBody().getTR(),
                    count = Object.keys(tr);
                if (count.length === 0) {
                    let notice = this.getNotice(), text = notice.getTextEmpty();
                    notice.setText(text).show();
                }

                return;
            }

            container.addEventListener('scroll', this, false);
        }
        filter(ev) {
            this.setRequestOffset(0);
            this.request.call(this);
            ev.stopPropagation();
        }
        getTable() {
            if (this.elements.hasOwnProperty('table')) return this.elements.table;
            let thead = this.getHead().getThead(), tbody = this.getBody().getTbody();
            this.elements.table = document.createElement('table');
            this.elements.table.className = 'infinite';
            this.elements.table.appendChild(thead);
            this.elements.table.appendChild(tbody);
            return this.elements.table;
        }
        out() {
            this.getHead().update();
            return this.getTable();
        }
        handleEvent(event) {
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
        close(event) {
            let th = this.getHead().getTH();
            for (let item = 0; item < th.length; item++) {
                if (th[item] instanceof HeadTH === false) continue;

                let plugin = th[item].getPlugin();
                if (typeof plugin.close !== 'function') continue;

                plugin.close(event);
            }
        }
        scroll(event) {
            let container = this.getContainer();
            if (container === null
                || container.scrollHeight - container.offsetHeight - container.scrollTop - 1 > 0) return;

            container.removeEventListener(event.type, this);

            this.request.call(this);
        }
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
        static removeElementDOM(element) {
            let parent = element === null || typeof element === 'undefined' || typeof element.parentNode === 'undefined' ? null : element.parentNode;
            if (parent === null) return false;
            parent.removeChild(element);
            return true;
        }
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