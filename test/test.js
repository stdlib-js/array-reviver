/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// MODULES //

var tape = require( 'tape' );
var copy = require( '@stdlib/utils-copy' );
var parseJSON = require( '@stdlib/utils-parse-json' );
var toJSON = require( '@stdlib/array-to-json' );
var Float64Array = require( '@stdlib/array-float64' );
var Float32Array = require( '@stdlib/array-float32' );
var Int32Array = require( '@stdlib/array-int32' );
var Uint32Array = require( '@stdlib/array-uint32' );
var Int16Array = require( '@stdlib/array-int16' );
var Uint16Array = require( '@stdlib/array-uint16' );
var Int8Array = require( '@stdlib/array-int8' );
var Uint8Array = require( '@stdlib/array-uint8' );
var Uint8ClampedArray = require( '@stdlib/array-uint8c' );
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex128Array = require( '@stdlib/array-complex128' );
var BooleanArray = require( '@stdlib/array-bool' );
var real = require( '@stdlib/complex-float64-real' );
var realf = require( '@stdlib/complex-float32-real' );
var imag = require( '@stdlib/complex-float64-imag' );
var imagf = require( '@stdlib/complex-float32-imag' );
var reviveTypedArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reviveTypedArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'values which are not recognized as serialized typed arrays are unaffected', function test( t ) {
	var expected;
	var actual;

	expected = {
		'beep': 'boop'
	};
	actual = parseJSON( '{"beep":"boop"}', reviveTypedArray );

	t.deepEqual( actual, expected, 'returns expected value' );

	// Null edge case:
	actual = parseJSON( 'null', reviveTypedArray );
	t.strictEqual( actual, null, 'equals null' );

	t.end();
});

tape( 'an object must have a recognized "type" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = {
		'type': 'Boop',
		'data': [ 5.0, 3.0 ]
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviveTypedArray );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'an object must have a "data" field having an array value in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = {
		'type': 'Float64Array'
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviveTypedArray );

	t.deepEqual( actual, expected, 'returns expected value' );

	json = {
		'type': 'Float64Array',
		'data': null
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviveTypedArray );

	t.deepEqual( actual, expected, 'returns expected value' );

	json = {
		'type': 'Float64Array',
		'data': '[1,2,3]'
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviveTypedArray );

	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function will revive a JSON-serialized typed array (Float64Array)', function test( t ) {
	var json;
	var arr;
	var out;

	arr = new Float64Array( [ 5.0, 3.0 ] );
	json = JSON.stringify( toJSON( arr ) );

	out = parseJSON( json, reviveTypedArray );

	t.strictEqual( out instanceof Float64Array, true, 'is an instance' );
	t.strictEqual( out[ 0 ], arr[ 0 ], true, 'has expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], true, 'has expected value' );

	t.end();
});

