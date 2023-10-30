@devsmeta/chartreux
---
A web utils and react hooks library based on typescript.

## Install
``` shell
$ npm install @devsmeta/chartreux
```


## Usage
``` typescript
import { useRequest } from "@devsmeta/chartreux/hooks"

export default function() {
  const request = useRequest("https://google.com")
  
  return null
}
```