# Shekinah Glory of the Living God - Church Website

A modern, responsive church website built with Next.js 15 and PayloadCMS for "Shekinah Glory of the Living God," a branch of The Redeemed Christian Church of God.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Headless CMS**: PayloadCMS 3.x with PostgreSQL database
- **Cloud Storage**: AWS S3 integration for media and document management
- **Responsive Design**: Mobile-first design with Tailwind CSS 4.x
- **Sermon Management**: Upload and manage sermon documents (PDF, DOC, DOCX)
- **Theme Support**: Dark/light mode with next-themes
- **Performance Optimized**: Turbopack for fast development builds
- **Type Safety**: Full TypeScript support with auto-generated API types

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)
- **Carousel**: Embla Carousel
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query

### Backend & CMS
- **CMS**: PayloadCMS 3.x
- **Database**: PostgreSQL
- **Storage**: AWS S3 with PayloadCMS storage plugin
- **Rich Text**: Lexical editor
- **API**: Auto-generated OpenAPI client

### Development Tools
- **Package Manager**: pnpm
- **Linting**: ESLint with Next.js config
- **Build Tool**: Turbopack (development)

## 📁 Project Structure

```
├── app/
│   ├── (app)/              # Main website pages (Next.js App Router)
│   │   ├── about/
│   │   ├── donate/
│   │   ├── ministries/
│   │   ├── sermons/
│   │   └── ...
│   └── (payload)/          # PayloadCMS admin interface and API routes
├── collections/            # PayloadCMS collection schemas
│   ├── Users.ts
│   ├── Media.ts
│   ├── Sermons.ts
│   └── SermonDocuments.ts
├── components/             # Reusable React components
│   ├── ui/                 # shadcn/ui components
│   ├── hero-carousel.tsx
│   ├── pastor-message.tsx
│   └── ...
├── lib/                    # Utility functions and shared logic
├── api-client/             # Auto-generated API client and types
├── payload.config.ts       # PayloadCMS configuration
└── payload-types.ts        # Auto-generated TypeScript types
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended package manager)
- PostgreSQL database
- AWS S3 bucket (for file storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rccgsglg
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file with the following variables:
   ```bash
   # Database
   DATABASE_URI=postgresql://username:password@localhost:5432/database_name
   
   # PayloadCMS
   PAYLOAD_SECRET=your-payload-secret-key
   
   # AWS S3
   S3_BUCKET=your-s3-bucket-name
   S3_REGION=your-s3-region
   S3_ACCESS_KEY_ID=your-access-key
   S3_SECRET_ACCESS_KEY=your-secret-key
   
   # Next.js
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the website.
   
   Access the CMS admin panel at [http://localhost:3000/admin](http://localhost:3000/admin).

## 📜 Available Scripts

```bash
# Start development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Regenerate API client from PayloadCMS OpenAPI spec
pnpm openapi-ts
```

## 🗄️ Collections & Data Model

### Users
Admin users for CMS access and content management.

### Media
General media files (images, videos) stored in AWS S3.

### Sermons
Sermon records with metadata:
- Title
- Date
- Description
- Associated document reference

### SermonDocuments
File uploads for sermon documents supporting:
- PDF files
- Microsoft Word documents (DOC, DOCX)
- Automatic S3 storage integration

## 🔧 Development Workflow

### API Client Generation
After modifying PayloadCMS collections, regenerate the API client:

```bash
pnpm openapi-ts
```

This updates the `api-client/` directory with fresh TypeScript types and client methods.

### Code Style
- Follow existing code conventions and patterns
- Use TypeScript for type safety
- Leverage Tailwind CSS for styling
- Follow Next.js 15 App Router patterns

### File Management
- Media files are automatically uploaded to S3
- PayloadCMS handles file processing and optimization
- Use the Media collection for general assets
- Use SermonDocuments for sermon-specific files

## 🚀 Deployment

### Environment Variables
Ensure all production environment variables are configured:
- Database connection string
- S3 credentials and bucket configuration
- PayloadCMS secret key
- Public server URL

### Build Process
```bash
pnpm build
pnpm start
```

### Recommended Platforms
- **Frontend**: Vercel, Netlify
- **Database**: Railway, Supabase, AWS RDS
- **Storage**: AWS S3

## 🤝 Contributing

1. Follow the existing code style and conventions
2. Test changes thoroughly before committing
3. Update documentation for significant changes
4. Use meaningful commit messages

## 📝 License

This project is private and proprietary to Shekinah Glory of the Living God church.

## 🆘 Support

For technical issues or questions, please contact the development team.

---

Built with ❤️ for Shekinah Glory of the Living God