# getSizes.js

## Overview
`getSizes.js` is a Node.js script designed to calculate the size of the bytecode and initcode of a Solidity smart contract. This can be useful for developers who need to ensure their contracts are within size limits imposed by the Ethereum network.

## Usage
To use this script, you need to have Node.js and the `solc` Solidity compiler installed. The script reads a Solidity contract file, compiles it, and then calculates the sizes of the bytecode and initcode.

## Prerequisites
- Node.js
- `solc` Solidity compiler
- A Solidity contract file

## Installation
1. Install Node.js from [nodejs.org](https://nodejs.org/).
2. Install the `solc` Solidity compiler:
   ```bash
   npm install solc
   ```

## Configuration
Before running the script, you need to update the contract name and path in the script:
1. Replace `'Enter Contract Name Here'` with the actual name of your contract.
2. Replace `'./contracts/Enter Contract Name Here.sol'` with the actual path to your contract file.

## Running the Script
To run the script, use the following command:

