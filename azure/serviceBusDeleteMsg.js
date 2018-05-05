const azure = require('azure-sb'); // npm install azure-sb

const connectionString = 'Endpoint=sb://[serviceBusName].servicebus.windows.net/;SharedAccessKeyName=[keyName];SharedAccessKey=[keyValue]';
const topicName = 'serviceBusTopicName';
const subscriptionName = 'serviceBusSubscription';
let serviceBusService = azure.createServiceBusService(connectionString);

serviceBusService.receiveSubscriptionMessage(topicName, subscriptionName, { isPeekLock: true }, function(error, lockedMessage) {
  if(!error) {
    // Message received and locked
    console.log(lockedMessage);
        
    serviceBusService.deleteMessage(lockedMessage, function (deleteError) {
      if(!deleteError) { 
        console.log('message has been deleted.');
      }
      else {
        console.log(deleteError);
      }
    })
  }
});
