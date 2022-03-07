# Documentation widget-infinite

Widget Javascript Infinite is a library used to create an infinite scoll list in your web page.

## Usage

So the basic setup looks something like this:

```
let infinite = new Infinite();
infinite.setRequestUrl('<URI to your API>');
infinite.setResponseKey('data');
infinite.setResponseUnique('id_element');
infinite.getNotice().setTextEmpty('A text to dysplay when the list is empty');
infinite.request();

document.content.appendChild(infinite.out());

```

Here an example of how to use a selected element in the list

```

infinite.addEventSelect(new Infinite.Event(Infinite.Event.always(), function () {
    let element = this.getTR().getBody().getChecked();
    console.log(element)
}));


```

## Structure

library:
- [window.Infinite](https://github.com/energia-source/widget-infinite/tree/main/lib)

<br>

## Contributing

Please read [CONTRIBUTING.md](https://github.com/energia-source/widget-header/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting us pull requests.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/energia-source/widget-header/tags). 

## Authors

* **Paolo Fabris** - *Initial work* - [energia-europa.com](https://www.energia-europa.com/)
* **Gabriele Luigi Masero** - *Developer* - [energia-europa.com](https://www.energia-europa.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details