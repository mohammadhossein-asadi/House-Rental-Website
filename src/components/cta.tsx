import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-12 px-4">
      <div
        className="relative rounded-xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/banner-2.png)',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'transparent',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #3f2321, transparent)',
          }}
        />
        <div className="relative z-10 p-[5%]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sharing Is Earning Now
          </h2>
          <p className="text-white text-lg mb-6 max-w-xl">
            Great opportunity to make money by sharing extra space.
          </p>
          <Link
            href="/listing"
            className="inline-block bg-[#ff5361] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e64957] transition-colors"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}