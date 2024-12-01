import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { StrictMode } from "react";
import TagManager, { TagManagerArgs } from "react-gtm-module";

const tagManagerArgs: TagManagerArgs = {
    gtmId: 'GTM-MJWVM5WH',
};

TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)