export default function OrderModalContent() {
  return (
    <div className="space-y-4 text-center">
      <p className="text-gray-800">
        Tomas is cooking live! Choose how you want to place your order:
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="tel:+447925622897"
          className="px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-md font-semibold shadow transition"
        >
          📞 Call Tomas
        </a>
        <a
          href="https://wa.me/447925622897"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold shadow transition"
        >
          💬 WhatsApp Tomas
        </a>
      </div>
    </div>
  );
}
