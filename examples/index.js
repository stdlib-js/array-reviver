/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var Float64Array = require( '@stdlib/array-float64' );
var parseJSON = require( '@stdlib/utils-parse-json' );
var typedarray2json = require( '@stdlib/array-to-json' );
var reviveTypedArray = require( './../lib' );

var arr = new Float64Array( [ 5.0, 3.0 ] );
var str = JSON.stringify( typedarray2json( arr ) );
console.log( str );
// => '{"type":"Float64Array","data":[5,3]}'

var out = parseJSON( str, reviveTypedArray );
if ( out instanceof Error ) {
	throw out;
}
console.log( out );
// => <Float64Array>[ 5.0, 3.0 ]
