export async function login(userData: { email: string; password: string }) {
  const url = process.env.NEXT_PUBLIC_BACKEND_API + "/api/auth/login";
  const response = await fetch(url, {
    method: "POST",
  });
}
