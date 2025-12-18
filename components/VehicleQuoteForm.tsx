"use client";

import { useState } from "react";

const VehicleQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    vehicleType: "",
    numberOfSeats: "",
    selectNumberOfVehicles: "",
    date1: "",
    date2: "",
    pickupLocation: "",
    dropLocation: "",
    additionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-wide">
            CAR RENTAL
          </p>
          <h2 className="font-lora text-4xl font-bold text-gray-900">
            Vehicle Quote Request
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Vehicle Type"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.vehicleType}
              onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Select number of seats"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.numberOfSeats}
              onChange={(e) => setFormData({ ...formData, numberOfSeats: e.target.value })}
            />
            <input
              type="text"
              placeholder="Select number of Vehicles"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.selectNumberOfVehicles}
              onChange={(e) => setFormData({ ...formData, selectNumberOfVehicles: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="date"
              placeholder="Date 1"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.date1}
              onChange={(e) => setFormData({ ...formData, date1: e.target.value })}
            />
            <input
              type="date"
              placeholder="Date 2"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.date2}
              onChange={(e) => setFormData({ ...formData, date2: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Pickup Location"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.pickupLocation}
              onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
            />
            <input
              type="text"
              placeholder="Drop Location"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.dropLocation}
              onChange={(e) => setFormData({ ...formData, dropLocation: e.target.value })}
            />
          </div>

          <div className="mb-6">
            <textarea
              placeholder="Additional Notes"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.additionalNotes}
              onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              SUBMIT NOW
            </button>
            <button
              type="button"
              className="bg-green-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-600 transition-colors"
            >
              WHATSAPP US
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VehicleQuoteForm;
