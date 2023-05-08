"use client";

const fetchLogoutApi = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/logout", {
      method: "POST",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
const Logout = async () => {
  const logout: any = await fetchLogoutApi();
  return (
    <div>
      <button
        type="button"
        onClick={() => logout()}
        className="btn-bg md:px-4 md:py-3 px-2 py-1 md:text-xl text-sm font-bold outline-none border-none rounded-[10px]"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
