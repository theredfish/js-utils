/**
 * Search elements by using binary search algorithm
 * Compare util is required
 */
BinarySearch = {
	array: {
		/**
		 * Recursive binary search
		 *
		 * Example : arr = ['éalors', 'mach', 'truc'].sort();
		 * BinarySearch.array.recursiveSearchByString('mach', arr, 0, arr.length) returns 0 : 0
		 *
		 * @param  {string} value wich represents the search item
		 * @param  {array} array should be sorted
		 * @return {integer} index of the element if found, else -1
		 */
		recursiveSearchByString: function(value, array, start, end)
		{
			if (end < start)
				return -1;

			var middle = Math.floor((start + end) / 2);
			var result = Compare.strcmp(value, array[middle]);

			if (result === 0)
				return middle;
			else if (result < 0)
				end = middle - 1;
			else
				start = middle + 1;

			return BinarySearch.array.recursiveSearchByString(value, array, start, end);
		}
	}
};
