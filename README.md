#  Hostel Complaint Management System

##  Project Overview

The **Hostel Complaint Management System** is a web-based application designed to simplify the process of submitting, managing, and tracking hostel complaints. It provides a centralized platform where students can report problems related to water, electricity, cleanliness, maintenance, food, and internet facilities.

The system allows students to submit complaints and track their status, while wardens can view complaints, update their status, and manage resolved issues.

##  Objectives

- Provide an easy platform for students to submit complaints.
- Enable students to track complaint status.
- Help wardens manage and resolve complaints efficiently.
- Maintain complaint records in a centralized database.
- Improve communication between students and hostel management.

##  Features
###  Student Module
- Student registration and login.
- Submit complaints with title, category, block, room number, priority, and description.
- View submitted complaints.
- Track complaint status: Pending, In Progress, or Resolved.
- View complaint history.

###  Warden Module
- Secure login for wardens.
- View complaints submitted by students.
- Update complaint status.
- Delete complaints when necessary.
- Monitor pending and resolved complaints.

###  Security
- Password hashing using bcrypt.
- JWT-based authentication.
- Role-based access control for students and wardens.
- Environment variables for sensitive configuration.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend user interface |
| HTML | Web page structure |
| CSS | Styling and responsive design |
| JavaScript | Frontend functionality |
| Node.js | Backend runtime |
| Express.js | Backend API development |
| MongoDB | Database |
| Mongoose | Database modeling |
| JWT | User authentication |
| bcrypt | Password hashing |
| Git and GitHub | Version control and project hosting |

##  Project Structure

```text
HOSTEL-COMPLAINT-MANAGEMENT-SYSTEM/
│
├── my-react-app/
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       ├── main.jsx
│       └── api.js
│
├── server/
│   ├── models/
│   │   ├── User.js
│   │   └── Complaint.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── complaints.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Step 1: Clone the Repository

```bash
git clone https://github.com/Jebina-3116/HOSTEL-COMPLAINT-MANAGEMENT-SYSTEM.git
cd HOSTEL-COMPLAINT-MANAGEMENT-SYSTEM
```

### Step 2: Install Backend Dependencies

```bash
cd server
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file inside the `server` folder and add your own configuration:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/hostel_complaints
JWT_SECRET=replace_with_a_long_random_secret
```

Use your actual MongoDB connection string if you use MongoDB Atlas. Keep `.env` private and never upload it to GitHub.

### Step 4: Start the Backend

From the `server` folder, run:

```bash
node server.js
```

The backend should run at:

`http://localhost:5000`

API health check:

`http://localhost:5000/api/health`

### Step 5: Install Frontend Dependencies

Open a **new terminal** in the project root and run:

```bash
cd my-react-app
npm install
```

### Step 6: Start the Frontend

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

`http://localhost:5173`

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Check backend status |
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Log in a user |
| GET | `/api/complaints` | Retrieve complaints accessible to the logged-in user |
| POST | `/api/complaints` | Submit a complaint |
| PATCH | `/api/complaints/:id/status` | Update complaint status (warden only) |
| DELETE | `/api/complaints/:id` | Delete a complaint (warden only) |

Protected endpoints require a valid JWT access token.

## Complaint Status Workflow

1. A student logs in to the system.
2. The student submits a complaint.
3. The complaint is stored in MongoDB with the status **Pending**.
4. The warden reviews the complaint and changes its status to **In Progress**.
5. After the issue is addressed, the warden marks it as **Resolved**.
6. The student can view the latest status by refreshing or reloading the complaints list.

## Database Models

### User
Stores user information, including name, email, hashed password, and role.

### Complaint
Stores complaint details, including title, category, block, room, priority, description, status, and the associated student.

##  Future Enhancements

- Email or SMS notifications for complaint updates.
- Complaint search and advanced filtering.
- Image attachments for complaints.
- Complaint resolution reports and analytics.
- Improved mobile responsiveness.
- Complaint feedback and rating system.

## Author

**Jebina Selin**

## 📄 License

This project is developed for educational and academic purposes.
