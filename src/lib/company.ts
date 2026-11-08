// Single source of truth for who spytLabs is. Footer, contact page, schema and
// legal pages all read from here so the name, place and phone never drift apart.
export const company = {
  name: "spytLabs",
  legalName: "spytLabs (PVT) LTD",
  url: "https://www.spytlabs.com",
  email: "hello@spytlabs.com",
  phone: "+94775184773",
  phoneDisplay: "+94 77 518 4773",
  city: "Colombo",
  country: "Sri Lanka",
  countryCode: "LK",
  location: "Colombo, Sri Lanka",
  description:
    "spytLabs is a Colombo, Sri Lanka studio for design, video production, software development and AI automation.",
  social: {
    instagram: "https://www.instagram.com/spytlabs/",
    facebook: "https://www.facebook.com/profile.php?id=61595706647358",
    linkedin: "https://www.linkedin.com/company/spytlabs",
  },
  founders: [
    { name: "Tharusha Jayasooriya", role: "Co-founder", linkedin: "https://www.linkedin.com/in/tharushaj" },
    { name: "Yasiru Lakintha", role: "Co-founder", linkedin: "https://www.linkedin.com/in/yasirulaki/" },
    { name: "Primal Hasaranga", role: "Co-founder", linkedin: "https://www.linkedin.com/in/b-t-k-primal-hasaranga-011a733a0/" },
    { name: "Sandamina De Silva", role: "Co-founder", linkedin: "https://www.linkedin.com/in/sandamina-de-silva-a901782b4/" },
  ],
} as const;
