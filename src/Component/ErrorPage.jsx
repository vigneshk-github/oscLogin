export default function ErrorPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
        role="alert"
      >
        <strong className="font-bold">Oops!</strong>
        <span className="block sm:inline">Please enter valid credentials.</span>
        <span className="block sm:inline">Please Refresh the Page</span>
      </div>
    </div>
  );
}
