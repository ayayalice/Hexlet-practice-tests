import { capitalize } from "../i.js";

if (capitalize('Hello') !== 'Hello') throw new Error ('Error');
if (capitalize('') !== '') throw new Error ('Error');
console.log('Tests complited');