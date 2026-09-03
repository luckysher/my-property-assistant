"use client";
import React, { useMemo, useState } from "react";

const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Gurugram, Haryana",
    price: 18500000,
    beds: 4,
    baths: 4,
    area: 3200,
    type: "Villa",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Premium 3 BHK Apartment",
    location: "Noida, Uttar Pradesh",
    price: 9500000,
    beds: 3,
    baths: 3,
    area: 1850,
    type: "Apartment",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Contemporary Family Home",
    location: "Delhi",
    price: 12500000,
    beds: 3,
    baths: 2,
    area: 2100,
    type: "House",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Elegant Downtown Apartment",
    location: "Mumbai, Maharashtra",
    price: 24000000,
    beds: 3,
    baths: 3,
    area: 1650,
    type: "Apartment",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Green Valley Villa",
    location: "Pune, Maharashtra",
    price: 14500000,
    beds: 4,
    baths: 4,
    area: 2800,
    type: "Villa",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Affordable 2 BHK Home",
    location: "Jaipur, Rajasthan",
    price: 5200000,
    beds: 2,
    baths: 2,
    area: 1250,
    type: "House",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    title: "Sea View Luxury Apartment",
    location: "Goa",
    price: 17500000,
    beds: 3,
    baths: 3,
    area: 1900,
    type: "Apartment",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    title: "Spacious 4 BHK Residence",
    location: "Bangalore, Karnataka",
    price: 13800000,
    beds: 4,
    baths: 3,
    area: 2500,
    type: "House",
    image:
      "https://images.unsplash.com/photo-1600047508788-7864a6e1e7e4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    title: "Luxury Penthouse",
    location: "Hyderabad, Telangana",
    price: 22000000,
    beds: 4,
    baths: 4,
    area: 3500,
    type: "Penthouse",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    title: "Modern City Apartment",
    location: "Chandigarh",
    price: 7800000,
    beds: 3,
    baths: 2,
    area: 1550,
    type: "Apartment",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },
];

const formatPrice = (price) => {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  }

  return `₹${(price / 100000).toFixed(1)} L`;
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("All");
  const [sort, setSort] = useState("default");

  const filteredProperties = useMemo(() => {
    let result = properties.filter((property) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        property.title.toLowerCase().includes(searchText) ||
        property.location.toLowerCase().includes(searchText);

      const matchesType =
        propertyType === "All" || property.type === propertyType;

      return matchesSearch && matchesType;
    });

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, propertyType, sort]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-indigo-600">
              VertexLiving
            </h1>
            <p className="text-xs text-gray-500">
              Find your perfect property
            </p>
          </div>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#" className="hover:text-indigo-600">
              Buy
            </a>
            <a href="#" className="hover:text-indigo-600">
              Rent
            </a>
            <a href="#" className="hover:text-indigo-600">
              Sell
            </a>
            <a href="#" className="hover:text-indigo-600">
              Contact
            </a>
          </nav>

          <button className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">
            List Property
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-indigo-700">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-200">
              Real Estate Marketplace
            </p>

            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Find a place you'll love to live
            </h2>

            <p className="mt-4 text-lg text-indigo-100">
              Discover homes, apartments and luxury properties in your
              favorite locations.
            </p>
          </div>

          {/* Search */}
          <div className="mt-8 rounded-2xl bg-white p-3 shadow-xl">
            <div className="grid gap-3 md:grid-cols-[1fr_200px_180px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by city or property name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500"
              >
                <option value="All">All Properties</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="House">House</option>
                <option value="Penthouse">Penthouse</option>
              </select>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500"
              >
                <option value="default">Sort By</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-7 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Featured Properties</h2>
            <p className="mt-1 text-sm text-gray-500">
              {filteredProperties.length} properties found
            </p>
          </div>

          <button className="hidden rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 sm:block">
            Map View
          </button>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="rounded-2xl border bg-white py-20 text-center">
            <h3 className="text-xl font-semibold">No properties found</h3>
            <p className="mt-2 text-gray-500">
              Try changing your search or property type.
            </p>
          </div>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 sm:flex-row">
          <div>
            <h3 className="font-bold text-indigo-600">PropertyHub</h3>
            <p className="mt-1 text-sm text-gray-500">
              Your trusted property marketplace.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 PropertyHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function PropertyCard({ property }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow">
          {property.type}
        </div>

        <button
          onClick={() => setFavorite(!favorite)}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow"
          aria-label="Favorite property"
        >
          {favorite ? "♥" : "♡"}
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold">{property.title}</h3>

            <p className="mt-1 text-sm text-gray-500">
              📍 {property.location}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-2xl font-bold text-indigo-600">
            {formatPrice(property.price)}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t pt-4 text-sm text-gray-600">
          <span>
            🛏️ <strong>{property.beds}</strong> Beds
          </span>

          <span>
            🛁 <strong>{property.baths}</strong> Baths
          </span>

          <span>
            📐 <strong>{property.area}</strong> sq.ft
          </span>
        </div>

        <button className="mt-5 w-full rounded-xl border border-indigo-600 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white">
          View Details
        </button>
      </div>
    </article>
  );
}