import { useState, useEffect } from "react";
import { useMetaMask } from "../customhook/useMetaMask";

const HistoryVehicle = () => {
  const [listVehicleRent, setListVehicleRent] = useState([]);
  const { web3, account, contract } = useMetaMask();

  useEffect(() => {
    async function fetchRentalHistory() {
      if (!web3 || !contract || !account) {
        console.warn("Blockchain não conectada ou MetaMask não detectada.");
        return;
      }

      try {
       

        const result = await contract.methods.getRentalHistory(account).call();

// Verifica se o retorno é por índice ou propriedade
const carIds = result[0] || result.carIds;
const durations = result[1] || result.durations;
const timestamps = result[2] || result.timestamps;

// Mapeia os resultados
const historyList = carIds.map((id, index) => ({
  carId: id,
  duration: durations[index],
  timestamp: new Date(Number(timestamps[index]) * 1000).toLocaleDateString("pt-BR"),
}));

setListVehicleRent(historyList);
      } catch (error) {
        console.error("Erro ao buscar histórico de aluguéis:", error);
      }
    }

    fetchRentalHistory();
  }, [web3, contract, account]);

  return (
    <div id="container3">
      <header>
        <h1 style={{ color: "green" }}>Histórico de Aluguéis</h1>
      </header>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <article id="model_card">
          <div style={{ overflowX: "auto", marginTop: "10px" }}>
            <table border="1" cellPadding="10" style={{ backgroundColor: "#fdfdfd" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>ID do Carro</th>
                  <th style={{ textAlign: "center" }}>Duração</th>
                  <th style={{ textAlign: "center" }}>Data</th>
                </tr>
              </thead>
              <tbody>
                {listVehicleRent.length > 0 ? (
                  listVehicleRent.map((item, index) => (
                    <tr key={index}>
                      <td style={{ textAlign: "center" }}>{item.carId}</td>
                      <td style={{ textAlign: "center" }}>{item.duration} dia(s)</td>
                      <td style={{ textAlign: "center" }}>{item.timestamp}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" style={{ textAlign: "center", color: "red" }}>
                      Nenhum histórico de aluguel encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </div>
  );
};

export default HistoryVehicle;