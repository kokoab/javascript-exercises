// palindromes.js
function palindromes(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleaned = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  // Check if the cleaned string is a palindrome
  return cleaned === cleaned.split('').reverse().join('');
}

module.exports = palindromes;
