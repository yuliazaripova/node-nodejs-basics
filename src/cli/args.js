const parseArgs = () => {
   const args = process.argv.slice(2);
   let res = [];
   for (let i = 0; i < args.length; i = i + 2) {
       res.push(`${args[i].slice(2)} is ${args[i+1]}`);
   }
   console.log(res.join(", "));
};

parseArgs();