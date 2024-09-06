// Converts value into the format - €1,234.45 (for example)
export function formatCurrency(value) {
    return new Intl.NumberFormat("en", {
        style: "currency",
        currency: "EUR"
    }).format(value);
}

// Converts a date into the format - "6 Sep, 02:30 PM" (for example)
export function formatDate(date){
    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "short",
        hour: "2-digit";
        minute: "2-digit"
    }).format(new Date(date));
}

// Number of minutes remaining 
export function calcMinutesLeft(targetDate) {
    const date1 = new Date().getTime(); // Current time
    const date2 = new Date(targetDate).getTime(); // Target time
    return Math.random((date2 - date1) / 60000);
} 