const getCustomerOrdersById = "http://localhost:8082/order/getbycustomer/";
const getWasherOrdersById = "http://localhost:8082/order/getbywasher/";
const getUserById = "http://localhost:8081/user/get/";
const createUser = "http://localhost:8081/user/create";
const getAllUsers = "http://localhost:8081/user/getall";
const deleteUserById = "http://localhost:8081/user/delete/";
const updateUserById = "http://localhost:8081/user/update/";
const createOrder = "http://localhost:8082/order/create";
const getOrderById = "http://localhost:8082/order/get/";
const getAllOrders = "http://localhost:8082/order/get/all";
const updateOrderById = "http://localhost:8082/order/update/";
const cancelOrderById = "http://localhost:8082/order/cancel/";
const createServicePlan = "http://localhost:8082/service/create";
const deleteServicePlanById = "http://localhost:8082/service/delete/";
const getServicePlanById = "http://localhost:8082/service/get/";
const getAllServicePlans = "http://localhost:8082/service/get/all";
const updateServicePlanById = "http://localhost:8082/service/update/";
const createVehicle = "http://localhost:8082/vehicle/create";
const deleteVehicleById = "http://localhost:8082/vehicle/delete/";
const getAllVehicles = "http://localhost:8082/vehicle/getall";
const getVehicleById = "http://localhost:8082/vehicle/get/";
const getVehicleByCustomerId = "http://localhost:8082/vehicle/getbycustomer/";
const updateVehicleById = "http://localhost:8082/vehicle/update";

export {
  createVehicle,
  getVehicleByCustomerId,
  getUserById,
  createUser,
  getAllUsers,
  deleteUserById,
  getOrderById,
  getCustomerOrdersById,
  getWasherOrdersById,
  getAllServicePlans,
  updateVehicleById,
  getVehicleById,
  getAllVehicles,
  deleteVehicleById,
  updateServicePlanById,
  getServicePlanById,
  deleteServicePlanById,
  createServicePlan,
  updateOrderById,
  cancelOrderById,
  getAllOrders,
  createOrder,
  updateUserById,
};
