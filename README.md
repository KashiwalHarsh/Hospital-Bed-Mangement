# Hospital Bed Management Web Application

This repository contains the source code for a web application designed to help hospitals efficiently manage patient admissions and bed assignments. The application utilizes QR codes attached to each hospital bed, enabling doctors to easily identify and reserve available beds for their patients. It also provides real-time data on all patients in the hospital, including their medical history, current condition, and any special needs.

## Features

- **QR Code Bed Assignment:** Each hospital bed is assigned a unique QR code that doctors can scan to check the bed's availability. When a doctor scans a QR code, the web application updates the database to indicate that the bed is occupied. This feature allows hospitals to manage their bed capacity effectively and ensures that patients are assigned to the appropriate beds.

- **Real-Time Patient Data:** The web application provides doctors with real-time access to comprehensive patient information. This includes medical history, current condition, and any special needs the patient may have. Having this information readily available helps doctors make informed decisions and provide appropriate care to their patients.

## Getting Started

These instructions will guide you on setting up and running the web application on your local machine for development and testing purposes. 

### Prerequisites

- Node.js (version >= 10.0.0)
- MongoDB (version >= 3.6)

### Installation

1. Clone this repository to your local machine using the following command:
   ```
   git clone https://github.com/your-username/hospital-bed-management.git
   ```

2. Navigate to the project directory:
   ```
   cd hospital-bed-management
   ```
4. Make another tab in terminal:

5. Navigate to the backend directory:
   ```
   cd backend
   ```

5. On another tab Navigate to the client directory:
   ```
   cd client
   ```

6. Install the required dependencies using npm on both client and backend directory:
   ```
   npm install
   ```

7. Start the application on both client and backend directory:
   ```
   npm start
   ```

6. Access the web application in your web browser by visiting `http://localhost:3000/patients`.

## Usage

Once the web application is up and running, hospital staff, particularly doctors, can perform the following actions:

- Scan QR codes attached to hospital beds to check their availability and assign patients to vacant beds.
- View real-time patient data, including medical history, current condition, and any special needs.
- Update patient information as necessary, ensuring accurate and up-to-date records.

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request describing your changes.

Please ensure that your code adheres to the existing coding style and that you have included appropriate tests for your changes.

## Acknowledgments

On 20-21st April I participated in an International Hackathon.
This project is the outcome of the Hackathon. we worked on This Health-Tech problem and dedicated 24 hours to developing an application that shows the availability of beds in hospitals nearby.

I would like to express my gratitude to my fellow teammates who have helped make this project possible. Without our dedicated efforts and teamwork it would not have been possible to make this application work

<!-- ![IMG_20230428_114753](https://github.com/KashiwalHarsh/Hospital-Bed-Mangement/assets/77677724/5d1006e4-6aa4-47d6-b1e0-45b34a49bd66 | width=500px) -->
<img src="https://github.com/favicon.ico](https://github.com/KashiwalHarsh/Hospital-Bed-Mangement/assets/77677724/5d1006e4-6aa4-47d6-b1e0-45b34a49bd66" width="500px">
