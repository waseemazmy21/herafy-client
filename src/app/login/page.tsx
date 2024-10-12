"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useUser } from "../contexts/user-context";
import Loading from "@/components/global/loading";
import AlertComponent from "@/components/global/alert";

type FormData = {
  email: string;
  password: string;
};

function LoginForm() {
  const router = useRouter();
  const { setUser } = useUser();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_HERAFY_BASE_URL}/api/auth/login`,
        formData,
      );

      const user = response.data.user;
      const token = response.headers["x-auth-token"];

      if (token) {
        localStorage.setItem("token", token);
        setUser(user);
        user.role === "client"
          ? router.push("/client")
          : router.push("/craftsman");
      }
    } catch (error: any) {
      if (error.response) {
        console.log("response error");
        setError(error.response.data.message);
      } else if (error.request) {
        console.log("request error");
        if (!navigator.onLine) {
          setError("Network error. Please check your connection.");
        } else {
          setError(
            "It seems the server is currently down. Please try again later.",
          );
        }
      } else {
        console.log("unexpected error");
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      {/* Loading */}
      {loading && <Loading />}

      {/* Error */}
      {error && <AlertComponent variant="destructive" message={error} />}

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-center">Log In</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-4">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  minLength={8}
                  onChange={handleChange}
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="bg-gradient-hover w-full"
              >
                Log In
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              <Link href="/register" className="underline">
                Don&lsquo;t have an account?
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}

export default LoginForm;
