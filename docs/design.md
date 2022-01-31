# Design

The main client feature MUST be stateless. A document MUST contain all
information required to send/fetch messages or other data from Telegram. Here a
flow-like diagram to explain it:

```
[webui] --(jsonrpc)--> [flask] --(object)--> [telethon] --> [telegram]

```

If needed, the core feature (telegram client supports) can be moved in another
project or run as standalone worker waiting for objects.



