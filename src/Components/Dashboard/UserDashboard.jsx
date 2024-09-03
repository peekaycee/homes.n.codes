import './Dashboard.css';
import UserReport from './../Reports/UserReport';
import { useState } from 'react';

function UserDashboard() {
  const [reportDisplayed, setReportDisplayed] = useState(false);

  const Dashboard = () => {
    return (
      <div>
        <h1>User Dashboard</h1>
      </div>
    );
  };

  const Report = () => {
    return <div>{<UserReport />}</div>;
  };

  const handleShowReport = () => {
    setReportDisplayed(true);
  };

  const handleDownloadReport = () => {
    alert("User's dashboard report downloading...");
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

export default UserDashboard;
