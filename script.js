
  const translations = {
    English: {
      heading: "PRECISION WELDING",
      headingtwo: "& METAL FABRICATION",
      paragraph: "Grills, Gates, Staircases & Custom Solutions",
      knowmore: "KNOW MORE",
      aboutTitle: "About Us",
      aboutPara1: "Sai Transformation is Katol based metal manufacturer fabrication company known for roofing sheds, metal and school furniture’s, gates & window grills. A trusted branch of Sai Fabrication & Gas Welding (Est: 1998).",
      aboutPara2: "We offer a wide range of metal fabrication services, including Gates, Window-Grills, Staircases, Industry Shed & Roofing and more.",
      aboutBottom: "Building Quality and Trust Since 1996",
      servicesTitle: "Services",
      service1: "👨🏻‍🏭 ROOFING SHED",
      service2: "👨🏻‍🏭 METAL FURNITURES",
      service3: "👨🏻‍🏭 SCHOOL FURNITURES",
      service4: "👨🏻‍🏭 CHANNEL GATES",
      service5: "👨🏻‍🏭 DOME SHED",
      service6: "👨🏻‍🏭 CUSTOM WELDING'S",
      projectsTitle: "Featured Projects",
      contactTitle: "Contact Us",
      contactPara: `Sai Transformation (Sai Fabrication & Gas Welding Work)\n\n📍 Near Fetri Junewani Road, Katol, District Nagpur, Maharashtra – 441302\n📞 Phone: +91-8624837716\n📧 Email: 25saifebrication@gmail.com\n🌐 Website: www.saitransformation.in`,
      footerTitle: "Our Workshop",
      whyUsTitle: "Why Choose Us",
      startProject: "START A PROJECT"
    },
    Marathi: {
      heading: "अचूक वेल्डिंग",
      headingtwo: "& मेटल फॅब्रिकेशन",
      paragraph: "गेट्स, ग्रील्स, जिने व खास सोल्युशन्स",
      knowmore: "अधिक जाणून घ्या",
      aboutTitle: "आमच्याबद्दल",
      aboutPara1: "साई ट्रान्सफॉर्मेशन ही काटोलमधील एक मेटल फॅब्रिकेशन कंपनी आहे...",
      aboutPara2: "आम्ही गेट्स, विंडो ग्रील्स, जिने, इंडस्ट्री शेड्स व रूफिंग यांसारख्या सेवा देतो.",
      aboutBottom: "1996 पासून गुणवत्ता व विश्वास",
      servicesTitle: "सेवा",
      service1: "👨🏻‍🏭 शेड व रूफिंग",
      service2: "👨🏻‍🏭 मेटल फर्निचर",
      service3: "👨🏻‍🏭 शालेय फर्निचर",
      service4: "👨🏻‍🏭 चॅनल गेट्स",
      service5: "👨🏻‍🏭 घुमट शेड",
      service6: "👨🏻‍🏭 खास वेल्डिंग",
      projectsTitle: "प्रमुख प्रोजेक्ट्स",
      contactTitle: "संपर्क",
      contactPara: `साई ट्रान्सफॉर्मेशन (साई फॅब्रिकेशन आणि गॅस वेल्डिंग)📍 फेट्री जुनेवाणी रोड जवळ, काटोल 📞 फोन: +91-8624837716 📧 ईमेल: 25saifebrication@gmail.com 🌐 संकेतस्थळ: www.saitransformation.in`,
      footerTitle: "आमचं वर्कशॉप",
      whyUsTitle: "आम्हाला का निवडावे",
      startProject: "प्रोजेक्ट सुरू करा"
    },
    Hindi: {
      heading: "सटीक वेल्डिंग",
      headingtwo: "& मेटल फैब्रिकेशन",
      paragraph: "गेट्स, ग्रिल्स, सीढ़ियाँ और कस्टम सॉल्यूशन्स",
      knowmore: "और जानें",
      aboutTitle: "हमारे बारे में",
      aboutPara1: "साई ट्रांसफॉर्मेशन, काटोल की एक प्रसिद्ध मेटल फैब्रिकेशन कंपनी है...",
      aboutPara2: "हम गेट्स, विंडो ग्रिल्स, सीढ़ियाँ, इंडस्ट्री शेड्स और रूफिंग जैसी सेवाएं देते हैं।",
      aboutBottom: "1996 से गुणवत्ता और विश्वास",
      servicesTitle: "सेवाएं",
      service1: "👨🏻‍🏭 रूफिंग शेड",
      service2: "👨🏻‍🏭 मेटल फर्नीचर",
      service3: "👨🏻‍🏭 स्कूल फर्नीचर",
      service4: "👨🏻‍🏭 चैनल गेट्स",
      service5: "👨🏻‍🏭 डोम शेड",
      service6: "👨🏻‍🏭 कस्टम वेल्डिंग",
      projectsTitle: "प्रमुख प्रोजेक्ट्स",
      contactTitle: "संपर्क करें",
      contactPara: `साई ट्रांसफॉर्मेशन (साई फैब्रिकेशन और गैस वेल्डिंग) 📍 फेट्री जुनेवाणी रोड, काटोल 📞 फ़ोन: +91-8624837716 📧 ईमेल: 25saifebrication@gmail.com 🌐 वेबसाइट: www.saitransformation.in`,
      footerTitle: "हमारी वर्कशॉप",
      whyUsTitle: "हमें क्यों चुनें",
      startProject: "प्रोजेक्ट शुरू करें"
    }
  };

  function translateLang() {
    const lang = document.getElementById("select-lang").value;
    const data = translations[lang];
    if (!data) return;

    for (let key in data) {
      const el = document.getElementById(key);
      if (el) el.innerText = data[key];
    }
  }

