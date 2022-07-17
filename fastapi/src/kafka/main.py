import threading
import logging
from kafka import KafkaConsumer
from enum import Enum


class KafkaTopics(str, Enum):
    TESTING_1 = "TESTING_1"


class Consumer(threading.Thread):
    def __init__(self):
        threading.Thread.__init__(self)
        self.stop_event = threading.Event()

    def stop(self):
        self.stop_event.set()

    def run(self):
        consumer = KafkaConsumer(bootstrap_servers="kafka:9092",
                                 auto_offset_reset="earliest",
                                 consumer_timeout_ms=1000,
                                 reconnect_backoff_ms=1000,
                                 api_version=(0, 10, 1))
        consumer.subscribe(KafkaTopics.TESTING_1)
        logging.info(consumer.topics())

        while not self.stop_event.is_set():
            for message in consumer:
                logging.info(message)
                print(message)
                if self.stop_event.is_set():
                    break

        consumer.close()


def main():
    consumer = Consumer()
    consumer.start()
