# LazyLoad

Loads the content when it appear on screen

  - Simple
  - Without any framework, just Vanilla JS
  - Easy to use

## Using LazyLoad

### Step by step
 1) Add the class defined on the attribute ll.class to the <img> tag (default is lazy-load)
 2) Set the element src attribute as empty and create the attribute "data-src" with the image URL on the element
 3) Just call ll.init and everything should work

Example:
```html
<div>
    <ul>
        <li>
            <img src="" class="lazy-load" data-src="path/to/image.jpg">
        </li>
        <li>
            <img src="" class="lazy-load" data-src="path/to/image.jpg">
        </li>
        <li>
            <img src="" class="lazy-load" data-src="path/to/image.jpg">
        </li>
        <li>
            <img src="" class="lazy-load" data-src="path/to/image.jpg">
        </li>
    </ul>
</div>
<script src="path/to/js/lazyLoad.min.js"></script>
<script>
    var ll = new lazyLoad();
    ll.init();
</script>
```

### Loading it

LazyLoad uses just javascript, so all you have to do is include the lazyLoad.min.js on your page

```html
<script src="assets/js/lazyLoad.min.js"></script>
```

### Setting up
Add the following code to the index of your application
```js
var ll = new lazyLoad();
```

## Methods and configurations

Debug mode (display logs on console):
```js
ll.debugMode = true;
```

Set new data source:
```js
ll.dataSource = 'new-data-attribute';
```

Execute function when element appear on screen
```js
ll.onShow = function(){
    // Do something, young padawan
}
```

Execute function before element appear on screen
```js
ll.onBeforeShow = function(){
    // Do something awesome
}
```

Init the screen scroll monitoration after all config done
```js
ll.init()
```
