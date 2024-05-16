const CreateShop = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
        Create Your Own Shop
      </h2>
      <div className="lg:w-2/3 mx-auto shadow-lg p-10 bg-gradient-to-r from-pink-500 to-yellow-500">
        <div className="lg:flex gap-10 mb-3">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Shop Name</span>
            </div>
            <input
              type="text"
              placeholder="Shop Name"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Shop Logo</span>
            </div>
            {/* <input type="file" placeholder="Shop Logo" className="input input-bordered w-full " /> */}
            <input
              type="file"
              className="file-input file-input-bordered file-input-secondary w-full "
            />
          </label>
        </div>
        <div className="lg:flex gap-10 mb-3">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Shop Location</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div className="lg:flex gap-10">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Shop-Owner-Email</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Shop-Owner-Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div className="mt-8 w-full">
          <button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 btn text-white">
            Create Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateShop;
