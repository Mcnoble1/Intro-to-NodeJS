#! /usr/bin/env node
// import out packages
import open from 'open';
import fetch from 'node-fetch';
import yargs from 'yargs';

//  parse env variables
 const {argv} = yargs(process.argv);

 const res = await fetch('https://reddit.com/.json')

const data = await res.json();
const children = data.data.children;
const randomPost = children[Math.floor(Math.random() * children.length)];
const link = `https://reddit.com/${randomPost.data.permalink}`;

if(argv.print) {
    console.log(`
    Title: ${randomPost.data.title}
    link: ${link}`)
} else {
    open(link)
}

