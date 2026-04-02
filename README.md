 # 🧮⚔️ Math Arena - Frontend


The user-facing React application for the real-time 1v1 math duel platform. It provides a dynamic interface for both the game Administrator and the competing Players, powered by real-time WebSocket communication.


## 🎭 Role-Based Interfaces


### 👑 Admin Dashboard

* Secure login interface.

* Real-time monitoring of active users in the lobby via WebSockets.

* A central command button to trigger dynamic 1v1 matchmaking and distribute tasks.


### 👤 Player Arena

* Seamless entry (nickname only).

* Real-time waiting room (Lobby).

* Game screen displaying the assigned math task once the Admin starts the duel.


## 🛠 Tech Stack

* **UI Framework:** React.js

* **Real-time Communication:** Native WebSockets


## 🚀 Quick Start


### 1. Install Dependencies

```bash

npm install

```


### 2. Run the Development Server

```bash

npm start

```

*Note: This is a legacy React project.* The project uses cross-env to ensure compatibility across different operating systems (Windows/Linux/macOS) when handling legacy OpenSSL providers


## 🗺️ Known Limitations

- Implement the UI for submitting math task answers.

- Implement the UI for players leaderboard.

- Implement the UI for real time info about players' results.

- Add a Global Error Boundary to gracefully handle WebSocket disconnects. 
