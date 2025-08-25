export interface MenuItemType {
  name: string;
  hasDropdown: boolean;
}

export interface DropdownItemType {
  icon?: string;
  title: string;
  isClickable?: boolean;
}

export interface IntegrationItemType {
  name: string;
  imageUrl: string;
  width?: number;
  height?: number;
}

// Dummy icons
export const FormIcon = () => <span>📄</span>;
export const CalendarIcon = () => <span>📅</span>;
export const WorkflowIcon = () => <span>🔗</span>;
export const PdfIcon = () => <span>📄</span>;
export const PaymentsIcon = () => <span>💳</span>;

// Data Arrays
export const menuItems: MenuItemType[] = [
  { name: "Products", hasDropdown: true },
  { name: "Templates", hasDropdown: true },
  { name: "Integrations", hasDropdown: true },
  { name: "Resources", hasDropdown: true },
  { name: "Pricing", hasDropdown: false },
];

export const productsItems: DropdownItemType[] = [
  { title: "Forms", icon: "FormIcon" },
  { title: "Scheduling", icon: "CalendarIcon" },
  { title: "Workflows", icon: "WorkflowIcon" },
  { title: "PDF", icon: "PdfIcon" },
  { title: "Payments", icon: "PaymentsIcon" },
];

export const featuresItems: DropdownItemType[] = [
  { title: "Conditional logic" },
  { title: "Login forms" },
  { title: "Make a quiz" },
  { title: "Styling" },
  { title: "Sharing forms" },
  { title: "Results & analytics" },
];

export const templateCategories: DropdownItemType[] = [
  { title: "Lead generation" },
  { title: "Feedback" },
  { title: "Marketing" },
  { title: "Legal" },
  { title: "Personal" },
  { title: "E-commerce" },
  { title: "Survey" },
  { title: "Quizzes" },
];

export const popularTemplates: DropdownItemType[] = [
  { title: "RSVP form" },
  { title: "Newsletter signup" },
  { title: "Sign up sheet" },
  { title: "Client intake form" },
  { title: "Bug report form" },
  { title: "Net Promoter Score" },
  { title: "Job application" },
  { title: "Online registration" },
];

export const integrationItems: IntegrationItemType[] = [
  {
    name: "Airtable",
    imageUrl:
      "https://play-lh.googleusercontent.com/Kv6IIya1TLiCSQCHOz1ihsxuBfSeriuVd8Qpsgby6RFjiWzIJeTnoOWEzHwzttHlhmGM",
    width: 30,
    height: 30,
  },
  {
    name: "Notion",
    imageUrl:
      "https://avatars.slack-edge.com/2022-11-04/4337716049777_09e09654eb84cb3b4d8b_512.png",
    width: 20,
    height: 20,
  },
  {
    name: "Google Sheets",
    imageUrl:
      "https://qualitytraining.be/content/uploads/2022/07/formation-google-sheet-belgique.png",
    width: 30,
    height: 30,
  },
  {
    name: "SmartSuite",
    imageUrl:
      "https://play-lh.googleusercontent.com/vRzqhjjfj9MTlvcRULtMk3-f7DiRHt-gb9MnIxEu01Z-HICc4cVn7ExTSx0KjrogPF0",
    width: 30,
    height: 30,
  },
  {
    name: "HubSpot",
    imageUrl: "https://avatars.githubusercontent.com/u/326419?s=200&v=4",
    width: 30,
    height: 30,
  },
  {
    name: "Slack",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPlbD42KHzVMn8SG2t54umtxYfOz2Mcwm8w&s",
    width: 30,
    height: 30,
  },
  {
    name: "Dropbox",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4s3ECJJwiCX0hLvu4r9XHOEXMjqhxJ6T-PQ&s",
    width: 20,
    height: 20,
  },
  {
    name: "Mailchimp",
    imageUrl:
      "https://i.pinimg.com/736x/32/a9/e0/32a9e00cdc1b3a25df1650d4018063ec.jpg",
    width: 25,
    height: 25,
  },
  {
    name: "Monday",
    imageUrl: "https://monday.i4asiacorp.com/images/monday_og_logo.png",
    width: 30,
    height: 30,
  },
  {
    name: "Calendly",
    imageUrl:
      "https://play-lh.googleusercontent.com/0FNnNtu7VCpoP0ZJFWdvoGKFe3RIhk2cnDIR1NcNBu82V93LHwDHP1G7IfyYblctng",
    width: 30,
    height: 30,
  },
  {
    name: "Salesforce",
    imageUrl:
      "https://mitto.ch/wp-content/uploads/2024/01/salesforce@2x-8-1.png",
    width: 30,
    height: 30,
  },
  {
    name: "Stripe",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0tpPUn3i_x5jgRcENKrC5S0hfUNU1tUQRA&s",
    width: 20,
    height: 20,
  },
];

export const resourceItems: DropdownItemType[] = [
  { title: "Blog" },
  { title: "About" },
  { title: "What's new" },
  { title: "Enterprise" },
  { title: "Press kit" },
  { title: "Help center" },
];
