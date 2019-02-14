export default (date) =>
    global.Intl.DateTimeFormat('de-AT').format(new Date(date));