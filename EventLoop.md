
## Heap
Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory.

## Queue
JS runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function that gets called to handle the message.

At some point during the event loop, the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use.

The processing of functions continues until the stack is once again empty. Then, the event loop will process the next message in the queue (if there is one).


More: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop?retiredLocale=uk
