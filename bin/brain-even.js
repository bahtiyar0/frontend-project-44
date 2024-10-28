#!/usr/bin/env node

import greetUser from "../src/cli.js";

const even = () => {
    greetUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
}
export default even;

even();