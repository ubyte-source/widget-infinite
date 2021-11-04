(function (window) {

    'use strict';

    class Handler {

        constructor(plugin) {
            this.plugin = plugin;
            this.elements = {};
        }

        getPlugin() {
            return this.plugin;
        }
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
        getAction() {
            if (this.elements.hasOwnProperty('action')) return this.elements.action;
            let icon = Infinite.getIcon('material-icons expand_more');
            this.elements.action = document.createElement('div');
            this.elements.action.className = 'action';
            this.elements.action.appendChild(icon);
            return this.elements.action;
        }
        setIcon(clonable) {
            let content = this.getContent();

            this.removeIcon();
            this.elements.icon = clonable.cloneNode(true);

            content.classList.add('icon');
            content.insertBefore(this.elements.icon, content.firstChild);

            return this;
        }
        getIcon() {
            if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
            return null;
        }
        removeIcon() {
            let icon = this.getIcon();
            if (icon === null) return this;

            Infinite.removeElementDOM(icon);
            this.getContent().classList.remove('icon');

            delete this.elements.icon;

            return this;
        }
        setLabel(text) {
            let node = document.createTextNode(text), label = this.getLabel();
            label.innerText = '';
            label.appendChild(node);
            return this;
        }
        getLabel() {
            if (this.elements.hasOwnProperty('label')) return this.elements.label;
            this.elements.label = document.createElement('b');
            this.elements.label.className = 'label';
            return this.elements.label;
        }
        cleanLabel() {
            let label = this.getLabel();
            while (label.firstChild) Infinite.removeElementDOM(label.lastChild);
            return this;
        }
        getSearch() {
            if (this.elements.hasOwnProperty('search')) return this.elements.search;
            this.elements.search = document.createElement('input');
            this.elements.search.type = 'text';
            this.elements.search.setAttribute(Infinite.handle(), 'input:find');
            this.elements.search.addEventListener('input', this.getPlugin(), false);
            return this.elements.search;
        }
        showSearch() {
            let search = this.getSearch();
            this.cleanLabel().getLabel().appendChild(search);
            return this;
        }
        hideSearch() {
            let search = this.getSearch();
            Infinite.removeElementDOM(search);
            return this;
        }
    }

    class Icon {

        static default() {
            return 'material-icons filter_list';
        }

        constructor(li) {
            this.li = li;
            this.elements = {};
        }

        getLI() {
            return this.li;
        }
        get() {
            if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
            let icon = this.constructor.default();
            this.set(icon);
            return this.elements.icon;
        }
        set(icon) {
            this.elements.icon = Infinite.getIcon(icon);
            return this;
        }
        show() {
            let wrapper = this.getLI().getWrapper(), icon = this.get();
            wrapper.insertBefore(icon, wrapper.firstChild);
            return this;
        }
        hide() {
            let icon = this.get();
            Infinite.removeElementDOM(icon);
            return this;
        }
        status() {
            return this.get().parentNode !== null;
        }
        out() {
            return this.get();
        }
    }

    class Li {

        static data() {
            return 'data-infinite-dropdown-li-value';
        }

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

        getPlugin() {
            return this.plugin;
        }
        getID() {
            return this.options.id;
        }
        getIcon() {
            return this.elements.icon;
        }
        getLabel() {
            if (this.elements.hasOwnProperty('label')) return this.elements.label;
            this.elements.label = document.createElement('span');
            return this.elements.label;
        }
        getWrapper() {
            if (this.elements.hasOwnProperty('wrapper')) return this.elements.wrapper;
            let label = this.getLabel();
            this.elements.wrapper = document.createElement('div');
            this.elements.wrapper.className = 'wrapper ellipsis';
            this.elements.wrapper.appendChild(label);
            return this.elements.wrapper;
        }
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
        out() {
            return this.getLI();
        }
    }

    class Dropdown extends Infinite.Plugin {

        static text() {
            return 'developer\\infinite\\dropdown\\pattern\\list\\text';
        }
        static void() {
            return 'd64bc1eb577b062fa13ed20ddbc130f3';
        }
        static found() {
            return 'material-icons search';
        }

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

        getTH() {
            return this.th;
        }
        getHandler() {
            return this.elements.handler;
        }
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
        getMatrixPatternsNormalize(value) {
            if (!Array.isArray(value)) return value;
            let result = {};
            for (let item = 0; item < value.length; item++) for (let x in value[item]) result[x] = Object.assign({}, value[item][x]);
            return result;
        }
        setOptionLimit(limit) {
            this.options.limit = limit;
            return this;
        }
        getOptionLimit() {
            return this.options.limit;
        }
        getOptionVoid() {
            return this.options.void;
        }
        setValue(value) {
            let event = document.createEvent('HTMLEvents'), input = this.getInput(), option = this.getOptionVoid().getID();
            let new_value = option !== value ? value : '';
            if (new_value === input.value) return this;

            input.value = new_value

            event.initEvent('change', true, false);
            input.dispatchEvent(event);

            return this;
        }
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
        getInput() {
            return this.elements.input;
        }
        getUL() {
            if (this.elements.hasOwnProperty('ul')) return this.elements.ul;
            this.elements.ul = document.createElement('ul');
            this.elements.ul.className = 'option';
            this.getHandler().getContent().appendChild(this.elements.ul);
            return this.elements.ul;
        }
        getList() {
            if (!this.elements.hasOwnProperty('list')) this.elements.list = {};
            return this.elements.list;
        }
        emptyList() {
            let list = this.getList();
            for (let item in list) {
                Infinite.removeElementDOM(list[item].getLI());
                delete list[item];
            }
            return this;
        }
        findLi(value) {
            let list = this.getList();
            for (let item in list) {
                if (list[item].getID() !== value.toString()) continue;
                return list[item];
            }
            return null;
        }
        getLiFirst() {
            let list = this.getList();
            for (let item in list) return list[item];
            return null;
        }
        populateUl(patterns) {
            let should = this.populateUlHaveIcon(patterns);
            if (should === false) this.getHandler().removeIcon();

            let object = Object.assign({}, patterns), ul = this.getUL(), list = this.emptyList().getList(), option = this.getOptionVoid(), id = option.getID();

            list[id] = option;
            list[id].getIcon()[should ? 'show' : 'hide']();
            ul.appendChild(list[id].out());

            this.setSelected(id);

            for (let item in object) {
                let text = object[item].hasOwnProperty('text') ? object[item].text : this.constructor.text(), icon = object[item].hasOwnProperty('icon') ? object[item].icon : Icon.default();
                list[item] = new window.Infinite.Plugin.Dropdown.Li(this, item, text, icon);
                if (should) list[item].getIcon().show();
                ul.appendChild(list[item].out());
            }

            return this;
        }
        populateUlHaveIcon(patterns) {
            for (let i in patterns) {
                if (!patterns[i].hasOwnProperty('icon')) continue;
                return true;
            }
            return false;
        }
        out() {
            return this.getHandler().getContent();
        }
        show() {

            let ul = this.getUL(), search = this.getHandler().getSearch();

            ul.classList.add('active');
            ul.scrollTop = ul.scrollLeft = 0;

            search.value = '';

            if (search.parentNode !== null) {
                let event = document.createEvent('HTMLEvents');
                event.initEvent('focus', true, false);
                search.dispatchEvent(event);
            }

            return this;
        }
        hide() {
            this.getUL().classList.remove('active');
            return this;
        }
        status() {
            return this.getUL().classList.contains('active');
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
        close(event) {
            let plugin = Infinite.closestAttribute(event.target, 'data-infinite-plugin'), status = this.status();
            if (plugin === 'dropdown'
                || status === false) return;

            let input = this.getInput();
            this.setSelected(input.value);

            this.hide();
        }
        reset() {
            let list = this.getLiFirst();
            if (list === null) return this;

            let id = list.getID();
            this.setSelected(id);

            return this;
        }
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

            let trigger = document.createEvent('HTMLEvents');
            trigger.initEvent('click', true, false);
            actived[0].dispatchEvent(trigger);
        }
        select(event) {
            let data = Li.data(), value = Infinite.closestAttribute(event.target, data), id = value !== null ? value : this.getOptionVoid().getID();
            this.setSelected(id);
        }
    }

    window.Infinite.Plugin.Dropdown = Dropdown;
    window.Infinite.Plugin.Dropdown.Handler = Handler;
    window.Infinite.Plugin.Dropdown.Li = Li;
    window.Infinite.Plugin.Dropdown.Li.Icon = Icon;

})(window);