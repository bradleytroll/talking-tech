module.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
    },
    eq: (a, b) => {
        return a === b;
    },
};