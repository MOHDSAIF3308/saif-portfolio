export const siteData = {
  name: "Saif",
  title: "Web & App Developer",
  tagline: "I build websites and apps for your business.",
  subtitle:
    "No tech jargon. You describe what you need — I design it, build it, and make it live. Shops, clinics, labs, offices — I've done it all across India.",
  location: "Lucknow, UP",
  email: "mdsaif92336@gmail.com",
  whatsapp: "+91 95809 14817",
  whatsappLink: "https://wa.me/919580914817",
  github: "https://github.com/MOHDSAIF3308",
  linkedin: "https://linkedin.com/in/yourusername",

  trust: [
    "3+ years building real projects",
    "Clients from Lucknow, Bhopal, Indore & more",
    "Delivered on time, every time",
  ],

  services: [
    {
      icon: "🌐",
      name: "Business website",
      desc: "A clean, fast site that tells customers who you are and how to reach you.",
    },
    {
      icon: "🛒",
      name: "Online store",
      desc: "Sell your products online with payments, cart, and order tracking.",
    },
    {
      icon: "📱",
      name: "Mobile app",
      desc: "Android and iOS apps — for your customers or your internal team.",
    },
    {
      icon: "📊",
      name: "Business dashboard",
      desc: "Track operations, staff, equipment, or inventory from one screen.",
    },
    {
      icon: "📋",
      name: "Booking system",
      desc: "Let customers book appointments or services directly from your site.",
    },
    {
      icon: "🔗",
      name: "API & integrations",
      desc: "Connect your tools — payments, WhatsApp, email, SMS — all automated.",
    },
  ],

  projects: [
    {
      tag: "Website",
      tagColor: "teal",
      name: "Biosyn Analytical",
      desc: "Food and environmental testing lab in Indore. Full website with services, accreditations, and contact form. Deployed on Cloudflare.",
      tech: ["Next.js", "Cloudflare", "EmailJS"],
    },
    {
      tag: "Business app",
      tagColor: "amber",
      name: "AH Construction",
      desc: "Equipment tracking and shift log system for a heavy machinery fleet — JCB, Poclain, Telehandler — across Kota, Bhopal, Indore and Allahabad.",
      tech: ["Python", "Excel", "openpyxl"],
    },
    {
      tag: "Mobile app",
      tagColor: "purple",
      name: "Social media platform",
      desc: "Full Instagram-like mobile app with real-time feed, stories, and chat. Built for Android and iOS from a single codebase.",
      tech: ["Flutter", "Node.js", "MongoDB"],
    },
    {
      tag: "E-commerce",
      tagColor: "coral",
      name: "Multi-vendor store",
      desc: "Shopping platform with cart, Razorpay payments, seller panel, and admin dashboard. Handles products, orders, and customers.",
      tech: ["React", "Node.js", "MongoDB", "Razorpay"],
    },
  ],

  plans: [
    {
      name: "Starter",
      price: "₹8,000",
      period: "one-time",
      desc: "A simple website for small shops, clinics, or service businesses.",
      featured: false,
      features: [
        "Up to 5 pages",
        "Mobile-friendly design",
        "Contact form",
        "WhatsApp button",
        "1 round of revisions",
        "Delivered in 5 days",
      ],
      cta: "Get started",
      ctaLink: "https://wa.me/919876543210?text=Hi%20Saif,%20I'm%20interested%20in%20the%20Starter%20plan",
    },
    {
      name: "Business",
      price: "₹18,000",
      period: "one-time",
      desc: "A full website or online store with everything a growing business needs.",
      featured: true,
      features: [
        "Up to 15 pages",
        "Online payments",
        "Admin panel",
        "Booking or order system",
        "3 rounds of revisions",
        "1 month free support",
        "Delivered in 12 days",
      ],
      cta: "Get started",
      ctaLink: "https://wa.me/919876543210?text=Hi%20Saif,%20I'm%20interested%20in%20the%20Business%20plan",
    },
    {
      name: "Custom",
      price: "Let's talk",
      period: "",
      desc: "Mobile apps, dashboards, complex systems — priced after we discuss your needs.",
      featured: false,
      features: [
        "Mobile app (Android + iOS)",
        "Complex backend",
        "Team or staff dashboards",
        "Third-party integrations",
        "Timeline agreed upfront",
        "Dedicated support included",
      ],
      cta: "WhatsApp me",
      ctaLink: "https://wa.me/919876543210?text=Hi%20Saif,%20I%20need%20a%20custom%20project%20quote",
    },
  ],

  steps: [
    {
      num: "01",
      title: "You reach out",
      desc: "WhatsApp or email — just tell me what you need in plain words.",
    },
    {
      num: "02",
      title: "We discuss",
      desc: "I understand your business. No tech talk, just clear questions.",
    },
    {
      num: "03",
      title: "I build it",
      desc: "You see updates along the way and give feedback before it's done.",
    },
    {
      num: "04",
      title: "You go live",
      desc: "Your site or app is live and working. I hand it over and support you.",
    },
  ],

  faqs: [
    {
      q: "Do I need to know anything about tech?",
      a: "Not at all. You just describe what your business needs — I handle everything from design to going live.",
    },
    {
      q: "How do I pay?",
      a: "50% when we agree on the project, and the remaining 50% when I deliver. UPI, bank transfer — your choice.",
    },
    {
      q: "Can I update my website later?",
      a: "Yes. I'll show you how to change basic content yourself, or I can handle updates for a small fee.",
    },
    {
      q: "Will my website work on mobile phones?",
      a: "Every project I deliver is fully mobile-friendly. Most of your customers will visit from their phones.",
    },
    {
      q: "How long does it take?",
      a: "A simple website takes 5 days. A full business site takes 10–14 days. Apps take 4–8 weeks depending on complexity.",
    },
  ],
};

// Also export as default so you can do `import siteData from '@/data/site'`
export default siteData;
