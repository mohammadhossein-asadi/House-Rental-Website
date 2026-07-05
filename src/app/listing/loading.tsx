export default function ListingLoading() {
  return (
    <div className="container mx-auto px-[7%] py-12">
      <div className="animate-pulse">
        <div className="h-4 w-24 bg-muted rounded mb-4" />
        <div className="h-8 w-96 bg-muted rounded mb-8" />
        <div className="flex gap-8">
          <div className="flex-1 space-y-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-4 border-t border-border pt-6">
                <div className="w-[40%] h-48 bg-muted rounded-xl" />
                <div className="flex-1 space-y-3">
                  <div className="h-3 w-32 bg-muted rounded" />
                  <div className="h-5 w-64 bg-muted rounded" />
                  <div className="h-3 w-48 bg-muted rounded" />
                  <div className="h-4 w-20 bg-muted rounded" />
                </div>
              </div>
            ))}
          </div>
          <div className="w-[25%] h-96 bg-muted rounded border" />
        </div>
      </div>
    </div>
  );
}
