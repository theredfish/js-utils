Compare = {
	/**
	 * Compare strings
	 *
	 * example 1 : strcmp("Dark Vader", "Anakin Skywalker") returns 1 : 1
	 * example 2 : strcmp("aaa", "aab") returns -1 : -1
	 * example 3 : strcmp("aaa", "aaB") returns - 1 : -1
	 * example 4 : strcmp("123_calabaza", "123_soleil") returns -1 : -1
	 * example 5 : strcmp("1éüêpé", "1éüêpé") returns 0 : 0
	 * example 6 : strcmp("", "") returns 0 : 0
	 * example 7 : strcmp(null, null) returns TypeError : TypeError
	 * example 8 : strcmp(2, 3) returns TypeError : TypeError
	 *
	 * @param  {string} y
	 * @param  {string} z
	 * @return {int} 0 if strings are equal, 1 if y greater than z else -1
	 */
	strcmp: function(y, z)
	{
		if (typeof y !== 'string' || typeof z !== 'string') {
			try {
				throw new TypeError('String parameter expected');
			} catch (e) {
				console.log(e.name + ' : ' + e.message);
			}
		}

		var _y = y.toLowerCase();
		var _z = z.toLowerCase();

		return ( (_y > _z) ? 1 : ( (_y < _z) ? -1 : 0 ) );
	}
};
