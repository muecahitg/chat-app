# chat-app
 
A real-time chat web app built with React, Node.js, Express, and Socket.io.
 
## Features
 
- Real-time messaging between multiple users (LLM-Bot soon)
- Connection status indicator
- Timestamp on each message
## Tech Stack
 
- **Frontend** — React (Vite)
- **Backend** — Node.js + Express
- **Real-time** — Socket.io
## Project Structure
 
```
chat-app/
├── server.js               # Express + Socket.io backend
├── public/                 # Static assets
└── src/
    ├── App.jsx             # Root component
    ├── App.css             # Global styles
    ├── components/
    │   ├── ChatWindow.jsx  # Displays the list of messages
    │   ├── Message.jsx     # Single message bubble
    │   ├── Sidebar.jsx     # Sidebar - Participants list
    │   └── Input.jsx       # Text input and send button
    └── hooks/
        └── useSocket.js    # Socket.io connection logic
```
 
## Getting Started
 
### Prerequisites
 
- Node.js
- npm
### Installation
 
1. Clone the repository
```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```
 
2. Install dependencies
```bash
npm install
```
 
### Running the app
 
Start the backend server:
 
```bash
node server.js
```
 
Start the frontend dev server in a second terminal:
 
```bash
npm run dev
```
 
Open [http://localhost:5173](http://localhost:5173) in your browser.
 
To test real-time messaging, open the app in two browser tabs and send messages between them.

## Planned Features

- [ ] **Improve Styling - edit CSS**
- [x] **Usernames** — let users enter a name before joining the chat
- [ ] **Message history** — store messages so new users can see previous conversations
- [ ] **Multiple rooms** — create and join different chat rooms
