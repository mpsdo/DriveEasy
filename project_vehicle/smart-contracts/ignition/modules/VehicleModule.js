// ignition/modules/VehicleModule.js
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("VehicleModule", (module) => {
  const vehicleRental = module.contract("VehicleRental");
  return { vehicleRental };
});
