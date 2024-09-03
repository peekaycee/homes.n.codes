import './Dashboard.css';
import AdminReport from './../Reports/AdminReport';
import { useState } from 'react';

function AdminDashboard() {
  const [reportDisplayed, setReportDisplayed] = useState(false);

  const Dashboard = () => {
    return (
      <div>
        <h1>Admin Dashboard</h1>
      </div>
    );
  };

  const Report = () => {
    return <div>{<AdminReport />}</div>;
  };

  const handleShowReport = () => {
    setReportDisplayed(true);
  };

  const handleDownloadReport = () => {
    alert("Admin's dashboard report downloading...");
    setReportDisplayed(false);
  };

  return (
    <div>
      <div>{<Dashboard />}</div>
      <div>
        {!reportDisplayed ? (
          <button
            type='button'
            onClick={handleShowReport}
            className='show report-btn'>
            Show Report
          </button>
        ) : (
          <>
            <Report />
            <button
              type='button'
              onClick={handleDownloadReport}
              className='download report-btn'>
              Download Report
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
