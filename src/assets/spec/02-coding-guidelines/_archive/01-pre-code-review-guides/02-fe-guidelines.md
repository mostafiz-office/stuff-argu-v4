# Front-end code Review notes

# Code Red: Promise and Await issue

At this stage we are making logical and technological disruptions (please feel free to correct), we are returning a promise, which means we don't wait here and here we are again awaited which means we waited here to resolve the promises if we do resolve then why do we use a promise to return?

## Reference

* [JavaScript: Promises or async-await | by Gokul N K | Better Programming](https://betterprogramming.pub/should-i-use-promises-or-async-await-126ab5c98789#:~:text=Promise%20creation%20starts%20the%20execution,have%20any%20effect%20on%20it.)
* [Difference between promise and async await in Node.js - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-promise-and-async-await-in-node-js/)
* [Async/Await vs Promises — A Guide and Cheat Sheet | by Kait Hoehne | Level Up Coding](https://levelup.gitconnected.com/async-await-vs-promises-4fe98d11038f)
* [Code Sample Tested code](https://www.typescriptlang.org/play?#code/FAQwzgngdgxgBAMwK6wC4EsD2U4AcBO6UqAyqoVAOYAUAJiKiCSALa4A2ApgFxxjlFKAGji1O7EBF5QkLAEad8ASl4AFfJhbownADz8KlAHxwA3sGBwrcGNjCYuAOnaYaAIjIh8qTrTi83OABqUQYmVg5OJQBuC2s4fE5UJHwcKE4Adzh1TW1OampE+3YAN04RRIArThhUJTgAXhNzePidVAAVdBZOTCRUAvqms0tWsdsoYs5nV2pRsYW4N3BoeCLcO04EzmKyvwDg+cXW+kZmNi5D44XlhB98Javrk-FJR1RMMkNqJRi454mUxmNFO4QuWxCgQAtI8QuksgARBj5X6xI6LRLJVLbXb5UHnSLBJZQmEETAwHY6PxuJTo6wAXxEYgkED+8Xpf3pFm5K1giBQtSwOHwKAJXAAjD8RvESl4+IxvL5GnB4XAkT4fv8rIDUHxxcqQBkQOhdQQiKQBFRqG5kLB9TCwBEJW4RAAOAAMntp8R1fAATAajSa8BQLd8bQL7XwnZw-S64ABWT3u73WX1gADMgeNptDX0E1ttMCjjvBGfjfuTtKOsoenCgYj8DRVmTVyM1NblCPQCAQinrFIA+gBJKCDro9ZX1xuOShJCcouAOhU+Wiz+fdFFon12BzTFzuABiArg+u7vasAB0oG46VYQvwvKuiW5r3AQA24Nfb4sQtOlZCcDaLwb4-gsITnn2iSwJwI5jguTxjK+OBgPqBwPvqQR3ksb5gAG6H+ohrTIXwWYEZmRx-BYXKgJAfJFhg2AJKKMZ+lKLTWLW8pPkqzaquqKLcjuky6gYACC+D4JI2bBjkWg6I4IDsOw1AANrYWaxD5laEawAGDoxuK8Yel6QgaXmlruEW+nRuCcYiEmpnmea2lWQKNmlpE5YiJWXoALrVsJ-B6sq4mSZIqnun5RzpgGzZhVJECRdFQWiVm8XkBJiXJUJnFyv+TYtoi7aBXlDyQf2MFweOm5Tg2vjrp0m5SsuPFrnOTU9D825pruTgHtax58gGkFXje2EPiuAE4TgH5+N+E1wAVL5AWAIE4GBYwQT2UEDrBo41ZOWGLCRqH+LCIXHTcuH4RdeFEfEp1kXdGaUbENHAAA9J9zFQGKnCStWIp-axPxAA)
* [Sample for Proimise all](https://stackoverflow.com/questions/45285129/any-difference-between-await-promise-all-and-multiple-await)
    * https://stackoverflow.com/a/59596936


![](https://i.imgur.com/GV1O12M.png)
![](https://i.imgur.com/qINwB8h.png)



## Possible Solutions

- We use PromiseAll to return a single one.