import LoginForm from '@/components/LoginForm';
import React, { Suspense } from 'react';

const LoadingPage = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <LoginForm/>
      </Suspense>
    </div>
  );
};

export default LoadingPage;