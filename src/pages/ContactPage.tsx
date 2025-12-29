const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="max-w-lg mx-auto w-full">
          <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400"
                id="fullName"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                Comment
              </label>
              <textarea
                className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400"
                id="comment"
                placeholder="Your comment"
                rows={5}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="max-w-lg mx-auto w-full">
          <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 h-full">
            <h2 className="text-2xl font-bold mb-6">Our Contact Information</h2>
            <div className="space-y-4 text-gray-700">
                <p><span className="font-bold">Address:</span> 123 Furniture Lane, Addis Ababa, Ethiopia</p>
                <p><span className="font-bold">Phone:</span> 251921324902</p>
                <p><span className="font-bold">Email:</span> contact@kehalifurniture.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;