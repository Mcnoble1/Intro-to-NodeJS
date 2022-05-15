// importing the module
import { readFile, writeFile } from 'fs/promises'; 
// assigning the module to a variable
let template = await  readFile(new URL('template.html', import.meta.url), 'utf8');
// using the module
const data = {
    title: 'Learn Node.Js',
    body: 'This is the final HTML'
}
// 
for (const [key, value] of Object.entries(data)) {
    template = template.replace(`{${key}}`, value)
}
// 
await writeFile(new URL('index.html', import.meta.url), template);	
