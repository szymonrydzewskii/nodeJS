const fs = require("fs")
const path = require("path")
const EventEmitter = require("events")
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})