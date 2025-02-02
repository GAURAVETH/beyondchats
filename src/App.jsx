import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Registration from "./components/Registration/Registration.jsx";
import Organisation from "./components/Organisation/Organisation.jsx";
import ChatbotIntegration from "./components/ChatbotIntegration/ChatbotIntegration.jsx";
import SuccessScreen from "./components/SuccessScreen/SuccessScreen.jsx";
import NotFound from "./components/NotFound.jsx"; // 404 Page

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/setup" element={<Organisation />} />
          <Route path="/integration" element={<ChatbotIntegration />} />
          <Route path="/success" element={<SuccessScreen />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
