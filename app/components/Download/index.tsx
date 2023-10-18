import React from 'react';

const FileDownloader = () => {
  const downloadFile = async () => {
    try {
      // Replace 'your_file_path' with the actual path to the file you want to download
      const filePath = './../../../assets/fileExample/example.xlsx';

      const response = await fetch(filePath);
      const blob = await response.blob();

      // Create a temporary anchor element
      const a = document.createElement('a');
      const url = window.URL.createObjectURL(blob);

      // Set the anchor's attributes for downloading the file
      a.href = url;
      a.download = 'exapmle.xlsx'; // Set the desired file name

      // Append the anchor to the body and trigger the download
      document.body.appendChild(a);
      a.click();

      // Remove the anchor from the body
      document.body.removeChild(a);

      // Revoke the object URL to free up resources
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div>
      <h2>File Downloader</h2>
      <button onClick={downloadFile}>
        <img
          src="download-icon.png" // Replace with the path to your download icon
          alt="Download Icon"
          style={{ width: '20px', height: '20px', marginRight: '5px' }}
        />
        Download File
      </button>
    </div>
  );
};

export default FileDownloader;
