import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';

import EmployeeLogin from "./pages/EmployeeLogin.jsx";
import Header from "./component/Header.jsx";
import PrivateRoute from "./component/PrivateRoute.jsx";
import EmployeeManage from "./pages/employeeManagement/EmplyeeManage.jsx";
import AddLeave from "./pages/employeeManagement/AddLeave.jsx";
import EmployeeDetail from "./pages/employeeManagement/EmployeeDetail.jsx";
import MainAdminDashboard from "./pages/MainAdminDashboard.jsx";
import UpdateLeave from "./pages/employeeManagement/UpdateLeave.jsx";
import AddEvent from "./pages/event management/AddEvent.jsx";
import EventManage from "./pages/event management/EventManage.jsx";
import UpdateEvent from "./pages/event management/UpdateEvent.jsx";
import CalendarPage from "./pages/event management/EventCalender.jsx";
import AddPackage from "./pages/package management/AddPackage.jsx";
import PackageManage from "./pages/package management/PackageManage.jsx";
import UpdatePackage from "./pages/package management/UpdatePackage.jsx";
import StockMainDashBoard from "./pages/stockManagement/StockMainDashBoard.jsx";
import SupplierAdminDashboard from "./pages/supplierManagement/SupplierAdminDashboard.jsx";
import AddStock from "./pages/stockManagement/AddStock.jsx";
import ViewStock from "./pages/stockManagement/ViewStock.jsx";
import EditStock from "./pages/stockManagement/EditStock.jsx";
import AddSupplier from "./pages/supplierManagement/AddSupplier.jsx";
import ViewSupplier from "./pages/supplierManagement/ViewSupplier.jsx";
import EditSupplier from "./pages/supplierManagement/EditSupplier.jsx";
import SupplierStock from "./pages/supplierManagement/SupplierStock.jsx";
import SupplierStockView from "./pages/supplierManagement/SupplierStockView.jsx";
import SupplierStockEdit from "./pages/supplierManagement/SupplierStockEdit.jsx";
import AddReturnItems from "./pages/stockManagement/AddReturnItems.jsx";
import ViewReturnItems from "./pages/stockManagement/ViewReturnItems.jsx";
import EditReturnItems from "./pages/stockManagement/EditeReturnItems.jsx";
import ShowNotCompletedEvents from "./pages/package management/ShowNotCompletedEvents.jsx";
import ShowNotCompletedEventEventside from "./pages/stockManagement/ShowNotCompletedEventStockside.jsx";
import ShowNotCompletedEventStockside from "./pages/stockManagement/ShowNotCompletedEventStockside.jsx";
import ShowAllPurchases from "./pages/supplierManagement/ShowAllPurchases.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<EmployeeLogin onLogin={handleLogin} />} />

        {/* Protected routes wrapped in PrivateRoute */}
        <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/main-admin-dashboard" element={<MainAdminDashboard />} />
          <Route path="/employee-manage" element={<EmployeeManage />} />
          <Route path="/leaves/add/:employeeId" element={<AddLeave />} />
          <Route path="/employees/update/:employeeId" element={<EmployeeDetail />} />
          <Route path="/leaves/update/:leaveId" element={<UpdateLeave />} />

          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/event-manage" element={<EventManage />} />
          <Route path="/update-event/:id" element={<UpdateEvent />} />
          <Route path="/event-calendar" element={<CalendarPage />} />
          
          
          <Route path="/add-package" element={<AddPackage />} />
          <Route path="/package-manage" element={<PackageManage />} />
          <Route path="/package/update/:packageId" element={<UpdatePackage />} />
          <Route path="/show-notCompleted" element={<ShowNotCompletedEvents />} />

          {/* stock routes */}
          <Route path="/stock-admin-dash" element={<StockMainDashBoard />} />
          <Route path="/add-stock" element={<AddStock />} />
          <Route path="/view-stock" element={<ViewStock />} />
          <Route path="/edit-stock/:id" element={<EditStock />} />
          <Route path="/show-notCompleted-stock" element={<ShowNotCompletedEventStockside />} />

          {/* return stock routes */}
          <Route path="/add-return-stock" element={<AddReturnItems />} />
          <Route path="/view-return-stock" element={<ViewReturnItems />} />
          <Route path="/edite-return-stock/:id" element={<EditReturnItems />} />

          {/* supplier routes */}
          <Route path="/supplier-admin-dash" element={<SupplierAdminDashboard />} />
          <Route path="/add-supplier" element={<AddSupplier />} />
          <Route path="/view-supplier" element={<ViewSupplier />} />
          <Route path="/edit-supplier/:id" element={<EditSupplier />} />
          <Route path="/show-all-purchase" element={<ShowAllPurchases />} />

          {/* supplier stock routes */}
          <Route path="/add-supp-stock" element={<SupplierStock />} />
          <Route path="/view-supp-stock" element={<SupplierStockView />} />
          <Route path="/editsuppstock/:id" element={<SupplierStockEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
