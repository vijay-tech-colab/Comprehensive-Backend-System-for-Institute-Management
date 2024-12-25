InstituteHub/
├── src/
│   ├── config/                  # Configuration files
│   │   ├── db.js                # MongoDB connection setup
│   │   ├── env.js               # Environment variable setup
│   ├── controllers/             # Controller functions for routes
│   │   ├── authController.js    # Authentication logic
│   │   ├── studentController.js # Student-related logic
│   │   ├── teacherController.js # Teacher-related logic
│   │   ├── courseController.js  # Course management logic
│   │   ├── attendanceController.js # Attendance logic
│   │   ├── feeController.js     # Fee management logic
│   │   ├── examController.js    # Exam and results logic
│   ├── models/                  # Database schemas
│   │   ├── userModel.js         # User schema (students, teachers, admins)
│   │   ├── courseModel.js       # Course schema
│   │   ├── classModel.js        # Class schema
│   │   ├── attendanceModel.js   # Attendance schema
│   │   ├── feeModel.js          # Fee schema
│   │   ├── examModel.js         # Exam and results schema
│   ├── routes/                  # API routes
│   │   ├── authRoutes.js        # Routes for authentication
│   │   ├── studentRoutes.js     # Routes for student management
│   │   ├── teacherRoutes.js     # Routes for teacher management
│   │   ├── courseRoutes.js      # Routes for course management
│   │   ├── attendanceRoutes.js  # Routes for attendance
│   │   ├── feeRoutes.js         # Routes for fee management
│   │   ├── examRoutes.js        # Routes for exams and results
│   ├── middlewares/             # Custom middleware
│   │   ├── authMiddleware.js    # JWT authentication middleware
│   │   ├── errorHandler.js      # Centralized error handling
│   │   ├── roleMiddleware.js    # Role-based access control
│   ├── utils/                   # Utility functions
│   │   ├── sendEmail.js         # Email sending logic
│   │   ├── logger.js            # Logger setup
│   ├── app.js                   # Express app setup
│   ├── server.js                # Main server file
├── .env                         # Environment variables
├── .gitignore                   # Files and folders to ignore in Git
├── package.json                 # Project dependencies and scripts
├── README.md                    # Project documentation