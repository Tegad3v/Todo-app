import { useLocation } from "react-router";

function Footer({ tasks }) {
  const location = useLocation().pathname;

  return (
    <>
      <footer className="mt-auto bg-green-950 h-20">
        {location == "/todo" ? (
          <div className="h-full w-full flex items-center justify-between capitalize text-white text-base p-5">
            <p>total: {tasks.length}</p>

            <div className="flex gap-5">
              <p className="relative pl-4 before:h-2 before:w-2 before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-green-400 before:rounded-full">
                {tasks.filter((i) => i.completed).length} completed
              </p>

              <p className="relative pl-4 before:h-2 before:w-2 before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-red-400 before:rounded-full">
                {tasks.filter((i) => !i.completed).length} pending
              </p>
            </div>
          </div>
        ) : (
          <div className="h-full w-full flex  items-center justify-center gap-3 text-white text-sm p-5">
            <p className="text-green-100/80">
              © {new Date().getFullYear()} Todo App · Stay focused
            </p>
          </div>
        )}
      </footer>
    </>
  );
}

export default Footer;
