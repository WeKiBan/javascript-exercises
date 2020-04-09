const palindromes = function(phrase) {

    return phrase.replace(/\W/g, '').toLowerCase().split('').reverse().join('') === phrase.replace(/\W/g, '').toLowerCase();
}

module.exports = palindromes;