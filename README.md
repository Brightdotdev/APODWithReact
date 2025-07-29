# NASA APOD Viewer

A React application that displays NASA's Astronomy Picture of the Day (APOD) using the NASA API.

## Features

- Browse 2 weeks of APOD images
- View detailed information for each image
- Responsive design for mobile and desktop
- Loading states and error handling
- Client-side routing with React Router

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- NASA APOD API

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your NASA API key:
   ```
   VITE_API_KEY=your_nasa_api_key_here
   ```
4. Get your NASA API key from: https://api.nasa.gov/

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deployment to Cloudflare Pages

### Prerequisites
- Cloudflare account
- NASA API key

### Steps

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to Pages
   - Click "Create a project"
   - Choose "Connect to Git"
   - Select your GitHub repository

3. **Configure Build Settings**
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)

4. **Environment Variables**
   - Add your NASA API key as an environment variable:
     - **Variable name**: `VITE_API_KEY`
     - **Value**: Your NASA API key

5. **Deploy**
   - Click "Save and Deploy"
   - Your app will be available at `https://your-project-name.pages.dev`

### Environment Variables in Cloudflare Pages

Make sure to add these environment variables in your Cloudflare Pages project settings:

- `VITE_API_KEY`: Your NASA API key

## Project Structure

```
src/
├── components/     # Reusable UI components
├── Pages/         # Page components
├── Utils/         # API functions and routing
├── App.jsx        # Main app component
└── main.jsx       # Entry point
```

## API Usage

This app uses NASA's APOD API:
- `fetchAll()`: Get 2 weeks of APOD data
- `fetchToday()`: Get today's APOD
- `fetchSingleDate(date)`: Get APOD for specific date

## License

MIT
