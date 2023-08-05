const {readFileSync,writeFileSync}=require('fs');

const first=readFileSync('./content/first.txt');
const second=readFileSync('./content/second.txt');

//will overwrite if the file exists
writeFileSync(
   './content/result-sync.txt',
   `Here if the result : ${first}, ${second}`
)

//to append on existing file
writeFileSync(
   './content/result-sync.txt',
   `Here if the result : ${first}, ${second}`,
   {flag:'a'}
)