import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { LegalPage } from "@/pages/legal-page"
import { SupportPage } from "@/pages/support-page"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SupportPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
