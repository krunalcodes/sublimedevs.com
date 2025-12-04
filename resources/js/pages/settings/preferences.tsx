import { Transition } from '@headlessui/react';
import { Head, useForm } from '@inertiajs/react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';

import PreferencesController from '@/actions/App/Http/Controllers/Settings/PreferencesController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContainer,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import AppLayout from '@/layouts/app-layout';
import { cn } from '@/lib/utils';
import { edit } from '@/routes/preferences/index';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Preferences',
    href: edit().url,
  },
];

const openToOptions = [
  { value: 'part-time-freelance', label: 'Part-Time Freelance' },
  { value: 'full-time-freelance', label: 'Full-Time Freelance' },
  { value: 'part-time-employment', label: 'Part-Time Employment' },
  { value: 'full-time-employment', label: 'Full-Time Employment' },
  { value: 'mentoring', label: 'Mentoring' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'contract', label: 'Contract' },
];

const roleLevelOptions = [
  { value: 'junior', label: 'Junior' },
  { value: 'mid', label: 'Mid' },
  { value: 'senior', label: 'Senior' },
  { value: 'lead', label: 'Lead' },
  { value: 'staff', label: 'Staff' },
  { value: 'manager', label: 'Manager' },
  { value: 'c-level', label: 'C-Level' },
];

const environmentOptions = [
  { value: 'office', label: 'Office' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'remote', label: 'Remote' },
];

