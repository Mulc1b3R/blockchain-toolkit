// Function to connect to MetaMask
async function connectToMetaMask() {
    if (window.ethereum) {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Connected to MetaMask");
        // You can now interact with MetaMask-enabled Ethereum networks
    } else {
        alert("MetaMask extension not detected. Please install MetaMask to proceed.");
    }
}

// Web3 initialization and MetaMask detection
if (typeof window.ethereum !== 'undefined') {
    // Initialize Web3 with MetaMask provider
    const web3 = new Web3(window.ethereum);

    // Check if MetaMask is connected
    if (window.ethereum.isConnected()) {
        console.log("Connected to MetaMask");
        // You can now interact with MetaMask-enabled Ethereum networks
    } else {
        // Handle case if MetaMask is not connected
    }
} else {
    alert("MetaMask extension not detected. Please install MetaMask to proceed.");
}