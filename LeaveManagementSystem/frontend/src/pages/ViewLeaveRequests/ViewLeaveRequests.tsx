import SideBar from '../../components/SideBar';
import { LeaveApplicationData } from '../../utils/SideBarModels/LeaveApplicationData';
import { MdCancelPresentation } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
import CancelPopUp from '../../components/CancelPopUp';
import EditLeaveRequestPopup from '../../components/EditLeaveRequestPopup';
const ViewLeaveRequests = () => {
  // Sample leave request data
  const leaveRequests = [
    {
      managerId: 'MNG002',
      managerName:'King',
      fromDate: '2024-04-20',
      toDate: '2024-04-25',
      totalDays: 6,
      reasonForLeave: 'Vacation',
      status:'pending'
    },
    {
      managerId: 'MNG002',
      managerName:'King',
      fromDate: '2024-04-18',
      toDate: '2024-04-22',
      totalDays: 5,
      reasonForLeave: 'Family emergency',
      status:'approved'
    },
    // Add more sample data as needed
  ];

  // Function to render leave requests table
  const renderLeaveRequestsTable = () => {
    return (
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold  uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-semibold  uppercase tracking-wider">Employee Name</th>
            <th className="px-6 py-3 text-left text-xs font-semibold  uppercase tracking-wider">From Date</th>
            <th className="px-6 py-3 text-left text-xs font-semibold  uppercase tracking-wider">To Date</th>
            <th className="px-6 py-3 text-left text-xs font-semibold  uppercase tracking-wider">Total Days</th>
            <th className="px-6 py-3 text-left text-xs font-semibold  uppercase tracking-wider">Reason for Leave</th>
            <th className="px-6 py-3 text-left text-xs font-semibold  uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {leaveRequests.map((request, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-left text-xs font-medium whitespace-nowrap">{request.managerId}</td>
              <td className="px-6 py-4 text-left text-xs font-medium whitespace-nowrap">{request.managerName}</td>
              <td className="px-6 py-4 text-left text-xs font-medium whitespace-nowrap">{request.fromDate}</td>
              <td className="px-6 py-4 text-left text-xs font-medium whitespace-nowrap">{request.toDate}</td>
              <td className="px-6 py-4 text-left text-xs font-medium whitespace-nowrap">{request.totalDays}</td>
              <td className="px-6 py-4 text-left text-xs font-medium whitespace-nowrap">{request.reasonForLeave}</td>
              <td className="px-6 py-4 text-left text-xs font-medium whitespace-nowrap flex justify-between items-center">
                <div>
                {request.status}
                </div>
                <div className='flex flex-col space-y-3 justify-center'>
                  <MdCancelPresentation className='text-rose-500 cursor-pointer' onClick={handleCancleLeaveRequest} />
                  <FaRegEdit className='text-black cursor-pointer' onClick={handleUpdateLeaveRequest}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  const [isCancelPopUp,setIsCancelPopup] = useState(false);
  const [isUpdatePopup,setIsUpdatePopup] = useState(false);
  const handleCancleLeaveRequest = ()=>{
    setIsCancelPopup((prev) => !prev)
  }
  const handleUpdateLeaveRequest = ()=>{
    setIsUpdatePopup((prev)=>!prev)
  }
  return (
   <SideBar data={LeaveApplicationData}>
     <div className="container mx-auto px-4 py-8 ">
      {isCancelPopUp && <CancelPopUp setIsCancelPopup = {setIsCancelPopup}/>}
      {isUpdatePopup && <EditLeaveRequestPopup setIsUpdatePopup={setIsUpdatePopup} />}
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Leave Request Dashboard</h1>
      {leaveRequests.length === 0 ? (
        <p className="text-gray-500">No leave requests found.</p>
      ) : (
        renderLeaveRequestsTable()
      )}
    </div>
   </SideBar>
  );
};

export default ViewLeaveRequests;
