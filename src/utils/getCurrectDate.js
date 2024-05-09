export function showCurrentDateTime() {
    // Array of month names
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Get current date
    const currentDate = new Date();
    
    // Extract day, month, date, and year
    const day = currentDate.toLocaleString('en-us', { weekday: 'long' });
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    
    // Return the current day, month, date, and year
    return `${day}, ${month} ${date}, ${year}`;
}