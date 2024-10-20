export function isValidEmail(email) {
    const regex = new RegExp('^[^\s@]+@[^\s@]+\.[^\s@]+$');
    return regex.test(email);
}

export function isEmpty(val) {
    if (val === undefined || val === "") {
        return true;
    }
}

export function isPositive(num) {
    if (num > 0) { 
        return true;
    }
}
