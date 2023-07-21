const Shimmer = () => {
  return (
    <div className="flex gap-8 flex-wrap mt-4 shadow-lg" data-testid="shimmer">
      {Array(20)
        .fill("")
        .map((e,index) => (
          <div key={index} className="w-52 ">
            <p className="bg-gray-200 w-full h-32 mb-2 rounded-lg"></p>
            <div className="flex flex-col gap-3">
              <p className="bg-gray-200 w-44 h-3"></p>
              <p className="bg-gray-200 w-40 h-3"></p>
              <p className="bg-gray-200 w-40 h-3"></p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
