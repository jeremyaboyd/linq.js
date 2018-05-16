Array.prototype.where = function(predicate) {
	return this.filter(predicate);
}

Array.prototype.skip = function(count) {
	return this.slice(count);
}

Array.prototype.take = function(count) {
	return this.slice(0, count);
}

Array.prototype.firstOrDefault = function(predicate) {
	var that = this;
	if(predicate && typeof predicate === "function")
  	that = that.where(predicate);
    
	if(that.length > 0) return that[0];
	return null;
}

Array.prototype.first = function(predicate) {
	var that = this;
	if(predicate && typeof predicate === "function")
  	that = that.where(predicate);
    
	if(that.length > 0) return this[0];
	throw "Sequence contains no elements";
}

Array.prototype.singleOrDefault = function(predicate) {
	var that = this;
	if(predicate && typeof predicate === "function")
  	that = that.where(predicate);
    
	if(that.length === 1) return this[0];
	if(that.length === 0) return null;
  
	throw "More than one element exists in sequence";
}

Array.prototype.single = function(predicate) {
	var that = this;
	if(predicate && typeof predicate === "function")
  	that = that.where(predicate);
    
	if(that.length === 1) return this[0];
	if(that.length === 0)
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
