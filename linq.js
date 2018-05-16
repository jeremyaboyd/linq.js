Array.prototype.where = function(predicate) {
	return this.filter(predicate);
}

Array.prototype.skip = function(count) {
	return this.slice(count);
}

Array.prototype.take = function(count) {
	return this.slice(0, count);
}

Array.prototype.firstOrDefault = function() {
	if(this.length > 0) return this[0];
	return null;
}

Array.prototype.first = function() {
	if(this.length > 0) return this[0];
	throw "Sequence contains no elements";
}

Array.prototype.singleOrDefault = function() {
	if(this.length === 1) return this[0];
	return null;
}

Array.prototype.single = function() {
	if(this.length === 1) return this[0];
	if(this.length === 0)
		throw "Sequence contains no elements";
	
	throw "More than one element exists in sequence";
}

Array.prototype.orderBy = function() {
	return this.sort((e1,e2) => {
  	for(var i = 0; i < arguments.length; i++) {
			var property = arguments[i];
			if(property.substr(0,1) === '-') {
				property = property.substr(1);
				if(e1[property] < e2[property]) return 1;
				if(e1[property] > e2[property]) return -1;
			} else {
				if(e1[property] < e2[property]) return -1;
				if(e1[property] > e2[property]) return 1;
			}
		}
  });
}
