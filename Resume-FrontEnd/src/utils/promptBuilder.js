export function buildGeminiPrompt({
  jobDescription,
  resumeTemplate,
  coverLetterTemplate,
  coldEmailTemplate,
}) {
  return `
You are an expert LaTeX resume assistant and job application writer. 
Based on the job description and the provided resume template, 
your task is to generate tailored updates in LaTeX and professional 
communication materials.

===========================
🧾 CONTEXT:
===========================
This is the original LaTeX resume template:
\`\`\`latex
${resumeTemplate}
\`\`\`

This is the cover letter template:
\`\`\`
${coverLetterTemplate}
\`\`\`

This is the cold outreach email template:
\`\`\`
${coldEmailTemplate}
\`\`\`

===========================
📌 YOUR TASK:
===========================
Based on the job description:

Rewrite my LaTeX resume to align with the target role using ATS-friendly formatting by following the requirements below.

Requirements:
1. Bullet Point Format:
   - Use Google's XYZ format: "Accomplished [X] by doing [Y] using [Z]"
     * X = quantifiable achievement/impact
     * Y = specific action/method
     * Z = tools/technologies/skills used
2. Content Optimization:
   - Quantify everything: Include revenue, cost savings, percentages, timeframes.
   - Keyword integration: Naturally incorporate job posting keywords.
   - Industry alignment: Match tone and terminology from job description.
   - Skill enhancement: Integrate relevant skills from job posting that may be missing.
   - Conciseness: Maximum 2 lines per bullet point.
3. Strategic Alignment:
   - Job titles: Suggest optimized titles that align with the target role.
   - Professional headline: Recommend updated title under my name.
   - Experience prioritization: Highlight most relevant experiences first.
4. ATS Compliance:
   - Use standard formatting.
   - Include exact keyword matches.
   - Maintain clear section headers.
   - Ensure readability by both ATS and humans.

Output Format:
1. Optimized Experience Section with rewritten bullet points.
2. Suggested Job Titles for each role.
3. Professional Headline recommendation.
4. Executive Summary (4-5 lines covering key qualifications and value proposition from job description and experience).

Success Metrics:
- 90%+ keyword match with job posting.
- Quantified impact in every bullet point.
- Clear value proposition alignment.
- ATS-friendly structure maintained.

===========================

Tasks:
1. ✏️ Update the **Summary section**:
   - Keep the **first bullet point as-is** from the resume.
   - Replace the second and third bullet points with two new bullet points relevant to the job description.
   - Do not add education in the professional summary.
   - Return valid LaTeX code for the entire \`\\begin{rSection}{Summary}...\` block.

2. 🛠 Update the **Technical Skills section**:
   - Retain existing skills but remove irrelevant ones and add mandatory skills from the job description.
   - Ensure skills fit within the same number of lines as before.
   - Return updated LaTeX code for the full \`\\begin{rSection}{Technical Skills}...\` block.

3. 🏢 Update **MetLife experience**:
   - Use strong, unique action verbs not repeated elsewhere in the resume.
   - Add quantitative measures to each bullet point.
   - Rewrite all bullet points based on the job description.
   - Return the entire LaTeX block for MetLife with the original heading and structure unchanged.

4. 🏢 Update **Adons Soft Tech experience**:
   - Use strong, unique action verbs not repeated elsewhere in the resume.
   - Add quantitative measures to each bullet point.
   - Rewrite all bullet points based on the job description.
   - Return the full LaTeX block for Adons Soft Tech.

5. Do not make any changes to the **Internships section**.

6. Explain the changes made in the Summary, Technical Skills, MetLife, and Adons Soft Tech sections in a concise manner, focusing on how they align with the job description.
- Ensure quantitative measures are in bold text like \\textbf{20\\%}, Do not bold text in technical section.

7. 📄 Generate a professional **cover letter** using the provided template, aligned with the job description. Update the date, company address, and placeholders based on the job description.

8. ✉️ Generate a personalized **cold email** to reach out to a recruiter, based on the cold email template and resume. Fill in missing values from the job description.

9. Provide the final LaTeX code for the resume, ensuring no changes are made to the Nagarro work experience. Output the LaTeX code with escaped text like \\\\documentclass{resume} and \\\\end{document}.

10. Extract the company name from the job description and return it as a string.

===========================
📝 OUTPUT FORMAT:
===========================
Respond ONLY with valid JSON.

All LaTeX content must:
- Be escaped using double backslashes (\\\\\\\\) for every LaTeX command.
- Replace apostrophes (\\\`\\\`) inside LaTeX text with \\\\textquotesingle{} to avoid JSON parse errors.

Example format:
\`\`\`json
{
  "companyName": "Company Name",
  "summaryLatex": "Your LaTeX with escaped text like \\\\begin{itemize} and \\\\item ...",
  "skillsLatex": "Your LaTeX for skills section with \\\\begin{tabular}...",
  "metlifeLatex": "Your LaTeX block for MetLife experience with \\\\item ...",
  "adonsLatex": "Your LaTeX block for Adons Soft Tech experience...",
  "changes":"Plain text changes made in the Summary, Technical Skills, MetLife, and Adons Soft Tech sections.",
  "coverLetter": "Plain text cover letter.",
  "coldEmail": "Plain text cold email.",
  "FinalResumeLatex": "Final LaTeX code for the resume, ensuring no changes to the Nagarro work experience, and outputting LaTeX with escaped text like \\\\documentclass{resume} and \\\\end{document}...",
}
\`\`\`
===========================
💼 JOB DESCRIPTION:
===========================
${jobDescription}
  `.trim();
}

