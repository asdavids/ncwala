import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Plane, Bus, Car } from 'lucide-react'

export default function Transport() {
  return (
    <>
      <Helmet>
        <title>Transport to Ncwala - Flights, Buses & Car Hire | Zambia</title>
        <meta name="description" content="Transport options to Chipata for Ncwala: flights, long-distance buses, car hire, and local transport information." />
        <meta name="keywords" content="transport, flights, buses, car hire, Chipata, Ncwala travel" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="font-cinzel-decorative text-5xl text-ncwala-red mb-4 text-center">
          Transport Guide
        </h1>

        {/* Flights */}
        <section className="my-16">
          <div className="flex items-center gap-3 mb-8">
            <Plane className="w-8 h-8 text-ncwala-gold" />
            <h2 className="font-cinzel text-3xl text-ncwala-black">Flying to Chipata</h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="font-cinzel text-lg text-ncwala-red mb-4">Chipata International Airport (CDA)</h3>
            <p className="text-gray-700 mb-6">
              Chipata Airport connects to major cities. Multiple daily flights from Lusaka (1 hour flight). Airlines operating routes:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: 'Northern Air', phone: '+260 955 123456', website: 'northernair.co.zm' },
                { name: 'Zambia Airways', phone: '+260 955 234567', website: 'zambia-airways.com' },
                { name: 'FastJet', phone: '+260 955 345678', website: 'fastjetafrica.com' },
              ].map((airline, idx) => (
                <div key={idx} className="border border-ncwala-gold p-4 rounded">
                  <h4 className="font-cinzel text-ncwala-red mb-2">{airline.name}</h4>
                  <p className="text-sm text-gray-700 mb-1"><strong>Phone:</strong> {airline.phone}</p>
                  <p className="text-sm text-blue-600">{airline.website}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Buses */}
        <section className="my-16">
          <div className="flex items-center gap-3 mb-8">
            <Bus className="w-8 h-8 text-ncwala-gold" />
            <h2 className="font-cinzel text-3xl text-ncwala-black">Long-Distance Buses</h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-gray-700 mb-6">
              Lusaka to Chipata is approximately 600km (8-10 hours drive). Several bus operators provide regular service:
            </p>
            <div className="space-y-4">
              {[
                { name: 'Mazhandu Coaches', route: 'Lusaka ↔ Chipata', frequency: 'Daily departures', contact: '+260 211 123456' },
                { name: 'Intercity Travels', route: 'Lusaka ↔ Chipata', frequency: '2-3x weekly', contact: '+260 211 234567' },
                { name: 'Golden Eagle', route: 'Lusaka ↔ Chipata', frequency: 'Daily departures', contact: '+260 211 345678' },
              ].map((bus, idx) => (
                <div key={idx} className="border border-ncwala-gold p-4 rounded">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-cinzel text-ncwala-red mb-1">{bus.name}</p>
                      <p className="text-sm text-gray-700"><strong>Route:</strong> {bus.route}</p>
                      <p className="text-sm text-gray-700"><strong>Frequency:</strong> {bus.frequency}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm"><strong>Contact:</strong> {bus.contact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Car Hire */}
        <section className="my-16">
          <div className="flex items-center gap-3 mb-8">
            <Car className="w-8 h-8 text-ncwala-gold" />
            <h2 className="font-cinzel text-3xl text-ncwala-black">Car Hire</h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-gray-700 mb-6">
              Self-drive is an excellent option. M10 highway is well-maintained. International driving permit recommended.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Avis Zambia', city: 'Lusaka & Chipata', phone: '+260 955 500000' },
                { name: 'Budget Car Hire', city: 'Lusaka Airport', phone: '+260 955 600000' },
                { name: 'Hertz Zambia', city: 'Lusaka', phone: '+260 955 700000' },
                { name: 'Local Rentals', city: 'Chipata', phone: '+260 962 800000' },
              ].map((car, idx) => (
                <div key={idx} className="border border-ncwala-gold p-4 rounded">
                  <h4 className="font-cinzel text-ncwala-red mb-2">{car.name}</h4>
                  <p className="text-sm text-gray-700 mb-1"><strong>Locations:</strong> {car.city}</p>
                  <p className="text-sm text-gray-700"><strong>Phone:</strong> {car.phone}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-ncwala-black text-ncwala-white rounded">
              <h4 className="font-cinzel mb-2">Driving Tips</h4>
              <ul className="text-sm space-y-1">
                <li>• Drive during daylight hours</li>
                <li>• Keep fuel tank topped up</li>
                <li>• Carry spare tire and tools</li>
                <li>• International driving permit required</li>
                <li>• Drive left side of road</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Transport */}
        <section className="my-16">
          <h2 className="font-cinzel text-3xl text-ncwala-black mb-8">Local Transport in Chipata</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Registered Taxis',
                desc: 'Available throughout Chipata. Negotiate fares beforehand. Safe option for getting around town.',
              },
              {
                title: 'Minibuses (Coasters)',
                desc: 'Shared transport for local routes. Very affordable. Popular with locals. Buy tickets at bus stops.',
              },
              {
                title: 'Mobile Taxis (Apps)',
                desc: 'Uber and local taxi apps available in Chipata. Reliable, tracked, cashless payment option.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-ncwala-gold rounded-lg p-6">
                <h3 className="font-cinzel text-lg text-ncwala-red mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
