'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { Property } from '@/types';

const bookingSchema = z
  .object({
    checkIn: z.string().min(1, 'Check-in date is required'),
    checkOut: z.string().min(1, 'Check-out date is required'),
    guests: z
      .number({ error: 'Guests must be a number' })
      .min(1, 'At least 1 guest')
      .max(20, 'Maximum 20 guests'),
  })
  .refine((data) => data.checkOut > data.checkIn, {
    message: 'Check-out must be after check-in',
    path: ['checkOut'],
  });

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  property: Property;
}

export default function BookingForm({ property }: BookingFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { guests: 1 },
  });

  const onSubmit = () => {
    window.alert(
      `Availability checked for ${property.title}! A host will confirm shortly.`
    );
  };

  return (
    <div
      className="rounded-lg p-2.5 md:p-[10px_50px]"
      style={{ boxShadow: '0 0 30px rgba(0,0,0,0.3)', borderRadius: '8px' }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 md:flex-row md:items-end"
      >
        <div className="flex-1">
          <label className="mb-1 block text-sm font-medium">Check-in</label>
          <input
            type="date"
            {...register('checkIn')}
            className="w-full rounded-lg border border-border p-2"
          />
          {errors.checkIn && (
            <p className="mt-1 text-xs text-red-500">
              {errors.checkIn.message}
            </p>
          )}
        </div>

        <div className="flex-1">
          <label className="mb-1 block text-sm font-medium">Check-out</label>
          <input
            type="date"
            {...register('checkOut')}
            className="w-full rounded-lg border border-border p-2"
          />
          {errors.checkOut && (
            <p className="mt-1 text-xs text-red-500">
              {errors.checkOut.message}
            </p>
          )}
        </div>

        <div className="flex-1">
          <label className="mb-1 block text-sm font-medium">Guest</label>
          <input
            type="number"
            min={1}
            max={20}
            {...register('guests')}
            className="w-full rounded-lg border border-border p-2"
          />
          {errors.guests && (
            <p className="mt-1 text-xs text-red-500">
              {errors.guests.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-brand py-3 text-base font-medium text-white transition-colors hover:bg-brand-hover md:w-auto"
        >
          Check Availability
        </button>
      </form>
    </div>
  );
}