// ✅ resumeTemplate.js
export const resumeTemplate = {
  full: `
\\documentclass{resume}
\\usepackage{hyperref}
\\urlstyle{same}
\\usepackage[left=0.3in,top=0.2in,right=0.3in,bottom=0.2in]{geometry}
\\newcommand{\\tab}[1]{\\hspace{.2667\\textwidth}\\rlap{#1}} 
\\newcommand{\\itab}[1]{\\hspace{0em}\\rlap{#1}}
\\renewcommand{\\namesize}{\\large}


\\name{\\textbf{Mahaboob Pasha Mohammad}}
\\address{Software Engineer \\\\ \\href{https://miabu-pashh.github.io/Portfolio-maibu/}{Website}
\\\\ \\href{https://digiresume.netlify.app/}{Digital Resume}}
\\address{Bryan, TX \\\\ +1 (314) 305 6056 \\\\ \\href{mailto:mahaboobpashamohammad8@gmail.com}{mahaboobpashamohammad8@gmail.com} \\\\ \\href{https://www.linkedin.com/in/mohammad-mahaboob-pasha/}{LinkedIn}}

\\usepackage{graphicx}
\\usepackage{enumitem} 

\\begin{document}
\\vspace{-1em}
\\begin{rSection}{Summary}
\\begin{itemize}[leftmargin=*, itemsep=-0.5em, topsep=0em]
    \\item Software Engineer with expertise in Banking, HealthCare, and eCommerce sectors using Full Stack Development (React/Angular) with \\textbf{4+} years of experience delivering robust and scalable software solutions.
\\end{itemize}
\\end{rSection}
\\vspace{-0.8em}
\\begin{rSection}{Technical Skills}
\\begin{tabular}{ @{} >{\\bfseries}l @{\\hspace{2ex}} l }
Languages & Core \\& Advanced Java, Java 8/11, Python, C, C++, Golang, SQL \\\\
Methodologies \\& OS & SDLC, Agile, Waterfall, Requirements Gathering, Linux, Windows, MacOS \\\\
Frameworks \\& IDEs & SpringBoot, Microservices, Hibernate, JPA, JSF, React.JS, Vue.JS, Node.JS. \\\\
Web Technologies & HTML, CSS, JavaScript, TypeScript, Next.js, Bootstrap, jQuery, Ajax, JSON, XML \\\\
Cloud/Application Servers & AWS (VPC, EC2, S3, ELB), Azure, Tomcat, Docker \\\\
Version Control \\& Tools & Git, GitHub, Maven, Gradle, Jira, Jenkins, CI/CD \\\\
Databases \\& J2EE & MySQL, PostgreSQL, MongoDB, Oracle DB (exposure), Servlets, JSP \\\\
\\end{tabular}
\\end{rSection}

\\vspace{-0.8em}
\\begin{rSection}{Experience}

\\textbf{Software Engineer} \\textbar{} MetLife \\textbar{} Missouri, USA \\hfill \\textbf{Aug 2024 -- March 2025}
\\vspace{-0.5em}
\\begin{itemize}[leftmargin=*, itemsep=-0.5em, topsep=0em]
    \\item Implemented Agile methodologies, boosting team productivity by \\textbf{15\\%} and accelerating project delivery by \\textbf{20\\%}.
    \\item Engineered high-performance applications using Core Java, Spring Boot, and Microservices, improving scalability by \\textbf{30\\%} and reducing downtime by \\textbf{20\\%}.
    \\item Developed responsive front-end interfaces using React.js, Angular, HTML, CSS, and JavaScript, achieving \\textbf{98\\%} cross-browser compatibility. Deployed AWS-based applications, reducing infrastructure costs by \\textbf{20\\%}.
\\end{itemize}

\\vspace{-0.5em}

\\textbf{Software Engineer (Java)} \\textbar{} Nagarro Software Limited \\textbar{} India \\hfill \\textbf{Aug 2021 -- Dec 2022}
\\vspace{-0.5em}
\\begin{itemize}[leftmargin=*, itemsep=-0.5em, topsep=0em]
    \\item \\textbf {Banking, Financial Services, and Insurance (BFSI)} lead for this team and Implemented REST APIs for seamless communication between front-end (React) and back-end (Java) for Realtime chat communication for banking domain
website to reduce the confusion among new customers visiting the website, improving app efficiency by \\textbf{75\\%}.
    \\item \\textbf {Mendix Development}: Collaborated on Siemens web portal using Mendix and Java, achieving a \\textbf{80\\%} reduction in development time and streamlined backend enhancements.
\\end{itemize}

\\vspace{-0.5em}
\\textbf{Software Engineer} \\textbar{} Adons Soft Tech \\textbar{} India \\hfill \\textbf{Jan 2020 -- Aug 2021}
\\vspace{-0.5em}
\\begin{itemize}[leftmargin=*, itemsep=-0.5em, topsep=0em]
    \\item Led waterfall project workflows, achieving \\textbf{100\\%} on-time delivery and maintaining clear phase-gate reviews.
    \\item Developed high-performance backend systems using Core Java, Servlets, JSP, and JDBC, improving processing speed by \\textbf{45\\%}.
    \\item Designed responsive UIs using HTML, CSS, Bootstrap, and JavaScript, enhancing user experience and increasing traffic by \\textbf{20\\%}.
\\end{itemize}
\\end{rSection}

\\vspace{-0.8em}
\\begin{rSection}{Internships}
\\textbf{\\href{https://gamesforlove.org/}{Games For Love}} \\textbar\\
\\textbf{\\href{https://www.missouribotanicalgarden.org/media/fact-pages/botanical-heights}{BHNA}} \\textbar\\
\\textbf{\\href{https://www.itsyourbirthdayinc.org/}{It’s Your Birthday}} \\textbar\\ Saint Louis, MO \\hfill \\textbf{Jun 2023 -- Dec 2024}
\\vspace{-0.5em}

\\begin{itemize}[leftmargin=*, itemsep=-0.5em, topsep=0em]
    \\item \\textbf{Games for love}: Designed and developed a game aimed at enhancing cognitive abilities by \\textbf{15\\%}, optimizing players' reaction times for improved performance. \\textbf{Tech stack}: C\\#, HTML, CSS, Machine Learning.
    
    \\item \\textbf{Botanical Heights Neighbourhood Association}: Led the development of a customer sentiment analysis tool leveraging natural language processing, achieving a \\textbf{20\\%} improvement in prediction accuracy through advanced model optimization techniques. \\textbf{Tech stack}: Python, Scikit-learn, Pandas, Seaborn
    
    \\item \\textbf{It’s Your Birthday}: Developed a machine learning model to predict event participation trends with an accuracy of \\textbf{85\\%}, enabling data-driven decision-making. \\textbf{Tech stack}: Python, Matplotlib, Pandas, PostgreSQL
\\end{itemize}
\\end{rSection}


\\vspace{-0.8em}
\\begin{rSection}{Education}
\\textbf{Master of Science in Computer Software Engineering} \\textbar{} Saint Louis University, Missouri,  United States. \\\\
\\textbf{B.Tech in Mechanical Engineering} \\textbar{} Gokaraju Rangaraju Institute of Engineering and Technology, Telangana, India
\\end{rSection}
\\end{document}
`,
};

