import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const LiveEdit = ({ code, scope }) => (
  <LiveProvider code={code} scope={scope}>
    <div className="live-container">
      <LiveEditor className="live-editor" />
      <LivePreview className="live-preview" />
    </div>
    <LiveError className="live-error" />
  </LiveProvider>
);

export default LiveEdit;
