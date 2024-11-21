
# Advanced_API_Testing_Framework

This project is a comprehensive, modular, and scalable test automation framework designed to validate the **JSONPlaceholder API**. Built with **Mocha** and **Chai**, it leverages best practices in software testing to provide reliable, maintainable, and extensible solutions.

---

## 📋 **Features**
- Thorough coverage for all JSONPlaceholder APIs (Users, Posts, Comments).
- Comprehensive test scenarios, including edge cases and failure handling.
- Modular service classes for better code organization and reusability.
- Real-time reporting with code coverage using **nyc**.
- Seamless CI/CD integration with **CircleCI**.

---

## 🛠️ **Setup Instructions**

### Prerequisites
- Node.js (Latest LTS version)
- npm (comes with Node.js)
- Git

### Steps
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd Advanced_API_Testing_Framework
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the JSONPlaceholder API (Optional for Local Testing)**
   ```bash
   npm install
   node index.js
   ```

4. **Run Tests**
   ```bash
   npm test
   ```

---

## 🧪 **Test Structure**
### Covered Scenarios:
- **User API**
  - Fetching user by username.
  - Handling invalid username scenarios.
  - Validating API schema for user data.

- **Post API**
  - Fetching posts for a valid user.
  - Handling invalid or non-existent user IDs.
  - Validating schema and data types for post responses.

- **Comment API**
  - Fetching comments for a valid post.
  - Validating email formats using regex.
  - Handling invalid or non-existent post IDs.

### Directory Structure:
```
Advanced_API_Testing_Framework/
├── src/
│   ├── services/               # Modular services for API calls
│   │   ├── userService.js       # Handles user-related API calls
│   │   ├── postService.js       # Handles post and comment API calls
│   │   └── emailValidator.js    # Email validation logic
├── tests/
│   ├── userTests.js             # Extensive test cases for user workflows
│   ├── postTests.js             # Test cases for post workflows
│   └── commentTests.js          # Test cases for comment email validation
├── config/
│   └── endpoints.js             # Configuration for API endpoints
├── reports/                     # Test reports generated automatically
├── .circleci/
│   └── config.yml               # CircleCI configuration
├── .eslintrc.js                 # ESLint rules for coding standards
├── README.md                    # Documentation for the framework
└── package.json                 # Project configuration and dependencies
```

---

## 🌟 **Best Practices**
- Modular design with clean separation of concerns.
- Extensive use of design patterns like Factory and Singleton.
- Granular commits for documenting the development process.
- Fully automated testing pipeline.

---

## 🚀 **Continuous Integration**
The project uses **CircleCI** for automated test execution, ensuring reliability and consistency.

---

## 📈 **Test Reports**
Reports, including code coverage, are generated automatically and stored in the `/reports` directory. Use the following command to view the coverage:
```bash
npm run coverage
```

---

## 📧 **Contact**
For questions or support, reach out at **alirezaaedalat@gmail.com**.

---

## 📜 **License**
This project is licensed under the MIT License. See the LICENSE file for details.
