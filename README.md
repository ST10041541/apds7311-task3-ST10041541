# Customer and Employee International Payments Portal

## Project Overview
This repository hosts the code for an internal international payment system designed for a bank. The system is split into two main portals:
- **Customer Portal**: Allows customers to register, log in, and make international payments.
- **Employee Portal**: Enables pre-registered bank employees to log in, verify, and process payments via SWIFT.

## Features and Requirements
### Customer Portal
- **User Registration**: Customers must register by providing their full name, ID number, account number, and password.
- **Secure Login**: Customers log in with their username, account number, and password.
- **Payment Processing**: Customers can initiate a payment by providing the amount, currency, provider, and payee details including a SWIFT code.
- **Data Storage**: Transactions are stored securely in a database.

### Employee Portal
- **Pre-registered User Login**: Only employees pre-registered by the bank can log in to the portal.
- **Transaction Verification**: Employees review and verify payments before forwarding them to SWIFT.
- **Submission to SWIFT**: Employees complete the process by clicking 'Submit to SWIFT'.

## Security Implementations
1. **Password Security**: Passwords are hashed and salted using `bcrypt.js`.
2. **Input Validation**: All input is validated and whitelisted using RegEx patterns.
3. **Data Encryption**: SSL/TLS is implemented to secure data in transit.
4. **Protection Against Attacks**: The application is secured using `helmet.js`, input validation, and rate limiting to prevent common attacks such as XSS, CSRF, and DDoS.

## DevSecOps Pipeline
- **CI/CD**: Integrated using CircleCI.
- **Code Quality**: Integrated with SonarQube for static code analysis and security checks.
- **Security Scans**: Additional tools like MobSF and ScoutSuite are utilized for mobile app security and cloud environment checks.

## Prerequisites
- **Node.js**: v20.18.0 or later
- **MongoDB**: Installed locally or available as a cloud service
- **OpenSSL**: For generating SSL certificates
- **GitHub Account**: For version control
- **CircleCI Account**: For CI/CD integration
- **SonarQube**: For code quality and security analysis

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/ST10041541/apds7311-task3-ST10041541
   cd customer-payments-portal
