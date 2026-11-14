const GH = "https://github.com/Kunal2319";

export const profile = {
  name: "Kunal Mishra",
  firstName: "Kunal",
  lastName: "Mishra",
  photo: "/profile.jpg",              
  cv: "/Kunal_Mishra_CV.pdf",
  phone: "+91 91255-28598",         
  email: "kunalmishra1923@gmail.com",
  linkedin: "https://www.linkedin.com/in/kunal-mishra-0b117a228/",
  github: "",
  location: "Ayodhya, India",
  tagline: "Aspiring NLP Researcher and a Data Science Professional",
  intro:
    "Engineering graduate from IIT Roorkee, curious about AI. I want to build and evaluate language technologies that are reliable, fair and accountable to the people who use them.",
};

export const about = [
  "I am a Chemical Engineering graduate from IIT Roorkee. I was drawn to Data Science and Artificial Intelligence since my initial college days and learned it through self-study, campus clubs, projects and internships.",
  "My work so far spans research - applying ML to Scientific Data, industry data science - large-scale customer segmentation at American Express and human-in-the-loop evaluation of AI agents at Deccan AI.",
  "I want to move into NLP research focused on the safe and fair deployment of language models. I am coming to NLP from outside the field, and I want to build my foundations in it alongside research rather than separately from it."
  // TODO: add 1-2 sentences on WHY Responsible NLP, in your own words and specific to you.
];

export const stats = [
  { value: "8.86/10", label: "CGPA, IIT Roorkee" },
  { value: "57–79%", label: "of particle-size variation traced to the source paper, found by re-evaluating my own model" },
  { value: "100+", label: "papers reviewed for a research dataset" },
  { value: "18.4M", label: "accounts handled in a SQL-based segmentation model" },
];


// export const researchInterests = [
//   {
//     title: "Human disagreement in subjective labelling",
//     text: "Hate speech and toxicity datasets usually resolve annotator disagreement by majority vote, and the dissenting readings often belong to the communities most affected by the content. I want to understand how to keep that disagreement in datasets and models, and how to check that a perspective has not been silently dropped. Deciding whose readings count is not a question for computer scientists alone, so I want to work with linguists and social scientists on it.",
//   },
//   {
//     title: "Evaluation that shows who a model fails",
//     text: "My first nanoparticle model scored R² = 0.85 until I held out whole papers instead of random rows. It was then indistinguishable from predicting the median. I now treat variation between sources as information, and I want to bring that habit to NLP: testing on annotators and sources a model has never seen, and reporting results per group instead of one overall score.", // TODO: edit to match your reading
//   },
//   {
//     title: "Auditable and explainable systems",
//     text: "An audit that never reaches the people affected by a system is not much use. I am interested in fairness properties that can be written as explicit rules and checked after training, and in how the results of those checks are explained to non-technical users.",
//   },
// ];

export const researchInterests = [
  {
    title: "Subjective labelling tasks in NLP",
    text: "Hate speech and toxicity datasets usually settle annotator disagreement by majority vote, which can erase the readings of the communities most affected. I want models and datasets that keep that disagreement, and ways to check that no perspective is silently dropped.",
  },
  {
    title: "Evaluation that shows who a model fails",
    text: "My first nanoparticle model scored R² = 0.85 until I held out whole papers instead of random rows, and then it matched predicting the median. I now test on sources a model has never seen, and want to report NLP results per group instead of one overall score.",
  },
  {
    title: "Auditable and explainable systems",
    text: "An audit that never reaches the people affected is not much use. I am interested in fairness properties written as explicit rules that can be checked after training, and in explaining the results to non-technical users with social scientists and designers.",
  },
];