export default function Preferences({
  user,
}: {
  user: {
    profile_visibility: string;
    search_status: string | null;
    hourly_rate: number | null;
    available_to_start_on: string | null;
    open_to: string[];
    role_levels: string[];
    environments: string[];
  };
}) {
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const { data, setData, patch, processing, errors, recentlySuccessful } =
    useForm({
      profile_visibility: user.profile_visibility || 'private',
      search_status: user.search_status || '',
      hourly_rate: user.hourly_rate?.toString() || '',
      available_to_start_on: user.available_to_start_on || '',
      open_to: user.open_to || [],
      role_levels: user.role_levels || [],
      environments: user.environments || [],
    });

  const selectedDate = data.available_to_start_on
    ? new Date(data.available_to_start_on)
    : undefined;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    patch(PreferencesController.update.url(), {
      preserveScroll: true,
    });
  };

  const handleOpenToChange = (value: string, checked: boolean) => {
    const current = data.open_to;
    if (checked) {
      setData('open_to', [...current, value]);
    } else {
      setData(
        'open_to',
        current.filter((v) => v !== value),
      );
    }
  };

  const handleRoleLevelChange = (value: string, checked: boolean) => {
    const current = data.role_levels;
    if (checked) {
      setData('role_levels', [...current, value]);
    } else {
      setData(
        'role_levels',
        current.filter((v) => v !== value),
      );
    }
  };

  const handleEnvironmentChange = (value: string, checked: boolean) => {
    const current = data.environments;
    if (checked) {
      setData('environments', [...current, value]);
    } else {
      setData(
        'environments',
        current.filter((v) => v !== value),
      );
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Preferences" />
      <div className="mx-auto w-full max-w-5xl px-4 py-6">
        <div className="flex-1">
          <CardContainer>
            <Card>
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>
                  Manage your account preferences and visibility settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="profile_visibility">
                        Profile Visibility
                      </Label>
                      <Switch
                        id="profile_visibility"
                        checked={data.profile_visibility === 'public'}
                        onCheckedChange={(checked) =>
                          setData(
                            'profile_visibility',
                            checked ? 'public' : 'private',
                          )
                        }
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {data.profile_visibility === 'public'
                        ? 'Your profile is visible to everyone'
                        : 'Your profile is private'}
                    </p>
                    <InputError message={errors.profile_visibility} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="search_status">Search Status</Label>
                    <RadioGroup
                      value={data.search_status || ''}
                      onValueChange={(value) => setData('search_status', value)}
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem
                          value="open"
                          id="search-open"
                          className="mt-0.5"
                        />
                        <div className="flex-1">
                          <Label
                            htmlFor="search-open"
                            className="cursor-pointer font-normal"
                          >
                            Open
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Your profile will be public.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem
                          value="not-available"
                          id="search-not-available"
                          className="mt-0.5"
                        />
                        <div className="flex-1">
                          <Label
                            htmlFor="search-not-available"
                            className="cursor-pointer font-normal"
                          >
                            Not Available
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Your profile will be public with a "Not available"
                            badge.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem
                          value="invisible"
                          id="search-invisible"
                          className="mt-0.5"
                        />
                        <div className="flex-1">
                          <Label
                            htmlFor="search-invisible"
                            className="cursor-pointer font-normal"
                          >
                            Invisible
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Your profile will be hidden from search results.
                          </p>
                        </div>
                      </div>
                    </RadioGroup>
                    <InputError message={errors.search_status} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="hourly_rate">Hourly Rate</Label>
                    <Input
                      id="hourly_rate"
                      type="number"
                      step="0.01"
                      min="0"
                      value={data.hourly_rate}
                      onChange={(e) => setData('hourly_rate', e.target.value)}
                      placeholder="0.00"
                    />
                    <InputError message={errors.hourly_rate} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="available_to_start_on">
                      Available to Start On
                    </Label>
                    <Popover
                      open={datePickerOpen}
                      onOpenChange={setDatePickerOpen}
                    >
                      <PopoverTrigger asChild>
                        <Button
                          id="available_to_start_on"
                          variant="outline"
                          className={cn(
                            'w-full justify-start text-left font-normal',
                            !selectedDate && 'text-muted-foreground',
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? (
                            format(selectedDate, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => {
                            if (date) {
                              setData(
                                'available_to_start_on',
                                format(date, 'yyyy-MM-dd'),
                              );
                              setDatePickerOpen(false);
                            } else {
                              setData('available_to_start_on', '');
                            }
                          }}
                          disabled={(date) => {
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            return date < today;
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <InputError message={errors.available_to_start_on} />
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="grid gap-4">
                      <Label>Open To</Label>
                      <div className="grid gap-3">
                        {openToOptions.map((option) => (
                          <div
                            key={option.value}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`open_to_${option.value}`}
                              checked={data.open_to.includes(option.value)}
                              onCheckedChange={(checked) =>
                                handleOpenToChange(
                                  option.value,
                                  checked === true,
                                )
                              }
                            />
                            <Label
                              htmlFor={`open_to_${option.value}`}
                              className="cursor-pointer font-normal"
                            >
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                      <InputError message={errors.open_to} />
                    </div>

                    <div className="grid gap-4">
                      <Label>Role Level</Label>
                      <div className="grid gap-3">
                        {roleLevelOptions.map((option) => (
                          <div
                            key={option.value}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`role_level_${option.value}`}
                              checked={data.role_levels.includes(option.value)}
                              onCheckedChange={(checked) =>
                                handleRoleLevelChange(
                                  option.value,
                                  checked === true,
                                )
                              }
                            />
                            <Label
                              htmlFor={`role_level_${option.value}`}
                              className="cursor-pointer font-normal"
                            >
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                      <InputError message={errors.role_levels} />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <Label>Environments</Label>
                    <div className="flex flex-wrap gap-4">
                      {environmentOptions.map((option) => (
                        <div
                          key={option.value}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`environment_${option.value}`}
                            checked={data.environments.includes(option.value)}
                            onCheckedChange={(checked) =>
                              handleEnvironmentChange(
                                option.value,
                                checked === true,
                              )
                            }
                          />
                          <Label
                            htmlFor={`environment_${option.value}`}
                            className="cursor-pointer font-normal"
                          >
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                    <InputError message={errors.environments} />
                  </div>

                  <CardFooter className="px-0">
                    <div className="flex items-center gap-4">
                      <Button type="submit" disabled={processing}>
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
        </div>
      </div>
    </AppLayout>
  );
}
