import { TextField } from '@material-ui/core';
import React, { useState } from 'react';

export const Upload = () => {
  const [title, setTitle] = useState<string>('');
  const [files, setFiles] = useState<FileList>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFiles(event.target.files);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!files) {
      alert('Please attach some files.');
    } else {
      alert('Uploaded successfully.');
      setTitle('');
      setFiles(undefined);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold">Upload form</h1>
      <div className="max-w-lg">
        <form onSubmit={handleSubmit}>
          <TextField
            name="title"
            label="Title"
            fullWidth
            required
            value={title}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
              setTitle(event.target.value)
            }
          />
          <div className="flex flex-col my-3">
            {files && (
              <div>
                <h6 className="font-semibold text-gray-800">Files</h6>
                {Object.keys(files).map((key) => (
                  <div key={key} className="border-2 border-gray-500 rounded text-center py-1 font-semibold">
                    {files[Number(key)].name}
                  </div>
                ))}
              </div>
            )}
            <label htmlFor="browse-file-button">
              <div className="w-48 text-center border-2 border-gray-800 cursor-pointer font-semibold mt-2 py-2 rounded text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
                <span>Upload files</span>
              </div>
            </label>
          </div>
          <input
            multiple
            accept="image/*"
            className="hidden"
            id="browse-file-button"
            type="file"
            onChange={handleFileChange}
          />
          <div className="flex justify-between items-center my-6">
            <button
              type="submit"
              className="bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 px-3 py-2"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
