import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ImageGallery from "@/components/image-gallery";
import PropertyHeader from "@/components/property-header";
import PropertyQuickInfo from "@/components/property-quick-info";
import BookingForm from "@/components/booking-form";
import PropertyDetailsList from "@/components/property-details-list";
import PropertyDescription from "@/components/property-description";
import MapSection from "@/components/map-section";
import HostInfo from "@/components/host-info";
import { properties } from "@/data/properties";
import type { Metadata } from "next";

interface PropertyPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PropertyPageProps): Metadata {
  const property = properties.find((p) => p.slug === params.slug);
  if (!property) return { title: "Property Not Found" };
  return {
    title: `${property.title} - ${property.location}`,
    description: property.description,
  };
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = properties.find((p) => p.slug === params.slug);

  if (!property) {
    notFound();
  }

  return (
    <>
      <Navbar variant="light" />
      <div className="px-[12%] max-md:px-[5%]">
        <PropertyHeader
          title={property.title}
          rating={property.rating}
          reviewCount={property.reviewCount}
          location={property.location}
        />
        <ImageGallery images={property.galleryImages} title={property.title} />
        <PropertyQuickInfo
          hostName={property.host.name}
          guests={property.guests}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          pricePerDay={property.pricePerDay}
        />
        <hr className="border-border max-w-[800px] my-5" />
        <BookingForm property={property} />
        <PropertyDetailsList />
        <hr className="border-border max-w-[800px] my-5" />
        <PropertyDescription description={property.description} />
        <hr className="border-border max-w-[800px] my-5" />
        <MapSection embedUrl={property.mapEmbedUrl} address={property.location} />
        <hr className="border-border max-w-[800px] my-5" />
        <HostInfo host={property.host} />
      </div>
      <div className="container mx-auto px-[7%]">
        <Footer />
      </div>
    </>
  );
}
