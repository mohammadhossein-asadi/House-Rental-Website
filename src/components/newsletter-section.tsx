'use client';

import { useState } from 'react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-brand to-brand-hover">
      <div className="container mx-auto px-[7%] max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-white/80 mb-8">
          Subscribe to our newsletter for the latest deals, new listings, and travel
          inspiration delivered straight to your inbox.
        </p>

        {submitted ? (
          <div className="bg-white/20 rounded-xl p-6">
            <p className="text-white font-medium">
              Thank you for subscribing! We will keep you updated.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-pill bg-white text-text placeholder-text-subtle outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-surface dark:bg-surface-dark-muted text-brand font-semibold rounded-pill hover:bg-surface-muted dark:hover:bg-surface-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        {error && (
          <p className="text-white/90 text-sm mt-3">{error}</p>
        )}
      </div>
    </section>
  );
}
