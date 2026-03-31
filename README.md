<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:00e5c3,50:8b6fd4,100:00e5c3&height=3&section=header" width="100%"/>

<br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0d1117&height=160&text=ethereum-lottery-dapp&fontColor=00e5c3&fontSize=30&fontAlignY=45&desc=SOLIDITY%20%C2%B7%20REACT%20%C2%B7%20ETHEREUM%20%C2%B7%20BLOCKCHAIN%20BOOTCAMP&descAlignY=68&descSize=13&fontFamily=courier" width="100%"/>

<br/>

[![Solidity](https://img.shields.io/badge/SOLIDITY-0.8-00e5c3?style=flat-square&labelColor=0d1117)](https://soliditylang.org)
[![React](https://img.shields.io/badge/REACT-17-8b6fd4?style=flat-square&labelColor=0d1117)](https://reactjs.org)
[![Ethereum](https://img.shields.io/badge/ETHEREUM-RINKEBY-00e5c3?style=flat-square&labelColor=0d1117)](https://ethereum.org)
[![Tests](https://img.shields.io/badge/TESTS-5%20PASSING-00e5c3?style=flat-square&labelColor=0d1117)](#tests)
[![Status](https://img.shields.io/badge/STATUS-ARCHIVED-555?style=flat-square&labelColor=0d1117)](https://github.com/rahilpopat/ethereum-lottery-dapp)

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:00e5c3,50:8b6fd4,100:00e5c3&height=3&section=header" width="100%"/>

</div>

<br/>

## > what_this_is

```
A decentralised lottery application built on Ethereum.

Players enter by sending ETH to the smart contract.
The contract manager picks a winner at random.
The full prize pool transfers automatically. No middleman.
```

Built as the final project for a Blockchain Developer Bootcamp. 41 commits, 5 passing unit tests, a deployed smart contract, and a working React frontend connected to the Ethereum Rinkeby testnet.

→ [Watch the project walkthrough](https://www.loom.com/share/9f4057415da84a949f281c26fcb98021)

<br/>

---

## > how_it_works

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  PLAYER      │───▶│  SMART       │───▶│  MANAGER     │───▶│  WINNER      │
│              │    │  CONTRACT    │    │              │    │              │
│ Sends ETH    │    │ Holds funds  │    │ Calls        │    │ Receives     │
│ via MetaMask │    │ Tracks       │    │ pickWinner() │    │ full prize   │
│              │    │ players      │    │              │    │ pool         │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
```

**Smart contract** (`Lottery.sol`):
- Accepts ETH entries from any address
- Tracks all players in a dynamic array
- Manager-only `pickWinner()` function using pseudo-random selection
- Transfers full balance to winner and resets the lottery
- Security patterns: checks-effects-interactions, access control modifiers

**Frontend** (`lottery-react`):
- React app connected to deployed contract via web3.js
- MetaMask wallet integration
- Live display of prize pool, player count, and last winner
- Enter lottery and pick winner directly from the browser

<br/>

---

## > repo_structure

```
ethereum-lottery-dapp/
├── contracts/
│   └── Lottery.sol          ← Solidity smart contract
├── test/
│   └── Lottery.test.js      ← 5 unit tests (Mocha)
├── lottery-react/
│   └── src/
│       ├── App.js           ← Main React component
│       └── lottery.js       ← Contract ABI + deployed address
├── compile.js               ← Compiles Solidity → ABI + bytecode
├── deploy.js                ← Deploys to Rinkeby via Infura
├── avoiding_common_attacks.md
└── design_patterns_decisions.md
```

<br/>

---

## > tests

5 unit tests written with Mocha, covering:

```
✓ deploys a contract
✓ allows one account to enter
✓ allows multiple accounts to enter
✓ requires a minimum amount of ether to enter
✓ only manager can call pickWinner
```

Run tests:
```bash
npm install
npm install --save-dev mocha
npm test
```

→ [Watch test run video](https://www.loom.com/share/a214fba81b9c472490ab5d8534146685)

<br/>

---

## > run_locally

**1. Clone and install**
```bash
git clone https://github.com/rahilpopat/ethereum-lottery-dapp
cd ethereum-lottery-dapp
npm install
```

**2. Compile and deploy the smart contract**
```bash
# Add your MetaMask mnemonic and Infura API key to deploy.js
node compile.js
node deploy.js
# Copy the output ABI and address into lottery-react/src/lottery.js
```

**3. Run the React frontend**
```bash
cd lottery-react
npm install
npm start
# Open http://localhost:3000
# Connect MetaMask on Rinkeby testnet
```

<br/>

---

## > what_i_learned

- Writing and deploying Solidity smart contracts to a live testnet
- Smart contract security patterns — access control, checks-effects-interactions, avoiding common attack vectors
- Connecting a React frontend to a deployed contract via ABI and web3.js
- Writing unit tests for smart contracts with Mocha
- The full dapp stack: contract → compile → deploy → frontend → MetaMask

<br/>

---

## > what_came_next

```
The discipline of building end to end — from logic layer to
deployed contract to user interface — carried forward.

The domain changed. AI agents replaced smart contracts.
The pattern stayed the same.
```

→ See what I'm building now: [personal-ai-research-assistant](https://github.com/rahilpopat/personal-ai-research-assistant)

<br/>

---

## > tech_stack

[![Solidity](https://img.shields.io/badge/Solidity-363636?style=flat-square&labelColor=0d1117&logo=solidity&logoColor=white)](https://soliditylang.org)
[![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=flat-square&labelColor=0d1117&logo=ethereum&logoColor=white)](https://ethereum.org)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&labelColor=0d1117&logo=react&logoColor=00e5c3)](https://reactjs.org)
[![Web3](https://img.shields.io/badge/Web3.js-F16822?style=flat-square&labelColor=0d1117&logo=web3.js&logoColor=white)](https://web3js.readthedocs.io)
[![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=flat-square&labelColor=0d1117&logo=mocha&logoColor=white)](https://mochajs.org)
[![Infura](https://img.shields.io/badge/Infura-FF5B4F?style=flat-square&labelColor=0d1117)](https://infura.io)

<br/>

---

<div align="center">

Blockchain Developer Bootcamp Final Project · Archived

[github.com/rahilpopat](https://github.com/rahilpopat)

<br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:8b6fd4,50:00e5c3,100:8b6fd4&height=3&section=footer" width="100%"/>

</div>
