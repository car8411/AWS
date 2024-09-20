import React, { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState(null); // 파일 상태 추가
  const [filePath, setFilePath] = useState(""); // 업로드된 파일 경로

  // 데이터 및 파일 서버에 전송
  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData 객체를 사용하여 파일과 텍스트 데이터 함께 전송
    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    if (file) {
      formData.append("file", file); // 파일 추가
    }

    try {
      // 파일과 데이터를 서버에 전송 (파일 업로드 경로)
      const response = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      setFilePath(response.data.filePath); // 서버에서 업로드된 파일 경로 받기

      // DynamoDB에 텍스트 데이터 저장 (별도의 API 요청)
      await axios.post("/save-data", { id, name });

      alert("Data and file uploaded successfully!");
    } catch (error) {
      console.error("Error uploading data and file:", error);
      alert("Failed to upload data and file.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>File:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])} // 파일 선택 시 상태에 저장
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* 파일이 업로드된 경우에만 경로를 보여줍니다 */}
      {filePath && (
        <div>
          <h3>Uploaded File:</h3>
          <a href={filePath} target="_blank" rel="noopener noreferrer">
            View Uploaded File
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
