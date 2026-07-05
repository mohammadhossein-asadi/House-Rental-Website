import { Home, Paintbrush, MapPin, Heart } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Entire Home',
    description: 'You will have the entire flat for you.',
  },
  {
    icon: Paintbrush,
    title: 'Enhanced Clean',
    description:
      "This host has committed to Staybnb's cleaning process.",
  },
  {
    icon: MapPin,
    title: 'Great Location',
    description:
      '90% of recent guests gave the location a 5 star rating.',
  },
  {
    icon: Heart,
    title: 'Great Check-in Experience',
    description:
      '100% of recent guests gave the check-in process a 5 star rating',
  },
];

export default function PropertyDetailsList() {
  return (
    <ul className="mt-6 space-y-5">
      {features.map((feature) => (
        <li key={feature.title} className="relative ml-[50px]">
          <feature.icon
            size={20}
            className="absolute left-[-50px] top-0 text-text"
          />
          <span className="font-semibold">{feature.title}</span>
          <p className="text-text-muted mt-1 text-sm">
            {feature.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
