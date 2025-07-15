// // ResumeDiffViewer.js
// import React from "react";
// import PropTypes from "prop-types";
// import "./ResumeDiffViewer.css";

// function highlightDiff(original = "", updated = "") {
//   const originalLines = original.split("\n");
//   const updatedLines = updated.split("\n");

//   const maxLength = Math.max(originalLines.length, updatedLines.length);
//   const result = [];

//   for (let i = 0; i < maxLength; i++) {
//     const orig = originalLines[i] || "";
//     const upd = updatedLines[i] || "";

//     if (orig !== upd) {
//       result.push(
//         <React.Fragment key={i}>
//           <div className="line removed">- {orig}</div>
//           <div className="line added">+ {upd}</div>
//         </React.Fragment>
//       );
//     } else {
//       result.push(
//         <div className="line unchanged" key={i}>
//           {" "}
//           {orig}
//         </div>
//       );
//     }
//   }

//   return result;
// }

// const ResumeDiffViewer = ({ original, updated }) => {
//   if (!original || !updated) {
//     return (
//       <div className="diff-container">
//         <p>No differences to display.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="diff-container">
//       <h3>Changes in Resume</h3>
//       <pre className="diff-box">{highlightDiff(original, updated)}</pre>
//     </div>
//   );
// };

// ResumeDiffViewer.propTypes = {
//   original: PropTypes.string,
//   updated: PropTypes.string,
// };

// export default ResumeDiffViewer;

import React from "react";
import PropTypes from "prop-types";
import "./ResumeDiffViewer.css";

function highlightDiff(original, updated) {
  if (!original || !updated) return null;

  const originalLines = original.split("\n");
  const updatedLines = updated.split("\n");

  const maxLength = Math.max(originalLines.length, updatedLines.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    const orig = originalLines[i] || "";
    const upd = updatedLines[i] || "";

    if (orig !== upd) {
      result.push(
        <React.Fragment key={i}>
          <div className="line removed">- {orig}</div>
          <div className="line added">+ {upd}</div>
        </React.Fragment>
      );
    } else {
      result.push(
        <div key={i} className="line unchanged">
          {orig}
        </div>
      );
    }
  }

  return result;
}

const ResumeDiffViewer = ({ original, updated }) => {
  return (
    <div className="diff-container">
      <h3>🧪 Detailed LaTeX Differences</h3>
      <pre className="diff-box">{highlightDiff(original, updated)}</pre>
    </div>
  );
};

ResumeDiffViewer.propTypes = {
  original: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
};

export default ResumeDiffViewer;
