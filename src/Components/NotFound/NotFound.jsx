
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-green-900 text-white p-5">
            <h1 className="text-9xl font-extrabold mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-lg mb-6 max-w-md text-center">
                Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <h1 className="text-[20rem] font-extrabold">404</h1>
            </div>
        </div>
    );
};

export default NotFound;