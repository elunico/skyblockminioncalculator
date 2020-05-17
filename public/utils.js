function getCookie(key) {
    let cookie = document.cookie;
    let parts = cookie.split(/;/g);
    for (let part of parts) {
        if (part.trim().startsWith(key)) {
            return part.split('=')[1];
        }
    }
    return null;
}

/**
 * Set a cookie with the given key and value 
 * and the provided options (see below)
 * 
 * @param {string} key The key of the cookie
 * @param {string} value the value of the cookie
 * @param {object} options cookie options
 * options = {
 *      max-age: number | string // the maximum age in seconds of the cookie; cannot be specified with expiration
 *      expiration: Date | string // the expiration date of this cookie as a Date object or a UTC String
 *      path: string // the path on which this cookie is valid 
 *      domain: string // the domain of the cookie Note: The domain must match the domain of the JavaScript origin. Setting cookies to foreign domains will be silently ignored.
 *      secure: boolean // only allow the cookie on https: domains
 *      samesite: 'lax' | 'strict'
 * }
 */
function setCookie(key, value, options) {
    if (options['max-age'] && options.expiration) {
        throw new Error('Invalid cookie options. Cannot have max-age and expiration set at the same time');
    }

    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }
    let cookieString = `${key}=${encodeURIComponent(value)}`;
    for (let optionKey of Object.keys(options)) {
        let optionValue = options[optionKey];
        if (optionKey === 'expiration') {
            if (optionValue instanceof Date) {
                optionValue = optionValue.toUTCString();
            }
        }
        cookieString += `;${optionKey}=${optionValue}`;
    }
    document.cookie = cookieString;
}

function deleteCookie(key) {
    document.cookie = `${key}=; max-age=${0}`;
}