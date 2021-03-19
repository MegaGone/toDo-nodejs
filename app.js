const argv = require("./config/yargs").argv;
const methods = require("./methods/methods");
const colors = require("colors/safe");

const key = argv._[0];

switch (key) {
  case "create":
    let homework = methods.createHomework(argv.description);
    console.log(homework);
    break;

  case "update":
    let updated = methods.updateHomework(argv.description, argv.complete);
    console.log(colors.green(updated));
    break;

  case "list":
    let Homeworks = methods.getHomeworks();
    let i = 0;

    for (let homework of Homeworks) {
      i += 1;
      console.log(colors.green(`${i}.`), `${homework.description} -`, colors.green("State:"), `${homework.complete}`);
    }
    break;

  case "delete":
    let deleted = methods.deleteHomework(argv.description);
    console.log(colors.red(deleted));
    break;

    default: 
    console.log(colors.red('Command undefined'));
}
