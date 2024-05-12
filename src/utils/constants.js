// Brand Config
const BrandName = "Grey Matrix";

export const ZOHO_CONFIG = {
    ZOHO_FORM_LINK: 'https://forms.zohopublic.com/abinesh121195/form/ContactUs/formperma/4z8GFJug72iaGesiRjaKA-Gy_xlOFcG2nUs-wyNUFfY'
}

// Email config
export const EMAIL_CONFIG = {
    ENQUIRY_SUBJECT: "Inquiry Regarding Software Services",
    ENQUIRY_BODY_TEMPLATE: (name, mobile) => 
    `Dear GreyMatrix Team,

    I hope this email finds you well. My name is ${name} and I am reaching out to inquire about the IT solutions services offered by your esteemed team.

We are currently in need of assistance with several projects and are seeking a reliable partner to help us achieve our goals. Our requirements include:

(Please include your specific requirements or services you need)

Could you please provide more information about your services, including pricing, timelines, and any relevant portfolio or case studies? Additionally, we would be grateful for a consultation to discuss our project requirements in more detail.

Thank you for considering our inquiry. We look forward to hearing from you soon.

Best regards,
${name}
${mobile}
`,
    EMAIL_RECIPIENT: 'vjdeveloper2020@gmail.com',
  };
  