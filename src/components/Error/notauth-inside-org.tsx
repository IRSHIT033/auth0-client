const NotAuthInsideOrg = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col justify-center items-center gap-4">
      <div className="w-full p-5 flex flex-col justify-center items-center gap-4    max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          You are not authorized to view this organization
        </h1>
      </div>
    </div>
  );
};

export default NotAuthInsideOrg;
