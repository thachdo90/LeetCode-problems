// I: array of strings, representing logs
// O: array of ordered strings
// C: stated in problem
// E: contents of letter logs are the same

// strategy:
// build helper function to separate identify and the content
// if it's a digit log, push that to a digitLogs array to maintain order
// if it's a letter log, store it in storage
// storage = {
//   content: [identifier1, indentifier2]
// }
// declare letterLogs array;
// get letterLogs keys as array and sort it
// put the identifier back in, however, if there are multiple identifies, sort this first before prefixing it to the content
const order = (logs) => {
  let digitLogs = [];
  let letterLogs = [];
  let storage = {};

  // categorizes log as digit or letter logs and store them accordingly
  const process = (log) => {
    let separator = log.indexOf(' ');
    let identifier = log.slice(0, separator);
    let content = log.slice(separator + 1);
    let firstCharacter = content[0];
    if (isNaN(firstCharacter)) {
      // console.log(log, ' is a letter log')
      if(storage[content]) {
        storage[content].push(identifier);
      } else {
        storage[content] = [identifier]
      }
    } else {
      digitLogs.push(log)
    }
  }

  logs.forEach(log => process(log))

  // process letter logs into letterLogs array
  let letterContents = Object.keys(storage);
  letterContents.sort();
  for (let content of letterContents) {
    if (storage[content].length > 1) {
      let identifiers = storage[content];
      identifiers.sort();
      for (let identifier of identifiers) {
        letterLogs.push(identifier + ' ' + content);
      }
    } else {
      letterLogs.push(storage[content][0] + ' ' + content)
    }
  }

  let result = letterLogs.concat(digitLogs);
  return result;

}


let logs;
//test 1
logs = ['dig1 3 5 1 5', 'let1 art can', 'let3 art can', 'dig2 3 5 5', 'let2 own kit dig', 'let4 art zero']
console.log(order(logs));

