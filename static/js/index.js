//https://www.eclipse.org/paho/clients/js/
// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
  var oper=" ; ",i=0;

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "emaguagallo.fie@unach.edu.ec",
    password: "emaguagallo",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
    client.subscribe("emaguagallo.fie@unach.edu.ec/test");

	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    oper=message.payloadString:
    console.log(oper);
	accion(oper);
  }
  //SUMA
  
  function suma(){
    var n1=document.getElementById("num1");
	var n2=document.getElementById("num2");
	var resultado=document.getElementById("resul");
	sms="numero1;"+n1.value+"numero;"+n2.value;
	envpro(sms)
	
  }
    function resta(){
    var n1=document.getElementById("num1");
	var n2=document.getElementById("num2");
	var resultado=document.getElementById("resul");
	sms="numero1;"+n1.value+"numero2;"+n2.value;
	envpro(sms)
	
  }
  function envpro(toSend){
    console.log(toSend);
    message = new Paho.MQTT.Message(toSend);
    message.destinationName = "emaguagallo.fiequnach.edu.ec/test1";
    client.send(message);
  }
  
