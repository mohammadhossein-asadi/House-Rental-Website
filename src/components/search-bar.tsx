'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

const searchSchema = z.object({
  location: z.string().min(1, 'Location is required'),
  checkIn: z.string().min(1, 'Check-in date is required'),
  checkOut: z.string().min(1, 'Check-out date is required'),
  guests: z.number().min(1, 'At least 1 guest required'),
});

type SearchFormData = z.infer<typeof searchSchema>;

export function SearchBar() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = (data: SearchFormData) => {
    const params = new URLSearchParams({
      location: data.location,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      guests: data.guests.toString(),
    });
    router.push(`/listing?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[70%] bg-white rounded-pill p-4 flex flex-col md:flex-row items-center gap-4 shadow-lg"
    >
      <div className="flex-1 w-full">
        <label className="block text-sm font-bold text-text mb-1">Location</label>
        <input
          type="text"
          placeholder="Where are you going?"
          {...register('location')}
          className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
        />
        {errors.location && (
          <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>
        )}
      </div>

      <div className="flex-1 w-full">
        <label className="block text-sm font-bold text-text mb-1">Check-in</label>
        <input
          type="date"
          {...register('checkIn')}
          className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
        />
        {errors.checkIn && (
          <p className="text-red-500 text-xs mt-1">{errors.checkIn.message}</p>
        )}
      </div>

      <div className="flex-1 w-full">
        <label className="block text-sm font-bold text-text mb-1">Check-out</label>
        <input
          type="date"
          {...register('checkOut')}
          className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
        />
        {errors.checkOut && (
          <p className="text-red-500 text-xs mt-1">{errors.checkOut.message}</p>
        )}
      </div>

      <div className="flex-1 w-full">
        <label className="block text-sm font-bold text-text mb-1">Guests</label>
        <input
          type="number"
          placeholder="Add Guest"
          min={1}
          {...register('guests', { valueAsNumber: true })}
          className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
        />
        {errors.guests && (
          <p className="text-red-500 text-xs mt-1">{errors.guests.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-12 h-12 bg-[#ff5361] rounded-full flex items-center justify-center text-white hover:bg-[#e64957] transition-colors mt-auto"
      >
        <Search size={20} />
      </button>
    </form>
  );
}