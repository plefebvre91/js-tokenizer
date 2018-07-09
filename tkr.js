/*
 * This file is part of JS TKR Library.
 *
 * JS TKR Library is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * JS TKR Library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with TKR Library.  If not, see <http://www.gnu.org/licenses/>.
 */

class Tokenizer {
    constructor(str, separator)
    {
	this._tokenize(str, separator);
    }

    hasMoreToken()
    {
	return ( this._tokens.length > 0);
    }

    nextToken()
    {
	return this._tokens.shift();
    }

    _tokenize(str, separator)
    {
	this._tokens = str.split(separator);
    }
}

