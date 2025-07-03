export const aboutMe = {
  name: "Nenad Manev",
  title: "Senior Software Engineer",
  contact: {
    email: "nenad.manev@gmail.com",
    linkedin: "nenad-manev",
    github: "ManevN",
    mobile: "+389 76 260 124",
  },
  summary: `With over seven years in software development, I’ve worked with both companies and on freelance projects, gaining solid experience in both team environments and independent contracting. My background spans .NET, Node, AWS, databases (SQL and NoSQL), and frontend development with SPA frameworks like React and Angular using TypeScript. I also have experience with CI/CD pipelines, supporting efficient development and deployment processes. I’m focused on building modular, maintainable, and scalable applications and want to be actively involved in design and decision-making.`,
  tags: [".NET", "Node", "AWS", "SQL", "React", "Angular", "CI/CD"],
  certifications: [
    { 
      name: "AWS Certified Solutions Architect – Associate",
      url: "https://www.credly.com/badges/e80fd508-fe9a-4573-9780-7e4635409901/public_url"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      url: "https://www.credly.com/badges/e2694f98-e5c9-49b6-9406-71f6ac494442/linked_in_profile"
    }
  ],
  experience: [
    {
      role: "Backend && Cloud Developer | Contractor",
      description:
        "I worked on building a streaming video platform designed for courses and presentations. The application was developed on AWS as the cloud platform, with .NET Core for the backend, supporting two web clients and one mobile client application.",
      technologies: [
        "Microsoft .NET Core API",
        "Unit test",
        "Docker",
        "AWS MediaConvert",
        "AWS CodePipeline for CI/CD, AWS Beanstalk",
        "AWS RDS with PostgreSQL, AWS EC2, AWS API Gateway, AWS Load Balancer",
        "AWS SQS, AWS SNS, AWS Lambda",
        "AWS CDK with TypeScript",
        "AWS Cognito authentication with social logins",
        "Subscription-based billing integration with Stripe"
      ]
    }, 
    {
      role: "Full Stack Web Developer | Contractor",
      description:
        "Worked on centralized chat application with multiple AI chat bots as a SaaS product. This platform enabled seamless communication and automation through a unified chat interface integrated with various AI chat bots. Key features included a centralized chat interface, concurrent response handling, access to multiple AI bots, customizable prompts, and subscription management via Stripe.",
      technologies: [
        "AWS serverless backend using AWS Lambda with Node.js",
        "AWS DynamoDB",
        "AWS Cognito authentication with social logins",
        "Angular frontend",
        "Subscription-based billing integration with Stripe"
      ]
    },
    {
      role: "Full Stack Web Developer | Contractor",
      description:
        "I developed an end-to-end Proof of Concept (PoC) for a multi-tenant SaaS platform aimed at modernizing order management for the Food & Beverages industry, specifically tailored for restaurants, bars, and similar businesses. Key features included order, employee, work shift, and product management, along with a robust notification system. The platform was designed with an offline-first approach to ensure functionality in low-connectivity environments.",
      technologies: [
        "AWS serverless backend using Amplify",
        "GraphQL API with real-time syncing between devices",
        "AWS DynamoDB",
        "AWS Cognito authentication with social logins",
        "Angular frontend",
        "Subscription-based billing integration with Paddle or Stripe"
      ]
    },
    {
      role: "Senior Software Engineer | ScaleFocus",
      period: "Jul 2022 – Jan 2023 (7mos)",
      years: "Jul 2022 – Jan 2023 (7mos)",
      description:
        "Outsourcing company, in the period of my engagement I was not assigned to an outsourced project, so I was working on an internal company’s project that includes following technologies.",
      technologies: [
        "Microsoft .NET Core API",
        "Angular",
        "Azure cloud services and hosting"
      ]
    },
    {
      role: "Technical Team Lead | KlikniJadi",
      period: "Jan 2021 – Jun 2022 (1yr 6mos)",
      years: "Jan 2021 – Jun 2022 (1yr 6mos)",
      description:
        "Our team delivered a web-based solution for a food delivery company, focusing on optimizing logistics and streamlining payroll. This real-time system included GPS tracking for drivers, supported by a custom algorithm that identifies the most efficient delivery routes. We used this location data to power a detailed payroll module, enabling precise salary calculations, along with generating Excel and PDF reports for comprehensive analysis.\nWe integrated the solution with an existing legacy ASP.NET MVC system already in production, which we continue to maintain and expand with new features. My role covered client communication, planning, and backend development tasks, ensuring that the project was aligned with client needs and that technical challenges were addressed effectively.",
      technologies: [
        "Microsoft .NET Core API",
        "Microsoft SignalR (WebSocket) for real time communication",
        "React",
        "Docker",
        "Microsoft MVC",
        "Unit test",
        "Microsoft SQL Server",
        "Windows Server (IIS) hosting, administration",
        "CI/CD with Azure pipelines",
        "Azure DevOps and Scrum methodology",
        "Google Cloud Platform – Firebase (Authentication, Serverless functions, real-time database, Firebase Cloud Messaging)",
        "Third-Party API Integration (OSRM API, Bing Maps Location API, Slack API)"
      ],
      responsibilities: [
        "Communication with client and third-party teams that worked on the same project but different application.",
        "Planning and organizing development with my team following Scrum (Agile) methodology.",
        "Back-end Development",
        "Integration between systems (legacy and new ones)"
      ]
    },
    {
      role: "Full Stack Web Developer | MCA",
      period: "Jan 2019 – Dec 2020 (2 yrs)",
      years: "Jan 2019 – Dec 2020 (2 yrs)",
      description:
        "We worked on a web-based solution for a major telecom company in Denmark, designed as a large-scale system with multiple components: a publicly accessible customer portal, an internal CRM/ERP for the company, and a network configuration module handling tasks like device scanning, configuration updates, and signal strength monitoring.\nAlongside maintaining the legacy system, we were actively planning and executing a migration to a new microservices-based version using the CQRS pattern. Both the legacy and new solutions were in production, fully integrated to ensure a seamless transition and continuity in service.",
      technologies: [
        "Microsoft .NET Core",
        "Angular",
        "Microsoft Web Forms",
        "Microsoft WCF Services",
        "Microsoft SQL Server database",
        "Entity Framework, Dapper",
        "Windows Server (IIS) hosting, Administration",
        "CI/CD with Azure pipelines",
        "Azure DevOps and Scrum methodology"
      ],
      responsibilities: [
        "Full Stack development",
        "Reviewing pull requests",
        "Participating in planning sessions"
      ]
    },
    {
      role: "Software Developer | Duna",
      period: "Aug 2017 – Dec 2018 (1yr 5mos)",
      years: "Aug 2017 – Dec 2018 (1yr 5mos)",
      description:
        "We developed a desktop application solution for a package delivery company, tailored exclusively for internal company use. The application’s core logic and reporting functionality were heavily reliant on SQL stored procedures, providing me with extensive experience in database management and complex SQL query optimization.",
      technologies: [
        "Microsoft Windows Presentation Foundation (WPF) with C#",
        "Microsoft SQL Server database",
        "Microsoft WCF Services"
      ],
      responsibilities: [
        "Front- and back-end development.",
        "Reviewing pull requests",
        "Participating in planning sessions"
      ]
    },
    {
      role: "Backend Developer | Skip Crowds (Apr 2020 – Jun 2020)",
      description:
        "Participated in *The Global Hack for Covid-19*, building a web-based system to track crowds in restaurants and bars using QR code check-ins. The solution enabled real-time venue occupancy monitoring to support pandemic restrictions. Initially built for a hackathon, it evolved into a functional AWS-hosted application.",
      technologies: [
        "Microsoft .NET Core",
        "Microsoft SQL Server",
        "AWS Cloud Hosting",
        "React",
      ],
      responsibilities: [
        "Backend development using .NET Core and SQL Server",
        "System architecture and deployment on AWS",
        "Communication and coordination with international hackathon team",
      ],
    },
  ],
  education: {
    school: "Faculty Of Computer Science and Engineering, Skopje, Macedonia",
    program: "Applied E Technologies",
  },
};
