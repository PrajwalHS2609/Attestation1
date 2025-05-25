import { client } from "@/sanity/client";
import Link from "next/link";
import "@/components/Style/style.css";
import { SanityDocument } from "next-sanity";

const SERVICE_QUERY = `*[_type == "ServiceCategory"] |order(publishedAt desc)[0...100]{
  _id,
  title,
  slug,
}`;

export default async function OtherServices() {
  const services = await client.fetch<SanityDocument[]>(SERVICE_QUERY);

  return (
    <div className="head-container">
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            <Link href={`/${service.slug.current}`}>{service.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
