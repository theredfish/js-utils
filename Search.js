/**
 * Search elements by using binary search algorithm
 * Compare util is required for recursiveSearchByString()
 */
BinarySearch = {
	/**
	 * Recursive binary search
	 *
	 * Example : arr = ['éalors', 'mach', 'truc'].sort();
	 * BinarySearch.recursiveSearchByString('mach', arr, 0, arr.length) returns 0 : 0
	 *
	 * @param  {string} text wich represents the search item
	 * @param  {Array} array should be sorted
	 * @return {integer} index of the element if found, else -1
	 */
	recursiveSearchByString: function(text, array, start, end)
	{
		if (end < start)
			return -1;

		var middle = Math.floor((start + end) / 2);
		var result = Compare.strcmp(text, array[middle]);

		if (result === 0)
			return middle;
		else if (result < 0)
			end = middle - 1;
		else
			start = middle + 1;

		return BinarySearch.recursiveSearchByString(text, array, start, end);
	}
};
