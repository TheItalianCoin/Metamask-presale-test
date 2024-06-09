document.getElementById('add-network-btn').addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0x13e91', // Chain ID in hexadecimal (81457 in decimal)
                    chainName: 'Blast',
                    rpcUrls: ['https://rpc.blast.io'],
                    nativeCurrency: {
                        name: 'Ethereum',
                        symbol: 'ETH',
                        decimals: 18
                    },
                    blockExplorerUrls: ['https://blastscan.io']
                }]
            });
        } catch (error) {
            console.error('Errore nell\'aggiungere la rete:', error);
        }
    } else {
        alert('MetaMask non è installato. Per favore, installa MetaMask e riprova.');
    }
});
