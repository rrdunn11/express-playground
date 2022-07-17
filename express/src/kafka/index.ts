import kafka, { KeyedMessage } from 'kafka-node';

const client = new kafka.KafkaClient({
  kafkaHost: 'kafka:9092',
});
const producer = new kafka.HighLevelProducer(client);

enum KafkaTopics {
  TESTING_1 = 'TESTING_1',
}

// export const createKafkaTop = () => {
//   const topicsToCreate: kafka.CreateTopicRequest[] = [
//     {
//       topic: KafkaTopics.TESTING_1,
//       partitions: 1,
//       replicationFactor: 1,
//     },
//   ];
//   client.createTopics(topicsToCreate, (err, result) => {
//     if (err) {
//       console.log(`createKafkaTop Error: ${err.message}`);
//     } else {
//       console.log(`createKafkaTop Success: ${result.join(', ')}`);
//     }
//   });
// };

producer.on('ready', () => {
  const topicsToCreate: kafka.CreateTopicRequest[] = [
    {
      topic: KafkaTopics.TESTING_1,
      partitions: 1,
      replicationFactor: 1,
    },
  ];
  console.log('createKafkaTop: creating topic');
  client.createTopics(topicsToCreate, (err, result) => {
    if (err) {
      console.log('createKafkaTop Error: ', err);
    } else {
      console.log('createKafkaTop Success: ', result);
    }
  });
});

export const addToKafkaTopic = (callback:any) => {
  const km = new KeyedMessage('key1', 'message1');
  const payloads: kafka.ProduceRequest[] = [
    {
      topic: KafkaTopics.TESTING_1,
      messages: 'hello',
    },
    {
      topic: KafkaTopics.TESTING_1,
      messages: [km],
    },
  ];
  producer.send(payloads, callback);
};

producer.on('error', (err) => {
  console.log('kafka error: ', err);
});
