
export function MapSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-tech-gray-900 sm:text-4xl">
            Find Us
          </h2>
          <p className="mt-4 text-lg text-tech-gray-600">
            Visit our office in the vicinity of Dr. D.Y. Patil Campus, Pimpri.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl shadow-lg">
          <iframe
            title="CollabCraze Tech Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0301426767597!2d73.8151016!3d18.6211477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1975e4ed689354f%3A0xb7a2539b81a5a3d6!2sCollabCraze%20Tech!5e0!3m2!1sen!2sin!4v1715438030000"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
