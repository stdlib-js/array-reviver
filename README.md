<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# reviveTypedArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Revive a JSON-serialized typed array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
reviveTypedArray = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-reviver@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var reviveTypedArray = require( 'path/to/vendor/umd/array-reviver/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-reviver@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.reviveTypedArray;
})();
</script>
```

#### reviveTypedArray( key, value )

Revives a JSON-serialized typed array.

```javascript
var parseJSON = require( '@stdlib/utils-parse-json' );

var str = '{"type":"Float64Array","data":[5,3]}';

var arr = parseJSON( str, reviveTypedArray );
// returns <Float64Array>[ 5.0, 3.0 ]
```

For details on the JSON serialization format, see [`@stdlib/array/to-json`][@stdlib/array/to-json].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-reviver@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var arr = new Float64Array( [ 5.0, 3.0 ] );
var str = JSON.stringify( typedarray2json( arr ) );
// returns '{"type":"Float64Array","data":[5,3]}'

var out = parseJSON( str, reviveTypedArray );
if ( out instanceof Error ) {
    throw out;
}
console.log( out );
// => <Float64Array>[ 5.0, 3.0 ]

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/to-json`][@stdlib/array/to-json]</span><span class="delimiter">: </span><span class="description">return a JSON representation of a typed array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-reviver.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-reviver

[test-image]: https://github.com/stdlib-js/array-reviver/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-reviver/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-reviver/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-reviver?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-reviver.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-reviver/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-reviver/tree/deno
[umd-url]: https://github.com/stdlib-js/array-reviver/tree/umd
[esm-url]: https://github.com/stdlib-js/array-reviver/tree/esm
[branches-url]: https://github.com/stdlib-js/array-reviver/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-reviver/main/LICENSE

[@stdlib/array/to-json]: https://github.com/stdlib-js/array-to-json/tree/umd

</section>

<!-- /.links -->
