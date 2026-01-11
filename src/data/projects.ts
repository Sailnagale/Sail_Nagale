export const projects = [
  {
    id: "soyabean-seed-damage-detection",
    category: "Internship",
    title: "Soyabean Seed Damage Detection",
    image: "/images/soyabean.jpg",
    description:
      "During my internship at Agharkar Research Institute, I worked on a computer vision project to automatically identify and quantify damage in soybean seeds. The solution leverages deep learning (YOLOv8) to improve efficiency and accuracy in agricultural quality control processes. It detects specific damage types like purple blotch and mechanical cracks.",
    techStack: ["Python", "YOLOv8", "OpenCV", "Flask"],
    gitHubLink: "https://github.com/yourusername/soybean-project", // Add your real link here
    liveLink: "", // Leave empty if no live link
    features: [
      "Automated counting of defective seeds",
      "Classification of 3 different damage types",
      "97% Accuracy on test dataset",
      "Real-time processing via Webcam feed",
    ],
  },
  {
    id: "leaf-miner-damage-detection",
    category: "Internship",
    title: "Leaf Miner Damage Detection",
    image: "/images/leaf.png",
    description:
      "This project focused on helping farmers by providing a tool for early detection of leaf miner infestation. The model analyzes leaf images to spot patterns of damage (mines), allowing for timely intervention and crop protection. It calculates the total percentage of leaf area damaged to grade the severity.",
    techStack: ["Python", "OpenCV", "Scikit-image", "Pandas"],
    gitHubLink: "https://github.com/yourusername/leaf-miner",
    liveLink: "",
    features: [
      "Percentage damage calculation",
      "Severity grading (Low, Medium, High)",
      "Batch processing of leaf images",
      "Report generation in CSV format",
    ],
  },
  {
    id: "legume-root-nodule-analysis",
    category: "Internship",
    title: "Automated Legume Root Nodule Analysis",
    image: "/images/node.jpg",
    description:
      "Designed and implemented an automated image processing system to analyze excavated legume root systems. The solution uses reference-object calibration to convert pixel data into real-world metrics (mm²), employing global thresholding and edge filtering to isolate nodules from background noise. The system automatically generates statistical reports in Excel, significantly reducing manual data collection time for agricultural research.",
    techStack: ["Python", "OpenCV", "Pandas", "NumPy", "Imutils"],
    gitHubLink: "https://github.com/yourusername/nodule-counter",
    liveLink: "",
    features: [
      "Reference object calibration for scale",
      "Auto-count and Area measurement",
      "Noise reduction algorithms",
      "Automated Excel Report Export",
    ],
  },
  {
    id: "doctor-appointment-system",
    category: "Hackathon",
    title: "Doctor Appointment System",
    image: "/images/doctor.png",
    description:
      "Built during a hackathon, this system aims to streamline the process of scheduling doctor visits. It includes features for patient registration, doctor profiles, and real-time appointment booking. It solves the issue of long waiting queues in local clinics.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    gitHubLink:
      "https://github.com/Sailnagale/Doctor-Appointment-Booking-System.git",
    liveLink: "https://doctor-app-demo.vercel.app",
    features: [
      "Patient & Doctor Dashboards",
      "Real-time slot booking",
      "Email notifications",
      "Admin panel for clinic management",
    ],
  },

  {
    id: "agriai-hackathon-web",
    category: "Hackathon",
    title: "AgriAI Hackathon Portal",
    image: "/images/web.png",
    description:
      "This was a front-end and back-end web solution for a hackathon, designed to manage participant registration, team formation, and project submission logistics. It featured a clean UI and a robust database for data management.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    gitHubLink: "https://github.com/Sailnagale/agriai-hackathon-website-2.git",
    liveLink: "https://agriai-hackathon-website-2-wub2.vercel.app/",
    features: [
      "Team formation logic",
      "File upload for project submissions",
      "Dynamic leaderboard",
      "Authentication with JWT",
    ],
  },
  {
    id: "weed-detection",
    category: "Hackathon",
    title: "Automated Weed Detection",
    image: "/images/weed.png",
    description:
      "Part of a hackathon focused on agricultural technology, this project used deep learning to create a model capable of distinguishing weeds from crops. The goal was to reduce manual labor and optimize herbicide application using precision spraying logic.",
    techStack: ["Python", "PyTorch", "YOLOv5", "Roboflow"],
    gitHubLink: "https://github.com/yourusername/weed-detection",
    liveLink: "",
    features: [
      "Real-time inference",
      "High mAP on weed classes",
      "Integration with sprayer hardware (simulation)",
      "Custom dataset training",
    ],
  },
];
