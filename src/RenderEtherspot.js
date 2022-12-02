import {
    Etherspot,
  } from "@etherspot/react-transaction-buidler";
import { ethers } from "ethers";
  /**
   * This is all that is needed to get started.
   * To customise this, see the possible props
   * you can pass in. the docs.
   */
  function RenderEtherspot(props) {
    const Provider = new ethers.providers.JsonRpcProvider( `https://polygon-mainnet.g.alchemy.com/v2/LD60FW8HAzPUhAGjPagAlLhVcFJQYYBW` );
    return <Etherspot provider={Provider}/>;
  }

  export default RenderEtherspot