tape( 'the function will revive a JSON-serialized typed array (Float32Array)', function test( t ) {
	var json;
	var arr;
	var out;

	arr = new Float32Array( [ 3.14, -3.14 ] );
	json = JSON.stringify( toJSON( arr ) );

	out = parseJSON( json, reviveTypedArray );

	t.strictEqual( out instanceof Float32Array, true, 'is an instance' );
	t.strictEqual( out[ 0 ], arr[ 0 ], true, 'has expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], true, 'has expected value' );

	t.end();
});

tape( 'the function will revive a JSON-serialized typed array (BooleanArray)', function test( t ) {
	var json;
	var arr;
	var out;

	arr = new BooleanArray( [ true, false ] );
	json = JSON.stringify( toJSON( arr ) );

	out = parseJSON( json, reviveTypedArray );

	t.strictEqual( out instanceof BooleanArray, true, 'is an instance' );
	t.strictEqual( out.get( 0 ), arr.get( 0 ), true, 'has expected value' );
	t.strictEqual( out.get( 1 ), arr.get( 1 ), true, 'has expected value' );

	t.end();
});

tape( 'the function will revive a JSON-serialized typed array (Complex64Array)', function test( t ) {
	var json;
	var arr;
	var out;

	arr = new Complex64Array( [ 5.0, 3.0 ] );
	json = JSON.stringify( toJSON( arr ) );

	out = parseJSON( json, reviveTypedArray );

	t.strictEqual( out instanceof Complex64Array, true, 'is an instance' );
	t.strictEqual( realf( out.get( 0 ) ), realf( arr.get( 0 ) ), true, 'has expected value' );
	t.strictEqual( imagf( out.get( 0 ) ), imagf( arr.get( 0 ) ), true, 'has expected value' );

	t.end();
});

tape( 'the function will revive a JSON-serialized typed array (Complex128Array)', function test( t ) {
	var json;
	var arr;
	var out;

	arr = new Complex128Array( [ 5.0, 3.0 ] );
	json = JSON.stringify( toJSON( arr ) );

	out = parseJSON( json, reviveTypedArray );

	t.strictEqual( out instanceof Complex128Array, true, 'is an instance' );
	t.strictEqual( real( out.get( 0 ) ), real( arr.get( 0 ) ), true, 'has expected value' );
	t.strictEqual( imag( out.get( 0 ) ), imag( arr.get( 0 ) ), true, 'has expected value' );

	t.end();
});

tape( 'the function will revive a JSON-serialized typed array (Int32Array)', function test( t ) {
	var json;
	var arr;
	var out;

	arr = new Int32Array( [ 5, -3 ] );
	json = JSON.stringify( toJSON( arr ) );

	out = parseJSON( json, reviveTypedArray );

	t.strictEqual( out instanceof Int32Array, true, 'is an instance' );
	t.strictEqual( out[ 0 ], arr[ 0 ], true, 'has expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], true, 'has expected value' );

	t.end();
});

tape( 'the function will revive a JSON-serialized typed array (Uint32Array)', function test( t ) {
	var json;
	var arr;
	var out;

	arr = new Uint32Array( [ 5, 3 ] );
	json = JSON.stringify( toJSON( arr ) );

	out = parseJSON( json, reviveTypedArray );

	t.strictEqual( out instanceof Uint32Array, true, 'is an instance' );
	t.strictEqual( out[ 0 ], arr[ 0 ], true, 'has expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], true, 'has expected value' );

	t.end();
});

tape( 'the function will revive a JSON-serialized typed array (Int16Array)', function test( t ) {
	var json;
	var arr;
	var out;

	arr = new Int16Array( [ 5, -3 ] );
	json = JSON.stringify( toJSON( arr ) );

	out = parseJSON( json, reviveTypedArray );

	t.strictEqual( out instanceof Int16Array, true, 'is an instance' );
	t.strictEqual( out[ 0 ], arr[ 0 ], true, 'has expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], true, 'has expected value' );

	t.end();
});

tape( 'the function will revive a JSON-serialized typed array (Uint16Array)', function test( t ) {
	var json;
	var arr;
	var out;

	arr = new Uint16Array( [ 5, 3 ] );
	json = JSON.stringify( toJSON( arr ) );

	out = parseJSON( json, reviveTypedArray );

	t.strictEqual( out instanceof Uint16Array, true, 'is an instance' );
	t.strictEqual( out[ 0 ], arr[ 0 ], true, 'has expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], true, 'has expected value' );

	t.end();
});

tape( 'the function will revive a JSON-serialized typed array (Int8Array)', function test( t ) {
	var json;
	var arr;
	var out;

	arr = new Int8Array( [ 5, -3 ] );
	json = JSON.stringify( toJSON( arr ) );

	out = parseJSON( json, reviveTypedArray );

	t.strictEqual( out instanceof Int8Array, true, 'is an instance' );
	t.strictEqual( out[ 0 ], arr[ 0 ], true, 'has expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], true, 'has expected value' );

	t.end();
});

tape( 'the function will revive a JSON-serialized typed array (Uint8Array)', function test( t ) {
	var json;
	var arr;
	var out;

	arr = new Uint8Array( [ 5, 3 ] );
	json = JSON.stringify( toJSON( arr ) );

	out = parseJSON( json, reviveTypedArray );

	t.strictEqual( out instanceof Uint8Array, true, 'is an instance' );
	t.strictEqual( out[ 0 ], arr[ 0 ], true, 'has expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], true, 'has expected value' );

	t.end();
});

tape( 'the function will revive a JSON-serialized typed array (Uint8ClampedArray)', function test( t ) {
	var json;
	var arr;
	var out;

	arr = new Uint8ClampedArray( [ 5, 3 ] );
	json = JSON.stringify( toJSON( arr ) );

	out = parseJSON( json, reviveTypedArray );

	t.strictEqual( out instanceof Uint8ClampedArray, true, 'is an instance' );
	t.strictEqual( out[ 0 ], arr[ 0 ], true, 'has expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], true, 'has expected value' );

	t.end();
});

tape( 'the function will revive deeply nested serialized typed arrays (array)', function test( t ) {
	var actual;
	var ctors;
	var arr;
	var i;

	ctors = [
		Float64Array,
		Int32Array
	];

	arr = [
		toJSON( new Float64Array( [ 5.0, 3.0 ] ) ),
		toJSON( new Int32Array( [ -2, -4 ] ) )
	];

	actual = parseJSON( JSON.stringify( arr ), reviveTypedArray );

	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( actual[i] instanceof ctors[i], true, 'is an instance' );
		t.strictEqual( actual[i][0], arr[i].data[0], 'has expected value' );
		t.strictEqual( actual[i][1], arr[i].data[1], 'has expected value' );
	}
	t.end();
});

tape( 'the function will revive deeply nested serialized typed arrays (object)', function test( t ) {
	var actual;
	var json;

	json = {
		'a': {
			'b': toJSON( new Float32Array( [ 3.14, -3.14 ] ) ),
			'c': toJSON( new Uint8Array( [ 3, 5 ] ) )
		}
	};
	actual = parseJSON( JSON.stringify( json ), reviveTypedArray );

	t.strictEqual( actual.a.b instanceof Float32Array, true, 'is an instance' );
	t.strictEqual( actual.a.b[0], json.a.b.data[0], 'has expected value' );
	t.strictEqual( actual.a.b[1], json.a.b.data[1], 'has expected value' );

	t.strictEqual( actual.a.c instanceof Uint8Array, true, 'is an instance' );
	t.strictEqual( actual.a.c[0], json.a.c.data[0], 'has expected value' );
	t.strictEqual( actual.a.c[1], json.a.c.data[1], 'has expected value' );

	t.end();
});
