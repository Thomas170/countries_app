function convertToReadableDate(timestamp) {
    const date = new Date(timestamp);

    return date.toLocaleString();
}

module.exports = convertToReadableDate;