// commented code for acivements and startup experience

// \\vspace{-0.5em}
// \\textbf{Co-Founder \\& Engineer} \\textbar{} Nithya Industries (Startup) \\textbar{} India \\hfill \\textbf{May 2021 -- Jan 2024}
// \\vspace{-0.5em}
// \\begin{itemize}[leftmargin=*, itemsep=-0.5em, topsep=0em]
//     \\item Spearheaded product design and marketing initiatives, launching \\textbf{5+} technical catalogues and campaigns, increasing retention by \\textbf{30\\%} and attracting clients from \\textbf{3+} countries.
// \\end{itemize}

// \\end{rSection}

// \\vspace{-0.8em}
// \\begin{rSection}{Achievements}
// \\begin{itemize}[leftmargin=*, itemsep=-0.5em, topsep=0em]
//     \\item Developed MVPs and POCs for \\textbf{5+} innovative software tools; ongoing research in scalable product solutions.
//     \\item National Champions, Mega ATV Championship 2021.
// \\end{itemize}
// \\end{rSection}
// / coverLetterTemplate.js

//internhsips section to be added later

// \\textbf{Internships} \\textbar\ \\href{https://gamesforlove.org/} {Games For Love} \\textbar\\ \\href{https://www.missouribotanicalgarden.org/media/fact-pages/botanical-heights} {BHNA} \\textbar\  \\href{https://www.itsyourbirthdayinc.org/} {It’s Your Birthday} \\textbar\\ Saint Louis, MO\\hfill \\textbf{Jun 2023 - Dec 2024}
//  \\vspace{-0.5em}
// \\begin{itemize}[leftmargin=*, itemsep=-0.5em, topsep=0em]
// \\itemsep -18pt {}
// \\item \\textbf{Games for love}: Designed and developed a game aimed at enhancing cognitive abilities by \\textbf{15\\%}, optimizing players' reaction times for improved performance. \\textbf{Tech stack}: C\\#, Html, Css, Machine learning.\\\\
// \\item \\textbf{Botanical Heights Neighbourhood Association}: Led the development of a customer sentiment analysis tool leveraging natural language processing, achieving a \\textbf{20\\%} improvement in prediction accuracy through advanced model optimization techniques.
// \\textbf{Tech stack}: Python, Scikit-learn, Pandas, Seaborn\\\\
// \\item \\textbf{It's Your Birthday}:
// Developed a machine learning model to predict event participation trends with an accuracy of \\textbf{85\\%}, enabling data-driven decision-making.\\textbf{Tech stack}: Python, Matplotlib, Pandas, PostgreSQL\\\\
// \\end{itemize}
// \\vspace{-1.5em}

