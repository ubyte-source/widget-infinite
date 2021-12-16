(function (window) {

	'use strict';

	class NotFound {

		static text() {
			return 'developer\\infinite\\search\\not_found';
		}

		constructor(search) {
			this.search = search;
			this.elements = {};

			this.setText(this.constructor.text());
		}

		getSearch() {
			return this.search;
		}
		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let span = this.getText();
			this.elements.content = document.createElement('li');
			this.elements.content.className = 'not-found';
			this.elements.content.appendChild(span);
			return this.elements.content;
		}
		getText() {
			if (this.elements.hasOwnProperty('span')) return this.elements.span;
			this.elements.span = document.createElement('span');
			return this.elements.span;
		}
		setText(text) {
			let node = document.createTextNode(text), span = this.getText();
			span.innerText = '';
			span.appendChild(node);
			return this;
		}
		out() {
			return this.getContent();
		}
	}

	class Search {

		static icon() {
			return 'material-icons filter_list';
		}
		static placeholder() {
			return 'developer\\infinite\\search\\placeholder';
		}

		constructor(setting) {
			this.setting = setting;

			this.elements = {};
			this.elements.notfound = new window.Infinite.Plugin.Setting.Search.NotFound(this);
		}

		getSetting() {
			return this.setting;
		}
		getNotFound() {
			return this.elements.notfound;
		}
		getField() {
			if (this.elements.hasOwnProperty('field')) return this.elements.field;
			let input = this.getInput();
			this.elements.field = document.createElement('div');
			this.elements.field.className = 'field';
			this.elements.field.appendChild(input);
			return this.elements.field;
		}
		getInput() {
			if (this.elements.hasOwnProperty('input')) return this.elements.input;
			this.elements.input = document.createElement('input');
			this.elements.input.type = 'text';
			this.elements.input.setAttribute(Infinite.handle(), ':filter');
			this.elements.input.setAttribute('placeholder', this.constructor.placeholder());
			this.elements.input.addEventListener('input', this, false);
			return this.elements.input;
		}
		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let filter = this.constructor.icon(), icon = Infinite.getIcon(filter), field = this.getField();
			this.elements.content = document.createElement('div');
			this.elements.content.className = 'search';
			this.elements.content.appendChild(icon);
			this.elements.content.appendChild(field);
			return this.elements.content;
		}
		out() {
			return this.getContent();
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

		static icons() {
			return {
				check: 'arrow_drop_up',
				blank: 'arrow_drop_down'
			};
		}

		constructor(li) {
			this.li = li;
			this.elements = {};
		}

		getLI() {
			return this.li;
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
		getInput() {
			if (this.elements.hasOwnProperty('input')) return this.elements.input;
			this.elements.input = document.createElement('input');
			this.elements.input.type = 'checkbox';
			this.elements.input.setAttribute(Infinite.handle(), ':change');
			this.elements.input.addEventListener('change', this, false);
			return this.elements.input;
		}
		setInput(checked) {
			let input = this.getInput(), trigger = new Event('change', {
				'cancelable': false,
				'bubbles': true
			});

			input.checked = checked;
			input.dispatchEvent(trigger);

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
		click() {
			let input = this.getInput(), checked = input.checked === false;
			this.setInput(checked);
			this.getLI().getUL().getSetting().request();
		}
		change() {
			let input = this.getInput(), icons = this.constructor.icons(), icon = input.checked === true ? icons.check : icons.blank;
			this.setIcon(icon);
		}
	}

	class CheckboxVisibility extends CheckboxOrder {
		static icons() {
			return {
				check: 'visibility',
				blank: 'visibility_off'
			};
		}
	}

	class Li {

		static data() {
			return 'data-item-id';
		}
		static drag() {
			return 'material-icons drag_handle';
		}

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

		getUL() {
			return this.ul;
		}
		getOrder() {
			return this.elements.order;
		}
		getVisibility() {
			return this.elements.visibility;
		}
		getDrag() {
			if (this.elements.hasOwnProperty('drag')) return this.elements.drag;
			let icon = Infinite.getIcon(this.constructor.drag());
			this.elements.drag = document.createElement('div');
			this.elements.drag.className = 'option handle';
			this.elements.drag.appendChild(icon);
			return this.elements.drag;
		}
		getOption() {
			if (this.elements.hasOwnProperty('option')) return this.elements.option;
			let order = this.getOrder().getIcon(), visibility = this.getVisibility().getIcon();
			this.elements.option = document.createElement('div');
			this.elements.option.className = 'option right';
			this.elements.option.appendChild(order);
			this.elements.option.appendChild(visibility);
			return this.elements.option;
		}
		getLabel() {
			if (this.elements.hasOwnProperty('label')) return this.elements.label;
			this.elements.label = document.createElement('label');
			return this.elements.label;
		}
		setLabel(text) {
			let node = document.createTextNode(text), label = this.getLabel();
			label.innerText = '';
			label.appendChild(node);
			return this;
		}
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
		out() {
			return this.getLI();
		}
	}

	class Ul {

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

		getSetting() {
			return this.setting;
		}
		getSortable() {
			return this.sortable;
		}
		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let ul = this.getUL();
			this.elements.content = document.createElement('div');
			this.elements.content.className = 'list';
			this.elements.content.appendChild(ul);
			return this.elements.content;
		}
		getUL() {
			if (this.elements.hasOwnProperty('ul')) return this.elements.ul;
			this.elements.ul = document.createElement('ul');
			return this.elements.ul;
		}
		getLI() {
			return this.elements.li;
		}
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
		addLI(structure) {
			let li = new window.Infinite.Plugin.Setting.Ul.Li(this, structure);
			this.elements.li.push(li);
			this.getUL().appendChild(li.out());
			return this;
		}
		reset() {
			if (this.elements.li.length === 0) return this;
			for (let item = 0; item < this.elements.li.length; item++) Infinite.removeElementDOM(this.elements.li[item].out());
			this.elements.li = [];
			return this;
		}
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
		out() {
			return this.getContent();
		}
	}

	class Notice {

		static retry() {
			return 'Click here to try again now!';
		}

		constructor(setting) {
			this.setting = setting;
			this.elements = {};
		}

		getSetting() {
			return this.setting;
		}
		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let message = this.getMessage(), reload = this.getReload();
			this.elements.content = document.createElement('div');
			this.elements.content.className = 'notice error';
			this.elements.content.appendChild(message);
			this.elements.content.appendChild(reload);
			return this.elements.content;
		}
		getMessage() {
			if (this.elements.hasOwnProperty('message')) return this.elements.message;
			this.elements.message = document.createElement('span');
			return this.elements.message;
		}
		setMessage(message) {
			let node = document.createTextNode(message);
			let new_message = this.getMessage();
			new_message.innerText = '';
			new_message.appendChild(node);
			return this;
		}
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
		show() {
			let content = this.getContent(), list = this.getSetting().getUL().getContent();
			list.insertBefore(content, list.firstChild);
			return this;
		}
		hide() {
			let content = this.getContent();
			Infinite.removeElementDOM(content);
			return this;
		}
	}

	class Setting {

		static field() {
			return 'value';
		}

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

		getInfinite() {
			return this.infinite;
		}
		getUL() {
			return this.elements.ul;
		}
		getSearch() {
			return this.elements.search;
		}
		getNotice() {
			return this.elements.notice;
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
		setHardcode(key, value) {
			this.xhr.hardcode[key] = value;
			return this;
		}
		getHardcode() {
			return this.xhr.hardcode;
		}
		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let list = this.getUL().out(), search = this.getSearch().out();
			this.elements.content = document.createElement('div');
			this.elements.content.id = 'setting';
			this.elements.content.appendChild(search);
			this.elements.content.appendChild(list);
			return this.elements.content;
		}
		out() {
			this.getUL().update();
			return this.getContent();
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