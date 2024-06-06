export const formatDate = (dateObject, locale='en-US', options={}, removeCommas=false) => {
    /* 
    Format Date object to string.
    
    Parameters:
    - dateObject (dateObject)
    - locale (string): e.g. 
        - 'en-US' for 'M/D/YYY'
        - 'en-CA' for YYYY-DD-MM
    - options (object)
    */
    console.log(locale)
    options = options || { month: 'numeric', day: 'numeric', year: 'numeric' };
    let formattedDate = dateObject.toLocaleDateString(locale, options) // format the date to string
    if (removeCommas) {
        formattedDate = formatDate.replace(/,/g, ''); // remove commas
    }
    return formattedDate
}

function formatTimestamp(timestamp, dateFormattingOptions, locale) {
    /* 
    Convert timestamp to Date object
    
    Parameters:
    - timestamp (timestamp)
    - dateFormattingOptions (object): 
        - For Mon Jan 2024: { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }
    - locale (string)
    */
    console.log('formatTimestamp', locale)
    dateFormattingOptions = dateFormattingOptions || { month: 'numeric', day: 'numeric', year: 'numeric' };
    const date = formatDate(new Date(timestamp), locale, dateFormattingOptions);
    return date;
}

export const formatNumber = (number) => {
    const formattedNumber = number.toLocaleString()
    return formattedNumber;
}

export function appendClass(classesArray) {
    if (typeof classesArray === 'string') {
        classesArray = [classesArray];
    }
    let classesString = '';
    for (let i=0; i < classesArray.length; i++) {
        classesString += ` ${classesArray[i]}`;
    }
    return classesString;
}

export default formatTimestamp;