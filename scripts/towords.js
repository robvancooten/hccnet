// Convert numbers to words
// copyright 25th July 2006, by Stephen Chapman http://javascript.about.com

//  let tekst = toWords(12); 

function toWord(n) {
    if (n < 0)
        return false;

    // Arrays to hold words for single-digit, double-digit, and below-hundred numbers
    let single_digit = ['', 'Een', 'Twee', 'Drie', 'Vier', 'Vijf', 'Zes', 'Zeven', 'Acht', 'Negen']
    let double_digit = ['Tien', 'Elf', 'Twaalf', 'Dertien', 'Veertien', 'Vijftien', 'Zestien', 'Zeventien', 'Achtien', 'Negentien']
    let below_hundred = ['Twintig', 'Dertig', 'Veertig', 'Vijftig', 'Zestig', 'Zeventig', 'Tachtig', 'Negentig']

    if (n === 0) return 'Nul';

    // Recursive function to translate the number into words
    function translate(n) {
        let word = "";
        if (n < 10) {
            word = single_digit[n] + ' ';
        } else if (n < 20) {
            word = double_digit[n - 10] + ' ';
        } else if (n < 100) {
            let rem = translate(n % 10);
            word = rem + 'en ' + below_hundred[(n - n % 10) / 10 - 2];
        } else if (n < 1000) {
            if (Math.trunc(n / 100) == 1)
                word = ' Honderd en ' + translate(n % 100);
            else
                word = single_digit[Math.trunc(n / 100)] + ' Honderd en ' + translate(n % 100);
        } else if (n < 1000000) {
            word = translate(parseInt(n / 1000)).trim() + ' Thousand en ' + translate(n % 1000);
        } else if (n < 1000000000) {
            word = translate(parseInt(n / 1000000)).trim() + ' Million ' + translate(n % 1000000);
        } else {
            word = translate(parseInt(n / 1000000000)).trim() + ' Billion ' + translate(n % 1000000000);
        }
        return word;
    }

    // Get the result by translating the given number
    let result = translate(n);
    return result.trim() + '.';
}

function dayofyear(d) { // d is a Date object
    let yn = d.getFullYear();
    let mn = d.getMonth();
    let dn = d.getDate();
    let d1 = new Date(yn, 0, 1, 12, 0, 0); // noon on Jan. 1
    let d2 = new Date(yn, mn, dn, 12, 0, 0); // noon on input date
    let ddiff = Math.round((d2 - d1) / 864e5);
    return ddiff + 1;
}

export { toWord, dayofyear };   // 