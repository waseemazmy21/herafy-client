type Category = {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  rating: number;
  numberOfCraftsmen: number;
};

export const categories: Category[] = [
  {
    id: "1",
    name: "Knitting",
    imageUrl: "/images/home/knitting.png",
    description:
      "The production of textiles or fabric by interlocking or looping yarns.",
    rating: 4.8,
    numberOfCraftsmen: 220,
  },
  {
    id: "2",
    name: "Carpentry",
    imageUrl: "/images/home/carpenter.png",
    description:
      "Carpenters are highly skilled professionals who construct, install, and repair structures.",
    rating: 4.8,
    numberOfCraftsmen: 1834,
  },
  {
    id: "3",
    name: "Embroidery",
    imageUrl: "/images/home/embroidery.png",
    description:
      "The art of decorating materials, primarily textiles, using needle and thread.",
    rating: 4.8,
    numberOfCraftsmen: 1834,
  },
  {
    id: "4",
    name: "Plumbing",
    imageUrl: "/images/home/plumbing.png",
    description:
      "Repairing pipes and fixtures that carry water, gas, or other fluids in homes and businesses.",
    rating: 4.8,
    numberOfCraftsmen: 1834,
  },
  {
    id: "5",
    name: "Blacksmithing",
    imageUrl: "/images/home/hammer.png",
    description: "A welder will weld and maintain equipment and facilities.",
    rating: 4.8,
    numberOfCraftsmen: 1834,
  },
  {
    id: "6",
    name: "Accessories",
    imageUrl: "/images/home/bracelet.png",
    description:
      "Decorative items worn to complement or enhance a person's appearance.",
    rating: 4.8,
    numberOfCraftsmen: 1834,
  },
  {
    id: "7",
    name: "Pottery",
    imageUrl: "/images/home/potter.png",
    description:
      "Pottery refers to ornaments made from inorganic, non-metallic materials, solid and brittle after firing.",
    rating: 4.8,
    numberOfCraftsmen: 1834,
  },
  {
    id: "8",
    name: "Textile Work",
    imageUrl: "/images/home/cloth.png",
    description:
      "Any fabric or goods produced by weaving, knitting, or felting.",
    rating: 4.8,
    numberOfCraftsmen: 1834,
  },
];

export const jobCategories = [
  "محبوك",
  "نجارة",
  "تطريز",
  "سباكة",
  "صناعة المنسوجات",
  "لحام",
  "إكسسوارات",
  "خزف",
  "أعمال النسيج",
  "نقاشة",
  "أرضيات وسيراميك",
] as const;

export const jobDurations = [
  "أسبوع",
  "أسبوعين",
  "شهر",
  "شهرين",
  "ثلاثة اشهر",
  "أكثر من 6 أشهر",
];
