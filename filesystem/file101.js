const fs = require('fs');

// fs.stat('/Users/sathish/Desktop/be/filesystem/test.txt', (err, stats) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(stats.size, 'KB');
//     console.log(stats.isFile());// true
//     console.log(stats.isDirectory());// false
// })

// fs.readFile('/Users/sathish/Desktop/be/filesystem/test.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data.split('\n'));
// });

const content = 'hello world!';

fs.writeFile('/Users/sathish/Desktop/be/filesystem/output.txt', content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
});