export default function PropertyLoading() {
  return (
    <div className="pt-24 px-[12%] max-md:px-[5%] animate-pulse">
      {/* Header skeleton */}
      <div className="mb-6">
        <div className="h-8 w-64 bg-muted rounded mb-4" />
        <div className="h-4 w-48 bg-muted rounded" />
      </div>

      {/* Gallery skeleton */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-96 mb-6">
        <div className="col-span-2 row-span-2 bg-muted rounded-xl" />
        <div className="bg-muted rounded-xl" />
        <div className="bg-muted rounded-xl" />
        <div className="bg-muted rounded-xl" />
        <div className="bg-muted rounded-xl" />
      </div>

      {/* Quick info skeleton */}
      <div className="mb-6 space-y-2">
        <div className="h-5 w-72 bg-muted rounded" />
        <div className="h-4 w-48 bg-muted rounded" />
        <div className="h-5 w-24 bg-muted rounded" />
      </div>

      {/* Booking form skeleton */}
      <div className="h-24 bg-muted rounded-xl mb-6" />

      {/* Details list skeleton */}
      <div className="space-y-4 mb-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-6 h-6 bg-muted rounded" />
            <div className="space-y-1">
              <div className="h-4 w-32 bg-muted rounded" />
              <div className="h-3 w-64 bg-muted rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