export const coverLetterTemplate = `
                      Mahaboob Pasha Mohammad  
mahaboobpashamohammad8@gmail.com | +(314)-305-6056 | 3615 Olive Street, Apt 1405
[Today’s Date]  
Hiring Manager  
[Company Address]  

Dear Hiring Manager,

I am writing to express my enthusiasm for the [Position] opportunity at [Company Name], as advertised. With over four years of hands-on experience in full-stack software development and a Master’s degree in Software Engineering from Saint Louis University, I am eager to contribute to your team and bring in innovative solutions that enhance system performance and user satisfaction.

I believe the organization's mission and type of work are closely aligned with my professional interests. Your organization’s focus on [type of work the company does] resonates with my passion for delivering scalable, efficient, and user-friendly applications.

In my current role at MetLife, I have led multiple Agile teams to develop high-availability backend systems using Core Java, Spring Boot, and Microservices, achieving a 30% improvement in scalability. My front-end development skills in React.js and Angular, coupled with efficient AWS deployments, resulted in a 20% reduction in operational costs.

My previous roles at Nagarro and Adons Soft Tech further strengthened my capabilities in building robust web applications and optimizing system performance. At Nagarro, I implemented real-time chat systems in the BFSI domain and developed rapid low-code applications using Mendix. At Adons, I accelerated backend processing by 45% through Java-based solutions and improved user experience with responsive UI design.

With a Master’s degree in Software Engineering and extensive experience gained throughout my career, I am now equipped to innovate and solve real-world problems by developing software applications powered by machine learning and intelligent backend agents. Several of these innovative projects are showcased on my website for reference.

I am particularly drawn to [Company Name]’s values around innovation and collaboration, and I am confident that my background and skills will allow me to meaningfully contribute to your projects from day one.

Thank you for considering my application. I’ve attached my resume for your review and would welcome the opportunity to further discuss how I can support your team. I can be reached at +1 (314)-305-6056 or via email at mahaboobpashamohammad8@gmail.com.

Warm regards,  
Mahaboob Pasha Mohammad  
LinkedIn: https://www.linkedin.com/in/mohammad-mahaboob-pasha/  
Portfolio: https://miabu-pashh.github.io/Portfolio-maibu/  
GitHub: https://github.com/miabu-pashh
`;

