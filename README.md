# CSV File Viewer

This project allows you to upload and view CSV files, with additional features such as searching, sorting, and pagination.

Hoisted On https://csv-viewer-tghv.onrender.com/

## Getting Started

Follow these instructions to set up the project on your local system.

### Prerequisites

- Node.js installed on your machine
- NPM (Node Package Manager) installed on your machine
- MongoDB (or any other database of your choice)

### Installation

1. Clone the repository:

- git clone https://github.com/your-username/csv-file-viewer.git
- cd csv-file-viewer

2. Install server dependencies:

- cd backend
- npm install

3. Install client dependencies:

- cd frontend
- npm install

4. Configure the database:

- Make sure MongoDB is running.
- Update the database configuration in server/Database/config.js

5. Run the server

- node index.js

6. Run the client

- npm start

-Visit http://localhost:3000 in your browser to use the application.

## Features

### File Upload:

- Upload any CSV file into the system.

### File Listing:

- Display a list of all uploaded CSV files.

### File View:

- When the user selects a file, display all the data (with column headers) in a table on the page.

### Search:

- Implement a search box that filters rows based on user input.

### Dynamic Table Headers:

- Support different CSV files with different column headers dynamically.

### File Deletion:

- Allow users to delete uploaded CSV files.

### Validation:

- Implement validation on the front end to upload only CSV files.

## Folder Structure

- backend https://github.com/vipul0005/CsvUpload_back
- frontend https://github.com/vipul0005/CsvUpload_front

```
csv-file-viewer/
|-- backend/
|   |-- Database/
|   |   |-- config.js
|   |   |-- csvFiles.js
|   |
|   |-- Uploads/
|   |-- .gitignore
|   |-- index.js
|   |-- package.json
|   |
|   |
|   |
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |            |--About.js
|   |   |            |--Footer.js
|   |   |            |--Home.js
|   |   |            |--Nav.js
|   |   |            |--View.js
|   |   |-- App.css
|   |   |-- App.js
|   |   |-- index.js
|   |-- .gitignore
|   |-- package.json
|
|-- README.md

```

## Technologies Used

### Backend:

- Node.js
- Express.js
- MongoDB (Mongoose)

### Frontend:

- React
- React Router

### Other Libraries:

- Multer (for file uploads)
- PapaParse (for CSV parsing)
- Cors (for Cross-Origin Resource Sharing)

## Contributing

Contributions are welcome! Please follow the Contribution Guidelines.
