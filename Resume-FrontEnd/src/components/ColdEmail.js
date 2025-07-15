// // ColdEmail.js
// import React, { useState, useEffect } from "react";
// import { callGeminiAPI } from "../utils/apiHandler";
// import { buildColdEmailPrompt } from "../utils/promptBuilder";

// const DEFAULT_SUMMARY = `Software Engineer with 4+ years of experience in Java Full Stack Development (Spring Boot, React/Angular), cloud deployment (AWS), and building scalable enterprise systems across BFSI, Healthcare, and eCommerce sectors.`;

// function ColdEmail({ jobDescription }) {
//   const [emailText, setEmailText] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!jobDescription.trim()) return;
//     setLoading(true);
//     const prompt = buildColdEmailPrompt({
//       jobDescription,
//       resumeSummary: DEFAULT_SUMMARY,
//     });
//     callGeminiAPI(prompt).then((result) => {
//       setEmailText(result);
//       setLoading(false);
//     });
//   }, [jobDescription]);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(emailText);
//     alert("Cold email copied to clipboard!");
//   };

//   const handleDownload = () => {
//     const blob = new Blob([emailText], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "cold_email.txt";
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="card">
//       <h2>Generated Cold Email</h2>
//       {loading ? (
//         <p>Generating cold email...</p>
//       ) : (
//         <>
//           <textarea rows="18" value={emailText} readOnly />
//           <div className="button-row">
//             <button onClick={handleCopy}>Copy</button>
//             <button onClick={handleDownload}>Download</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default ColdEmail;
