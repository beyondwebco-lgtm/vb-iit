export interface LeadershipMember {
  name: string;
  role: string;
  title: string;
  quote: string;
  image?: string;
  initials?: string;
  bio: string[];
  keyPoints: string[];
}

export interface AcademicProgram {
  id: string;
  title: string;
  subtitle: string;
  targetGroup: string;
  description: string;
  highlights: string[];
  features: string[];
  icon: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  verifiedDetails: string[];
  icon: string;
}

export const institutionData = {
  fullName: "Vidyarthi Bhavan IIT Academy",
  shortName: "VB IIT Academy",
  tagline: "Building the Real Pillars of Bharat",
  motto: "Not just job literacy—but life education.",
  secondaryMotto: "Strong Foundations · Academic Excellence · Character · Nation Building",
  pillars: [
    "Knowledge",
    "Character",
    "Courage",
    "Compassion",
    "Leadership",
    "Nation-Building"
  ],
  location: {
    town: "Narasannapeta",
    mandal: "Narasannapeta Mandal",
    district: "Srikakulam District",
    state: "Andhra Pradesh",
    pincode: "532421",
    street: "State Bank Street",
    country: "India",
    address: process.env.NEXT_PUBLIC_SCHOOL_ADDRESS || "State Bank Street, Narasannapeta Town, Narasannapeta Mandal, Srikakulam District, Andhra Pradesh - 532421",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15167.369344400472!2d84.03848135!3d18.42398415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c3e66bbd8102f%3A0xe542617f6c650eb!2sNarasannapeta%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_SCHOOL_PHONE || "+91 94403 47837",
    whatsapp: process.env.NEXT_PUBLIC_SCHOOL_WHATSAPP || "+919440347837",
    allPhones: [
      { number: "+91 94403 47837", raw: "9440347837", label: "Director / Admissions Desk" },
      { number: "+91 79816 65714", raw: "7981665714", label: "Campus & Academic Helpline" },
      { number: "+91 94905 66550", raw: "9490566550", label: "Student & Parent Support" },
      { number: "+91 79810 74545", raw: "7981074545", label: "General Enquiry Desk" },
    ],
    email: process.env.NEXT_PUBLIC_SCHOOL_EMAIL || "info@vbiitacademy.edu.in",
    admissionsEmail: "admissions@vbiitacademy.edu.in",
    hours: "Monday – Saturday: 8:00 AM – 5:30 PM",
  },
  leadership: {
    director: {
      name: "Arangi Govinda Babu",
      role: "Founder / Director",
      institution: "Vidyarthi Bhavan IIT Academy",
      quote: "Our mission is not merely to educate students for jobs, but to shape responsible human beings, strong leaders and the real pillars of Bharat.",
      image: "/images/leadership/director_arangi_govinda_babu.png",
      visionText: "To make every student a real pillar of Bharat—capable, compassionate, confident and committed to nation-building.",
      missionText: "To blend academic excellence, future-ready skills, discipline, character, Indian heritage and practical life education.",
      coreBelief: "Every child has immense potential. The right foundation, guidance, opportunity and effort can help that potential flourish.",
      motto: "Not just job literacy—but life education.",
      interests: [
        "Science & Mathematics",
        "IIT Foundation Pedagogy",
        "Artificial Intelligence & Innovation",
        "Indian Culture & Gita Wisdom",
        "Civic Awareness & Practical Life Skills",
        "Martial Arts & Yoga",
      ],
      paragraphs: [
        "Education, in my vision, is not merely the process of acquiring marks, degrees or employment. It is the journey of shaping a human being with knowledge, discipline, wisdom, values, courage, compassion and a sense of responsibility towards society and our nation.",
        "At Vidyarthi Bhavan IIT Academy, our dream is to create a generation of students who are academically strong, intellectually curious, morally grounded, physically healthy, emotionally balanced and spiritually aware. I firmly believe that every child possesses extraordinary potential. The responsibility of an educational institution is to identify that potential, nurture it with care and discipline, and guide each student towards excellence.",
        "My vision is to bring together the best of modern education and the timeless wisdom of Indian culture. Science, mathematics, technology, artificial intelligence, innovation and competitive learning must go hand in hand with Indian values, respect for parents and teachers, civic responsibility, spiritual knowledge, patriotism and humanity.",
        "We aim to provide students with opportunities to think independently, question intelligently, solve problems creatively, communicate confidently and face challenges fearlessly. Beyond the classroom, we encourage participation in Olympiads, IIT foundations, coding, yoga, martial arts, Bhagavad Gita learning, leadership activities, social awareness and practical life education.",
        "Our goal is to build students who are not followers of temporary success, but creators of lasting progress; not merely professionals, but responsible citizens; not merely intelligent individuals, but wise and compassionate human beings."
      ]
    },
    principal: {
      name: "Kalepu Satish Kumar",
      role: "Principal & Mathematics / IIT Foundation Faculty",
      institution: "Vidyarthi Bhavan IIT Academy",
      quote: "I lead as a Principal, but my heart remains in the classroom—helping students think, understand and achieve.",
      initials: "KS",
      classroomConnection: "Personally teaches Mathematics and IIT Foundation Mathematics to our high-school students, challenging them to think logically and develop analytical problem-solving skills.",
      priorities: [
        {
          title: "Conceptual Clarity",
          description: "Build rock-solid fundamentals before advancing to complex problems. No rote learning without insight.",
        },
        {
          title: "Logical Thinking",
          description: "Develop structured reasoning, step-by-step analysis, and intuitive problem-solving capability.",
        },
        {
          title: "Discipline & Practice",
          description: "Encourage daily consistency, laser focus, and purposeful effort that withstands exam pressures.",
        },
        {
          title: "Student Mentoring",
          description: "Guide, motivate, and closely support each individual learner's unique pace and intellectual growth.",
        },
        {
          title: "Academic Excellence",
          description: "Prepare students thoroughly for school curriculum benchmarks and competitive challenges alike.",
        },
        {
          title: "Character & Values",
          description: "Promote respect, responsibility, integrity, self-confidence, and a sense of duty towards society.",
        }
      ],
      paragraphs: [
        "At Vidyarthi Bhavan IIT Academy, I believe that meaningful education is built through a combination of strong academic foundations, disciplined habits, curiosity, confidence and the personal guidance of committed teachers. A school is not simply a place where lessons are completed; it is a place where young minds learn to think, question, work hard and grow into capable individuals.",
        "As Principal, my responsibility is to guide our academic journey, support our teachers, uphold high standards and create an environment in which every student is encouraged to strive for excellence. I believe discipline should strengthen a student's character, learning should awaken curiosity, and encouragement should help children discover the confidence to achieve more than they thought possible.",
        "Alongside my administrative responsibilities, I remain deeply connected to teaching. I personally teach Mathematics and IIT Foundation Mathematics to our high-school students. The classroom gives me an opportunity to understand students' learning needs directly, challenge them to think logically, develop problem-solving skills and help them build the mathematical confidence required for future competitive examinations and higher studies.",
        "Mathematics, in my view, is more than a subject. It develops patience, precision, analytical thinking, decision-making and the courage to approach difficult problems step by step. IIT Foundation learning is not about pressure alone—it is about nurturing the right concepts, consistent practice, intellectual discipline and a spirit of inquiry.",
        "With the cooperation of parents, dedication of our teachers and determination of our students, I am confident that we can continue building a learning community that inspires excellence and helps shape the real pillars of Bharat."
      ]
    }
  },
  programs: [
    {
      id: "iit-jee-foundation",
      title: "IIT-JEE Foundation Program",
      subtitle: "Middle & High School Foundation",
      targetGroup: "Classes 6 to 10",
      description: "A meticulously engineered foundation course targeting deep conceptual mastery in Mathematics, Physics, and Chemistry. Personally taught and mentored by Principal Kalepu Satish Kumar.",
      highlights: [
        "Direct classroom mentorship in Mathematics by Principal Kalepu Satish Kumar",
        "Step-by-step analytical reasoning without excessive pressure",
        "Conceptual clarity before advanced mathematical problem-solving",
        "Early preparation for future competitive exams (JEE Main, Advanced, NEET, Olympiads)",
        "Regular diagnostic assessments with actionable feedback"
      ],
      features: [
        "Daily Practice Problems (DPP)",
        "Logical reasoning workshops",
        "Doubt resolution sessions",
        "Formula & theorem intuition building"
      ],
      icon: "Atom"
    },
    {
      id: "school-academics",
      title: "Comprehensive School Academics",
      subtitle: "State & National Standard Curriculum",
      targetGroup: "Primary to High School",
      description: "Holistic academic education instilling subject fundamentals, disciplined study habits, scientific temperament, and language proficiency.",
      highlights: [
        "Strong foundation across Mathematics, Sciences, Social Studies & Languages",
        "Active learning methods emphasizing questioning and conceptual understanding",
        "Continuous assessment focused on improvement rather than mere rote ranking",
        "Supportive, encouraging environment for all learning speeds"
      ],
      features: [
        "Structured daily timetable",
        "Language & communication enhancement",
        "Continuous comprehensive evaluation",
        "Teacher-student mentorship ratio"
      ],
      icon: "BookOpen"
    },
    {
      id: "ai-coding-innovation",
      title: "AI, Coding & Innovation",
      subtitle: "Future-Ready Skills for the 21st Century",
      targetGroup: "High School & Middle School",
      description: "Empowering young students with modern technology, computational thinking, algorithms, Artificial Intelligence principles, and creative problem solving.",
      highlights: [
        "Exposure to cutting-edge AI and computer science concepts",
        "Hands-on coding exercises promoting algorithmic reasoning",
        "Creative thinking projects connecting technology with real-world problems",
        "Bridging classroom theory with modern industrial advancement"
      ],
      features: [
        "Computer laboratory practice",
        "Introduction to Python & logic",
        "AI literacy & ethics",
        "Tech exhibitions & project showcases"
      ],
      icon: "Cpu"
    },
    {
      id: "olympiad-competitive",
      title: "Olympiad & Talent Mentorship",
      subtitle: "National & State Competitive Exposure",
      targetGroup: "Classes 5 to 10",
      description: "Specialized training for Science, Mathematics, and Cyber Olympiads, training students to tackle multi-concept challenges with confidence.",
      highlights: [
        "Focused guidance for National Science Olympiads and Math Olympiads",
        "Techniques for time management and intelligent option elimination",
        "Encouraging intellectual boldness and curiosity",
        "Comprehensive mock assessments under timed conditions"
      ],
      features: [
        "Olympiad question banks",
        "Analytical challenge sheets",
        "Peer study circles",
        "Recognition & talent certificates"
      ],
      icon: "Trophy"
    },
    {
      id: "values-gita-heritage",
      title: "Indian Heritage & Bhagavad Gita Wisdom",
      subtitle: "Character Building & Moral Anchoring",
      targetGroup: "All Students",
      description: "Imparting timeless Indian values, respect for parents and teachers, civic ethics, self-discipline, and philosophical wisdom from the Bhagavad Gita.",
      highlights: [
        "Bhagavad Gita recitation and understanding of core ethical verses",
        "Developing mental balance, inner resilience, and self-control",
        "Instilling profound respect for elders, culture, and nature",
        "Nation-building ethos: contributing positively to society and Bharat"
      ],
      features: [
        "Weekly value education periods",
        "Cultural celebrations & discourses",
        "Civic awareness campaigns",
        "Reflective character journaling"
      ],
      icon: "Heart"
    },
    {
      id: "holistic-health-martial-arts",
      title: "Yoga, Martial Arts & Life Skills",
      subtitle: "Physical Health & Practical Readiness",
      targetGroup: "All Students",
      description: "Developing physically healthy, disciplined, and alert young individuals through traditional Yoga, martial arts self-defense, and practical life competencies.",
      highlights: [
        "Daily Yoga practice for mental focus, breathing, and flexibility",
        "Martial arts training for self-defense, physical stamina, and reflexes",
        "Practical life education, road safety, and social awareness",
        "Building resilience, confidence, and leadership temperament"
      ],
      features: [
        "Certified martial arts instruction",
        "Yoga & pranayama morning routines",
        "First-aid and safety workshops",
        "Outdoor sports and stamina drills"
      ],
      icon: "Shield"
    }
  ],
  facilities: [
    {
      id: "smart-classrooms",
      title: "Interactive Learning Classrooms",
      category: "Academic Infrastructure",
      description: "Spacious, well-ventilated, and acoustically balanced classrooms engineered to maintain optimal student engagement, focus, and conceptual learning.",
      verifiedDetails: [
        "Ergonomic seating optimized for long study sessions",
        "Equipped with modern multimedia teaching displays",
        "High teacher-student interaction layout",
        "Well-lit natural airflow environment"
      ],
      icon: "GraduationCap"
    },
    {
      id: "math-science-labs",
      title: "IIT Foundation & Science Exploration Labs",
      category: "Laboratory & Hands-on",
      description: "Equipped for practical verification of scientific theories, physics apparatus demonstration, chemical reactions, and mathematical models.",
      verifiedDetails: [
        "Experimental setups for Physics, Chemistry, and Biology",
        "Hands-on mathematical tools for geometric and algebraic proofs",
        "Strict safety protocols and faculty supervision",
        "Specialized kits for IIT foundation practical demonstrations"
      ],
      icon: "FlaskConical"
    },
    {
      id: "tech-ai-center",
      title: "Computer & AI Innovation Center",
      category: "Digital Technology",
      description: "A high-speed computing environment where students explore programming, algorithmic logic, computer fundamentals, and AI concepts.",
      verifiedDetails: [
        "Modern computer workstations with programming environments",
        "Safe, curated digital learning resources and software",
        "Structured training for coding and cyber competitions",
        "Supervised exploration of modern AI technologies"
      ],
      icon: "Monitor"
    },
    {
      id: "library-reading-room",
      title: "Library & Knowledge Resource Room",
      category: "Academic Research",
      description: "A quiet intellectual sanctuary featuring curriculum textbooks, IIT foundation reference books, competitive magazines, and cultural classics.",
      verifiedDetails: [
        "Extensive collection of Mathematics and Science reference books",
        "Bhagavad Gita commentaries and Indian cultural literature",
        "Olympiad question archives and competitive journals",
        "Peaceful self-study reading desks"
      ],
      icon: "Library"
    },
    {
      id: "yoga-fitness-arena",
      title: "Yoga & Martial Arts Arena",
      category: "Wellness & Athletics",
      description: "Dedicated open-air and indoor training areas designed for daily yoga, pranayama, martial arts practice, and physical fitness conditioning.",
      verifiedDetails: [
        "Dedicated mats and safety gear for martial arts practice",
        "Serene area for morning yoga and mindfulness sessions",
        "Specialized training for building physical stamina and reflexes",
        "Guidance by disciplined instructors"
      ],
      icon: "Activity"
    },
    {
      id: "mentoring-lounge",
      title: "Student Mentorship & Doubt Resolution Lounge",
      category: "Personal Guidance",
      description: "A dedicated academic discussion zone where students receive personalized one-on-one problem clarification from faculty members.",
      verifiedDetails: [
        "Direct access to faculty for post-class query resolution",
        "Individual progress tracking and academic counseling",
        "Calm space for student-teacher collaborative problem solving",
        "Focus on building student confidence and eliminating fear of math"
      ],
      icon: "Users"
    }
  ],
  whyChooseUs: [
    {
      title: "Principal-Led Classroom Teaching",
      description: "Unlike schools where administration is detached from academics, Principal Kalepu Satish Kumar personally teaches Mathematics and IIT Foundation to high schoolers.",
      icon: "UserCheck"
    },
    {
      title: "True Nation-Building Vision",
      description: "Founded by Arangi Govinda Babu with the conviction that education must produce 'Real Pillars of Bharat'—blending modern science with Indian heritage.",
      icon: "Award"
    },
    {
      title: "Conceptual Clarity over Rote Memorization",
      description: "Rigorous focus on first principles and logical reasoning so students master fundamentals before facing advanced competitive tests.",
      icon: "Brain"
    },
    {
      title: "Future-Ready AI & Coding",
      description: "Early introduction to computational thinking, artificial intelligence, and coding to prepare children for tomorrow's technology landscape.",
      icon: "Cpu"
    },
    {
      title: "Character, Gita Wisdom & Culture",
      description: "Daily grounding in values, respect for elders, Bhagavad Gita lessons, and civic duty to shape responsible, compassionate citizens.",
      icon: "HeartHandshake"
    },
    {
      title: "Balanced Physical & Mental Discipline",
      description: "Integrated Yoga and Martial Arts empower students with physical stamina, self-defense, and emotional poise.",
      icon: "ShieldCheck"
    }
  ],
  admissionSteps: [
    {
      step: "01",
      title: "Submit Enquiry Form",
      description: "Fill the quick online admission enquiry form or connect directly with our admissions desk via phone or WhatsApp."
    },
    {
      step: "02",
      title: "Campus Visit & Academic Counseling",
      description: "Visit our campus at Narasannapeta, meet our faculty and leadership, and discuss the student's academic path."
    },
    {
      step: "03",
      title: "Diagnostic Assessment",
      description: "A friendly baseline assessment in Mathematics and Science to understand the student's conceptual readiness."
    },
    {
      step: "04",
      title: "Enrollment & Mentorship Allocation",
      description: "Complete formal registration and join the Vidyarthi Bhavan learning community with a tailored growth roadmap."
    }
  ],
  faqs: [
    {
      question: "Where is Vidyarthi Bhavan IIT Academy located?",
      answer: "Vidyarthi Bhavan IIT Academy is centrally located in Narasannapeta, Srikakulam District, Andhra Pradesh. We serve students across the region with an IIT-focused curriculum and holistic education."
    },
    {
      question: "What makes the IIT Foundation program at VB IIT Academy unique?",
      answer: "Our IIT Foundation program is led hands-on from the classroom by Principal Kalepu Satish Kumar, who personally teaches high-school Mathematics. We prioritize deep conceptual understanding and problem-solving intuition rather than rote formulas or stressful cramming."
    },
    {
      question: "Does the school teach modern technologies like AI and Coding?",
      answer: "Yes. Guided by Founder / Director Arangi Govinda Babu's vision, we blend competitive science with AI literacy, algorithmic coding, and innovation to prepare students for the modern technological era."
    },
    {
      question: "How does the institution integrate Indian culture and values?",
      answer: "We believe in 'life education, not just job literacy.' Students learn Bhagavad Gita wisdom, civic awareness, respect for parents and teachers, and participate in yoga and martial arts for character and mental strength."
    },
    {
      question: "How can parents apply for admission?",
      answer: "Parents can submit the online enquiry form on our website, call our admissions helpline, or visit our Narasannapeta campus during office hours (Monday to Saturday, 8:00 AM – 5:30 PM)."
    }
  ]
};
