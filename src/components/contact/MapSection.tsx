
export function MapSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-tech-gray-900 sm:text-4xl">
            Find Us
          </h2>
          <p className="mt-4 text-lg text-tech-gray-600">
            Visit our office in the heart of the Innovation District.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl shadow-lg">
          <iframe
            title="CollabCraze Tech Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.76569838493!2d-122.4481705418945!3d37.75781799999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1654728414294!5m2!1sen!2sca"
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
