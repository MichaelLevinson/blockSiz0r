// getSizes.js
// Michael Levinson - 2025-04-02 
// This script is used to get the size of the bytecode and initcode of a contract

const solc = require('solc');
const fs = require('fs');
const path = require('path');

function getContractSizes(contractPath) {
  // Read source
  const source = fs.readFileSync(contractPath, 'utf8');
  
  // Compile
  const input = {
    language: 'Solidity',
    sources: { 
      'enter contract name here.sol': { content: source } // using your contract name
    },
    settings: { 
      outputSelection: { 
        '*': { '*': ['evm.bytecode', 'evm.deployedBytecode'] }
      } 
    }
  };
  
  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  
  // Get contract data
  const contractName = 'Enter Contract Name Here'; // Using your contract name
  const contract = output.contracts['Enter Contract Name Here.sol'][contractName]; // Using your contract name
  
  // Get bytecode sizes
  const initcodeSize = contract.evm.bytecode.object.length / 2;
  const bytecodeSize = contract.evm.deployedBytecode.object.length / 2;
  
  return { initcodeSize, bytecodeSize };
}

const contractPath = path.resolve('./contracts/Enter Contract Name Here.sol'); // Using your contract name
const sizes = getContractSizes(contractPath);
console.log(`Initcode size: ${sizes.initcodeSize} bytes`);
console.log(`Bytecode size: ${sizes.bytecodeSize} bytes`);
