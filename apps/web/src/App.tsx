import { useEffect, useState } from "react";

type HealthStatus = "checking" | "ok" | "unreachable";

function App() {
  const [status, setStatus] = useState<HealthStatus>("checking");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => (res.ok ? setStatus("ok") : setStatus("unreachable")))
      .catch(() => setStatus("unreachable"));
  }, []);

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900">CampusHub</h1>
      <p className="text-slate-600">
        Built exclusively for Fanshawe College students — every member is a verified student.
      </p>
      <p className="text-sm text-slate-500">
        API status:{" "}
        <span
          className={
            status === "ok"
              ? "font-medium text-emerald-600"
              : status === "unreachable"
                ? "font-medium text-red-600"
                : "font-medium text-slate-400"
          }
        >
          {status}
        </span>
      </p>
    </main>
  );
}

export default App;
