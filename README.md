# linq.js
A simple JS library that mimics some of the C# LINQ Extension. Most of the extensions are just wrappers to already existing Array prototype method.

Using this library, you are able to filter, sort, and map as you would in C#:

```js
var data = users.where( u => u.isActive )
                .orderBy( "-lastLogin" )
		.skip( page * pageSize )
		.take( pageSize )
		.select( u => {
		    return {
		        "User Name": u.userName,
			"Last Login": new Date( u.lastLogin ).toLocaleString(),
			"Created On": new Date( u.createdOn ).toLocaleString()
		    }
		});
```

## Documentation

### Setup

```js
var arrToSort = [
	{ first: 1, second: "a", third: 0 },
	{ first: 1, second: "b", third: 0 },
	{ first: 2, second: "a", third: 0 },
	{ first: 3, second: "b", third: 1 },
	{ first: 3, second: "b", third: 0 },
];
```

### .where(predicate)
Filters the array based on the `predicate` function provided.

```js
arrToSort.where( a => a.first === 2 );
// expected outcome: [{ first: 2, second: "a", third: 0 }]
```

### .skip(count)
Skips `count` elements in the array.

```js
arrToSort.skip( 4 );
// expected outcome: [{ first: 3, second: "b", third: 0 }]
```

### .take(count)
Takes the first `count` elements int he array

```js
arrToSort.take( 1 );
// expected outcome: [{ first: 1, second: "a", third: 0 }]
```

### .orderBy(properties)
Orders array based on element's properties in ascending order unless denoted by a minus/subtract symbol.

```js
arrToSort.orderBy( "first", "-second", "third" );
/* expected outcome: [
	{ first: 1, second: "b", third: 0 },
	{ first: 1, second: "a", third: 0 },
	{ first: 2, second: "a", third: 0 },
	{ first: 3, second: "b", third: 0 },
	{ first: 3, second: "b", third: 1 },
]*/
 ```

### .select(func)
Returns array with elements based on the output of `func`

```js
arrToSort.select( a => a.first );
// expected outcome: [ 1, 1, 2, 3, 3 ]
```

### .first(\[predicate]) and .firstOrDefault(\[predicate])
Will return the first element in the array. Default will return null if 0 elements exist, other wise exceptions are thrown if there are no elements in the array.

If the optional predicate parameter is provided, will execute a .where() on the array first.

```js
arrToSort.first();
// expected outcome: { first: 1, second: "a", third: 0 }

[].first();
// expected outcome: Sequence contains no elements

[].firstOrDefault();
// expected outcome: null
```

### .single(\[predicate]) and .singleOrDefault(\[predicate])
Will return the ONLY element in the array. Default will return null if 0 elements exist, other wise exceptions are thrown if not exactly 1 element exists in the array.

If the optional predicate parameter is provided, will execute a .where() on the array first.

```js
arrToSort.take( 1 ).single();
// expected outcome: { first: 1, second: "a", third: 0 }

arrToSort.single();
// expected outcome: More than one element exists in sequence

[].single();
// expected outcome: Sequence contains no elements.

[].singleOrDefault();
// expected outcome: null
```
