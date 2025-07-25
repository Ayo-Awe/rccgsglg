# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 church website for "Shekinah Glory of the Living God" (a branch of The Redeemed Christian Church of God) built with TypeScript, Tailwind CSS, and PayloadCMS as a headless CMS.

**Key Architecture:**
- **Frontend**: Next.js 15 App Router with React 19
- **CMS**: PayloadCMS 3.x with PostgreSQL database
- **Storage**: AWS S3 for file uploads (sermon documents, media)
- **Styling**: Tailwind CSS 4.x with Radix UI components
- **State Management**: TanStack Query for server state
- **API**: Auto-generated OpenAPI client from PayloadCMS

## Development Commands

```bash
# Development server with Turbopack
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

## Project Structure

- `app/(app)/` - Main website pages (Next.js App Router)
- `app/(payload)/` - PayloadCMS admin interface and API routes
- `collections/` - PayloadCMS collection schemas (Users, Media, Sermons)
- `components/` - Reusable React components with `ui/` subfolder for shadcn/ui components
- `lib/` - Utility functions and shared logic
- `api-client/` - Auto-generated API client and types from PayloadCMS

## PayloadCMS Architecture

**Collections:**
- `Users` - Admin users for CMS access
- `Media` - General media files stored in S3
- `Sermons` - Sermon records with title, date, and document reference
- `SermonDocuments` - File uploads for sermon documents (PDF, DOC, DOCX)

**Important Files:**
- `payload.config.ts` - Main PayloadCMS configuration
- `payload-types.ts` - Auto-generated TypeScript types (do not edit manually)

## Key Dependencies

- **UI**: Radix UI primitives, Lucide React icons, Embla Carousel
- **Forms**: React Hook Form with Zod validation
- **Theming**: next-themes for dark/light mode
- **Notifications**: Sonner for toast notifications
- **Database**: PostgreSQL with PayloadCMS adapter
- **File Storage**: S3 with PayloadCMS storage plugin

## Environment Variables

The project requires S3 configuration and database connection. See `.env.example` for required variables (if accessible).

## API Client

The `api-client/` directory contains auto-generated code from PayloadCMS OpenAPI spec. Run `pnpm openapi-ts` after modifying collections to regenerate types and client methods.