export default function Privacy() {
  return (
    <section id="privacy" className="py-20 px-4 bg-black/80 text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-amber-400">Privacy Policy</h2>
        <p className="text-white/80">
          At Toma's Kitchen, we respect your privacy. This policy explains what
          data we collect, how we use it, and how we keep it safe.
        </p>

        <h3 className="text-lg font-semibold text-white">What We Collect</h3>
        <ul className="list-disc list-inside text-white/80 space-y-1">
          <li>Your name and contact info if you send us a message</li>
          <li>Your IP address and browser details via analytics tools</li>
        </ul>

        <h3 className="text-lg font-semibold text-white">
          How We Use Your Data
        </h3>
        <p className="text-white/80">
          We use your information to respond to inquiries, improve our website,
          and understand how people use our services. We do not sell your data.
        </p>

        <h3 className="text-lg font-semibold text-white">Cookies</h3>
        <p className="text-white/80">
          We may use cookies to analyze site traffic. You can disable cookies in
          your browser settings.
        </p>

        <h3 className="text-lg font-semibold text-white">Third-Party Tools</h3>
        <p className="text-white/80">
          We may use tools like Google Analytics or Meta Pixel for tracking site
          performance. These services have their own privacy policies.
        </p>

        <h3 className="text-lg font-semibold text-white">Your Rights</h3>
        <p className="text-white/80">
          You can request access to your data, ask for corrections, or request
          deletion at any time by contacting us at{' '}
          <a
            href="mailto:hello@tomasfoodwagon.com"
            className="text-amber-400 underline"
          >
            zeinalovas@gmail.com
          </a>
          .
        </p>

        <p className="text-sm text-white/60">Last updated: June 1, 2025</p>
      </div>
    </section>
  );
}
