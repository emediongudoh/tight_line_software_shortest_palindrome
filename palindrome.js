function shortestPalindrome(str) {
    // Simple palindrome function
    function isPalindrome(text) {
        return text === text.split("").reverse().join("");
    }

    // Check if the provided string is a palindrome
    if (isPalindrome(str)) return str;

    // Loop through the string to find the shortest suffix that is a palindrome
    for (let i = 0; i < str.length; i++) {
        const suffix = str.substring(i);
        if (isPalindrome(suffix)) {
            const prefixToAdd = str
                .substring(0, i)
                .split("")
                .reverse()
                .join("");
            return str + prefixToAdd;
        }
    }

    return "";
}

console.log(shortestPalindrome("abcdc"));
console.log(shortestPalindrome("racecar"));
console.log(shortestPalindrome("madam"));
