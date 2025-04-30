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
import SymptomExplainerPage from "./pages/SymptomExplainerPage";

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
      <Route path="/symptom-explainer" component={SymptomExplainerPage} />
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
