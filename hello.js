// https://api.playfab.com/docs/using-cloud-script/
handlers.helloWorld = function (args)
{
  var message = "Hello " + currentPlayerId + "!";
  return { messageValue: message };
}
