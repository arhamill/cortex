# Cortex: A reactive library for the Corda vault

### Guide to usage

1. Install cortex

```
npm install @arhamill/cortex
```

2. Run the [cortex webserver](https://github.com/arhamill/cortex)

3. Create a corda context and provider component
```
import { createLinearContext } from '@arhamill/cortex'

const nft = createLinearContext('http://cortex-server-url', 'com.r3.corda.lib.tokens.contracts.states.NonFungibleToken')
const nftContext = nft.linearContext
const NFTProvider = nft.LinearProvider
```

4. Add the provider as a parent to any component that needs to consume it (either within itself or any of its children). For convenience this will usually be the `App` component.

```
ReactDOM.render(
    <NFTProvider>
        <App />
    </NFTProvider>
, document.getElementById('root'));
```

5. Consume the context from any child component!

```
import React, { useContext } from 'react'

const MyComponent = () => {
    const nfts = useContext(nftContext)

    ...
}
```

Any component consuming this context will be re-rendered when there is a vault update.