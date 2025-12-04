import { Transition } from '@headlessui/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useMemo, useState } from 'react';

import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import { AvatarDropzone } from '@/components/avatar-dropzone';
import DeleteUser from '@/components/delete-user';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContainer,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Combobox, type ComboboxOption } from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MultiSelect } from '@/components/ui/multi-select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { edit } from '@/routes/profile';
import { send } from '@/routes/verification';
import {
  type BreadcrumbItem,
  type Country,
  type Language,
  type SharedData,
  type Timezone,
  type User,
} from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Profile settings',
    href: edit().url,
  },
];

export default function Profile({
  mustVerifyEmail,
  status,
  countries = [],
  timezones = [],
  languages = [],
}: {
  mustVerifyEmail: boolean;
  status?: string;
  countries?: Country[];
  timezones?: Timezone[];
  languages?: Language[];
}) {
  const { auth } = usePage<SharedData>().props;
  const user: User = auth.user;

  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const countryOptions: ComboboxOption[] = useMemo(
    () =>
      countries.map((country) => ({
        value: country.id.toString(),
        label: country.name,
        flag: country.flag,
      })),
    [countries],
  );

  const timezoneOptions: ComboboxOption[] = useMemo(
    () =>
      timezones.map((timezone) => ({
        value: timezone.id.toString(),
        label: timezone.name,
      })),
    [timezones],
  );

  const languageOptions = useMemo(
    () =>
      languages.map((language) => ({
        value: language.id.toString(),
        label: language.name,
      })),
    [languages],
  );

  const { data, setData, patch, processing, errors, recentlySuccessful } =
    useForm({
      name: user.name || '',
      email: user.email || '',
      summary: user.summary || '',
      bio: user.bio || '',
      avatar: null as File | null,
      city: user.city || '',
      country_id: user.country_id?.toString() || '',
      timezone_id: user.timezone_id?.toString() || '',
      languages: (user.languages || []).map((l) => l.id.toString()),
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData('avatar', avatarFile);
    patch(ProfileController.update.url(), {
      preserveScroll: true,
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Profile settings" />
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex-1">
          <section className="space-y-6">
            <CardContainer>
              <Card>
                <CardHeader>
                  <CardTitle>Your Developer Profile</CardTitle>
                  <CardDescription>
                    Please complete as much of your profile as you can, giving
                    as much detail as possible, focussing especially on your
                    skills, interests and experience.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-2 md:max-w-md">
                      <Label htmlFor="name">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoComplete="name"
                        placeholder="Full name"
                      />
                      <InputError message={errors.name} />
                    </div>

                    <div className="grid gap-2 md:max-w-md">
                      <Label htmlFor="email">
                        Email address{' '}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                        placeholder="Email address"
                      />
                      <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="avatar">Avatar</Label>
                      <AvatarDropzone
                        value={avatarFile || user.avatar || null}
                        onChange={(file) => {
                          setAvatarFile(file);
                          setData('avatar', file);
                        }}
                        userName={user.name}
                      />
                      <InputError message={errors.avatar} />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="summary">
                        Summary <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="summary"
                        value={data.summary}
                        onChange={(e) => setData('summary', e.target.value)}
                        required
                        placeholder="Brief summary about yourself"
                        maxLength={500}
                      />
                      <InputError message={errors.summary} />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="bio">
                        Bio <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="bio"
                        value={data.bio}
                        onChange={(e) => setData('bio', e.target.value)}
                        required
                        placeholder="Tell us about yourself"
                        rows={6}
                        maxLength={5000}
                      />
                      <InputError message={errors.bio} />
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <div className="grid gap-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={data.city}
                          onChange={(e) => setData('city', e.target.value)}
                          placeholder="Your city"
                        />
                        <InputError message={errors.city} />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="country_id">
                          Country <span className="text-destructive">*</span>
                        </Label>
                        <Combobox
                          options={countryOptions}
                          value={data.country_id}
                          onValueChange={(value) =>
                            setData('country_id', value)
                          }
                          placeholder="Select a country"
                          searchPlaceholder="Search countries..."
                        />
                        <InputError message={errors.country_id} />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="timezone_id">Timezone</Label>
                        <Combobox
                          options={timezoneOptions}
                          value={data.timezone_id}
                          onValueChange={(value) =>
                            setData('timezone_id', value)
                          }
                          placeholder="Select a timezone"
                          searchPlaceholder="Search timezones..."
                        />
                        <InputError message={errors.timezone_id} />
                      </div>
                    </div>

                    <div className="grid gap-2 md:max-w-md">
                      <Label htmlFor="languages">Languages</Label>
                      <MultiSelect
                        options={languageOptions}
                        defaultValue={data.languages}
                        onValueChange={(values) =>
                          setData('languages', values as string[])
                        }
                        placeholder="Select languages"
                      />
                      <InputError message={errors.languages} />
                    </div>

                    {mustVerifyEmail && user.email_verified_at === null && (
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Your email address is unverified.{' '}
                          <Link
                            href={send()}
                            as="button"
                            className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                          >
                            Click here to resend the verification email.
                          </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                          <div className="mt-2 text-sm font-medium text-green-600">
                            A new verification link has been sent to your email
                            address.
                          </div>
                        )}
                      </div>
                    )}

                    <CardFooter className="px-0">
                      <div className="flex items-center gap-4">
                        <Button
                          type="submit"
                          disabled={processing}
                          data-test="update-profile-button"
                        >
                          Save
                        </Button>

                        <Transition
                          show={recentlySuccessful}
                          enter="transition ease-in-out"
                          enterFrom="opacity-0"
                          leave="transition ease-in-out"
                          leaveTo="opacity-0"
                        >
                          <p className="text-sm text-neutral-600">Saved</p>
                        </Transition>
                      </div>
                    </CardFooter>
                  </form>
                </CardContent>
              </Card>
            </CardContainer>

            <CardContainer>
              <Card>
                <CardHeader>
                  <CardTitle>Delete Account</CardTitle>
                  <CardDescription>
                    Permanently delete your account and all of its data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DeleteUser />
                </CardContent>
              </Card>
            </CardContainer>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
