// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract VehicleRental {
    struct Car {
        uint256 id;
        string model;
        string licensePlate;
        uint256 pricePerDay;
        uint256 duration;
        bool isAvailable;
        address renter;
    }

    struct RentalHistory {
        uint256 carId;
        uint256 duration;
        uint256 timestamp;
    }

    Car[] public cars;
    mapping(address => RentalHistory[]) public rentalRecords;

    event CarAdded(uint256 indexed carId, string model);
    event CarRented(uint256 indexed carId, address indexed renter, uint256 duration);
    event CarReturned(uint256 indexed carId, address indexed renter);

    // Cadastrar veículo com duração inicial
    function addCar(
        string memory _model,
        string memory _licensePlate,
        uint256 _pricePerDay,
        uint256 _duration
    ) public {
        uint256 carId = cars.length;
        cars.push(Car({
            id: carId,
            model: _model,
            licensePlate: _licensePlate,
            pricePerDay: _pricePerDay,
            duration: _duration,
            isAvailable: true,
            renter: address(0)
        }));

        emit CarAdded(carId, _model);
    }

    // Listar todos os veículos
    function getAllCars() public view returns (
        uint256[] memory ids,
        string[] memory models,
        string[] memory plates,
        uint256[] memory prices,
        uint256[] memory durations,
        bool[] memory availables,
        address[] memory renters
    ) {
        uint256 count = cars.length;
        ids = new uint256[](count);
        models = new string[](count);
        plates = new string[](count);
        prices = new uint256[](count);
        durations = new uint256[](count);
        availables = new bool[](count);
        renters = new address[](count);

        for (uint256 i = 0; i < count; i++) {
            Car memory c = cars[i];
            ids[i] = c.id;
            models[i] = c.model;
            plates[i] = c.licensePlate;
            prices[i] = c.pricePerDay;
            durations[i] = c.duration;
            availables[i] = c.isAvailable;
            renters[i] = c.renter;
        }
    }

    // Alugar veículo
    function rentCar(uint256 _id, uint256 _duration) public payable {
        require(_id < cars.length, "ID invalido");
        Car storage c = cars[_id];
        require(c.isAvailable, "Carro nao disponivel");

        uint256 totalCost = c.pricePerDay * _duration;
        require(msg.value >= totalCost, "Valor insuficiente");

        c.duration = _duration;
        c.isAvailable = false;
        c.renter = msg.sender;

        rentalRecords[msg.sender].push(RentalHistory({
            carId: _id,
            duration: _duration,
            timestamp: block.timestamp
        }));

        emit CarRented(_id, msg.sender, _duration);
    }

    // Devolver veículo
    function returnCar(uint256 _id) public {
        require(_id < cars.length, "ID invalido");
        Car storage c = cars[_id];
        require(c.renter == msg.sender, "Voce nao alugou este carro");

        c.duration = 0;
        c.isAvailable = true;
        c.renter = address(0);

        emit CarReturned(_id, msg.sender);
    }

    // Histórico de aluguel
    function getRentalHistory(address _renter) public view returns (
        uint256[] memory carIds,
        uint256[] memory durations,
        uint256[] memory timestamps
    ) {
        uint256 count = rentalRecords[_renter].length;
        carIds = new uint256[](count);
        durations = new uint256[](count);
        timestamps = new uint256[](count);

        for (uint256 i = 0; i < count; i++) {
            RentalHistory memory r = rentalRecords[_renter][i];
            carIds[i] = r.carId;
            durations[i] = r.duration;
            timestamps[i] = r.timestamp;
        }
    }
}