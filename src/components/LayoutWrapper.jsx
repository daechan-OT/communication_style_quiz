import React from 'react';

// Strip the outer card chrome when the quiz is embedded (e.g. inside a Rise 360 iframe)
// Trigger via ?embed=1 on the URL, or auto-detected when running inside any iframe.
function isEmbedded() {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  if (params.get('embed') === '1') return true;
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

export default function LayoutWrapper({ children }) {
  if (isEmbedded()) {
    // Narrower max-width (max-w-md ≈ 448px vs default max-w-2xl ≈ 672px) makes
    // text wrap similarly on mobile and desktop, so content height varies less
    // across widths and a single iframe height fits both better.
    return (
      <div className="bg-quiz-bg text-quiz-text min-h-screen">
        <main className="w-full max-w-md mx-auto px-3 py-4 sm:px-6 sm:py-6">
          <div className="flex flex-col items-center text-center">
            {children}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-quiz-bg text-quiz-text flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="w-full max-w-2xl bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 overflow-hidden relative">
        <div className="p-6 md:p-10 flex flex-col items-center text-center">
          {children}
        </div>
      </main>
    </div>
  );
}
