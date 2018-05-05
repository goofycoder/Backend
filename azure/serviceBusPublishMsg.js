const azure = require('azure-sb');    // npm install azure-sb

const connectionString = 'Endpoint=sb://[serviceBusName].servicebus.windows.net/;SharedAccessKeyName=[keyName];SharedAccessKey=[keyValue]';

const topicName = 'serviceBusTopicName';

let serviceBusService = azure.createServiceBusService(connectionString);

let message = new Object();

message['propName']='propValue';

let messageWrapper = {
  body: JSON.stringify(message)
};
  
serviceBusService.sendTopicMessage(topicName, messageWrapper, (error) => {
  if (error) {
    console.error(error);
  }
  else {
    console.log("message published!");
  }
});
