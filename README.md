
🚗 DriveEasy — Plataforma de Aluguel de Veículos com Blockchain
================================================================

Este projeto é uma plataforma descentralizada para **cadastro e aluguel de veículos** utilizando **smart contracts** em Ethereum e interface em **React**.  
Ideal para aprender e aplicar conceitos de blockchain, Web3, contratos inteligentes e frontend moderno.

---

🛠️ Tecnologias Utilizadas
--------------------------
- ⚛️ React.js (interface web)
- 🔨 Hardhat (framework para contratos Ethereum)
- 💻 Solidity (linguagem dos smart contracts)
- 🦊 MetaMask (carteira para conexão Web3)
- 🟨 JavaScript / Node.js

---

💻 Como Rodar o Projeto (Windows + VS Code)
-------------------------------------------

🔁 1. Configurar Rede Local no MetaMask:

    🏷️ Nome da rede: Hardhat Local (ou qualquer outro nome)
    🌐 URL da RPC: http://127.0.0.1:8545
    🆔 Chain ID: 31337
    💰 Símbolo da moeda: ETH
    🧭 Explorador de blocos: (deixe em branco)

🧱 2. Rodar o Nó da Blockchain Local:

    cd smart-contracts
    npm install
    npx hardhat node

🚀 3. Deploy do Smart Contract:

    cd smart-contracts
    npx hardhat ignition deploy ignition/modules/VehicleModule.js --network HardhatLocal

🌐 4. Iniciar o Frontend (interface do sistema):

    cd vehicle-project
    npm install
    npm start

---

🧪 Testes (opcional)
--------------------
Para rodar os testes do smart contract:

    cd smart-contracts
    npx hardhat test

---

✨ Funcionalidades
------------------
- 📋 Cadastro de veículos com modelo, placa, valor em ETH e dias disponíveis.
- ⚙️ Deploy e chamada de funções blockchain via MetaMask.
- 🖥️ Interface intuitiva para interação com os contratos.

---

📁 Estrutura do Projeto
-----------------------
DriveEasy3/

├── smart-contracts/     # 📜 Contratos Solidity + scripts de deploy  
├── vehicle-project/     # 💻 Aplicação React frontend  
├── README.txt

---

👨‍🎓 Autores 
-----------------------
- Allan José Amaral Ribeiro
- Marcos Paulo Sales

---

📄 Licença
----------
Este projeto está sob a licença MIT.



