import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly is my server set up after payment?",
      answer: "Your server is provisioned instantly after payment confirmation. You'll receive your server details and control panel access within 30 seconds. No manual setup required — everything is automated."
    },
    {
      question: "What Minecraft versions do you support?",
      answer: "We support all Minecraft versions from 1.7.10 to the latest release and snapshots. You can switch versions at any time from your control panel with a single click. We also support Bedrock Edition through GeyserMC."
    },
    {
      question: "Can I install mods and modpacks?",
      answer: "Absolutely! We support Forge, Fabric, Quilt, and all major mod loaders. You can install from our library of 1000+ one-click modpacks, or upload your own custom modpack. Popular packs like RLCraft, All The Mods, and Better MC are available instantly."
    },
    {
      question: "What happens if my server gets DDoS attacked?",
      answer: "All our servers come with enterprise-grade DDoS protection included at no extra cost. Our mitigation system automatically detects and filters malicious traffic while keeping legitimate players connected. We've successfully mitigated attacks up to 1 Tbps."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes! We offer a 48-hour money-back guarantee on all plans. If you're not satisfied with our service for any reason, contact our support team within 48 hours of purchase for a full refund. No questions asked."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll only pay the prorated difference for the remainder of your billing cycle. Your server data is preserved during the transition — no downtime required."
    },
    {
      question: "How do backups work?",
      answer: "We perform automatic daily backups of your entire server. The number of backup slots depends on your plan (1 to unlimited). You can also create manual backups at any time. Restoring a backup takes less than 30 seconds through the control panel."
    },
    {
      question: "Do you allow cracked/offline-mode servers?",
      answer: "Yes, we allow offline-mode servers. However, we recommend using online mode with our free authentication plugin for better security. Cracked servers are more vulnerable to griefing and unauthorized access."
    }
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-primary text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-green-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="flex items-center space-x-2 text-green-primary hover:text-green-light transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-medium">Live Chat</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-[#5865F2] hover:text-[#7983F5] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.36-.698.772-1.362 1.225-1.993a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.12-.098.246-.198.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              <span className="font-medium">Discord Support</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
