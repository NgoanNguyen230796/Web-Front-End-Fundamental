let userName = prompt("who are you ???");
switch (userName) {
  case "Admin":
    let password = prompt("Please enter password");
    if (password == "TheMaster") {
      console.log("Welcome !!!!!!");
    } else if (password == "") {
      console.log("Canceled");
    } else {
      console.log("Wrong password");
    }
    break;
  case "":
    console.log("Canceled");
    break;
  default:
    console.log("I don't know you");
}