// coldEmailTemplate.js
export const coldEmailTemplate = `
Subject: Experienced Java Full-Stack Engineer – Open to Opportunities

Hi [Hiring Manager’s Name],

I hope you're doing well. My name is Mahaboob Pasha Mohammad, and I’m a Software Engineer with over 4 years of experience in Java Full Stack Development, currently working at MetLife. I recently completed my Master’s in Software Engineering at Saint Louis University and have built scalable backend systems and responsive frontend apps across BFSI, Healthcare, and eCommerce domains.

I’m reaching out to explore any potential opportunities at [Company Name] where my background in Core Java, Spring Boot, Microservices, and React/Angular could add value. I’ve attached my resume and cover letter for your reference and would welcome a brief chat if you're open to connecting.

Thank you for your time and consideration.

Best regards,  
Mahaboob Pasha Mohammad  
mahaboobpashamohammad8@gmail.com | (314) 305-6056  
LinkedIn: https://www.linkedin.com/in/mohammad-mahaboob-pasha/  
Portfolio: https://miabu-pashh.github.io/Portfolio-maibu/  
GitHub: https://github.com/miabu-pashh
`;

export const referralEmailTemplate = `
Subject: Quick Referral Request for [Job Title] Role at [Company Name]

Hi [Referral's Name],

I hope you're doing well! I came across the [Job Title] opening at [Company Name] and noticed you're connected with the team. I’m currently seeking full-time roles where I can leverage my experience in Java Full Stack development, Spring Boot, React, and AWS to build high-impact applications.

Would you be open to referring me or pointing me in the right direction? I’ve attached my resume for your reference, and I’d be happy to provide a tailored message if needed.

Thanks so much for your time and support!

Warm regards,  
Mahaboob Pasha Mohammad  
mahaboobpashamohammad8@gmail.com | (314) 305-6056  
LinkedIn: https://www.linkedin.com/in/mohammad-mahaboob-pasha/  
Portfolio: https://miabu-pashh.github.io/Portfolio-maibu/
`;

export const jobApplicationEmailTemplate = `
Subject: Application for [Job Title] – Mahaboob Pasha Mohammad

Dear [Hiring Manager's Name],

I am excited to apply for the [Job Title] position at [Company Name]. With over 4 years of experience as a Software Engineer specializing in Java Full Stack development, along with a Master’s degree from Saint Louis University, I am confident in my ability to contribute effectively to your team.

Please find my resume and cover letter attached for your review. I would welcome the opportunity to speak further about how my experience aligns with your current needs.

Thank you for your time and consideration.

Best regards,  
Mahaboob Pasha Mohammad  
mahaboobpashamohammad8@gmail.com | (314) 305-6056  
LinkedIn: https://www.linkedin.com/in/mohammad-mahaboob-pasha/  
Portfolio: https://miabu-pashh.github.io/Portfolio-maibu/  
GitHub: https://github.com/miabu-pashh
`;

export function buildATSAnalysisPrompt({ jobDescription, resumeTemplate }) {
  console.log(
    "🚀 In the build prompt file , buildATSAnalysisPrompt called with:"
  );
  return `
You're an ATS (Applicant Tracking System) expert. Your job is to compare the job description and resume and return an analysis in structured JSON format.
  
 ============================
📄 RESUME (LaTeX Format):
============================
This is the original LaTeX resume template:
\`\`\`latex
${resumeTemplate}
\`\`\`
  ============================
  📌 JOB DESCRIPTION
  ============================
  ${jobDescription}
  ============================
  ============================
  📌 YOUR TASK:
  ============================
  Based on the job description below:
  1.Analyze the resume given to you here in the latex form,  and compare it against the job description.
  2.Identify the missing keywords, underrepresneted skills, or mismatched experience.
  3.Estimate a typical ATS (Applicant Tracking System ) score (out of 100)
  4.Suggest specific improvements to help better align the resume with job description.
  5.Provide a summary of the analysis and recommendations in a clear and concise manner.
  ============================
  ===========================
📝 OUTPUT FORMAT:
===========================
Respond ONLY with valid JSON in the following format:

\`\`\`json
{
  "atsScore": 75,
  "gaps": [
    "Years of experience is 4+, but JD requires 6.",
    "NGINX is not mentioned.",
    "Swagger missing from resume.",
    "Retail domain not highlighted."
  ],
  "improvements": [
    "Add NGINX to Web Technologies.",
    "Mention Swagger (OpenAPI) with REST APIs.",
    "Highlight any retail/eCommerce domain exposure.",
    "Include Docker/Kubernetes for containerization."
  ],
  "summary": "The resume has a strong foundation in Java full-stack development, but lacks domain-specific keywords and some tools. By addressing these gaps, the ATS match can significantly improve."
}
\`\`\`
`.trim();
}

