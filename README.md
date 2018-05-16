# linq.js
A simple JS library that mimics some of the C# LINQ Extension. Most of the extentions are just wrappers to already existing Array prototype method.

## Examples

	var arrToSort = [
		{ first: 1, second: "a", third: 0 },
		{ first: 1, second: "b", third: 0 },
		{ first: 2, second: "a", third: 0 },
		{ first: 3, second: "b", third: 1 },
		{ first: 3, second: "b", third: 0 },
	];

### .where(predicate)
	arrToSort.where( a => a.first === 1 );
	// expected outcome: [{ first: 2, second: "a", third: 0 }]

### .skip(count)
	arrToSort.skip( 4 );
	// expected outcome: [{ first: 3, second: "b", third: 0 }]

### .take(count)
	arrToSort.take( 1 );
	// expected outcome: [{ first: 1, second: "a", third: 0 }]

### .orderBy(properties)
Orders properties in ascending order unless denoted by a minus/subtract symbol.

	arrToSort.orderBy( "first", "-second", "third" );
	/* expected outcome: [
		{ first: 1, second: "b", third: 0 },
		{ first: 1, second: "a", third: 0 },
		{ first: 2, second: "a", third: 0 },
		{ first: 3, second: "b", third: 0 },
		{ first: 3, second: "b", third: 1 },
	]*/
  
### .first(\[predicate]) and .firstOrDefault(\[predicate])
Will return the first element in the array. Default will return null if 0 elements exist, other wise exceptions are thrown if there are no elements in the array.

If the optional predicate parameter is provided, will execute a .where() on the array first.

	arrToSort.first();
	// expected outcome: { first: 1, second: "a", third: 0 }
	
	[].first();
	// expected outcome: Sequence contains no elements
	
	[].firstOrDefault();
	// expected outcome: null

### .single(\[predicate]) and .singleOrDefault(\[predicate])
Will return the ONLY element in the array. Default will return null if 0 elements exist, other wise exceptions are thrown if not exactly 1 element exists in the array.

If the optional predicate parameter is provided, will execute a .where() on the array first.

	arrToSort.take(1).single();
	// expected outcome: { first: 1, second: "a", third: 0 }
	
	arrToSort.single();
	// expected outcome: More than one element exists in sequence
	
	[].single();
	// expected outcome: Sequence contains no elements.
	
	[].singleOrDefault();
	// expected outcome: null
