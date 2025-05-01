import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ConditionsWeTreat from "@/pages/ConditionsWeTreat";
import BackPainTreatment from "@/pages/BackPainTreatment";
import NeckPainTreatment from "@/pages/NeckPainTreatment";
import HipPainTreatment from "./pages/HipPainTreatment";
import KneePainTreatment from "./pages/KneePainTreatment";
import SciaticaTreatment from "./pages/SciaticaTreatment";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import SymptomExplainerPage from "./pages/SymptomExplainerPage";

// Service Pages
import ChiropracticCarePage from "./pages/ChiropracticCarePage";
import MassageTherapyPage from "./pages/MassageTherapyPage";
import CorrectiveExercisesPage from "./pages/CorrectiveExercisesPage";
import ShockwaveTherapyPage from "./pages/ShockwaveTherapyPage";
import GrastonTechniquePage from "./pages/GrastonTechniquePage";
import SpinalDecompressionPage from "./pages/SpinalDecompressionPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/conditions" component={ConditionsWeTreat} />
      <Route path="/conditions/back-pain" component={BackPainTreatment} />
      <Route path="/conditions/neck-pain" component={NeckPainTreatment} />
      <Route path="/conditions/hip-pain" component={HipPainTreatment} />
      <Route path="/conditions/knee-pain" component={KneePainTreatment} />
      <Route path="/conditions/sciatica" component={SciaticaTreatment} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:id" component={BlogPostPage} />
      <Route path="/symptom-explainer" component={SymptomExplainerPage} />
      <Route path="/ai-diagnosis-tool" component={SymptomExplainerPage} />
      
      {/* Service Routes */}
      <Route path="/services/chiropractic-care" component={ChiropracticCarePage} />
      <Route path="/services/massage-therapy" component={MassageTherapyPage} />
      <Route path="/services/corrective-exercises" component={CorrectiveExercisesPage} />
      <Route path="/services/shockwave-therapy" component={ShockwaveTherapyPage} />
      <Route path="/services/graston-technique" component={GrastonTechniquePage} />
      <Route path="/services/spinal-decompression" component={SpinalDecompressionPage} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
