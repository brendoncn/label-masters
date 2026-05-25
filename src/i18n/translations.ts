export type Language = "tc" | "sc" | "en";

export const translations = {
  // Navbar
  nav: {
    home: { tc: "首頁", sc: "首页", en: "Home" },
    products: { tc: "產品中心", sc: "产品中心", en: "Products" },
    about: { tc: "關於我們", sc: "关于我们", en: "About Us" },
    contact: { tc: "聯繫我們", sc: "联系我们", en: "Contact" },
    cta: { tc: "立即諮詢", sc: "立即咨询", en: "Get a Quote" },
    brand: { tc: "統帥", sc: "统帅", en: "Label" },
    brandAccent: { tc: "商標", sc: "商标", en: "Masters" },
  },

  // Footer
  footer: {
    desc: {
      tc: "專業服裝輔料出口商，為全球時尚品牌提供高品質吊牌、標籤及包裝解決方案。",
      sc: "专业服装辅料出口商，为全球时尚品牌提供高品质吊牌、标签及包装解决方案。",
      en: "Professional garment accessories exporter, providing premium hang tags, labels and packaging solutions for global fashion brands.",
    },
    quickLinks: { tc: "快速連結", sc: "快速链接", en: "Quick Links" },
    productsTitle: { tc: "產品", sc: "产品", en: "Products" },
    contactInfo: { tc: "聯繫信息", sc: "联系信息", en: "Contact Info" },
    copyright: {
      tc: "統帥商標香港有限公司. 版權所有",
      sc: "统帅商标香港有限公司. 版权所有",
      en: "Label Masters Hong Kong Ltd. All rights reserved",
    },
    brandName: { tc: "統帥商標", sc: "统帅商标", en: "Label Masters" },
    productNames: {
      tc: ["吊牌與標籤", "袋類包裝", "盒類包裝", "衣架", "其他配件"],
      sc: ["吊牌与标签", "袋类包装", "盒类包装", "衣架", "其他配件"],
      en: ["Tags & Labels", "Bags", "Boxes", "Hangers", "Accessories"],
    },
    address: {
      tc: "新界葵涌華星街8號華達工業中心C座17樓11室",
      sc: "新界葵涌华星街8号华达工业中心C座17楼11室",
      en: "Unit 11, 17/F, Block C, Wah Tat Industrial Centre, 8 Wah Sing Street, Kwai Chung, N.T.",
    },
  },

  // Index page
  index: {
    contactUs: { tc: "聯繫我們", sc: "联系我们", en: "Contact Us" },
    heroSlides: {
      tc: [
        { tag: "吊牌與標籤", title: "為品牌打造\n精緻識別細節", desc: "吊牌、織嘜、印嘜、貼章與標貼，多種工藝精準呈現品牌價值。", cta: "查看吊牌與標籤", link: "/products/tags-labels" },
        { tag: "袋類包裝", title: "從零售到物流\n全方位袋類解決方案", desc: "紙袋、帆布袋、防塵袋、氣泡袋、快遞袋等，覆蓋零售、物流與保護需求。", cta: "查看袋類產品", link: "/products/bags" },
        { tag: "盒類包裝", title: "精緻禮盒\n打造完美開箱體驗", desc: "硬質禮盒與物流瓦楞箱，結構與工藝兼備，提升產品價值感。", cta: "查看盒類產品", link: "/products/boxes" },
        { tag: "衣架與配件", title: "完整輔料系列\n細節成就專業", desc: "衣架、薄紙、雨傘等周邊配件，全方位支持您的品牌體驗。", cta: "查看其他配件", link: "/products/accessories" },
      ],
      sc: [
        { tag: "吊牌与标签", title: "为品牌打造\n精致识别细节", desc: "吊牌、织唛、印唛、贴章与标贴，多种工艺精准呈现品牌价值。", cta: "查看吊牌与标签", link: "/products/tags-labels" },
        { tag: "袋类包装", title: "从零售到物流\n全方位袋类解决方案", desc: "纸袋、帆布袋、防尘袋、气泡袋、快递袋等，覆盖零售、物流与保护需求。", cta: "查看袋类产品", link: "/products/bags" },
        { tag: "盒类包装", title: "精致礼盒\n打造完美开箱体验", desc: "硬质礼盒与物流瓦楞箱，结构与工艺兼备，提升产品价值感。", cta: "查看盒类产品", link: "/products/boxes" },
        { tag: "衣架与配件", title: "完整辅料系列\n细节成就专业", desc: "衣架、薄纸、雨伞等周边配件，全方位支持您的品牌体验。", cta: "查看其他配件", link: "/products/accessories" },
      ],
      en: [
        { tag: "Tags & Labels", title: "Refined Brand\nIdentity Details", desc: "Hangtags, woven labels, printed labels, patches and stickers — multiple crafts to express your brand precisely.", cta: "Explore Tags & Labels", link: "/products/tags-labels" },
        { tag: "Bags", title: "Retail to Logistics\nComplete Bag Solutions", desc: "Paper bags, totes, dust bags, bubble mailers and polymailers — covering retail, logistics and protection needs.", cta: "Explore Bags", link: "/products/bags" },
        { tag: "Boxes", title: "Premium Boxes\nfor a Perfect Unboxing", desc: "Rigid gift boxes and corrugated shipper boxes — structure and craft that elevate every product.", cta: "Explore Boxes", link: "/products/boxes" },
        { tag: "Hangers & Accessories", title: "A Complete Range\nWhere Details Matter", desc: "Hangers, tissue paper, umbrellas and more — supporting every touchpoint of your brand experience.", cta: "Explore Accessories", link: "/products/accessories" },
      ],
    },
    contactCTA: { tc: "聯繫我們", sc: "联系我们", en: "Contact Us" },
    stats: {
      tc: [
        { value: "30+", label: "服務國家" },
        { value: "20+", label: "年行業經驗" },
        { value: "500+", label: "品牌客戶" },
        { value: "99.5%", label: "品質合格率" },
      ],
      sc: [
        { value: "30+", label: "服务国家" },
        { value: "20+", label: "年行业经验" },
        { value: "500+", label: "品牌客户" },
        { value: "99.5%", label: "品质合格率" },
      ],
      en: [
        { value: "30+", label: "Countries Served" },
        { value: "20+", label: "Years Experience" },
        { value: "500+", label: "Brand Clients" },
        { value: "99.5%", label: "Quality Rate" },
      ],
    },
    whyUs: { tc: "為何選擇我們", sc: "为何选择我们", en: "Why Choose Us" },
    whyUsTitle: { tc: "值得信賴的生產實力", sc: "值得信赖的生产实力", en: "Trusted Manufacturing Excellence" },
    description: { tc: "我們的優勢", sc: "我们的优势", en: "Our Advantages" },
    descriptionContext1: { 
      tc: "統師香港公司是領先的產品標誌包裝、標籤及輔料製造商。我們提供全方位的品牌推廣、設計和生產服務，由零到物流服務一並滿足所有需求。",
      sc: "統師香港公司是領先的產品標誌包裝、標籤及輔料製造商。我們提供全方位的品牌推廣、設計和生產服務，由零到物流服務一並滿足所有需求。",
      en: "Label Master Hong Kong is a leading manufacturer of product labels, packaging, and supplementary materials. We offer comprehensive branding, design, and production services, fulfilling all needs from start to logistics.",
    },
    descriptionContext2: {
      tc: "公司擁有豐富的包裝知識和經驗，以及專業的包裝技術團隊，能夠根據客戶的實際情況，設計出滿足需求且經濟高效的包裝解決方案。本公司已通過GRS認證和ISO9001品質管理系統認證，雄厚的技術力量和先進的印刷設備，例如Heidelberg four-color Speedmaster, Heidelberg, Heidelberg two-color offset printing machine, Heidelberg GTO, HP INDIGO 5600印刷機等，可提供設計、印刷、物流包裝設計服務。",
      sc: "公司拥有丰富的包装知识和经验，以及专业的包装技术团队，能够根据客户的具体情况，设计出满足需求且经济高效的包装解决方案。本公司已通过GRS认证和ISO9001质量管理体系认证，雄厚的技术力量和先进的印刷设备，例如Heidelberg four-color Speedmaster, Heidelberg, Heidelberg two-color offset printing machine, Heidelberg GTO, HP INDIGO 5600印刷机等，可提供设计、印刷、物流包装设计服务。",
      en: "The company possesses extensive packaging knowledge and experience, supported by a professional packaging technology team. We can design cost-effective packaging solutions tailored to the unique requirements of our clients. Our company is certified by GRS and ISO 9001 Quality Management System, equipped with robust technical strength and advanced printing equipment, including the Heidelberg four-color Speedmaster, two-color offset printing machines, Heidelberg GTO, and HP INDIGO 5600 printers, enabling us to provide design, printing, and logistics packaging design services.",
    },
    descriptionContext3: {
      tc: "憑藉60餘年的經驗，我們與各行各業的公司合作，協助他們塑造和傳遞品牌形象。我們負責管理完整的生產和包裝流程，提供優質的產品和卓越的客戶服務。我們可以客制化任何項目，並交付令您的客戶驚艷的產品。憑藉我們在設計、製造和生產方面的豐富知識，我們是您講述品牌故事的專家合作夥伴。",
      sc: "凭借60余年的经验，我们与各行各业的公司合作，协助他们塑造和传递品牌形象。我们负责管理完整的生产和包装流程，提供优质的产品和卓越的客户服务。我们可以客制化任何项目，并交付令您的客户惊艳的产品。凭借我们在设计、制造和生产方面的丰富知识，我们是您讲述品牌故事的专家合作伙伴。",
      en: "With over 60 years of experience, we collaborate with companies across various industries to assist them in shaping and conveying their brand image. We manage the entire production and packaging process, ensuring high-quality products and outstanding customer service. We can customize any project to deliver products that will amaze your customers. With our rich expertise in design, manufacturing, and production, we are your expert partner in telling your brand story.",
    },
    features: {
      tc: [
        { title: "全球出口", desc: "產品出口至30多個國家，服務全球時尚品牌" },
        { title: "品質保證", desc: "嚴格的品質控制體系，確保每一件產品達到國際標準" },
        { title: "先進設備", desc: "引進國際先進生產設備，高效穩定的生產能力" },
        { title: "定制方案", desc: "根據品牌需求提供完整的定制包裝解決方案" },
      ],
      sc: [
        { title: "全球出口", desc: "产品出口至30多个国家，服务全球时尚品牌" },
        { title: "品质保证", desc: "严格的品质控制体系，确保每一件产品达到国际标准" },
        { title: "先进设备", desc: "引进国际先进生产设备，高效稳定的生产能力" },
        { title: "定制方案", desc: "根据品牌需求提供完整的定制包装解决方案" },
      ],
      en: [
        { title: "Global Export", desc: "Products exported to 30+ countries, serving global fashion brands" },
        { title: "Quality Assurance", desc: "Strict quality control systems ensuring every product meets international standards" },
        { title: "Advanced Equipment", desc: "Internationally advanced production equipment with efficient and stable capacity" },
        { title: "Custom Solutions", desc: "Complete customized packaging solutions based on brand requirements" },
      ],
    },
    featured: { tc: "精選分類", sc: "精选分类", en: "Featured Categories" },
    featuredTitle: { tc: "服裝輔料全品類覆蓋", sc: "服装辅料全品类覆盖", en: "Full Range of Garment Accessories" },
    viewAll: { tc: "查看全部產品", sc: "查看全部产品", en: "View All Products" },
    ctaTitle: { tc: "需要定制您的品牌標籤？", sc: "需要定制您的品牌标签？", en: "Need Custom Brand Labels?" },
    ctaDesc: {
      tc: "無論您需要吊牌、貼紙、包裝盒、衣架或其他輔料，我們都能為您提供專業的定制方案。",
      sc: "无论您需要吊牌、贴纸、包装盒、衣架或其他辅料，我们都能为您提供专业的定制方案。",
      en: "Whether you need hang tags, stickers, packaging, hangers or other accessories, we provide professional custom solutions.",
    },
    ctaButton: { tc: "立即諮詢", sc: "立即咨询", en: "Get a Quote" },
  },

  // Products page (category list)
  products: {
    headerTag: { tc: "Products", sc: "Products", en: "Products" },
    headerTitle: { tc: "產品中心", sc: "产品中心", en: "Product Center" },
    headerDesc: {
      tc: "涵蓋吊牌、標籤、袋類、盒類、衣架及其他輔料的完整產品線，為品牌提供一站式解決方案。",
      sc: "涵盖吊牌、标签、袋类、盒类、衣架及其他辅料的完整产品线，为品牌提供一站式解决方案。",
      en: "A complete product line covering tags, labels, bags, boxes, hangers and accessories — a one-stop solution for brands.",
    },
    viewCategory: { tc: "查看此分類", sc: "查看此分类", en: "View Category" },
    productsCount: { tc: "種產品", sc: "种产品", en: "products" },
    categories: {
      tc: [
        { title: "吊牌與標籤", titleEn: "Tags & Labels", desc: "吊牌、印嘜、織嘜、貼章與標貼，多種工藝呈現品牌識別。" },
        { title: "袋類包裝", titleEn: "Bags", desc: "紙袋、帆布袋、防塵袋、氣泡袋、快遞袋等多種袋類產品。" },
        { title: "盒類包裝", titleEn: "Boxes", desc: "硬質禮盒與物流瓦楞箱，提升開箱體驗與保護產品。" },
        { title: "衣架", titleEn: "Hangers", desc: "木質與塑料衣架，適用零售展示與成衣物流。" },
        { title: "其他配件", titleEn: "Accessories", desc: "薄紙、雨傘等周邊配件，完善品牌包裝體驗。" },
      ],
      sc: [
        { title: "吊牌与标签", titleEn: "Tags & Labels", desc: "吊牌、印唛、织唛、贴章与标贴，多种工艺呈现品牌识别。" },
        { title: "袋类包装", titleEn: "Bags", desc: "纸袋、帆布袋、防尘袋、气泡袋、快递袋等多种袋类产品。" },
        { title: "盒类包装", titleEn: "Boxes", desc: "硬质礼盒与物流瓦楞箱，提升开箱体验与保护产品。" },
        { title: "衣架", titleEn: "Hangers", desc: "木质与塑料衣架，适用零售展示与成衣物流。" },
        { title: "其他配件", titleEn: "Accessories", desc: "薄纸、雨伞等周边配件，完善品牌包装体验。" },
      ],
      en: [
        { title: "Tags & Labels", titleEn: "Tags & Labels", desc: "Hangtags, printed labels, woven labels, patches and stickers — multiple crafts for brand identity." },
        { title: "Bags", titleEn: "Bags", desc: "Paper bags, totes, dust bags, bubble mailers, polymailers and more — every bag your brand needs." },
        { title: "Boxes", titleEn: "Boxes", desc: "Rigid gift boxes and corrugated shipper boxes for unboxing experience and product protection." },
        { title: "Hangers", titleEn: "Hangers", desc: "Wooden and plastic hangers for retail display and apparel logistics." },
        { title: "Accessories", titleEn: "Accessories", desc: "Tissue paper, umbrellas and more — finishing touches for your brand packaging." },
      ],
    },
  },

  // About page
  about: {
    headerTag: { tc: "About Us", sc: "About Us", en: "About Us" },
    headerTitle: { tc: "關於我們", sc: "关于我们", en: "About Us" },
    headerDesc: {
      tc: "二十餘年行業深耕，專注品質與服務",
      sc: "二十余年行业深耕，专注品质与服务",
      en: "Over 20 years of industry expertise, focused on quality and service",
    },
    companyName: {
      tc: "統帥商標香港有限公司",
      sc: "统帅商标香港有限公司",
      en: "Label Masters Hong Kong Ltd.",
    },
    intro1: {
      tc: "統帥商標香港有限公司成立於2000年，總部位於香港，是一家專業的服裝輔料出口企業。公司主營吊牌、標籤、袋類、盒類包裝、衣架及多種配件產品。",
      sc: "统帅商标香港有限公司成立于2000年，总部位于香港，是一家专业的服装辅料出口企业。公司主营吊牌、标签、袋类、盒类包装、衣架及多种配件产品。",
      en: "Label Masters Hong Kong Ltd. was established in 2000 and headquartered in Hong Kong. We are a professional garment accessories exporter specializing in tags, labels, bags, boxes, hangers and a wide range of accessories.",
    },
    intro2: {
      tc: "憑藉先進的生產設備、嚴格的品質控制體系以及豐富的出口經驗，我們的產品已出口至全球30多個國家和地區，為超過500家時尚品牌提供優質的輔料解決方案。",
      sc: "凭借先进的生产设备、严格的品质控制体系以及丰富的出口经验，我们的产品已出口至全球30多个国家和地区，为超过500家时尚品牌提供优质的辅料解决方案。",
      en: "With advanced production equipment, strict quality control systems and extensive export experience, our products have been exported to over 30 countries, providing premium accessory solutions for more than 500 fashion brands.",
    },
    coreValues: { tc: "核心價值", sc: "核心价值", en: "Core Values" },
    values: {
      tc: [
        { title: "使命", desc: "為全球服裝品牌提供最優質的輔料產品和最專業的定制服務" },
        { title: "願景", desc: "成為亞洲領先的服裝輔料出口企業" },
        { title: "團隊", desc: "擁有經驗豐富的設計、生產及品質管理團隊" },
        { title: "創新", desc: "持續投入研發，引進先進技術與環保材料" },
      ],
      sc: [
        { title: "使命", desc: "为全球服装品牌提供最优质的辅料产品和最专业的定制服务" },
        { title: "愿景", desc: "成为亚洲领先的服装辅料出口企业" },
        { title: "团队", desc: "拥有经验丰富的设计、生产及品质管理团队" },
        { title: "创新", desc: "持续投入研发，引进先进技术与环保材料" },
      ],
      en: [
        { title: "Mission", desc: "Provide the highest quality accessories and professional custom services for global fashion brands" },
        { title: "Vision", desc: "Become Asia's leading garment accessories exporter" },
        { title: "Team", desc: "Experienced design, production and quality management team" },
        { title: "Innovation", desc: "Continuous R&D investment, adopting advanced technology and eco-friendly materials" },
      ],
    },
    timeline: { tc: "發展歷程", sc: "发展历程", en: "Milestones" },
    timelineItems: {
      tc: [
        { year: "2000", event: "統帥商標香港有限公司成立" },
        { year: "2005", event: "取得ISO 9001品質管理體系認證" },
        { year: "2010", event: "出口國家突破20個" },
        { year: "2015", event: "引進全自動化生產線" },
        { year: "2020", event: "推出RFID智能標籤產品線" },
        { year: "2024", event: "服務品牌客戶突破500家" },
      ],
      sc: [
        { year: "2000", event: "统帅商标香港有限公司成立" },
        { year: "2005", event: "取得ISO 9001品质管理体系认证" },
        { year: "2010", event: "出口国家突破20个" },
        { year: "2015", event: "引进全自动化生产线" },
        { year: "2020", event: "推出RFID智能标签产品线" },
        { year: "2024", event: "服务品牌客户突破500家" },
      ],
      en: [
        { year: "2000", event: "Label Masters Hong Kong Ltd. established" },
        { year: "2005", event: "ISO 9001 Quality Management certification obtained" },
        { year: "2010", event: "Export countries exceeded 20" },
        { year: "2015", event: "Fully automated production line introduced" },
        { year: "2020", event: "RFID smart label product line launched" },
        { year: "2024", event: "Brand clients exceeded 500" },
      ],
    },
  },

  // Contact page
  contact: {
    headerTag: { tc: "Contact", sc: "Contact", en: "Contact" },
    headerTitle: { tc: "聯繫我們", sc: "联系我们", en: "Contact Us" },
    headerDesc: {
      tc: "歡迎與我們聯繫，了解更多產品信息或獲取定制報價",
      sc: "欢迎与我们联系，了解更多产品信息或获取定制报价",
      en: "Get in touch with us for product information or custom quotes",
    },
    sendMessage: { tc: "發送訊息", sc: "发送消息", en: "Send Message" },
    name: { tc: "姓名", sc: "姓名", en: "Name" },
    namePlaceholder: { tc: "您的姓名", sc: "您的姓名", en: "Your name" },
    email: { tc: "電郵", sc: "邮箱", en: "Email" },
    company: { tc: "公司名稱", sc: "公司名称", en: "Company" },
    companyPlaceholder: { tc: "您的公司名稱", sc: "您的公司名称", en: "Your company name" },
    message: { tc: "訊息", sc: "消息", en: "Message" },
    messagePlaceholder: { tc: "請描述您的需求...", sc: "请描述您的需求...", en: "Describe your requirements..." },
    submit: { tc: "提交訊息", sc: "提交消息", en: "Submit" },
    contactMethods: { tc: "聯繫方式", sc: "联系方式", en: "Contact Methods" },
    address: { tc: "地址", sc: "地址", en: "Address" },
    phone: { tc: "電話", sc: "电话", en: "Phone" },
    emailLabel: { tc: "電郵", sc: "邮箱", en: "Email" },
    hours: { tc: "營業時間", sc: "营业时间", en: "Business Hours" },
    hoursValue: { tc: "週一至週五 9:00 - 18:00", sc: "周一至周五 9:00 - 18:00", en: "Mon - Fri 9:00 - 18:00" },
    toastTitle: { tc: "已收到您的訊息", sc: "已收到您的消息", en: "Message received" },
    toastDesc: { tc: "我們會盡快與您聯繫！", sc: "我们会尽快与您联系！", en: "We will get back to you soon!" },
  },

  // Category detail pages (one per category, in same order as CATEGORY_SLUGS)
  categoryDetails: {
    inquire: { tc: "立即諮詢", sc: "立即咨询", en: "Get a Quote" },
    aboutCategory: { tc: "分類介紹", sc: "分类介绍", en: "About This Category" },
    productsInCategory: { tc: "此分類產品", sc: "此分类产品", en: "Products in This Category" },
    whyChoose: { tc: "我們的優勢", sc: "我们的优势", en: "Why Choose Us" },
    faqTitle: { tc: "常見問題", sc: "常见问题", en: "Frequently Asked Questions" },
    gallery: { tc: "產品圖庫", sc: "产品图库", en: "Product Gallery" },
    ctaTitle: { tc: "需要定制此類產品？", sc: "需要定制此类产品？", en: "Need This Category Customized?" },
    ctaDesc: {
      tc: "我們提供從設計到生產的一站式定制服務。歡迎聯繫我們獲取報價與樣品。",
      sc: "我们提供从设计到生产的一站式定制服务。欢迎联系我们获取报价与样品。",
      en: "We offer end-to-end customization from design to production. Contact us for a quote and samples.",
    },
    ctaButton: { tc: "聯繫我們", sc: "联系我们", en: "Contact Us" },
    items: {
      tc: [
        {
          title: "吊牌與標籤", titleEn: "Tags & Labels",
          desc: "完整的吊牌與標籤產品線，覆蓋紙質吊牌、印嘜、織嘜、繡花貼章及自黏貼紙。",
          longDesc: "我們的吊牌與標籤系列為品牌提供最關鍵的識別載體。從紙質吊牌的燙金壓紋，到織嘜的精細經緯，再到繡花貼章與貼紙的多元材質，每一件都能精準傳達品牌個性。我們擁有完整的印刷、織造、繡花生產線，可實現從設計到量產的全流程交付。",
          advantages: [
            { title: "工藝齊全", desc: "燙金、UV、壓紋、織造、繡花、印刷等多種工藝一站式完成。" },
            { title: "材質豐富", desc: "銅版紙、特種紙、緞面、棉布、PET、合成紙等數十種材質可選。" },
            { title: "細節精準", desc: "高密度織造與高精度印刷，確保品牌標誌每處細節清晰呈現。" },
            { title: "靈活定制", desc: "支持任意尺寸、形狀與後加工組合。" },
          ],
          products: [
            { name: "吊牌 Hangtags", desc: "紙質吊牌，支持燙金、燙銀、UV、壓紋、模切等工藝。", "features": ["燙金 / 燙銀", "UV上光", "壓紋 / 凹凸", "模切成型", "多種紙質選擇"] },
            { name: "印嘜 Printed Label", desc: "緞面、棉帶印刷標籤，適用於水洗、成分、產地等資訊。", "features": ["多色印刷", "柔軟親膚材質", "耐水洗不褪色", "可選緞面或棉平紋", "超聲波切邊"] },
            { name: "織嘜 Woven Label", desc: "高密度織造主嘜，呈現精緻的品牌標識。", "features": ["高密度經緯編織", "圖案立體細膩", "鎖邊或熱切工藝", "多種折法(對折/端折)", "耐磨耐用"] },
            { name: "繡花貼章 Patches", desc: "繡花、PVC、皮革等多種貼章，可縫製、熨燙或黏貼。", "features": ["精細刺繡針法", "背面可加燙膠", "立體包邊工藝", "異形模切", "多種底布選擇"] },
            { name: "貼紙 Sticker", desc: "自黏貼紙與標籤，多種材質與形狀，適用於產品與包裝。", "features": ["防水防油材質", "可變數據印刷", "亮面或啞面過膠", "易撕或強力背膠", "卷裝或張裝"] },
          ],
          faq: [
            { q: "可以混合不同類型的標籤一起下單嗎？", a: "可以。同一品牌的多款標籤可以合併下單，方便管理也能優化交期。" },
            { q: "最小起訂量大約是多少？", a: "依產品類型而異，多數標籤類產品 1,000 至 5,000 件起訂。" },
            { q: "可以提供樣品嗎？", a: "可以提供數碼打樣與實物打樣，協助您在量產前確認效果。" },
          ],
        },
        {
          title: "袋類包裝", titleEn: "Bags",
          desc: "從零售展示到物流配送，全方位袋類產品涵蓋紙袋、布袋、防塵袋、氣泡袋與快遞袋。",
          longDesc: "袋類產品是品牌最直接的觸達點。我們提供精緻紙袋、環保帆布袋、奢華防塵袋，以及實用的氣泡袋、快遞袋與透明包裝袋，覆蓋零售、運輸與保護等全部場景。每款袋型均可印製品牌標誌與圖案，並提供多種材質與尺寸定制。",
          advantages: [
            { title: "場景全覆蓋", desc: "從精品店到電商配送，每一個觸點都有適合的包裝袋。" },
            { title: "環保材質", desc: "再生紙、有機棉、可降解塑料等多種環保選項。" },
            { title: "印刷精緻", desc: "膠印、絲印、熱轉印等多種工藝，色彩飽滿、層次清晰。" },
            { title: "結構靈活", desc: "可定制尺寸、提手、封口方式與內襯結構。" },
          ],
          products: [
            { name: "氣泡郵寄袋 Bubble Mailer", desc: "牛皮紙與塑料氣泡內襯，適合輕量易碎商品的安全配送。", "features": ["加厚氣泡防震", "強力自黏封條", "防水防潮防護", "多層複合材質", "環保可回收選項"] },
            { name: "防塵袋 Dust Bags", desc: "棉質束口袋，用於收納手袋、鞋類等高端產品。", "features": ["透氣無紡布或棉布", "索繩束口設計", "絲印或熱轉印Logo", "保護皮具防刮花", "可重複使用"] },
            { name: "西裝防塵套 Garment Bag", desc: "無紡布西裝外衣套，帶拉鏈設計，適合掛裝運輸與儲存。", "features": ["立體裁剪版型", "透明可視窗設計", "耐用五金拉鏈", "加厚防塵材質", "設有衣架開口"] },
            { name: "膠袋 Polybag", desc: "透明或磨砂自封PE/LDPE膠袋，用於成衣保護與包裝。", "features": ["LDPE / HDPE 材質", "透明度高", "側風琴或底風琴", "防靜電處理", "可加透氣孔"] },
            { name: "快遞袋 Polymailer", desc: "輕量塑料快遞袋，多色可選，適合電商物流配送。", "features": ["高韌性防撕裂", "完全不透光隱私", "防水破壞膠封條", "多色印刷定制", "輕量化減輕郵資"] },
            { name: "帆布袋 Tote Bags", desc: "棉質或帆布手提袋，可印製品牌圖案，環保耐用。", "features": ["高克重耐磨帆布", "承重力強", "多樣化印刷工藝", "環保時尚耐洗", "可加內袋或拉鏈"] },
            { name: "紙袋 Paper Shopping Bag", desc: "牛皮紙或銅版紙手提袋，多種繩款與表面工藝可選。", "features": ["加厚白卡或牛皮紙", "多款手挽(棉繩/扁紙)", "底部加固處理", "全表面印刷工藝", "承重力優越"] },
          ],
          faq: [
            { q: "袋子可以印製多色品牌Logo嗎？", a: "可以。我們支持膠印、絲印、熱轉印等多色印刷方式。" },
            { q: "有可降解或環保材質嗎？", a: "有。FSC認證紙張、有機棉與可降解膠袋均可提供。" },
            { q: "起訂量是多少？", a: "依品類而異：紙袋約 500 起；快遞袋與膠袋通常 5,000 起。" },
          ],
        },
        {
          title: "盒類包裝", titleEn: "Boxes",
          desc: "硬質禮盒與物流瓦楞箱，從產品包裝到電商配送的完整盒類解決方案。",
          longDesc: "盒類包裝既是產品的保護者，也是品牌的舞台。我們的硬質禮盒提供從天地蓋到磁吸翻蓋等多種結構，搭配燙金、壓紋與絲帶等高端工藝；瓦楞物流箱則注重保護性與成本效益，是電商出貨的可靠夥伴。",
          advantages: [
            { title: "結構設計", desc: "資深結構設計師為您的產品打造最合適的盒型。" },
            { title: "高端工藝", desc: "燙金、壓紋、UV、植絨、磁扣等高端工藝任您組合。" },
            { title: "穩定品質", desc: "嚴格品控確保大批量生產品質一致。" },
            { title: "環保選項", desc: "可回收瓦楞紙與FSC認證紙板。" },
          ],
          products: [
            { name: "禮品盒 Gift Box", desc: "硬質裱糊禮盒，適合產品包裝與品牌禮贈。", "features": ["硬板結構防撞", "天地蓋或書型盒", "磁吸或絲帶扣口", "高檔特種紙包面", "內托定制(海綿/EVA)"] },
            { name: "物流箱 Shipper Box", desc: "瓦楞紙物流配送箱，多尺寸可選，可印刷品牌Logo。", "features": ["瓦楞紙板抗壓", "多層厚度可選", "防潮處理", "易撕拉條設計", "品牌Logo印刷"] },
          ],
          faq: [
            { q: "可以做磁吸翻蓋禮盒嗎？", a: "可以。磁吸翻蓋是我們的常規盒型之一，附帶結構設計支援。" },
            { q: "瓦楞箱有幾種厚度可選？", a: "提供3層、5層及7層瓦楞，可依承重需求選擇。" },
            { q: "禮盒最低起訂量？", a: "通常 500 件起，依結構複雜度而定。" },
          ],
        },
        {
          title: "衣架", titleEn: "Hangers",
          desc: "適合零售展示與成衣物流的木質、塑料與金屬衣架。",
          longDesc: "衣架是服裝品牌零售與物流環節中不可或缺的一環。我們提供木質、塑料與金屬等多種衣架，支持烙印或印刷品牌標誌，並可根據服裝類型（西裝、襯衫、外套、內衣等）定制尺寸與夾具。",
          advantages: [
            { title: "材質多樣", desc: "原木、塑料、金屬可選，匹配不同品牌定位。" },
            { title: "品牌定制", desc: "支持燙印、絲印、激光雕刻品牌標誌。" },
            { title: "結構合理", desc: "符合人體工學設計，避免衣物變形。" },
            { title: "批量穩定", desc: "成熟生產線確保大批量交付穩定。" },
          ],
          products: [
            { name: "衣架 Hangers", desc: "木質、塑料及金屬衣架，可印製品牌標誌。" , "features": ["實木、塑料或包布", "防滑肩部設計", "可定制Logo(雷射/絲印)", "旋轉金屬掛鉤", "多種尺寸適配"]},
          ],
          faq: [
            { q: "可以做品牌烙印嗎？", a: "可以，木質衣架支持激光雕刻與烙印工藝。" },
            { q: "起訂量？", a: "通常 1,000 件起，視衣架類型而定。" },
            { q: "有夾子款嗎？", a: "有。提供褲架、裙架等帶夾款式。" },
          ],
        },
        {
          title: "其他配件", titleEn: "Accessories",
          desc: "薄紙、品牌雨傘等周邊配件，為品牌包裝與贈禮帶來更多細節亮點。",
          longDesc: "完整的品牌體驗由無數細節組成。我們提供品牌薄紙、雨傘等周邊配件產品，幫助您在每一個觸點上強化品牌印象。所有產品支持品牌印刷與材質定制，讓細節成為品牌的延伸。",
          advantages: [
            { title: "完善體驗", desc: "從包裝到贈禮，補齊品牌觸點的每一個細節。" },
            { title: "印刷精細", desc: "可印製品牌Logo、圖案與訊息。" },
            { title: "材質多樣", desc: "提供多種紙張、布料與工藝選擇。" },
            { title: "靈活訂量", desc: "中小批量靈活生產，支持季節性活動。" },
          ],
          products: [
            { name: "薄紙 Tissue Paper", desc: "品牌包裝薄紙，多色可選，可印刷Logo或圖案。", "features": ["柔軟半透明質感", "防酸中性材質", "全版Logo水印印刷", "防潮防刮花保護", "環保FSC認證"]  },
            { name: "雨傘 Umbrella", desc: "品牌雨傘，可印製Logo，適合企業禮品或零售搭售。", "features": ["防UV塗層傘布", "高強度抗風骨架", "全自動或手動開合", "手柄Logo刻印", "定制雨傘套"] },
          ],
          faq: [
            { q: "薄紙可以印彩色圖案嗎？", a: "可以，支持單色至多色印刷，可印製大面積圖案。" },
            { q: "雨傘起訂量？", a: "通常 300 至 500 把起。" },
            { q: "可以做小批量定制嗎？", a: "可以，配件類產品支持較為靈活的小批量定制。" },
          ],
        },
      ],
      sc: [
        {
          title: "吊牌与标签", titleEn: "Tags & Labels",
          desc: "完整的吊牌与标签产品线，覆盖纸质吊牌、印唛、织唛、绣花贴章及自粘贴纸。",
          longDesc: "我们的吊牌与标签系列为品牌提供最关键的识别载体。从纸质吊牌的烫金压纹，到织唛的精细经纬，再到绣花贴章与贴纸的多元材质，每一件都能精准传达品牌个性。",
          advantages: [
            { title: "工艺齐全", desc: "烫金、UV、压纹、织造、绣花、印刷等多种工艺一站式完成。" },
            { title: "材质丰富", desc: "铜版纸、特种纸、缎面、棉布、PET、合成纸等数十种材质可选。" },
            { title: "细节精准", desc: "高密度织造与高精度印刷，确保品牌标志每处细节清晰呈现。" },
            { title: "灵活定制", desc: "支持任意尺寸、形状与后加工组合。" },
          ],
          products: [
            { name: "吊牌 Hangtags", desc: "纸质吊牌，支持烫金、烫银、UV、压纹、模切等工艺。" },
            { name: "印唛 Printed Label", desc: "缎面、棉带印刷标签，适用于水洗、成分、产地等信息。" },
            { name: "织唛 Woven Label", desc: "高密度织造主唛，呈现精致的品牌标识。" },
            { name: "绣花贴章 Patches", desc: "绣花、PVC、皮革等多种贴章，可缝制、熨烫或粘贴。" },
            { name: "贴纸 Sticker", desc: "自粘贴纸与标签，多种材质与形状，适用于产品与包装。" },
          ],
          faq: [
            { q: "可以混合不同类型的标签一起下单吗？", a: "可以。同一品牌的多款标签可以合并下单，方便管理也能优化交期。" },
            { q: "最小起订量大约是多少？", a: "依产品类型而异，多数标签类产品 1,000 至 5,000 件起订。" },
            { q: "可以提供样品吗？", a: "可以提供数码打样与实物打样，协助您在量产前确认效果。" },
          ],
        },
        {
          title: "袋类包装", titleEn: "Bags",
          desc: "从零售展示到物流配送，全方位袋类产品涵盖纸袋、布袋、防尘袋、气泡袋与快递袋。",
          longDesc: "袋类产品是品牌最直接的触达点。我们提供精致纸袋、环保帆布袋、奢华防尘袋，以及实用的气泡袋、快递袋与透明包装袋，覆盖零售、运输与保护等全部场景。",
          advantages: [
            { title: "场景全覆盖", desc: "从精品店到电商配送，每一个触点都有适合的包装袋。" },
            { title: "环保材质", desc: "再生纸、有机棉、可降解塑料等多种环保选项。" },
            { title: "印刷精致", desc: "胶印、丝印、热转印等多种工艺，色彩饱满、层次清晰。" },
            { title: "结构灵活", desc: "可定制尺寸、提手、封口方式与内衬结构。" },
          ],
          products: [
            { name: "气泡邮寄袋 Bubble Mailer", desc: "牛皮纸与塑料气泡内衬，适合轻量易碎商品的安全配送。" },
            { name: "防尘袋 Dust Bags", desc: "棉质束口袋，用于收纳手袋、鞋类等高端产品。" },
            { name: "西装防尘套 Garment Bag", desc: "无纺布西装外衣套，带拉链设计，适合挂装运输与储存。" },
            { name: "胶袋 Polybag", desc: "透明或磨砂自封PE/LDPE胶袋，用于成衣保护与包装。" },
            { name: "快递袋 Polymailer", desc: "轻量塑料快递袋，多色可选，适合电商物流配送。" },
            { name: "帆布袋 Tote Bags", desc: "棉质或帆布手提袋，可印制品牌图案，环保耐用。" },
            { name: "纸袋 Paper Shopping Bag", desc: "牛皮纸或铜版纸手提袋，多种绳款与表面工艺可选。" },
          ],
          faq: [
            { q: "袋子可以印制多色品牌Logo吗？", a: "可以。支持胶印、丝印、热转印等多色印刷方式。" },
            { q: "有可降解或环保材质吗？", a: "有。FSC认证纸张、有机棉与可降解胶袋均可提供。" },
            { q: "起订量是多少？", a: "依品类而异：纸袋约 500 起；快递袋与胶袋通常 5,000 起。" },
          ],
        },
        {
          title: "盒类包装", titleEn: "Boxes",
          desc: "硬质礼盒与物流瓦楞箱，从产品包装到电商配送的完整盒类解决方案。",
          longDesc: "盒类包装既是产品的保护者，也是品牌的舞台。硬质礼盒提供从天地盖到磁吸翻盖等多种结构，搭配烫金、压纹与丝带等高端工艺；瓦楞物流箱则注重保护性与成本效益。",
          advantages: [
            { title: "结构设计", desc: "资深结构设计师为您的产品打造最合适的盒型。" },
            { title: "高端工艺", desc: "烫金、压纹、UV、植绒、磁扣等高端工艺任您组合。" },
            { title: "稳定品质", desc: "严格品控确保大批量生产品质一致。" },
            { title: "环保选项", desc: "可回收瓦楞纸与FSC认证纸板。" },
          ],
          products: [
            { name: "礼品盒 Gift Box", desc: "硬质裱糊礼盒，适合产品包装与品牌礼赠。" },
            { name: "物流箱 Shipper Box", desc: "瓦楞纸物流配送箱，多尺寸可选，可印刷品牌Logo。" },
          ],
          faq: [
            { q: "可以做磁吸翻盖礼盒吗？", a: "可以，磁吸翻盖是我们常规盒型之一。" },
            { q: "瓦楞箱有几种厚度可选？", a: "提供3层、5层及7层瓦楞，可依承重需求选择。" },
            { q: "礼盒最低起订量？", a: "通常 500 件起，依结构复杂度而定。" },
          ],
        },
        {
          title: "衣架", titleEn: "Hangers",
          desc: "适合零售展示与成衣物流的木质、塑料与金属衣架。",
          longDesc: "衣架是服装品牌零售与物流环节中不可或缺的一环。我们提供木质、塑料与金属等多种衣架，支持烙印或印刷品牌标志，并可根据服装类型定制尺寸与夹具。",
          advantages: [
            { title: "材质多样", desc: "原木、塑料、金属可选，匹配不同品牌定位。" },
            { title: "品牌定制", desc: "支持烫印、丝印、激光雕刻品牌标志。" },
            { title: "结构合理", desc: "符合人体工学设计，避免衣物变形。" },
            { title: "批量稳定", desc: "成熟生产线确保大批量交付稳定。" },
          ],
          products: [
            { name: "衣架 Hangers", desc: "木质、塑料及金属衣架，可印制品牌标志。" },
          ],
          faq: [
            { q: "可以做品牌烙印吗？", a: "可以，木质衣架支持激光雕刻与烙印工艺。" },
            { q: "起订量？", a: "通常 1,000 件起，视衣架类型而定。" },
            { q: "有夹子款吗？", a: "有，提供裤架、裙架等带夹款式。" },
          ],
        },
        {
          title: "其他配件", titleEn: "Accessories",
          desc: "薄纸、品牌雨伞等周边配件，为品牌包装与赠礼带来更多细节亮点。",
          longDesc: "完整的品牌体验由无数细节组成。我们提供品牌薄纸、雨伞等周边配件产品，帮助您在每一个触点上强化品牌印象。",
          advantages: [
            { title: "完善体验", desc: "从包装到赠礼，补齐品牌触点的每一个细节。" },
            { title: "印刷精细", desc: "可印制品牌Logo、图案与信息。" },
            { title: "材质多样", desc: "提供多种纸张、布料与工艺选择。" },
            { title: "灵活订量", desc: "中小批量灵活生产，支持季节性活动。" },
          ],
          products: [
            { name: "薄纸 Tissue Paper", desc: "品牌包装薄纸，多色可选，可印刷Logo或图案。" },
            { name: "雨伞 Umbrella", desc: "品牌雨伞，可印制Logo，适合企业礼品或零售搭售。" },
          ],
          faq: [
            { q: "薄纸可以印彩色图案吗？", a: "可以，支持单色至多色印刷。" },
            { q: "雨伞起订量？", a: "通常 300 至 500 把起。" },
            { q: "可以做小批量定制吗？", a: "可以，配件类产品支持灵活的小批量定制。" },
          ],
        },
      ],
      en: [
        {
          title: "Tags & Labels", titleEn: "Tags & Labels",
          desc: "A complete line of tags and labels — paper hangtags, printed labels, woven labels, embroidered patches and stickers.",
          longDesc: "Our tags & labels range delivers the most critical brand identity touchpoints. From hot-stamped hangtags to high-density woven labels, embroidered patches and self-adhesive stickers, every piece is built to express your brand precisely. We operate complete printing, weaving and embroidery lines for end-to-end production.",
          advantages: [
            { title: "Full Craft Range", desc: "Hot stamping, UV, embossing, weaving, embroidery and printing — all in-house." },
            { title: "Diverse Materials", desc: "Coated paper, specialty paper, satin, cotton, PET, synthetic paper and more." },
            { title: "Sharp Detail", desc: "High-density weaving and high-resolution printing render every brand mark crisply." },
            { title: "Flexible Custom", desc: "Any size, shape and finishing combination." },
          ],
          products: [
            { name: "Hangtags", desc: "Paper hangtags with hot stamping, UV, embossing and die-cutting options.", "features": ["Hot Stamping", "UV Coating", "Embossing / Debossing", "Die Cutting", "Various Paper Stocks"] },
            { name: "Printed Label", desc: "Satin and cotton printed labels for care, composition and origin info.", "features": ["Multi-color Printing", "Soft Skin-friendly Material", "Washable & Colorfast", "Satin or Cotton Ribbon", "Ultrasonic Cutting"] },
            { name: "Woven Label", desc: "High-density woven main labels presenting refined brand identity.", "features": ["High-density Weaving", "Detailed 3D Patterns", "Merrow Border or Heat Cut", "Various Folding Options", "Durable & Wear-resistant"] },
            { name: "Patches", desc: "Embroidered, PVC and leather patches — sew-on, iron-on or adhesive.", "features": ["Fine Embroidery Stitches", "Iron-on / Adhesive Backing", "Overlock Border", "Custom Die-cut Shapes", "Various Fabric Bases"] },
            { name: "Sticker", desc: "Self-adhesive stickers and labels in various materials and shapes for products and packaging.", "features": ["Waterproof & Oil-proof", "Variable Data Printing", "Glossy or Matte Lamination", "Easy-peel or Strong Adhesive", "Roll or Sheet Format"] },
          ],
          faq: [
            { q: "Can I combine different label types in one order?", a: "Yes. Multiple label types for the same brand can be consolidated into a single order to streamline lead times." },
            { q: "What is the typical MOQ?", a: "It varies by product type — most label items start from 1,000 to 5,000 pieces." },
            { q: "Do you provide samples?", a: "Yes — both digital proofs and physical samples are available before mass production." },
          ],
        },
        {
          title: "Bags", titleEn: "Bags",
          desc: "From retail display to logistics — paper bags, totes, dust bags, bubble mailers and polymailers.",
          longDesc: "Bags are one of the most direct brand touchpoints. We offer refined paper bags, eco canvas totes, luxury dust bags and practical bubble mailers, polymailers and polybags — covering retail, transport and protection. Every bag style supports brand printing in custom materials and sizes.",
          advantages: [
            { title: "Every Use Case", desc: "From boutiques to ecommerce shipments, the right bag for every touchpoint." },
            { title: "Eco Materials", desc: "Recycled paper, organic cotton and biodegradable plastics available." },
            { title: "Refined Print", desc: "Offset, screen and heat-transfer printing for vivid, layered color." },
            { title: "Flexible Build", desc: "Custom sizes, handles, closures and inner construction." },
          ],
          products: [
            { name: "Bubble Mailer", desc: "Kraft and plastic mailers with bubble lining for safe shipment of light, fragile goods.", "features": ["Padded Shock Absorption", "Strong Self-seal Adhesive", "Water & Moisture Proof", "Multi-layer Composite", "Eco-friendly Recyclable Options"] },
            { name: "Dust Bags", desc: "Cotton drawstring bags for storing handbags, footwear and luxury items.", "features": ["Breathable Non-woven / Cotton", "Drawstring Closure", "Silk-screen or Heat Transfer Logo", "Scratch Protection", "Reusable & Sustainable"] },
            { name: "Garment Bag", desc: "Non-woven garment covers with zippers — ideal for hanging transport and storage.", "features": ["Tailored 3D Shape", "Transparent Viewing Window", "Durable Metal Zippers", "Heavy-duty Dustproof Material", "Hanger Opening"] },
            { name: "Polybag", desc: "Clear or frosted self-seal PE/LDPE bags for apparel protection and packaging.", "features": ["LDPE / HDPE Material", "High Clarity", "Side or Bottom Gussets", "Anti-static Treatment", "Ventilation Holes Available"] },
            { name: "Polymailer", desc: "Lightweight plastic mailers in various colors for ecommerce shipping.", "features": ["High Tear Resistance", "Opaque for Privacy", "Waterproof Tamper-evident Seal", "Custom Color Printing", "Lightweight for Shipping"] },
            { name: "Tote Bags", desc: "Cotton and canvas totes with custom prints — eco-friendly and durable.", "features": ["Heavyweight Canvas", "Strong Load-bearing", "Various Printing Techniques", "Eco-friendly & Washable", "Optional Inner Pocket / Zipper"] },
            { name: "Paper Shopping Bag", desc: "Kraft and coated paper shopping bags with various handle and finishing options.", "features": ["Premium Cardboard / Kraft", "Various Handles (Cotton/Paper)", "Reinforced Bottom", "Full-surface Printing", "Superior Weight Capacity"] },
          ],
          faq: [
            { q: "Can bags be printed with multi-color logos?", a: "Yes — offset, screen and heat-transfer printing all support multi-color logos." },
            { q: "Are biodegradable or eco materials available?", a: "Yes — FSC paper, organic cotton and biodegradable plastics are all available." },
            { q: "What is the MOQ?", a: "Varies by type: paper bags from ~500; mailers and polybags typically from 5,000." },
          ],
        },
        {
          title: "Boxes", titleEn: "Boxes",
          desc: "Rigid gift boxes and corrugated shipper boxes — complete box solutions from product packaging to ecommerce shipping.",
          longDesc: "Boxes both protect the product and stage the brand. Our rigid gift boxes range from lift-off lids to magnetic flip closures with hot stamping, embossing and ribbon detailing. Corrugated shipper boxes balance protection and cost-effectiveness for reliable ecommerce fulfillment.",
          advantages: [
            { title: "Structural Design", desc: "Senior structural designers craft the optimal box for your product." },
            { title: "Premium Crafts", desc: "Hot stamping, embossing, UV, flocking, magnetic closures and more." },
            { title: "Stable Quality", desc: "Strict QC ensures consistent quality across large production runs." },
            { title: "Eco Options", desc: "Recycled corrugated and FSC-certified paperboard." },
          ],
          products: [
            { name: "Gift Box", desc: "Rigid wrapped gift boxes for product packaging and brand gifting.", "features": ["Rigid Construction", "Lid & Base or Magnetic Style", "Magnet or Ribbon Closure", "Premium Specialty Paper", "Customized Inserts (Foam/EVA)"] },
            { name: "Shipper Box", desc: "Corrugated shipping cartons in multiple sizes with brand printing.", "features": ["Corrugated Compression Strength", "Multiple Flute Options", "Moisture-resistant Finish", "Tear-strip Easy Opening", "Branded Logo Printing"] },
          ],
          faq: [
            { q: "Can you make magnetic flip-lid gift boxes?", a: "Yes — magnetic flip lids are one of our standard structures with full design support." },
            { q: "What corrugated thicknesses are available?", a: "3-ply, 5-ply and 7-ply corrugated are available based on load requirements." },
            { q: "What is the MOQ for gift boxes?", a: "Typically from 500 pieces, depending on structural complexity." },
          ],
        },
        {
          title: "Hangers", titleEn: "Hangers",
          desc: "Wooden, plastic and metal hangers for retail display and apparel logistics.",
          longDesc: "Hangers are an essential link in apparel retail and logistics. We offer wooden, plastic and metal hangers with branded engraving or printing, and customize sizes and clips for suits, shirts, outerwear, intimates and more.",
          advantages: [
            { title: "Diverse Materials", desc: "Solid wood, plastic and metal options match different brand positioning." },
            { title: "Brand Custom", desc: "Heat-stamping, screen printing and laser engraving for branded marks." },
            { title: "Ergonomic Build", desc: "Designed to maintain garment shape during display and storage." },
            { title: "Stable Production", desc: "Mature production lines deliver consistent large-volume orders." },
          ],
          products: [
            { name: "Hangers", desc: "Wooden, plastic and metal hangers with branded printing or engraving.", "features": ["Wood, Plastic, or Velvet", "Non-slip Shoulder Design", "Custom Logo (Laser/Silk-screen)", "Swivel Metal Hooks", "Various Sizes for Garments"] },
          ],
          faq: [
            { q: "Can hangers be branded with engraving?", a: "Yes — wooden hangers support laser engraving and heat-stamping." },
            { q: "What is the MOQ?", a: "Typically from 1,000 pieces, depending on hanger type." },
            { q: "Are clip styles available?", a: "Yes — pant and skirt hangers with clips are available." },
          ],
        },
        {
          title: "Accessories", titleEn: "Accessories",
          desc: "Tissue paper, branded umbrellas and other accessories that elevate brand packaging and gifting moments.",
          longDesc: "Complete brand experiences are built from countless details. We provide branded tissue paper, umbrellas and other accessories so every touchpoint reinforces the brand. All items support branded printing and material customization — letting the details extend your brand.",
          advantages: [
            { title: "Complete Experience", desc: "From packaging to gifting, every brand touchpoint covered." },
            { title: "Refined Printing", desc: "Brand logos, patterns and messages printed with precision." },
            { title: "Diverse Materials", desc: "Multiple papers, fabrics and finishing options available." },
            { title: "Flexible MOQ", desc: "Small to medium runs available for seasonal campaigns." },
          ],
          products: [
            { name: "Tissue Paper", desc: "Branded packaging tissue paper in multiple colors, with logo or pattern printing.", "features": ["Soft Translucent Texture", "Acid-free Neutral pH", "All-over Logo Watermark", "Anti-scratch Protection", "FSC Certified Options"] },
            { name: "Umbrella", desc: "Branded umbrellas with printed logos — ideal as corporate gifts or retail add-ons.", "features": ["UV-protection Coating", "Windproof Frame Construction", "Auto or Manual Open", "Logo Engraved Handle", "Custom Umbrella Sleeve"] },
          ],
          faq: [
            { q: "Can tissue paper be printed with full-color patterns?", a: "Yes — single color through multi-color printing is supported, including large pattern coverage." },
            { q: "What is the MOQ for umbrellas?", a: "Typically from 300 to 500 pieces." },
            { q: "Are small custom runs possible?", a: "Yes — accessories support flexible small-batch customization." },
          ],
        },
      ],
    },
  },
} as const;
