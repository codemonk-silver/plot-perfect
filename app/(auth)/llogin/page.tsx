// app/login/page.tsx

import LoginClient from './LoginClient';

interface LoginPageProps {
  searchParams?: {
    redirect?: string;
  };
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  const redirect = searchParams?.redirect ?? '/dashboard';

  return <LoginClient redirect={redirect} />;
}