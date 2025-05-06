# Decentralized-Secure-EHR-
The project uses blockchain, smart contracts(solidity) and web3 features to let individuals manage and secure their health data. The Project's goal is to empower people to control their health information, communicate better with healthcare providers, and drive innovation in healthcare.
# Deployment and Running Instructions

&nbsp;

## Requirements

- **MetaMask** – Browser extension for managing Ethereum wallets.
- **Ganache** – Personal local Ethereum blockchain for development.
- **Truffle** – Development framework for Ethereum smart contracts.
- **Node.js** – JavaScript runtime environment (Use Node v18 for compatibility).
- **lite-server** – Lightweight development server (used internally by many DApp frontends).
- **Web3.js** – JavaScript library for interacting with the Ethereum blockchain.

---

## Setup and Deployment Steps

### 1. Initialize and Connect Ganache to MetaMask

- **Open Ganache**:
  - Select **"New Workspace"**.
  - Click **"Add Project"**.
  - Locate and select your `truffle-config.js` file.
  - Click the **"Start"** button (top right corner).

- **Connect MetaMask**:
  - Open MetaMask browser extension.
  - Click on the **network selector** (top left corner).
  - Scroll down and **enable test networks**.
  - Click **"Add a network manually"**.
  - Fill in the following details:
    - **Network Name**: Any name you prefer.
    - **RPC URL**: (from Ganache, usually `http://127.0.0.1:7545`)
    - **Chain ID**: `1337`
    - **Currency Symbol**: `ETH`
  - Click **Save**.

---

### 2. Prepare the Project

- Open your project folder.
- **Delete** the following if they exist:
  - `node_modules directory`
  - `package-lock.json`

---

### 3. Install Dependencies

Open your project in **VS Code**. In the terminal (preferably PowerShell), run:

```bash
npm install --force
```

---

### 4. Compile and Migrate Contracts

- Navigate to the `src` directory:

  ```bash
  cd src
  ```
- Compile the smart contracts:
  
  ```bash
  truffle compile
  ```
- Deploy the smart contracts to the local Ganache blockchain:

  ```bash
  truffle migrate
  ```
---
### 5. Start the Application

Once you have compiled and migrated your contracts, you can start the application by running the following command:

```bash
npm start
```
This will start the frontend server and make your application accessible.

---

⚠️ Note: 

If you face any issues while starting the application or during installation, it may be due to an incompatible Node.js version.
To avoid this, make sure you are using Node.js version 18.20 . You can switch to version 18 using nvm (Node Version Manager) by running the following commands:

```bash
nvm install 18
nvm use 18
```
If you don't have nvm installed, go to [nvm-windows](https://github.com/coreybutler/nvm-windows) for Windows or [nvm-sh](https://github.com/nvm-sh/nvm) for Linux/macOS.
---

