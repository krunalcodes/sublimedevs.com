import { Form, Head } from '@inertiajs/react';
import { SiGoogle } from 'react-icons/si';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes';
import { store } from '@/routes/register';

export default function Register() {
  return (
    <AuthLayout
      title="Create an account"
      description="Enter your details below to create your account"
    >
      <Head title="Register" />
      <div className="flex flex-col gap-6">
        <a
          href="/auth/google"
          className="flex w-full items-center justify-center gap-3 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
        >
          <SiGoogle className="h-5 w-5" />
          Sign in with Google
        </a>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with email
            </span>
          </div>
        </div>

        <Form
          {...store.form()}
          resetOnSuccess={['password', 'password_confirmation']}
          disableWhileProcessing
          className="flex flex-col gap-6"
        >
          {({ processing, errors }) => (
            <>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    autoFocus
                    tabIndex={1}
                    autoComplete="name"
                    name="name"
                    placeholder="Full name"
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    tabIndex={2}
                    autoComplete="email"
                    name="email"
                    placeholder="email@example.com"
                  />
                  <InputError message={errors.email} />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    tabIndex={3}
                    autoComplete="new-password"
                    name="password"
                    placeholder="Password"
                  />
                  <InputError message={errors.password} />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password_confirmation">
                    Confirm password
                  </Label>
                  <Input
                    id="password_confirmation"
                    type="password"
                    required
                    tabIndex={4}
                    autoComplete="new-password"
                    name="password_confirmation"
                    placeholder="Confirm password"
                  />
                  <InputError message={errors.password_confirmation} />
                </div>

                <Button
                  type="submit"
                  className="mt-2 w-full"
                  tabIndex={5}
                  data-test="register-user-button"
                >
                  {processing && <Spinner />}
                  Create account
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <TextLink href={login()} tabIndex={6}>
                  Log in
                </TextLink>
              </div>
            </>
          )}
        </Form>
      </div>
    </AuthLayout>
  );
}
