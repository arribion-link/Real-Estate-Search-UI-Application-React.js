import FaqCard from "../components/Partials/FaqCard";
import "../css/Faqs.css";
export default function Faqs() {
  const faqs = [
    {
      question: "How do I find a rental house on this platform?",
      answer:
        "Simply use the search bar to filter houses based on your preferred location, rent range, house type, or amenities like Wi-Fi and water. Once you find a suitable property, you can view details and submit an order request directly to the landlord.",
    },
    {
      question: "Do I need an account to book a house?",
      answer:
        "Yes. You need to create an account so we can verify your identity, store your preferences, and allow landlords to reach you securely.",
    },
    {
      question: "How do landlords list their properties?",
      answer:
        "After signing up as a landlord, you can upload your property details including photos, location, rent price, and contact information. Once approved, your listing becomes visible to all verified tenants.",
    },
    {
      question: "Is payment done through the platform?",
      answer:
        "Some landlords accept payments directly through our platform using secure methods like M-Pesa or card, while others may prefer cash or personal arrangements. The preferred payment method will always be shown on the property details page.",
    },
    {
      question: "How can I trust that the property is real?",
      answer:
        "We verify every landlord and listing before approval. Properties are checked for authenticity, and tenants can also leave reviews and ratings to build community trust.",
    },
    {
      question: "What happens after I submit an order for a house?",
      answer:
        "Once you submit an order, the landlord gets notified immediately. You’ll receive confirmation and can communicate through our platform to schedule viewing or finalize the deal.",
    },
    {
      question: "Can I cancel or change my order?",
      answer:
        "Yes, you can cancel or update your order within 24 hours before it’s accepted by the landlord. After that, you’ll need to contact the landlord directly for any changes.",
    },
    {
      question: "Is there a service fee for using the platform?",
      answer:
        "Creating an account and browsing listings is completely free. A small service fee may apply when booking or promoting your property — this helps us maintain and improve the platform.",
    },
    {
      question: "What if I face issues with a landlord or tenant?",
      answer:
        "Our support team is always available. You can report disputes or suspicious activities directly from your account dashboard, and we’ll investigate immediately.",
    },
    {
      question: "Can I list hostels or shared rooms?",
      answer:
        "Absolutely! Our platform supports all types of student accommodation — single rooms, bedsitters, hostels, and shared apartments.",
    },
  ];
  return (
    <section className="faq-section">
      <h2 className="faq-heading">Have questions? We can answer them!</h2>
      <div className="faqs-container flx col">
        {faqs.map((faq, i) => (
          <FaqCard key={i + Math.random()} faq={faq} />
        ))}
      </div>
    </section>
  );
}