export const experience = [
  {
    role: "AI/ML Engineer (Freelance)",
    org: "Deccan AI",
    place: "Remote, India",
    period: "Apr 2026 – Present",
    type: "Professional",
    bullets: [
      "Human-in-the-loop evaluation of AI agents working in reinforcement learning environments.",
      "Validated the Python tools agents call, checking tool correctness and reward-signal integrity.",
      "Identified failure modes in tool logic and reward structures across 100+ tools and 10+ environments.",
    ],
  },
  {
    role: "Data Analyst",
    org: "American Express",
    place: "Gurugram, India",
    period: "Jul 2025 – Mar 2026",
    type: "Professional",
    bullets: [
      "Designed rules to flag low-ROI, offer-driven gaming of card upgrades across 8 markets and 150+ products.",
      "Analysed spend and attrition of upgraders to build a data-backed definition of gaming.",
      "Built a SQL segmentation model over 18.4M active cardmembers to apply that definition.",
      "Targeted controls on the flagged accounts delivered $2.26M in annual savings.",
    ],
  },
  {
    role: "Bachelor's Thesis: DEM and ML for Granular Systems",
    org: "IIT Roorkee",
    place: "Roorkee, India",
    period: "Sep 2024 – May 2025",
    type: "Research",
    bullets: [
      "Studied how particle shape affects alignment in vibrated granular beds using DEM simulations across 9 aspect ratios.",
      "Built a Python pipeline that turns raw rotation-tensor output into orientation angles for 3M+ particle records.",
      "Found orientation became more variable with elongation, and measured packing order with an anisotropy index.",
      "Trained a Random Forest on position and aspect ratio: R² = 0.69, with 83% of predictions within ±35% (random split).",
    ],
  },
  {
    role: "Mitacs Globalink Research Intern",
    org: "University of Guelph",
    place: "Guelph, Canada",
    period: "May 2024 – Aug 2024",
    type: "Research",
    bullets: [
      "Built models to predict nanoparticle size and shape from synthesis recipes, for chemical and green routes.",
      "Hand-built a dataset of 307 experiments from about 130 papers, cleaning units and terminology across sources.",
      "Found my initial result (R² = 0.85) was inflated: a random split put rows from the same paper in train and test.",
      "With whole papers held out, no model reliably beat the median baseline; paper identity explained 57–79% of size variance.",
    ],
  },
];

export const projects = [
  {
    title: "DEM and ML for Granular Systems",
    context: "Research · IIT Roorkee (Bachelor's thesis)",
    description:
      "Studied how particle shape changes alignment in vibrated beds, and predicted particle orientation from position and aspect ratio.",
    tags: ["Python", "DEM simulation", "Random Forest", "Data pipelines"],
    links: { github: "https://github.com/Kunal2319/Coupling_DEM_and_ML_for_Granular_Systems", 
        paper: "https://github.com/Kunal2319/Coupling_DEM_and_ML_for_Granular_Systems/blob/main/docs/BTP_Report_Coupling_DEM_and_ML_for_Granular_Systems.pdf", 
        demo: "" }, 
  },
  {
    title: "ML for Nanoparticle Synthesis",
    context: "Research · University of Guelph (Mitacs)",
    description:
      "Predicted nanoparticle size and shape from synthesis recipes, then found my own initial result did not hold when whole papers were held out.",
    tags: ["Python", "scikit-learn", "Grouped CV", "Dataset curation"],
    links: {github: `${GH}/ML_Nanoparticle_Synthesis`,
            paper: "https://github.com/Kunal2319/ML_Nanoparticle_Synthesis/blob/main/docs/Mitacs_Globalink_Completion_Certificate.pdf",},
  },
  {
    title: "Candy Image Classification",
    context: "Self project · IIT Roorkee",
    description:
      "CNN classifier with data augmentation and background correction: 97.22% accuracy and 97.19% F1 on a real-world candy image set.",
    tags: ["Python", "CNN", "Computer Vision", "Data augmentation"],
    links: { github: "" },
  },
  // TODO (strongly recommended): add a small NLP / responsible-AI project here. See the checklist below.
];

// export const skills = {
//   "Languages & Libraries": ["Python", "SQL", "pandas", "NumPy", "scikit-learn"],
//   "Machine Learning": ["Supervised learning", "CNNs", "Model evaluation", "Feature engineering"],
//   "Data & Cloud": ["BigQuery", "GCP", "Hive", "PySpark"],
//   "Analytics Tools": ["Advanced Excel", "Tableau"],
// };

export const skills = {
  "Programming & Data": [
    "Python", "SQL", "pandas", "NumPy", "Google BigQuery", "MS Excel", "Jupyter", "FastAPI",
  ],
  "Machine Learning": [
    "scikit-learn", "Regression and classification", "Random Forest", "Gradient boosting", 
  ],
  "Evaluation & Statistics": [
    "Grouped cross-validation", "Baseline comparison", "Bootstrap intervals", "Error analysis", 
  ],
  "Deep Learning & NLP": [
    "PyTorch", "Hugging Face", "spaCy", "RNNs and LSTMs", "LLMs", "LangChain",
  ],
  "Research & Communication": [
    "Literature review", "Data extraction and curation", "Technical writing", "Cross-disciplinary collaboration", "Communicating results to non-technical teams",
  ],
  "Currently Learning": [
    "Transformers and pretrained LMs", "Probabilistic graphical models", "VAEs and diffusion models", "Neurosymbolic AI", "Bias and fairness in NLP",
  ],
};

export const education = [
  {
    degree: "B.Tech, Chemical Engineering",
    school: "Indian Institute of Technology, Roorkee",
    period: "2021 – 2025",
    detail: "Among the top 7 students out of 130",
  },
];

export const certifications = [
  "Natural Language Processing Specialization",
  "IBM Machine Learning with Python",
  "Google Data Analytics Specialization",
  
];