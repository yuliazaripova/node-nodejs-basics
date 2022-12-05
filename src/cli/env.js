const parseEnv = () => {
    const variables = process.env;
    const variablesNames = Object.keys(variables).filter(v => v.startsWith("RSS_"));
    //variablesNames.forEach(v => console.log(`${v}=${variables[v]};`));
    const res = variablesNames.map(v =>`${v}=${variables[v]}`)
    console.log(res.join('; '))
};

parseEnv();