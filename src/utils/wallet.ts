export async function addNetwork() {
  const { ethereum } = window;
  const hexId = "0x867";
  if (ethereum) {
    try {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: hexId }], // chainId must be in hexadecimal numbers
      });
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask.
      console.log("switchError :", switchError);
      const chainName = "Agora mainnet";
      const currencyName = "Agora mainnet";
      const currencySymbol = "BOA";
      const currencyDecimal = 18;
      const rpcUrls = "https://mainnet.bosagora.org";
      const blockExplorerUrls = "https://www.boascan.io/";
      if (switchError.code === 4902 || switchError.code === -32603) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: hexId,
                chainName: chainName,
                rpcUrls: [rpcUrls],
                blockExplorerUrls: [blockExplorerUrls],
                nativeCurrency: {
                  name: currencyName,
                  symbol: currencySymbol,
                  decimals: currencyDecimal,
                },
              },
            ],
          });
        } catch (addError) {
          // handle "add" error
          console.log("addError :", addError);
        }
      }
      // handle other "switch" errors
    }
  } else {
    window.open("https://metamask.io/", "_blank", "noopener,noreferrer");
  }
}
