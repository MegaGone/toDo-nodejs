const options = {
    description: {
        alias: 'd',
        demand: true,
        description: 'Describe the homework'
    }
}

const optionsUpdate = {
    description: {
        alias: 'd',
        demand: true,
        description: 'Describe the homework'
    },
    complete: {
        alias: 'c',
        default: false,
        description: 'Set your homework like pending or complete'
    }
}

const argv = require('yargs')
    .command('create', 'Create a new Homework', options)
    .command('update', 'Set your homework like pending or complete', optionsUpdate)
    .command('delete', 'Delete a homework', options)
    .help()
    .argv;

module.exports = {
    argv
}