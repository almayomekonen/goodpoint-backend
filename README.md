# GoodPoint Backend

NestJS backend API server for the GoodPoint educational platform.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MySQL 8.0+
- npm or yarn

### Installation

```bash
npm install --legacy-peer-deps
```

### Database Setup

1. Create MySQL database:

```sql
CREATE DATABASE good_point;
```

2. Run migrations:

```bash
npm run migration-run
```

### Development

```bash
npm run start:dev
```

The API will run on `http://localhost:8080`

### Build for Production

```bash
npm run build
npm run start:prod
```

## 🛠️ Technology Stack

- **NestJS** - Node.js framework
- **TypeScript** - Type safety
- **TypeORM** - Database ORM
- **MySQL** - Database
- **Socket.io** - Real-time communication
- **JWT** - Authentication
- **Swagger** - API documentation
- **Jest** - Testing

## 📁 Project Structure

```
src/
├── entities/          # Database entities
├── common/           # Shared utilities and types
├── admin/            # Admin management
├── good-point/       # Good point functionality
├── staff/            # Teacher management
├── student/          # Student management
└── lib/              # Third-party library configs
```

## 🔧 Environment Variables

Create `.env.development` file:

```bash
NODE_ENV=development
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=good_point
DB_SYNCHRONIZE=false
DB_LOGGING=false
SECRET_OR_KEY=your_secret_key
ACCESS_TOKEN_NAME=access_token
```

## 📡 API Documentation

When running in development mode, visit:
`http://localhost:8080/api-docs`

## 🗄️ Database Migrations

```bash
# Generate new migration
npm run migration-generate -- migrations/YourMigrationName

# Run migrations
npm run migration-run

# Revert last migration
npm run migration-revert
```

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 🚀 Deployment

### Heroku (Recommended)

1. Create Heroku app
2. Add MySQL addon (JawsDB or ClearDB)
3. Set environment variables
4. Deploy from Git

### Railway

1. Connect GitHub repository
2. Add MySQL database
3. Set environment variables
4. Deploy automatically

### Docker

```bash
# Build image
docker build -t goodpoint-backend .

# Run container
docker run -p 8080:8080 goodpoint-backend
```

## 🔒 Authentication

The API uses JWT tokens for authentication. Include the token in requests:

```
Authorization: Bearer <your-jwt-token>
```

## 📞 Support

For questions or issues, contact the development team.
