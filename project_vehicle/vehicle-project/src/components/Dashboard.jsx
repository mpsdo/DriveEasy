import { Link } from "react-router-dom";
const Dashboard = ({onClickGetVehicles}) => {
    return (
        <>
            <div id="dashboard">
                <button >
                   <Link to ="/cadastrarCarros" style={{ textDecoration: "none", color: "white" }}>Cadastrar veículo</Link>
                </button>
                <button onClick={onClickGetVehicles}>
                    Listar veículo disponíveis
                </button>
                <button>
                     <Link to ="/historico" style={{ textDecoration: "none", color: "white" }}>Ver Meus alugueis</Link>
                </button>

            </div>


        </>
    )

}

export default Dashboard;