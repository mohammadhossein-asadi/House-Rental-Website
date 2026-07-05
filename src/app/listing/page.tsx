import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ListingContent } from "@/components/listing-content";
import { PropertyType, Amenity } from "@/types";

interface ListingPageProps {
  searchParams: {
    location?: string;
    propertyType?: string;
    amenities?: string;
    guests?: string;
    page?: string;
  };
}

export default function ListingPage({ searchParams }: ListingPageProps) {
  const initialFilters = {
    query: searchParams.location ?? "",
    checkIn: "",
    checkOut: "",
    guests: parseInt(searchParams.guests ?? "1"),
    propertyTypes: (searchParams.propertyType
      ? searchParams.propertyType.split(",")
      : []) as PropertyType[],
    amenities: (searchParams.amenities
      ? searchParams.amenities.split(",")
      : []) as Amenity[],
    page: parseInt(searchParams.page ?? "1"),
    pageSize: 6,
  };

  return (
    <>
      <Navbar variant="dark" />
      <div className="container mx-auto px-[7%]">
        <ListingContent initialFilters={initialFilters} />
      </div>
      <Footer />
    </>
  );
}
