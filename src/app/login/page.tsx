"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useUser } from "../contexts/user-context";
import Loading from "@/components/global/loading";
import AlertComponent from "@/components/global/alert";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/auth-services";
import { LoginCredentials } from "@/types/auth";
import errorHandler from "@/utils/error-handler";
import { AxiosResponse } from "axios";
import User from "@/types/user";

function LoginForm() {
  const router = useRouter();
  const { setUser } = useUser();

  const [formData, setFormData] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData: LoginCredentials) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const { mutate, error, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (res: AxiosResponse) => {
      const user: User = res.data.user;

      setUser(user);
      user.role === "client"
        ? router.push("/client")
        : router.push("/craftsman");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div className="p-8">
      {/* Loading */}
      {isPending && <Loading />}

      {/* Error */}
      {error && (
        <AlertComponent variant="destructive" message={errorHandler(error)} />
      )}

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
                disabled={isPending}
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
