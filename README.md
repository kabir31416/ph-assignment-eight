🧱 Tiles Gallery Web App

A modern tile showcase web application built with Next.js, MongoDB, and Better Auth. Users can explore tiles, view details, and manage their profile with authentication support.

---

🚀 Live Features

🌐 Public Routes

- "/" → Home page (featured tiles + slider)
- "/all-tiles" → All tiles collection with search
- "/login" → User login
- "/register" → User registration

🔐 Private Routes

- "/tiles/[id]" → Tile details page (requires login)
- "/my-profile" → User profile page

---

✨ Core Features

- 🧱 Tiles listing with search functionality
- 🔍 Dynamic tile details page
- 🔐 Authentication (Email/Password + Google Login)
- 👤 User profile with session handling
- 🚫 Protected routes (redirect if not logged in)
- 🎨 Responsive UI with Tailwind CSS
- ⚡ Fast rendering with Next.js App Router

---

🛠️ Tech Stack

- Frontend: Next.js 16 (App Router)
- Styling: Tailwind CSS + DaisyUI
- Authentication: Better Auth
- Database: MongoDB (Atlas)
- State Handling: React Hooks
- Forms: React Hook Form
- API: JSON Server (for tiles data)

---

📁 Project Structure

src/
 ├── app/
 │   ├── page.jsx (Home)
 │   ├── all-tiles/
 │   ├── tiles/[id]/
 │   ├── login/
 │   ├── register/
 │   ├── my-profile/
 │
 ├── components/
 │   ├── Header.jsx
 │   ├── Footer.jsx
 │   ├── TilesSlider.jsx
 │   ├── Banner.jsx
 │
 ├── lib/
 │   ├── auth.js
 │   ├── auth-client.js
 │
 ├── db.json

---

⚙️ Installation & Setup

1️⃣ Clone the project

git clone https://github.com/kabir31416/ph-assignment-eight.git

2️⃣ Install dependencies

npm install

3️⃣ Setup environment variables

Create ".env.local" file:

MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

---

4️⃣ Run JSON Server (Tiles API)

json-server --watch db.json --port 5001

👉 API URL:

http://localhost:5001/tiles

---

5️⃣ Run the project

npm run dev

👉 Open:

http://localhost:3000

---

🔐 Authentication Flow

- User can register with email/password
- Login using credentials or Google
- Session stored using Better Auth
- Protected routes redirect unauthenticated users to login

---

⚠️ Known Issues / Notes

- JSON Server must be running for tiles data
- MongoDB must allow IP access (0.0.0.0/0 for development)
- Images use "unoptimized" mode in Next.js

---

📦 Future Improvements

- 🛒 Add to cart system
- ❤️ Wishlist feature
- ⭐ Ratings & reviews
- 🔎 Advanced filters (price, category)
- 📱 Mobile UI improvements

---

👨‍💻 Author

Sahariar Kabir 
