# Notes

Almost always debounce scroll events to improve performance.
Debouncing means lessening the frequency of detection of that event

window properties:
scrollY
innerHeight

image properties:
offsetTop
height

In the code, the key concept is that the “middle” variable is stuck to the offset of the window as a whole and the “offsetTop” property is stuck to the image. The middle has been adjusted in a way i.e by subtracting image.height/2 from the total value in such a way that when the middle is greater than offsetTop of the image, the center of the image is below halfway off the screen.
[arjunkhode](http://thesagittariusme.blogspot.com/search/label/JS30?max-results=20)

## Debouncing

Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language.

In JavaScript, a debounce function makes sure that your code is only triggered once per user input. Search box suggestions, text-field auto-saves, and eliminating double-button clicks are all use cases for debounce.

## Window.scrollY

The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically **(from the very top)**. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number. You can get the number of pixels the document is scrolled horizontally from the scrollX property.

```js
// make sure and go down to the second page
if (window.scrollY) {
  window.scroll(0, 0); // reset the scroll position to the top left of the document.
}

window.scrollByPages(1);
```

For cross-browser compatibility, use window.pageYOffset instead of window.scrollY.

### Example

```js
// make sure and go down to the second page
if (window.scrollY) {
  window.scroll(0, 0); // reset the scroll position to the top left of the document.
}

window.scrollByPages(1);
```

## HTMLElement.offsetTop

The HTMLElement.offsetTop read-only property returns the distance of the outer border of the current element relative to the inner border of the top of the offsetParent node.
In our case border of image to top of the window.

## ::before and ::after (CSS)

The ::before and ::after pseudo-elements in CSS allows you to insert content onto a page without it needing to be in the HTML. While the end result is not actually in the DOM, it appears on the page as if it is, and would essentially be like this:

```js
div::before {
  content: "before";
}
div::after {
  content: "after";
}
```
