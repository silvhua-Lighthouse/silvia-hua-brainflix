const formatDate = (dateObject, options = null) => {
    // format a date to the "MM/DD/YYYY"    
    if (options === null) {
        options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    }
    const formattedDate = dateObject.toLocaleDateString('en-CA', options) // format the date to string
        .replace(/,/g, ''); // remove commas
    return formattedDate
}

export default formatDate;