export function buildGeminiPromptForJD({ jobDescription, resumeTemplate }) {
  return `
You are an expert in analyzing job descriptions and determining resume compatibility. Based on the job description and LaTeX resume, follow the checklist below and return a JSON object.

============================
📄 RESUME (LaTeX Format):
============================
${resumeTemplate}

============================
📌 JOB DESCRIPTION:
============================
${jobDescription}

============================
✅ YOUR TASK:
============================
1. Identify skills, tools, and qualifications mentioned in the job description.
2. Check if the resume contains most of those skills.
3. Flag if the JD requires >5 years experience and the resume doesn't match.
4. Flag any eligibility blockers like needing US citizenship or disallowing OPT/CPT.
5. Suggest improvements to the resume if needed.
6. Conclude if the user should apply or not.

============================
📝 OUTPUT FORMAT:
============================
Respond ONLY with valid JSON in the following format:

{
  "result": "Your explanation and advice here as plain text."
}

Do NOT include markdown or commentary outside the JSON.
`.trim();
}

// On 05/23/2025 Friday

export function buildLinkedInMessagePrompt({ jobDescription, resumeTemplate }) {
  console.log("🚀 buildLinkedInMessagePrompt called with:");
  return `
You are an expert in writing short, professional messages to recruiters on LinkedIn.

============================
📄 RESUME (LaTeX Format):
============================
This is the original LaTeX resume template:
\`\`\`latex
${resumeTemplate}
\`\`\`

============================
📌 JOB DESCRIPTION:
============================
${jobDescription}

============================
✅ YOUR TASK:
============================
Write a **short LinkedIn message (under 300 characters)** that:
1. Expresses interest in the job.
2. Highlights 1–2 relevant strengths from the resume.
3. Is polite and professional.
4. Avoids buzzwords, fluff, or excessive detail.
5. Sounds natural and human—not robotic.
6. Makes the reader want to connect or respond.

============================
📝 OUTPUT FORMAT:
============================
Respond ONLY with valid JSON:
{
  "linkedinMessage": "Your 1-line message here"
}
`.trim();
}
export function buildCoverLetterUpdatePrompt({
  jobDescription,
  resumeTemplate,
  coverLetterTemplate,
  todayDate,
}) {
  return `
You are an expert job application assistant.

============================
📄 RESUME (LaTeX Format):
============================
\`\`\`latex
${resumeTemplate}
\`\`\`

============================
📌 JOB DESCRIPTION:
============================
${jobDescription}

============================
✉️ COVER LETTER TEMPLATE:
============================
\`\`\`
${coverLetterTemplate}
\`\`\`

============================
✅ YOUR TASK:
============================
Update the cover letter using the resume and job description.

- Insert this exact date: **${todayDate}** where applicable.
- Extract the company name and address from the job description and include it under the date.
- Highlight any changed or inserted content using double asterisks (e.g., **React**, **problem-solving**, etc.).
- Do not remove existing content. Retain original structure and tone.
- Return only the updated plain text cover letter.
`.trim();
}

//developed on 06/15/2025 Sunday
export const buildCompanyAndEmailPrompt = (jobDescription) => `
You are an AI assistant that helps job seekers.

Given the job description below, extract:

1. The Company Name
2. A careers, HR, or recruiter email address (e.g., hr@company.com, careers@company.com, etc.)

If the email is not available, return "Not available".

Respond strictly in this format:
Company Name: <company name>
Email: <hr or careers email>

Job Description:
""" 
${jobDescription}
"""
`;
