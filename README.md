# QuoteFusion API & Frontend

QuoteFusion is a simple web application that allows users to get a random quote or submit their own quotes via a RESTful API. This project demonstrates a backend server using **Express.js** and a frontend built with **React**.

## Features

- **Get Random Quote**: Retrieve a random quote from the database.
- **Submit a New Quote**: Add new quotes to the database with the text and author.
- **Frontend**: A simple user interface that allows you to view a random quote and submit new ones.

## Technologies Used

- **Backend**: 
  - **Express.js** (for creating the API)
  - **CORS** (to allow cross-origin requests)
  - **Node.js** (for running the server)
  
- **Frontend**:
  - **React** (for building the UI)
  - **Axios** (for making API requests)

## Setup Instructions

Follow these steps to set up the project locally.

### 1. Clone the repository:

```bash
git clone https://github.com/JaiSPrabhu07/QuoteFusion.git
cd quotefusion

Frontend setup
npm run dev

Backend setup
cd src
cd backend

npm install

node server.js
