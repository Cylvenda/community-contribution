import { Routes, Route } from "react-router-dom"

// Public pages
import LoginPage from "@/pages/auth/LoginPage"
import RegisterPage from "@/pages/auth/RegisterPage"
import ResetPage from "@/pages/auth/ResetPage"

// Protected layout + pages
import { UserLayout } from "@/components/layouts/UserLayout"
import Dashboard from "@/pages/users/Dashboard"
import Analytics from "@/pages/users/Analytics"
import Contibutions from "@/pages/users/Contibutions"
import Documentation from "@/pages/users/Documentation"
import Members from "@/pages/users/Members"
import Settings from "@/pages/users/Settings"

// Example test route
import Test from "@/components/sections/Test"

const AppRoutes = () => {
  return (

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPage />} />
        <Route path="/test" element={<Test />} />

        {/* Protected routes (wrapped in layout) */}
        <Route element={<UserLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/contributions" element={<Contibutions />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/members" element={<Members />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
  )
}

export default AppRoutes
