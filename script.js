// Get the current date and time in the target timezone
const targetTimezone = 'Asia/Kolkata';
const currentDate = new Date();
const options = { timeZone: targetTimezone, day: '2-digit', month: '2-digit', year: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);
const [month, day, year] = formattedDate.split('/');
const newDate = `${day}/${month}/${year}`;
document.getElementById('date-field').value = newDate;