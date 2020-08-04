/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let urls = [];
var encode = function(longUrl) {
    urls.push(longUrl);
    return  'http://tinyurl.com/' + urls.length
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let url = shortUrl.split('/')
    return urls[url[url.length - 1]]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

