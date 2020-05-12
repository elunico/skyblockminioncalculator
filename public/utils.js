
function setCookie(key, value, expiresAfterMinutes) {
    document.cookie = `${key}=${value}; expires=${new Date(Date.now() + 1000 * 60 * expiresAfterMinutes).toUTCString()}`;
}

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