"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useUser } from "@/app/contexts/user-context";
import { ClientRegistrationData } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { registerClient } from "@/services/auth-services";
import { AxiosResponse } from "axios";
import User from "@/types/user";
import Loading from "../global/loading";
import AlertComponent from "../global/alert";
import errorHandler from "@/utils/error-handler";

function ClientRegistrationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<ClientRegistrationData>({
    name: "",
    email: "",
    password: "",
  });

  const { setUser } = useUser();

  const { mutate, isPending, error } = useMutation({
    mutationFn: registerClient,
    onSuccess: (res: AxiosResponse) => {
      const user: User = res.data.user;

      setUser(user);
      user.role === "client"
        ? router.push("/client")
        : router.push("/craftsman");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    mutate(formData);
  };

  return (
    <div className="p-8">
      {/* Loading */}
      {isPending && <Loading />}

      {/* Error */}
      {error && (
        <AlertComponent
          variant="destructive"
          message={errorHandler(error)[0]}
          errors={errorHandler(error).slice(1)}
        />
      )}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Create an Account</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-4">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  name="name"
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-4">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  id="password"
                  type="password"
                  required
                  minLength={8}
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="bg-gradient-hover w-full">
                Craete an Account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Log In{" "}
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}

export default ClientRegistrationForm;
