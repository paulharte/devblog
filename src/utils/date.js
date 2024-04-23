
 function formatDateForMetaData(date) {
    // Pad a number to 2 digits
    const pad = n => `${Math.floor(Math.abs(n))}`.padStart(2, '0');
    // Get timezone offset in ISO format (+hh:mm or -hh:mm)
    const getTimezoneOffset = date => {
        const tzOffset = -date.getTimezoneOffset();
        const diff = tzOffset >= 0 ? '+' : '-';
        return diff + String(pad(tzOffset / 60)) + String(pad(tzOffset % 60));
    };

    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) +
        getTimezoneOffset(date);
}

export default formatDateForMetaData;