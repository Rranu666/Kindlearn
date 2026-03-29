import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import { UILanguageProvider } from '@/lib/UILanguageContext';

// Page imports
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import SelectLanguage from './pages/SelectLanguage';
import Dashboard from './pages/Dashboard';
import Lesson from './pages/Lesson';
import KidsZone from './pages/KidsZone';
import KidsLesson from './pages/KidsLesson';
import ParentSettings from './pages/ParentSettings';
import Help from './pages/Help';
import Flashcards from './pages/Flashcards';
import Review from './pages/Review';
import ListeningGame from './pages/ListeningGame';
import Insights from './pages/Insights';
import AdvancedLesson from './pages/AdvancedLesson';
import DiagnosticQuiz from './pages/DiagnosticQuiz';
import Vocabulary from './pages/Vocabulary';
import UserProfile from './pages/UserProfile';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoadingAuth } = useAuth();
  if (isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin" />
      </div>
    );
  }
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }) => {
  const { isAuthenticated, isLoadingAuth } = useAuth();
  if (isLoadingAuth) return null;
  return isAuthenticated ? <Navigate to="/" replace /> : children;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

      {/* Protected routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/select-language" element={<PrivateRoute><SelectLanguage /></PrivateRoute>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/lesson" element={<PrivateRoute><Lesson /></PrivateRoute>} />
      <Route path="/kids" element={<PrivateRoute><KidsZone /></PrivateRoute>} />
      <Route path="/kids-lesson" element={<PrivateRoute><KidsLesson /></PrivateRoute>} />
      <Route path="/parent-settings" element={<PrivateRoute><ParentSettings /></PrivateRoute>} />
      <Route path="/help" element={<PrivateRoute><Help /></PrivateRoute>} />
      <Route path="/flashcards" element={<PrivateRoute><Flashcards /></PrivateRoute>} />
      <Route path="/review" element={<PrivateRoute><Review /></PrivateRoute>} />
      <Route path="/listen" element={<PrivateRoute><ListeningGame /></PrivateRoute>} />
      <Route path="/insights" element={<PrivateRoute><Insights /></PrivateRoute>} />
      <Route path="/advanced-lesson" element={<PrivateRoute><AdvancedLesson /></PrivateRoute>} />
      <Route path="/diagnostic" element={<PrivateRoute><DiagnosticQuiz /></PrivateRoute>} />
      <Route path="/vocabulary" element={<PrivateRoute><Vocabulary /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <UILanguageProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <AppRoutes />
          </Router>
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </UILanguageProvider>
  );
}

export default App;
