const PartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide">
            OUR PARTNER
          </p>
        </div>

        <div className="flex justify-center items-center gap-16 flex-wrap">
          <div className="text-center">
            <svg className="w-32 h-24 mx-auto" viewBox="0 0 100 80" fill="none">
              <text x="10" y="40" fontSize="12" fill="#666" fontWeight="bold">VIEWSLAN</text>
            </svg>
          </div>
          <div className="text-center">
            <svg className="w-32 h-24 mx-auto" viewBox="0 0 100 80" fill="none">
              <text x="20" y="40" fontSize="12" fill="#0056D8" fontWeight="bold">NDTC</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
