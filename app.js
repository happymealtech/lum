// Funzione che parte in automatico quando la pagina è caricata
window.onload = async function() {
    console.log("Script avviato correttamente.");
    
    // 1. Messaggio immediato per capire se JS sta leggendo
    alert("Inizializzazione sistema Curatori1...");

    try {
        // 2. Configurazione Stellar
       const server = new StellarSdk.Horizon.Server("https://horizon-testnet.stellar.org");
        const issuerAddress = "GD22GBKOUYWC3C2QDZPMT27GBD2L6STAPXN2QEZB3HX4GNISW3P7XSQK";

        // 3. Chiamata alla rete
        const account = await server.loadAccount(issuerAddress);
        
        // 4. Se arriva qui, la blockchain ha risposto!
        alert("CONNESSO A STELLAR!\nAccount: " + issuerAddress.substring(0, 10) + "...");
        console.log("Dati account Stellar caricati:", account);

    } catch (error) {
        console.error("Errore Blockchain:", error);
        alert("Errore di connessione alla rete Stellar. Controlla internet.");
    }
};
