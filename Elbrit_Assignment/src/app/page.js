'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Header, Footer } from '@/components'

// Professional Loading Component
const LoadingSpinner = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80 z-50">
    <div className="relative">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
      {/* Loading Text */}
      <div className="mt-4 text-center text-gray-600 font-semibold">
        Loading...
      </div>
    </div>
  </div>
);

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="p-4 text-center">
    <h2 className="text-xl font-bold text-red-600">Something went wrong</h2>
    <p className="text-gray-600">{error.message}</p>
    <button 
      onClick={resetErrorBoundary}
      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Try again
    </button>
  </div>
);

// Dynamic imports with single loading state
const VitaminLandingPage = dynamic(() => import('@/components/VitaminLandingPage'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const BetterIngredients = dynamic(() => import('@/components/BetterIngredients'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const BlogGrid = dynamic(() => import('@/components/BlogGrid'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={(error) => console.error(error)}>
        <Suspense fallback={<LoadingSpinner />}>
          <div>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <VitaminLandingPage />
            </ErrorBoundary>
          </div>
          <div>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <BetterIngredients />
            </ErrorBoundary>
          </div>
          <div>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <BlogGrid />
            </ErrorBoundary>
          </div>
        </Suspense>
      </ErrorBoundary>
      <div>
        <Footer />
      </div>
    </div>
  );
}