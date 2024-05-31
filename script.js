window.addEventListener('DOMContentLoaded', async () => {
    // Controllo se MetaMask è installato
    const provider = await detectEthereumProvider();

    if (provider) {
        console.log('MetaMask trovato!');
        const web3 = new Web3(provider);

        // Aggiungo gestore di eventi al pulsante di acquisto
        const buyButton = document.getElementById('buyButton');
        buyButton.addEventListener('click', async () => {
            try {
                // Ottengo l'indirizzo del contratto del token $TIC
                const tokenAddress = 0x53BEbF7995a81Eb35c855F45c89962ED6A19d9ff;

                // Invio la transazione per acquistare i token
                await web3.eth.sendTransaction({
                    to: tokenAddress,
                    value: web3.utils.toWei('1', 'ether'), // Amount in ether to send
                    gas: '21000', // Gas limit
                });

                alert('Transazione inviata con successo!');
            } catch (error) {
                console.error('Errore durante l\'invio della transazione:', error);
                alert('Si è verificato un errore durante l\'invio della transazione. Controlla la console per i dettagli.');
            }
        });
    } else {
        console.error('MetaMask non trovato. Assicurati di averlo installato.');
        alert('MetaMask non trovato. Assicurati di averlo installato per poter acquistare i token.');
    }
});