export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://handymanpaintingllc.co/#organization",
        "name": "Handyman Painting L.L.C",
        "legalName": "Handyman Painting L.L.C",
        "url": "https://handymanpaintingllc.co",
        "logo": "https://handymanpaintingllc.co/assets/logo.png",
        "image": "https://handymanpaintingllc.co/assets/hero.jpg",
        "telephone": "+1-320-321-9359",
        "email": "chief@handymanpaintingllc.co",
        "priceRange": "$$$",
        "description": "Nationwide residential and commercial painting, general contracting, and handyman services structured across 5 core U.S. operating regions.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1012 North 6th Street",
          "addressLocality": "Montevideo",
          "addressRegion": "MN",
          "postalCode": "56265",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 44.9533,
          "longitude": -95.7225
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61587365671939",
          "https://www.homeadvisor.com/rated.HandymanPaintingLLC.161250316.html",
          "https://www.chamberofcommerce.com/business-directory/minnesota/montevideo/contractor/2034178392-handyman-painting-l-l-c",
          "https://share.google/p8b8ccBTTC6vqrTRQ",
          "https://www.bbb.org/us/mn/montevideo/profile/construction/handyman-painting-llc-0704-1000072375",
          "https://mblsportal.sos.mn.gov/Business/SearchDetails?filingGuid=fd15af23-58e1-ea11-91a0-00155d32b905"
        ],
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Midwest Region",
            "containsPlace": [
              {"@type": "State", "name": "Minnesota"},
              {"@type": "State", "name": "Wisconsin"},
              {"@type": "State", "name": "Illinois"},
              {"@type": "State", "name": "Indiana"},
              {"@type": "State", "name": "Michigan"},
              {"@type": "State", "name": "Ohio"},
              {"@type": "State", "name": "North Dakota"},
              {"@type": "State", "name": "South Dakota"},
              {"@type": "State", "name": "Nebraska"},
              {"@type": "State", "name": "Iowa"},
              {"@type": "State", "name": "Kansas"},
              {"@type": "State", "name": "Missouri"}
            ]
          },
          {
            "@type": "AdministrativeArea",
            "name": "Southeast Region",
            "containsPlace": [
              {"@type": "State", "name": "Florida"},
              {"@type": "State", "name": "Georgia"},
              {"@type": "State", "name": "North Carolina"},
              {"@type": "State", "name": "South Carolina"},
              {"@type": "State", "name": "Virginia"},
              {"@type": "State", "name": "West Virginia"},
              {"@type": "State", "name": "Tennessee"},
              {"@type": "State", "name": "Kentucky"},
              {"@type": "State", "name": "Alabama"},
              {"@type": "State", "name": "Mississippi"},
              {"@type": "State", "name": "Louisiana"},
              {"@type": "State", "name": "Arkansas"},
              {"@type": "State", "name": "Maryland"},
              {"@type": "State", "name": "Delaware"}
            ]
          },
          {
            "@type": "AdministrativeArea",
            "name": "Southwest Region",
            "containsPlace": [
              {"@type": "State", "name": "Texas"},
              {"@type": "State", "name": "Oklahoma"},
              {"@type": "State", "name": "New Mexico"},
              {"@type": "State", "name": "Arizona"}
            ]
          },
          {
            "@type": "AdministrativeArea",
            "name": "West Region",
            "containsPlace": [
              {"@type": "State", "name": "California"},
              {"@type": "State", "name": "Washington"},
              {"@type": "State", "name": "Oregon"},
              {"@type": "State", "name": "Nevada"},
              {"@type": "State", "name": "Idaho"},
              {"@type": "State", "name": "Utah"},
              {"@type": "State", "name": "Colorado"},
              {"@type": "State", "name": "Wyoming"},
              {"@type": "State", "name": "Montana"},
              {"@type": "State", "name": "Alaska"},
              {"@type": "State", "name": "Hawaii"}
            ]
          },
          {
            "@type": "AdministrativeArea",
            "name": "Northeast Region",
            "containsPlace": [
              {"@type": "State", "name": "New York"},
              {"@type": "State", "name": "Pennsylvania"},
              {"@type": "State", "name": "New Jersey"},
              {"@type": "State", "name": "Massachusetts"},
              {"@type": "State", "name": "Connecticut"},
              {"@type": "State", "name": "Rhode Island"},
              {"@type": "State", "name": "Vermont"},
              {"@type": "State", "name": "New Hampshire"},
              {"@type": "State", "name": "Maine"}
            ]
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
