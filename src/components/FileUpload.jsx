import React, { useState } from 'react';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [outputVideoUrl, setOutputVideoUrl] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('video', file);

        try {
            const response = await fetch('http://localhost:3001/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const result = await response.json();
            setOutputVideoUrl(`http://localhost:3001/${result.outputVideoPath}`);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload and Process</button>
            {outputVideoUrl && (
                <div>
                    <h3>Processed Video:</h3>
                    <video width="600" controls>
                        <source src={outputVideoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
