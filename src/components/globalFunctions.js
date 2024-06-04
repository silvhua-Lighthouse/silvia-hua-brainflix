export const formatDate = (dateObject, options = null) => {
    // format a date to the "MM/DD/YYYY"    
    if (options === null) {
        options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    }
    const formattedDate = dateObject.toLocaleDateString('en-CA', options) // format the date to string
        .replace(/,/g, ''); // remove commas
    return formattedDate
}

function formatTimestamp(timestamp) {
    // convert timestamp to Date object
    const dateFormattingOptions = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const date = formatDate(new Date(timestamp), dateFormattingOptions);
    return date;
}

export const formatNumber = (number) => {
    const formattedNumber = number.toLocaleString()
    return formattedNumber;
}

export default formatTimestamp;