'use client';
import AuthContext from '@/components/AuthContext';
import Navigation from '@/components/Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface Props {
  children?: React.ReactNode;
}
const queryClient = new QueryClient();

export const NextProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext>{children}</AuthContext>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export const NextLayout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Navigation />
      {children}
    </div>
  );
};
