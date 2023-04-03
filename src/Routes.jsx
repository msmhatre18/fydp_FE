import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import NewPasswordPage from "pages/NewPassword";

const AccountDashboardPage = React.lazy(() =>
  import("pages/AccountDashboard")
);


const CreatePractitionerPage = React.lazy(() =>
  import("pages/CreatePractitioner")
);

const ProgramDetailsEntryMassTrialTargets = React.lazy(() =>
  import("pages/ProgramDetailsEntryMassTrialTargets")
);
const ProgramDetailsEntryColdProbeTargets = React.lazy(() =>
  import("pages/ProgramDetailsEntryColdProbeTargets")
);
const ProgramDetailsEntryMassTrial = React.lazy(() =>
  import("pages/ProgramDetailsEntryMassTrial")
);
const ProgramDetailsEntryColdProbe = React.lazy(() =>
  import("pages/ProgramDetailsEntryColdProbe")
);
const ProgramDetailsEntry = React.lazy(() =>
  import("pages/ProgramDetailsEntry")
);
const ProgramHistoryPageTrial = React.lazy(() =>
  import("pages/ProgramHistoryPageTrial")
);
const ProgramsDropdownOpen = React.lazy(() =>
  import("pages/ProgramsDropdownOpen")
);
const PasswordRequestedPage = React.lazy(() =>
  import("pages/PasswordRequestedPage")
);
const BehaviorDataHistory = React.lazy(() =>
  import("pages/BehaviorDataHistory")
);
const SessionBehaviouralData = React.lazy(() =>
  import("pages/SessionBehaviouralData")
);
const SessionDataCollectionMassTrial = React.lazy(() =>
  import("pages/SessionDataCollectionMassTrial")
);
const ProgramHistoryPageProgramTemplate = React.lazy(() =>
  import("pages/ProgramHistoryPageProgramTemplate")
);
const ForgotPasswordPage = React.lazy(() => import("pages/ForgotPasswordPage"));
const SessionDataCollectionColdProbe = React.lazy(() =>
  import("pages/SessionDataCollectionColdProbe")
);
const ProgramsNoneOpen = React.lazy(() => import("pages/ProgramsNoneOpen"));
const ChildDashboard = React.lazy(() => import("pages/ChildDashboard"));
const Homepagepatients = React.lazy(() => import("pages/Homepagepatients"));
const AddClienttoPractitioner = React.lazy(() =>
  import("pages/AddClienttoPractitioner")
);
const SessionViewProgramTemplate = React.lazy(() =>
  import("pages/SessionViewProgramTemplate")
);
const BehaviourData = React.lazy(() => import("pages/BehaviourData"));
const CreateClient = React.lazy(() => import("pages/CreateClient"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));

const ProgramTemplatePreviewPage = React.lazy(() => import("pages/ProgramTemplatePreview"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/createclient" element={<CreateClient />} />
          <Route path="/behaviourdata" element={<BehaviourData />} />
          <Route
            path="/sessionviewprogramtemplate"
            element={<SessionViewProgramTemplate />}
          />
          <Route
            path="/addclienttopractitioner"
            element={<AddClienttoPractitioner />}
          />
          <Route path="/homepagepatients" element={<Homepagepatients />} />
          <Route path="/childdashboard" element={<ChildDashboard />} />
          <Route path="/createpractitioner" element={<CreatePractitionerPage />} />
          <Route path="/accountdashboard" element={<AccountDashboardPage />} />
          <Route path="/programsnoneopen" element={<ProgramsNoneOpen />} />
          <Route path="/newpassword" element={<NewPasswordPage />} />
          <Route
            path="/sessiondatacollectioncoldprobe"
            element={<SessionDataCollectionColdProbe />}
          />
          <Route path="/forgotpasswordpage" element={<ForgotPasswordPage />} />
          <Route
            path="/programhistorypageprogramtemplate"
            element={<ProgramHistoryPageProgramTemplate />}
          />
          <Route
            path="/sessiondatacollectionmasstrial"
            element={<SessionDataCollectionMassTrial />}
          />
          <Route
            path="/sessionbehaviouraldata"
            element={<SessionBehaviouralData />}
          />
          <Route
            path="/behaviordatahistory"
            element={<BehaviorDataHistory />}
          />
          <Route
            path="/passwordrequestedpage"
            element={<PasswordRequestedPage />}
          />
          <Route
            path="/programsdropdownopen"
            element={<ProgramsDropdownOpen />}
          />
          <Route
            path="/programhistorypagetrial"
            element={<ProgramHistoryPageTrial />}
          />
          <Route
            path="/programdetailsentry"
            element={<ProgramDetailsEntry />}
          />
          <Route
            path="/programdetailsentrycoldprobe"
            element={<ProgramDetailsEntryColdProbe />}
          />
          <Route
            path="/programdetailsentrymasstrial"
            element={<ProgramDetailsEntryMassTrial />}
          />
          <Route
            path="/programdetailsentrycoldprobetargets"
            element={<ProgramDetailsEntryColdProbeTargets />}
          />
          <Route
            path="/programdetailsentrymasstrialtargets"
            element={<ProgramDetailsEntryMassTrialTargets />}
          />
          <Route
            path="/programtemplatepreview"
            element={<ProgramTemplatePreviewPage />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
